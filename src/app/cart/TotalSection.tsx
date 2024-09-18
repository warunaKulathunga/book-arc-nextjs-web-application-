import React from "react";
import AppStrings from "@/constants/strings";
import { FcOk } from "react-icons/fc";

const TotalSection = () => {
  return (
    <div className="w-full mb-4">
      <div className="max-w-[1200px] bg-secondary rounded-md p-4 shadow">
        <div className="flex justify-between p-4 border-b">
          <p className="font-medium text-subTotalHeader">
            {AppStrings.cart_page.total_section.sub_total}
          </p>
          <p className="font-medium text-subTotalValue">$ 59.98</p>
        </div>
        <div className="flex justify-between p-4">
          <p className="font-semibold">
            {AppStrings.cart_page.total_section.totals}
          </p>
          <p className="font-semibold text-primary">$ 59.98</p>
        </div>
        <div className="flex items-center px-4 py-2">
          <FcOk />
          <p className="text-xs p-4">
            {AppStrings.cart_page.total_section.description}
          </p>
        </div>
        <button className="bg-primary text-black font-semibold text-sm px-6 py-2 rounded-lg w-[100%]">
          {AppStrings.button.checkout}
        </button>
      </div>
    </div>
  );
};

export default TotalSection;
