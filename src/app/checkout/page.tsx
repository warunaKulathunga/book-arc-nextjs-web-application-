import React from "react";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

const page = () => {
  return (
    <div className="w-full px-4 mt-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-3">
            <BillingDetails />
            <PaymentMethod />
          </div>
          <div className="col-span-5 md:col-span-2 mb-10">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
