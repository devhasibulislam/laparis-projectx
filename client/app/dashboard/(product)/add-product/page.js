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
import { useAddProductMutation } from "@/services/product/productApi";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
  const { register, handleSubmit, reset, setValue, getValues } = useForm();
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
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
    addProduct,
    { isLoading: creatingProduct, data: productData, error: productError },
  ] = useAddProductMutation();
  const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

  useEffect(() => {
    if (categoriesError?.data) {
      toast.error(error?.data?.description || "Something went wrong", {
        id: "getCategories",
      });
    }

    if (creatingProduct) {
      toast.loading("Creating...", {
        id: "addProduct",
      });
    }

    if (productData) {
      toast.success(productData?.description, {
        id: "addProduct",
      });
      reset();
      setThumbnailPreview(null);
      setGalleryPreview([]);
    }

    if (productError?.data) {
      toast.error(error?.data?.description || "Something went wrong", {
        id: "addProduct",
      });
    }
  }, [categoriesError, productError, creatingProduct, productData, reset]);

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

  const handleAddProduct = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("thumbnail", data.thumbnail[0]);

    for (let i = 0; i < data.gallery.length; i++) {
      formData.append("gallery", data.gallery[i]);
    }

    for (let i = 0; i < data.sizes.length; i++) {
      formData.append("sizes", data.sizes[i]);
    }

    // addProduct(formData);

    console.log(data);
  };

  return (
    <Dashboard>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col gap-y-4"
      >
        <div className="flex flex-col gap-y-4 items-center md:w-3/4 w-full">
          {/* thumbnail section */}
          <div className="flex flex-col gap-y-1 w-full">
            {thumbnailPreview && (
              <Image
                src={thumbnailPreview}
                alt="thumbnail"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-cover"
              />
            )}
            <label
              htmlFor="thumbnail"
              className="w-full border border-black h-full relative flex items-center p-2"
            >
              <span className="h-full w-full text-sm">
                Choose Product Thumbnail
              </span>
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                accept="image/png, image/jpg, image/jpeg"
                {...register("thumbnail", {
                  required: true,
                  onChange: (event) => handleThumbnailPreview(event),
                })}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>

          {/* gallery section */}
          <div className="flex flex-col gap-y-1 w-full">
            {galleryPreview?.length > 0 && (
              <div className="flex flex-row flex-wrap gap-1">
                {galleryPreview.map((gallery, index) => (
                  <div key={index} className="relative">
                    <Image
                      key={index}
                      src={gallery}
                      alt={"gallery" + index}
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-cover"
                    />
                    <button
                      className="absolute top-2 right-2 border bg-red-500 p-0.5 text-white"
                      onClick={() => handleRemoveGalleryItem(index)}
                    >
                      <RxCross2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <label
              htmlFor="gallery"
              className="w-full border border-black h-full relative flex items-center p-2"
            >
              <span className="h-full w-full text-sm">
                Choose Product Gallery
              </span>
              <input
                type="file"
                name="gallery"
                id="gallery"
                accept="image/png, image/jpg, image/jpeg"
                multiple
                {...register("gallery", {
                  required: true,
                  onChange: (event) => handleSetGalleryPreview(event),
                })}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>
        </div>

        <label htmlFor="name" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Product Name</span>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            placeholder="i.e. Hasibul Islam"
            className="md:w-3/4 w-full"
          />
        </label>

        <label htmlFor="description" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Product Description</span>
          <textarea
            name="description"
            id="description"
            rows={5}
            {...register("description", { required: true })}
            placeholder="i.e. https://devhasibulislam.vercel.app"
            className="md:w-3/4 w-full"
          />
        </label>

        <div className="flex md:flex-row flex-col gap-4 md:w-3/4 w-full">
          <label
            htmlFor="regularPrice"
            className="flex flex-col gap-y-1 w-full"
          >
            <span className="text-sm">Enter Regular Price</span>
            <input
              type="number"
              name="regularPrice"
              id="regularPrice"
              min={1}
              {...register("regularPrice", { required: true })}
              placeholder="i.e. $250"
              className="w-full"
            />
          </label>
          <label
            htmlFor="discountedPrice"
            className="flex flex-col gap-y-1 w-full"
          >
            <span className="text-sm">Enter Discounted Price</span>
            <input
              type="number"
              name="discountedPrice"
              id="discountedPrice"
              min={1}
              {...register("discountedPrice", { required: true })}
              placeholder="i.e. $145"
              className="w-full"
            />
          </label>
        </div>

        <div className="flex md:flex-row flex-col gap-4 md:w-3/4 w-full">
          <label
            htmlFor="frontStickerPrice"
            className="flex flex-col gap-y-1 w-full"
          >
            <span className="text-sm">Enter Front Sticker Price</span>
            <input
              type="number"
              name="frontStickerPrice"
              id="frontStickerPrice"
              min={1}
              {...register("frontStickerPrice", { required: true })}
              placeholder="i.e. $25"
              className="w-full"
            />
          </label>
          <label
            htmlFor="backStickerPrice"
            className="flex flex-col gap-y-1 w-full"
          >
            <span className="text-sm">Enter Back Sticker Price</span>
            <input
              type="number"
              name="backStickerPrice"
              id="backStickerPrice"
              min={1}
              {...register("backStickerPrice", { required: true })}
              placeholder="i.e. $15"
              className="w-full"
            />
          </label>
        </div>

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
                  {...register("category", { required: true })}
                >
                  {categories?.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category?.name} ({category?.products?.length})
                    </option>
                  ))}
                </select>
              </>
            )}
          </label>
          <label htmlFor="sizes" className="flex flex-col gap-y-1 w-full">
            <span className="text-sm">Choose Product Sizes</span>
            <Select
              name="sizes"
              id="sizes"
              isMulti
              options={sizes.map((size) => ({ value: size, label: size }))}
              className="w-full capitalize"
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
          </label>
        </div>

        <button
          type="submit"
          className="py-2 bg-primary text-white md:w-3/4 w-full"
        >
          Create Product
        </button>
      </form>
    </Dashboard>
  );
};

export default Page;
