import React from "react";
import AppStrings from "@/constants/strings";

const PaymentMethod = () => {
  return (
    <div
      className="w-full mt-5"
      style={{ marginTop: "10vh", marginBottom: "10vh" }}
    >
      <div className="max-w-[1200px] rounded-lg">
        <div className="">
          <p className="text-xl font-medium mb-4">
            {AppStrings.check_out_page.payment_method.header}
          </p>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="card1"
                name="card1"
                className="custom-checkbox"
                value="card"
                checked
              />
              <label className="text-sm">Card</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="card1"
                name="card1"
                className="custom-checkbox"
                value="bank"
                disabled
              />
              <label className="text-disableText text-sm">Bank</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="card1"
                name="card1"
                className="custom-checkbox"
                value="transfer"
                disabled
              />
              <label className="text-disableText text-sm">Transfer</label>
            </div>
          </div>
        </div>
        <div className="bg-imageBg p-5 rounded-lg mt-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 ...">
              <p className="text-sm mb-2">
                {AppStrings.check_out_page.payment_method.card_number}
              </p>
              <input
                placeholder="1234 5678 9101 1121"
                type="text"
                className="border w-full px-2 py-2 rounded-md text-sm"
              />
            </div>
            <div className="...">
              <p className="text-sm mb-2">
                {AppStrings.check_out_page.payment_method.expiration_date}
              </p>
              <input
                placeholder="MM/YY"
                type="text"
                className="border w-full px-2 py-2 rounded-md text-sm"
              />
            </div>
            <div className="...">
              <p className="text-sm mb-2">
                {AppStrings.check_out_page.payment_method.cvv}
              </p>
              <input
                placeholder="123"
                type="text"
                className="border w-full px-2 py-2 rounded-md text-sm"
              />
            </div>
            <div className="col-span-2 mt-3">
              <button className="bg-primary text-black font-semibold text-sm px-6 py-2.5 rounded-lg w-34 w-full">
                {AppStrings.button.pay} 59.28
              </button>
            </div>
            <div className="col-span-2">
              <p className="text-paymentSubText font-light text-sm">
                {AppStrings.check_out_page.payment_method.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
