import React from "react";
import Image from "next/image";
import logo from "./../../public/LOGO.png";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import AppString from "./../constants/strings";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="bg-white h-20 max-w-[1200px] mx-auto flex justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Picture of the author"
          height={120}
          width={142}
        />
        <PiLineVerticalThin size={24} className="text-subText" />
        <IoEllipsisHorizontal size={24} className="text-black" />
        <p className="text-black font-medium text-sm">
          {AppString.navbar.category}
        </p>
      </div>
      <div className="flex">
        <ul className="flex items-center gap-4 mr-4">
          <li className="text-subText font-medium text-sm">
            {AppString.navbar.home.header}
          </li>
          <li className="text-subText font-medium text-sm">
            {AppString.navbar.shop.header}
          </li>
          <li className="text-subText font-medium text-sm">
            {AppString.navbar.about.header}
          </li>
          <li className="text-subText font-medium text-sm">
            {AppString.navbar.contact.header}
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <CiSearch size={16} className="text-black" />
          <BsCart2 size={16} className="text-black" />
          <button className="bg-secondaryButton text-black w-[100px] py-3 font-bold px-6 mx-auto rounded-lg text-xs">
            {AppString.button.signIn}
          </button>
          <button className="bg-primary text-black font-bold w-[100px] text-xs px-6 py-3 mx-auto rounded-lg">
            {AppString.button.register}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
