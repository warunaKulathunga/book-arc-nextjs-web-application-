"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./../../public/LOGO.png";
import AppString from "./../constants/strings";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full px-4">
      <nav className="bg-white h-20 max-w-[1200px] flex mx-auto justify-between">
        <div className="flex items-center gap-2">
          {/* <Image
            src={logo}
            alt="Picture of the author"
            height={120}
            width={142}
          /> */}
          <h1 className="font-bold text-3xl">
            Boo<span className="text-primary">K</span>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-4 mr-4">
            <li className="text-subText font-medium text-sm cursor-pointer hover:text-black select-none hover:border-b-[2px] border-primary p-1">
              {AppString.navbar.home.header}
            </li>
            <li
              className="text-subText font-medium text-sm cursor-pointer hover:text-black select-none hover:border-b-[2px] border-primary p-1"
              onClick={() => router.push("/shop")}
            >
              {AppString.navbar.shop.header}
            </li>
            <li className="text-subText font-medium text-sm cursor-pointer hover:text-black select-none hover:border-b-[2px] border-primary p-1">
              {AppString.navbar.about.header}
            </li>
            <li className="text-subText font-medium text-sm cursor-pointer hover:text-black select-none hover:border-b-[2px] border-primary p-1">
              {AppString.navbar.contact.header}
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <CiSearch size={16} className="text-black cursor-pointer" />
            <BsCart2 size={16} className="text-black cursor-pointer" />
            <button className="bg-secondaryButton text-black w-[100px] py-3 font-bold px-6 mx-auto rounded-lg text-xs select-none">
              {AppString.button.signIn}
            </button>
            <button className="bg-primary text-black font-bold w-[100px] text-xs px-6 py-3 mx-auto rounded-lg select-none">
              {AppString.button.register}
            </button>
          </div>
        </div>
        <div onClick={handleNav} className="flex items-center md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </nav>
      <div
        className={
          nav
            ? "fixed left-0 top-0 bg-white w-[80%] md:[60%] h-full shadow-lg ease-in-out duration-[700ms]  md:hidden z-10"
            : "ease-in-out duration-[700ms] fixed left-[-100%] md:hidden z-10 h-full shadow-lg top-0"
        }
      >
        <div className="flex p-4">
          {/* <Image
            src={logo}
            alt="Picture of the author"
            height={120}
            width={142}
          /> */}
          <h1 className="font-bold text-3xl">Book</h1>
        </div>
        <div>
          <ul className="mt-10">
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-300 cursor-pointer hover:text-black select-none">
              {AppString.navbar.home.header}
            </li>
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-300 cursor-pointer hover:text-black select-none">
              {AppString.navbar.shop.header}
            </li>
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-300 cursor-pointer hover:text-black select-none">
              {AppString.navbar.about.header}
            </li>
            <li className="text-subText font-medium text-sm p-4 border-b border-gray-300 cursor-pointer hover:text-black select-none">
              {AppString.navbar.contact.header}
            </li>
          </ul>
          <div className="flex p-4 gap-2">
            <button className="bg-secondaryButton text-black w-[50%] py-3 font-bold px-6 mx-auto rounded-lg text-xs">
              {AppString.button.signIn}
            </button>
            <button className="bg-primary text-black font-bold w-[50%] text-xs px-6 py-3 mx-auto rounded-lg">
              {AppString.button.register}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
