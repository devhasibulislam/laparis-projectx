/**
 * Title: Write a program using JavaScript on Page
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 22, December 2023
 */

"use client";

import Dashboard from "@/layouts/dashboard/Dashboard";
import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "@/services/product/productApi";
import { Image, Skeleton } from "@nextui-org/react";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";

const Page = () => {
  const { id } = useParams();
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const sizes = [
    {
      value: "xxs",
      label: "xxs",
    },
    {
      value: "xs",
      label: "xs",
    },
    {
      value: "s",
      label: "s",
    },
    {
      value: "m",
      label: "m",
    },
    {
      value: "l",
      label: "l",
    },
    {
      value: "xl",
      label: "xl",
    },
    {
      value: "xxl",
      label: "xxl",
    },
  ];

  const {
    data: productData,
    isLoading: fetchingProduct,
    error: productError,
  } = useGetSingleProductQuery(id);
  const product = useMemo(() => productData?.data || {}, [productData]);
  const [formattedSizes, setFormattedSizes] = useState([]);

  const {
    data: categoriesData,
    isLoading: fetchingCategories,
    error: categoriesError,
  } = useGetCategoriesQuery();
  const categories = useMemo(
    () => categoriesData?.data || [],
    [categoriesData]
  );

  const [
    updateProduct,
    {
      isLoading: updatingProduct,
      data: updateProductData,
      error: updateProductError,
    },
  ] = useUpdateSingleProductMutation();

  const defaultValues = useMemo(() => {
    return {
      ...product,
    };
  }, [product]);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (fetchingProduct) {
      toast.loading("Loading...", { id: "getProduct" });
    }
    if (productData) {
      setFormattedSizes(
        productData?.data?.sizes?.map((size) => ({
          value: size,
          label: size,
        }))
      );
      toast.success(productData?.description, { id: "getProduct" });
      reset(product);
    }
    if (productError?.data) {
      toast.error(productError?.data?.description || "Something went wrong", {
        id: "getProduct",
      });
    }

    if (categoriesError?.data) {
      toast.error(
        categoriesError?.data?.description || "Something went wrong",
        {
          id: "getCategories",
        }
      );
    }

    if (updatingProduct) {
      toast.loading("Updating...", { id: "updateProduct" });
    }
    if (updateProductData) {
      toast.success(updateProductData?.description, { id: "updateProduct" });
    }
    if (updateProductError?.data) {
      toast.error(
        updateProductError?.data?.description || "Something went wrong",
        {
          id: "updateProduct",
        }
      );
    }
  }, [
    fetchingProduct,
    productData,
    productError,
    categoriesError,
    updatingProduct,
    updateProductData,
    updateProductError,
    reset,
    product,
  ]);

  const handleThumbnailPreview = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSetGalleryPreview = (event) => {
    const files = event.target.files;
    const previewImages = [];

    if (files.length > 5) {
      toast.error("You can only upload maximum 5 images");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        previewImages.push(e.target.result);
        if (previewImages.length === files.length) {
          setGalleryPreview(previewImages);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveGalleryItem = (index) => {
    const updatedGallery = [...galleryPreview];
    updatedGallery.splice(index, 1);
    setGalleryPreview(updatedGallery);
  };

  const handleUpdateProduct = (data) => {
    if (thumbnailPreview === null && galleryPreview.length === 0) {
      updateProduct({ body: data, id: product?._id });
    } else {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("regularPrice", data.regularPrice);
      formData.append("discountedPrice", data.discountedPrice);
      formData.append("frontStickerPrice", data.frontStickerPrice);
      formData.append("backStickerPrice", data.backStickerPrice);
      formData.append("category", data.category);

      if (thumbnailPreview !== null) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      if (galleryPreview.length > 0) {
        for (let i = 0; i < data.gallery.length; i++) {
          formData.append("gallery", data.gallery[i]);
        }
      }

      for (let i = 0; i < data.sizes.length; i++) {
        formData.append("sizes", data.sizes[i]);
      }

      updateProduct({ body: formData, id: product?._id });
    }
  };

  return (
    <Dashboard>
      <form
        onSubmit={handleSubmit(handleUpdateProduct)}
        className="flex flex-col gap-y-4"
      >
        <div className="flex flex-col gap-y-4 items-center md:w-3/4 w-full">
          <div className="w-full flex flex-col gap-y-2">
            <Image
              src={thumbnailPreview || product?.thumbnail?.url}
              alt={product?.thumbnail?.public_id || "thumbnail"}
              radius="none"
              width={100}
              height={100}
              className="h-[100px] w-[100px] object-cover"
            />
            <label
              htmlFor="thumbnail"
              className="w-full border border-black h-full relative flex items-center p-2"
            >
              <span className="h-full w-full text-sm">Product Thumbnail</span>
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                accept="image/png, image/jpg, image/jpeg"
                {...register("thumbnail", {
                  onChange: (event) => handleThumbnailPreview(event),
                })}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <div className="flex flex-row gap-2 flex-wrap">
              {galleryPreview.length === 0 ? (
                <>
                  {product?.gallery?.map((item, index) => (
                    <Image
                      key={index}
                      src={item?.url}
                      alt={item?.public_id}
                      radius="none"
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-cover"
                    />
                  ))}
                </>
              ) : (
                <>
                  {galleryPreview.map((gallery, index) => (
                    <div key={index} className="relative">
                      <Image
                        key={index}
                        src={gallery}
                        alt={"gallery" + index}
                        width={100}
                        height={100}
                        radius="none"
                        className="h-[100px] w-[100px] object-cover"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 z-50 border bg-red-500 p-0.5 text-white"
                        onClick={() => handleRemoveGalleryItem(index)}
                      >
                        <RxCross2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
            <label
              htmlFor="gallery"
              className="w-full border border-black h-full relative flex items-center p-2"
            >
              <span className="h-full w-full text-sm">Product Gallery</span>
              <input
                type="file"
                name="gallery"
                id="gallery"
                accept="image/png, image/jpg, image/jpeg"
                multiple
                {...register("gallery", {
                  onChange: (event) => handleSetGalleryPreview(event),
                })}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>
        </div>

        <label htmlFor="name" className="flex flex-col gap-y-1">
          <span className="text-sm">Product Name</span>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name")}
            placeholder="i.e. Hasibul Islam"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="description" className="flex flex-col gap-y-1">
          <span className="text-sm">Product Description</span>
          <textarea
            name="description"
            id="description"
            rows={5}
            {...register("description")}
            placeholder="i.e. https://devhasibulislam.vercel.app"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="regularPrice" className="flex flex-col gap-y-1">
          <span className="text-sm">Product Regular Price</span>
          <input
            type="number"
            name="regularPrice"
            id="regularPrice"
            min={1}
            {...register("regularPrice")}
            placeholder="i.e. $250"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="discountedPrice" className="flex flex-col gap-y-1">
          <span className="text-sm">Product Discounted Price</span>
          <input
            type="number"
            name="discountedPrice"
            id="discountedPrice"
            {...register("discountedPrice")}
            placeholder="i.e. $250"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="frontStickerPrice" className="flex flex-col gap-y-1">
          <span className="text-sm">Front Sticker Price</span>
          <input
            type="number"
            name="frontStickerPrice"
            id="frontStickerPrice"
            {...register("frontStickerPrice")}
            placeholder="i.e. $250"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="backStickerPrice" className="flex flex-col gap-y-1">
          <span className="text-sm">Back Sticker Price</span>
          <input
            type="number"
            name="backStickerPrice"
            id="backStickerPrice"
            {...register("backStickerPrice")}
            placeholder="i.e. $250"
            className="md:w-3/4 w-full"
          />
        </label>

        <div className="flex lg:flex-row flex-col gap-4 md:w-3/4 w-full">
          <label htmlFor="category" className="flex flex-col gap-y-1 w-full">
            <span className="text-sm">Choose Product Category</span>
            {fetchingCategories ? (
              <>
                <Skeleton className="h-full w-full" />
              </>
            ) : (
              <>
                <select
                  name="category"
                  id="category"
                  className="w-full capitalize"
                  {...register("category")}
                >
                  {categories?.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </label>
          <label htmlFor="sizes" className="flex flex-col gap-y-1 w-full">
            <span className="text-sm">Choose Product Size</span>
            {formattedSizes.length === 0 ? (
              <>
                <Skeleton className="h-full w-full" />
              </>
            ) : (
              <Select
                defaultValue={formattedSizes}
                name="sizes"
                isMulti
                options={sizes}
                className="w-full capitalize basic-multi-select"
                classNamePrefix="select"
                onChange={(selected) => {
                  const selectedSizes = selected
                    ? selected.map((item) => item.value)
                    : [];

                  setValue("sizes", selectedSizes, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
            )}
          </label>
        </div>

        <button
          type="submit"
          className="py-2 bg-primary text-white md:w-3/4 w-full"
        >
          Update Product
        </button>
      </form>
    </Dashboard>
  );
};

export default Page;
