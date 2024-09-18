import React from "react";
import AppStrings from "@/constants/strings";

const CouponCode = () => {
  return (
    <div className="mb-3">
      <input
        placeholder="Coupon Code"
        type="text"
        className="py-2 border rounded-lg px-2 mb-2 w-[100%] sm:w-[25%]"
      />
      <button className="bg-primary text-black font-semibold text-sm px-6 py-2.5 rounded-lg w-34 ml-0 sm:ml-2">
        {AppStrings.button.apply}
      </button>
    </div>
  );
};

export default CouponCode;
