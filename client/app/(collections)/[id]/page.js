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
 * Date: 21, December 2023
 */

"use client";

import Main from "@/layouts/main/Main";
import {
  Button,
  Divider,
  Image,
  Radio,
  RadioGroup,
  Skeleton,
  Spinner,
  Tooltip,
} from "@nextui-org/react";
import NextImage from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Zoom from "react-img-zoom";
import { MdFavoriteBorder } from "react-icons/md";
import Related from "@/components/Related";
import MostLiked from "@/components/MostLiked";
import Brands from "@/components/Brands";
import { useGetSingleProductQuery } from "@/services/product/productApi";
import { toast } from "react-hot-toast";
import { useUpdateUserMutation } from "@/services/user/userApi";
import { useGetSingleCategoryQuery } from "@/services/category/categoryApi";
import { MdFrontHand } from "react-icons/md";
import { MdBackHand } from "react-icons/md";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = useMemo(() => data?.data || {}, [data]);
  const [
    update,
    { isLoading: updating, data: updateData, error: updateError },
  ] = useUpdateUserMutation();
  const { data: categoryData, isLoading: fetchingCategory } =
    useGetSingleCategoryQuery(product?.category);
  const category = useMemo(() => categoryData?.data || {}, [categoryData]);
  const [imageSrc, setImageSrc] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [frontStickerPreview, setFrontStickerPreview] = useState(null);
  const [backStickerPreview, setBackStickerPreview] = useState(null);
  const [frontSticker, setFrontSticker] = useState(null);
  const [backSticker, setBackSticker] = useState(null);
  const [size, setSize] = useState("");
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    if (product.thumbnail) {
      setImageSrc(product.thumbnail.url);
    }

    if (updating) {
      toast.loading("Loading...", { id: "update" });
    }

    if (updateData) {
      toast.success(updateData?.description, { id: "update" });
    }

    if (updateError?.data) {
      toast.error(updateError?.data?.description || "Something went wrong", {
        id: "update",
      });
    }
  }, [product, updating, updateData, updateError]);

  if (isLoading) {
    return (
      <section className="h-screen w-screen overflow-hidden bg-white fixed flex justify-center items-center">
        <Spinner label="Loading..." />
      </section>
    );
  }

  const handleFrontStickerPreview = (e) => {
    const file = e.target.files[0];
    setFrontSticker(e.target.files[0]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFrontStickerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackStickerPreview = (e) => {
    const file = e.target.files[0];
    setBackSticker(e.target.files[0]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackStickerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleAddToCart() {
    if (frontStickerPreview === null && backStickerPreview === null) {
      update({
        product: product._id,
        quantity,
        size,
        price:
          (product?.discountedPrice !== 0
            ? product?.discountedPrice
            : product?.regularPrice) * quantity,
      });
    } else {
      const formData = new FormData();

      formData.append("product", product._id);
      formData.append("quantity", quantity);
      if (frontSticker) formData.append("stickers", frontSticker);
      if (backSticker) formData.append("stickers", backSticker);
      formData.append("size", size);
      formData.append(
        "price",
        (product?.discountedPrice !== 0
          ? product?.discountedPrice
          : product?.regularPrice) * quantity
      );

      update(formData);
    }
  }

  return (
    <Main>
      <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-y-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="md:col-span-5 col-span-12 flex flex-row gap-x-2">
            <div className="flex flex-col gap-y-2">
              <Image
                isBlurred
                height={70}
                width={50}
                src={product.thumbnail.url}
                alt={product.thumbnail.public_id}
                radius="none"
                onClick={() => setImageSrc(product.thumbnail.url)}
                className="cursor-pointer h-[70px] w-[50px] object-cover"
              />
              {product?.gallery?.map((item, index) => (
                <Image
                  isBlurred
                  height={70}
                  width={50}
                  src={item.url}
                  alt={item.public_id}
                  key={index}
                  radius="none"
                  onClick={() => setImageSrc(item.url)}
                  className="cursor-pointer h-[70px] w-[50px] object-cover"
                />
              ))}
            </div>
            <Zoom
              height={500}
              width={400}
              img={imageSrc}
              zoomScale={1.2}
              transitionTime={0.5}
              className="w-full h-full object-cover"
              key={imageSrc}
            />
          </div>
          <div className="md:col-span-7 col-span-12 flex flex-col gap-y-4">
            <h1 className="text-3xl capitalize font-bold">{product?.name} </h1>
            <article className="flex flex-col gap-y-4">
              <p className="text-base">{product?.description}</p>
              <Divider />
              <div className="flex flex-row gap-x-2 capitalize">
                <span className="text-base flex flex-row gap-x-0.5">
                  $
                  <b>
                    {(product?.discountedPrice !== 0
                      ? product?.discountedPrice
                      : product?.regularPrice) * quantity}
                  </b>
                </span>{" "}
                <Divider orientation="vertical" />{" "}
                {fetchingCategory ? (
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                ) : (
                  category?.name
                )}
              </div>
              <RadioGroup
                label="Select a Size*"
                orientation="horizontal"
                onChange={(e) => setSize(e.target.value)}
              >
                {product?.sizes?.map((size) => (
                  <Radio value={size} key={size} className="uppercase">
                    {size}
                  </Radio>
                ))}
              </RadioGroup>
            </article>

            <div className="flex flex-col gap-y-4 mt-8">
              <div className="flex flex-row gap-x-2 items-center">
                <Tooltip content="Enter Required Quantity">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    className="w-full"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </Tooltip>
                {product?.frontStickerPrice !== 0 && (
                  <>
                    <Tooltip content="Choose Front-Side Sticker">
                      <span className="relative border px-4 cursor-pointer h-full flex flex-row justify-center items-center border-black">
                        <MdFrontHand className="h-6 w-6 cursor-pointer" />

                        <input
                          type="file"
                          name="stickers"
                          id="stickers"
                          accept="image/png, image/jpeg, image/jpg"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={handleFrontStickerPreview}
                        />
                      </span>
                    </Tooltip>
                    {frontStickerPreview && (
                      <NextImage
                        src={frontStickerPreview}
                        alt="sticker"
                        height={36}
                        width={30}
                        className="h-full object-cover"
                        onClick={() => setOpenLightBox(true)}
                      />
                    )}
                  </>
                )}
                {product?.backStickerPrice !== 0 && (
                  <>
                    <Tooltip content="Choose Back-Side Sticker">
                      <span className="relative border px-4 cursor-pointer h-full flex flex-row justify-center items-center border-black">
                        <MdBackHand className="h-6 w-6 cursor-pointer" />

                        <input
                          type="file"
                          name="stickers"
                          id="stickers"
                          accept="image/png, image/jpeg, image/jpg"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={handleBackStickerPreview}
                        />
                      </span>
                    </Tooltip>
                    {backStickerPreview && (
                      <NextImage
                        src={backStickerPreview}
                        alt="sticker"
                        height={36}
                        width={30}
                        className="h-full object-cover"
                        onClick={() => setOpenLightBox(true)}
                      />
                    )}
                  </>
                )}
                <Lightbox
                  open={openLightBox}
                  close={() => setOpenLightBox(false)}
                  disableSlider={true}
                  slides={[
                    { src: backStickerPreview },
                    { src: frontStickerPreview },
                  ]}
                />
              </div>

              <div className="flex flex-row gap-x-2">
                <Button
                  radius="none"
                  size="md"
                  color="primary"
                  className="w-full"
                  onPress={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Tooltip content="Add to Favorite">
                  <Button
                    isIconOnly
                    aria-label="Favorite"
                    color="primary"
                    size="md"
                    radius="none"
                    onPress={() => update({ favorite: product?._id })}
                  >
                    <MdFavoriteBorder className="h-5 w-5" />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <Related />
        <MostLiked />
        <Brands />
      </section>
    </Main>
  );
};

export default Page;
