import BreadCrumb from "@/components/BreadCrumb";
import AppStrings from "@/constants/strings";
import React from "react";

const HeaderSection = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-[1200px] bg-secondary rounded-md flex flex-col items-center text-center shadow">
        <div className="hidden md:block">
          <BreadCrumb />
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold text-black p-4">
          {AppStrings.shop_page.header_section.head}
          <span className="text-primary pl-2">
            {AppStrings.shop_page.header_section.head_insight}
          </span>
        </h1>
        <p className="text-black font-normal text-base px-4 mb-8">
          {AppStrings.shop_page.header_section.sub_head}
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
