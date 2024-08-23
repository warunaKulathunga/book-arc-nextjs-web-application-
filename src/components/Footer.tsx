import React from "react";
import AppString from "./../constants/strings";
import Image from "next/image";
import logo from "./../../public/LOGO.png";
import stripe from "./../../public/stripe_logo.png";
import visa from "./../../public/Group 248.png";
import master from "./../../public/Group 249.png";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 py-16">
        <div className="col-span-0 lg:col-span-2">
          <Image src={logo} alt="Picture of the author" className="mt-4" />
          <p className="text-black font-semibold text-sm mt-10">
            {AppString.footer.header}
          </p>
          <input className="mt-3" />
          <p className="mt-5 md:mt-10 lg:mt-10 text-sm font-medium text-subText">
            {AppString.footer.contact_header}
          </p>
          <p className="mt-3 text-sm font-semibold text-black">
            {AppString.footer.contact_info}
          </p>
        </div>
        <div>
          <ul>
            <li className="mt-3 text-sm font-bold text-black">
              {AppString.footer.categories.header}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.categories.graphic}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.categories.religion}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.categories.arts}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.categories.arts}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.categories.educational}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-3 text-sm font-bold text-black">
              {AppString.footer.customer_care.header}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.customer_care.my_account}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.customer_care.discount}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.customer_care.returns}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.customer_care.orders_history}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.customer_care.Order_tracking}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-10 md:mt-3 lg:mt-3 text-sm font-bold text-black">
              {AppString.footer.quick_action.header}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.quick_action.authors}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.quick_action.book_compare}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.quick_action.all_category}
            </li>
            <li className="mt-5 text-sm font-medium text-subText">
              {AppString.footer.quick_action.blog}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-footer">
        <div className="max-w-[1200px] mx-auto justify-between items-center px-4 py-5 block md:flex ">
          <p className="text-white text-sm font-normal">
            {AppString.footer.ref_hub}
          </p>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
            <p className="text-subText text-base">
              {AppString.footer.powered_BY}
            </p>
            <Image src={stripe} alt="Picture of the author" />
            <Image src={master} alt="Picture of the author" />
            <Image src={visa} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
