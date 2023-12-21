/**
 * Title: Write a program using JavaScript on ProductFilter
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

import { Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

const ProductFilter = ({ displayAll }) => {
  return (
    <aside className="lg:col-span-3 md:col-span-4 col-span-12">
      <div className="flex md:flex-col md:gap-y-8 md:sticky md:top-4 flex-row justify-between">
        <RadioGroup label="Select a Size">
          <Radio value="s">S</Radio>
          <Radio value="m">M</Radio>
          <Radio value="l">L</Radio>
          <Radio value="x">X</Radio>
          <Radio value="xl">XL</Radio>
          <Radio value="xxl">XXL</Radio>
        </RadioGroup>
        {displayAll && (
          <RadioGroup label="Select a Category">
            <Radio value="women-item">Women Items</Radio>
            <Radio value="men-item">Men Items</Radio>
            <Radio value="printed-t-shirt">Printed T-Shirts</Radio>
          </RadioGroup>
        )}
      </div>
    </aside>
  );
};

export default ProductFilter;
