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
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "@/services/category/categoryApi";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

const Page = () => {
  const {
    data: fetchData,
    isLoading: fetching,
    error: fetchError,
  } = useGetCategoriesQuery();
  const categories = useMemo(() => fetchData?.data || [], [fetchData]);

  useEffect(() => {
    if (fetching) {
      toast.loading("Loading...", { id: "getCategories" });
    }
    if (fetchData) {
      toast.success(fetchData?.description, { id: "getCategories" });
    }
    if (fetchError?.data) {
      toast.error(fetchError?.data?.description || "Something went wrong", {
        id: "getCategories",
      });
    }

  }, [fetching, fetchData, fetchError]);

  return (
    <Dashboard>
      <div className="grid grid-cols-2 gap-4">
        {categories?.map((category) => (
          <CategoryCard key={category?._id} category={category} />
        ))}
      </div>
    </Dashboard>
  );
};

function CategoryCard({ category }) {
  const [
    deleteCategory,
    { isLoading: deleteLoading, data: deleteData, error: deleteError },
  ] = useDeleteCategoryMutation();

  useEffect(() => {
    if (deleteLoading) {
      toast.loading("Deleting...", { id: "deleteCategory" });
    }
    if (deleteData) {
      toast.success(deleteData?.description, { id: "deleteCategory" });
    }
    if (deleteError?.data) {
      toast.error(deleteError?.data?.description || "Something went wrong", {
        id: "deleteCategory",
      });
    }
  }, [deleteLoading, deleteData, deleteError]);
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <>
      <Card key={category?._id} className="p-1" radius="none">
        <CardHeader className="justify-between">
          {category?.name}
          <Button
            className={
              isDeleted
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isDeleted ? "bordered" : "solid"}
            onPress={() => {
              setIsDeleted(!isDeleted);
              deleteCategory(category?._id);
            }}
          >
            {isDeleted ? "Removing" : "Remove"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="line-clamp-5">{category?.description}</p>
        </CardBody>
      </Card>
    </>
  );
}

export default Page;
