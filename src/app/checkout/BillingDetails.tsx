import React from "react";
import AppStrings from "@/constants/strings";

const BillingDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <p className="text-xl font-bold mb-4">
          {AppStrings.check_out_page.billing_details.main_header}
        </p>
      </div>
      <div className="col-span-2">
        <p className="text-xl font-medium mb-4">
          {AppStrings.check_out_page.billing_details.header}
        </p>
      </div>
      <div className="">
        <p className="text-sm mb-2">
          {AppStrings.check_out_page.billing_details.first_name}
        </p>
        <input
          placeholder="John"
          type="text"
          className="border w-full px-2 py-2 rounded-md text-sm"
        />
      </div>
      <div className="">
        <p className="text-sm mb-2">
          {AppStrings.check_out_page.billing_details.last_name}
        </p>
        <input
          placeholder="Doe"
          type="text"
          className="border w-full px-2 py-2 rounded-md text-sm"
        />
      </div>
      <div className="col-span-2">
        <p className="text-sm mb-2">
          {AppStrings.check_out_page.billing_details.email_add}
        </p>
        <input
          placeholder="Email Address"
          type="text"
          className="border w-full px-2 py-2 rounded-md text-sm"
        />
      </div>
      <div className="">
        <p className="text-sm mb-2">
          {AppStrings.check_out_page.billing_details.mobile_num}
        </p>
        <input
          placeholder="0 0000 00 00"
          type="number"
          className="border w-full px-2 py-2 rounded-md text-sm"
        />
      </div>
      <div className="">
        <p className="text-sm mb-2">
          {AppStrings.check_out_page.billing_details.country}
        </p>
        <input
          placeholder="Sri Lanka"
          type="text"
          className="border w-full px-2 py-2 rounded-md text-sm"
        />
      </div>
    </div>
  );
};

export default BillingDetails;
