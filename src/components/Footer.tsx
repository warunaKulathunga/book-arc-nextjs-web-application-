import React from "react";
import AppString from "./../constants/strings";
import Image from "next/image";
import logo from "./../../public/LOGO.png";
import stripe from "./../../public/stripe_logo.png";
import visa from "./../../public/Group 248.png";
import master from "./../../public/Group 249.png";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 py-16">
        <div className="col-span-0 lg:col-span-2">
          {/* <Image src={logo} alt="Picture of the author" className="mt-4" /> */}
          <h1 className="font-bold text-3xl">
            Boo<span className="text-primary">K</span>
          </h1>
          <p className="text-black font-normal text-sm mt-10">
            {AppString.footer.header}
          </p>
          <div className="relative mt-3 w-[80%] md:w-[60%] lg:w-[80%]">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-3 pl-5 rounded-full font-normal text-sm shadow"
            />
            <span className="absolute inset-y-0 right-0 mt-1 mr-1 flex justify-center items-center bg-primary w-9 h-9 rounded-full">
              <FaLocationArrow className="text-black" />
            </span>
          </div>
          <p className="mt-5 md:mt-10 lg:mt-10 text-sm font-normal text-subText">
            {AppString.footer.contact_header}
          </p>
          <p className="mt-3 text-sm font-normal text-black">
            {AppString.footer.contact_info}
          </p>
        </div>
        <div>
          <ul>
            <li className="mt-3 text-sm font-semibold text-black">
              {AppString.footer.categories.header}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.categories.graphic}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.categories.religion}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.categories.arts}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.categories.arts}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.categories.educational}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-3 text-sm font-semibold text-black">
              {AppString.footer.customer_care.header}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.customer_care.my_account}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.customer_care.discount}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.customer_care.returns}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.customer_care.orders_history}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.customer_care.Order_tracking}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-10 md:mt-3 lg:mt-3 text-sm font-semibold text-black">
              {AppString.footer.quick_action.header}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.quick_action.authors}
            </li>
            <li className="mt-5 text-sm  text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.quick_action.book_compare}
            </li>
            <li className="mt-5 text-sm text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.quick_action.all_category}
            </li>
            <li className="mt-5 text-sm text-footerText cursor-pointer hover:text-subText">
              {AppString.footer.quick_action.blog}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-footer">
        <div className="max-w-[1200px] mx-auto justify-between items-center px-4 py-5 block md:flex ">
          <p className="text-white text-sm">{AppString.footer.ref_hub}</p>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
            <p className="text-subText text-nowrap text-white">
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
