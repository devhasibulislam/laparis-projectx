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

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = useMemo(() => data?.data || {}, [data]);
  const [
    update,
    { isLoading: updating, data: updateData, error: updateError },
  ] = useUpdateUserMutation();
  const [imageSrc, setImageSrc] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [stickerPreview, setStickerPreview] = useState(null);
  const [sticker, setSticker] = useState(null);
  const [size, setSize] = useState("");

  useEffect(() => {
    if (product.thumbnail) {
      setImageSrc(product.thumbnail.url);
    }

    if (updating) {
      toast.loading("Loading...", { id: "update" });
    }

    if (updateData) {
      toast.success(updateData?.description, { id: "update" });
      setStickerPreview(null);
      setSticker(null);
      setQuantity(1);
      setSize("");
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

  const handleStickerPreview = (e) => {
    const file = e.target.files[0];
    setSticker(e.target.files[0]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStickerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleAddToCart() {
    if (stickerPreview === null) {
      update({
        product: product._id,
        quantity,
        size,
        price,
      });
    } else {
      const formData = new FormData();

      formData.append("product", product._id);
      formData.append("quantity", quantity);
      formData.append("sticker", sticker);
      formData.append("size", size);
      formData.append("price", product?.price);

      update(formData);
    }
  }

  return (
    <Main>
      <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-y-20">
        <div className="grid grid-cols-12 lg:gap-x-0 gap-4">
          <div className="md:col-span-5 col-span-12 flex flex-row gap-x-2">
            <div className="flex flex-col gap-y-2">
              {product?.gallery?.map((item, index) => (
                <Image
                  isBlurred
                  height={50}
                  width={50}
                  src={item.url}
                  alt={item.public_id}
                  key={index}
                  radius="none"
                  onClick={() => setImageSrc(item.url)}
                  className="cursor-pointer"
                />
              ))}
            </div>
            <Zoom
              height={385}
              width={300}
              img={imageSrc}
              zoomScale={1.2}
              transitionTime={0.5}
              className="w-full h-full"
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
                  $<b>{product?.price * quantity}</b>
                </span>{" "}
                <Divider orientation="vertical" /> {product?.category}
              </div>
              <RadioGroup
                label="Select a Size"
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
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  min="1"
                  className="w-full"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
                <div className="w-full flex flex-row gap-x-1">
                  <label
                    htmlFor="sticker"
                    className="w-full border border-black h-full relative flex items-center p-2"
                  >
                    <span className="h-full w-full text-sm">
                      Choose Custom Sticker
                    </span>
                    <input
                      type="file"
                      name="sticker"
                      id="sticker"
                      accept="image/png, image/jpeg, image/jpg"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleStickerPreview}
                    />
                  </label>
                  {stickerPreview && (
                    <NextImage
                      src={stickerPreview}
                      alt="avatar"
                      height={36}
                      width={30}
                      className="h-[36px] w-[30px] object-cover"
                    />
                  )}
                </div>
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
