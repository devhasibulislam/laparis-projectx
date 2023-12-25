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
import { useGetSingleProductQuery } from "@/services/product/productApi";
import { Image, Skeleton } from "@nextui-org/react";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Page = () => {
  const { id } = useParams();
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

  const {
    data: productData,
    isLoading: fetchingProduct,
    error: productError,
  } = useGetSingleProductQuery(id);
  const product = useMemo(() => productData?.data || {}, [productData]);

  const {
    data: categoriesData,
    isLoading: fetchingCategories,
    error: categoriesError,
  } = useGetCategoriesQuery();
  const categories = useMemo(
    () => categoriesData?.data || [],
    [categoriesData]
  );

  const defaultValues = useMemo(() => {
    return {
      ...product,
    };
  }, []);

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (fetchingProduct) {
      toast.loading("Loading...", { id: "getProduct" });
    }
    if (productData) {
      toast.success(productData?.description, { id: "getProduct" });
      reset(product);
    }
    if (productError?.data) {
      toast.error(productError?.data?.description || "Something went wrong", {
        id: "getProduct",
      });
    }

    if (categoriesError?.data) {
      toast.error(error?.data?.description || "Something went wrong", {
        id: "getCategories",
      });
    }
  }, [fetchingProduct, productData, productError, categoriesError]);

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

  const handleUpdateProduct = (data) => {
    console.log(data);
    reset();
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
              width={50}
              height={50}
              radius="none"
              className="h-full object-cover"
            />
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
          <div className="w-full flex flex-col gap-y-2">
            <div className="flex flex-row gap-2 flex-wrap">
              {galleryPreview.length === 0 ? (
                <>
                  {product?.gallery?.map((item, index) => (
                    <Image
                      key={index}
                      src={item?.url}
                      alt={item?.public_id}
                      width={50}
                      height={50}
                      radius="none"
                      className="h-full object-cover"
                    />
                  ))}
                </>
              ) : (
                <>
                  {galleryPreview?.map((item, index) => (
                    <Image
                      key={index}
                      src={item}
                      alt={index}
                      width={50}
                      height={50}
                      radius="none"
                      className="h-full object-cover"
                    />
                  ))}
                </>
              )}
            </div>
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

        <label htmlFor="price" className="flex flex-col gap-y-1">
          <span className="text-sm">Enter Product Price</span>
          <input
            type="number"
            name="price"
            id="price"
            min={1}
            {...register("price", { required: true })}
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
                  {...register("category", { required: true })}
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
            <select
              name="sizes"
              id="sizes"
              multiple
              className="w-full uppercase"
              {...register("sizes", { required: true })}
            >
              {sizes?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
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
