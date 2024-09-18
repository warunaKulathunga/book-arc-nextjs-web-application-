import React from "react";
import HeaderSection from "./HeaderSection";
import CartProductList from "./CartProductList";
import TotalSection from "./TotalSection";
import CouponCode from "./CouponCode";

const page = () => {
  return (
    <div className="w-full px-4">
      <div className="mx-auto max-w-[1200px]">
        <div>
          <HeaderSection />
        </div>
        <div className="block md:block lg:flex mt-10">
          <div className="w-[100%]  lg:w-[70%]">
            <CartProductList />
            <CouponCode />
          </div>
          <div className="w-[100%] lg:w-[30%]">
            <TotalSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
