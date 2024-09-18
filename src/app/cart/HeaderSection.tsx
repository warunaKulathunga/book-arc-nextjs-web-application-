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
          {AppStrings.cart_page.header_section.header_sec_one}
          <span className="text-primary pl-2 pr-2">
            {AppStrings.cart_page.header_section.header_sec_two}
          </span>
          {AppStrings.cart_page.header_section.header_sec_three}
        </h1>
        <p className="text-black font-normal text-sm px-4 mb-8">
          {AppStrings.cart_page.header_section.sub_header}
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
