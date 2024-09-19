import React from "react";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex">
          <div className="w-[70%]">
            <BillingDetails />
          </div>
          <div className="w-[30%]">
            <OrderSummary />
          </div>
        </div>
        <div>
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
};

export default page;
