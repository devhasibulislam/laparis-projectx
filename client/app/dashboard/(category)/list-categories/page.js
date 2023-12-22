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

import categories from "@/data/categories";
import Dashboard from "@/layouts/dashboard/Dashboard";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const Page = () => {
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
  const [isDeleted, setIsDeleted] = React.useState(false);

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
            onPress={() => setIsDeleted(!isDeleted)}
          >
            {isDeleted ? "Deleted" : "Delete"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>{category?.description}</p>
        </CardBody>
      </Card>
    </>
  );
}

export default Page;
