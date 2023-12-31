/**
 * Title: Write a program using JavaScript on Rating
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
 * Date: 30, December 2023
 */

import { Button } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "./Modal";
import {
  useAddReviewsMutation,
  useGetSingleProductQuery,
} from "@/services/product/productApi";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const Rating = ({ id }) => {
  const [showRating, setShowRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const [
    addReview,
    { isLoading: addingReview, data: reviewData, error: addingError },
  ] = useAddReviewsMutation();
  const {
    isLoading: fetchingProduct,
    data: productData,
    error: fetchingError,
  } = useGetSingleProductQuery(id);
  const product = useMemo(() => productData?.data || {}, [productData]);

  useEffect(() => {
    if (addingReview) {
      toast.loading("Adding...", { id: "addReview" });
    }

    if (reviewData) {
      toast.success(reviewData?.description, { id: "addReview" });
      reset();
    }

    if (addingError?.data) {
      toast.error(addingError?.data?.description || "Something went wrong", {
        id: "addReview",
      });
    }

    if (fetchingProduct) {
      toast.loading("Fetching...", { id: "getProducts" });
    }

    if (productData) {
      toast.success(productData?.description, { id: "getProducts" });
    }

    if (fetchingError?.data) {
      toast.error(fetchingError?.data?.description || "Something went wrong", {
        id: "getProducts",
      });
    }
  }, [
    addingReview,
    reviewData,
    addingError,
    fetchingProduct,
    productData,
    fetchingError,
    reset,
  ]);

  const handleReview = (data) => {
    addReview({ id, body: { feedback: data.feedback, star: selectedRating } });
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <>
      <Button
        color="primary"
        size="md"
        onPress={() => setShowRating(!showRating)}
      >
        Reviews
      </Button>

      {showRating && (
        <Modal
          className="lg:w-1/3 md:w-3/4 w-5/6"
          isOpen={showRating}
          onClose={() => setShowRating(false)}
        >
          <div className="flex flex-col gap-y-6 w-full">
            <form
              onSubmit={handleSubmit(handleReview)}
              className="flex md:flex-row flex-col gap-4 items-center"
            >
              <textarea
                name="feedback"
                id="feedback"
                rows={3}
                {...register("feedback", { required: true })}
                placeholder="Add your thoughts"
                className="w-full"
              />
              {/* <input
                type="number"
                name="star"
                id="star"
                min={1}
                max={5}
                {...register("star", { required: true })}
                placeholder="Enter Rating (1 to 5)"
                className="w-full"
              /> */}

              <div className="flex flex-row gap-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className={`text-yellow-500 ${
                      rating <= selectedRating ? "text-yellow-500" : ""
                    }`}
                    onClick={() => handleStarClick(rating)}
                  >
                    {rating <= selectedRating ? (
                      <IoIosStar className="h-5 w-5" />
                    ) : (
                      <IoIosStarOutline className="h-5 w-5" />
                    )}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="p-2 h-full bg-primary text-white text-sm rounded"
              >
                Submit
              </button>
            </form>

            <div className="flex flex-col gap-y-2">
              {product?.reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="flex flex-col gap-y-1 border-b pb-2"
                >
                  <h2 className="font-mono font-medium text-lg">
                    {review.user.name}
                  </h2>
                  <p className="text-sm text-slate-500">{review?.feedback}</p>
                  <p className="text-sm">Rating: {review?.star} ⭐</p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Rating;
