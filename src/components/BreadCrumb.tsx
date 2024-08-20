import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { RxSlash } from "react-icons/rx";

const BreadCrumb = () => {
  return (
    <nav className="mt-8 px-4">
      <ol className="flex flex-wrap justify-center text-sm text-subText">
        <li>
          <a className="flex items-center gap-2 hover:text-black">
            <GrHomeRounded className="ml-2 cursor-pointer" /> Home
          </a>
        </li>
        <li className="flex gap-1 ml-2 items-center">
          <RxSlash />
          <a className="hover:text-black cursor-pointer">Shop</a>
        </li>
        <li className="flex ml-2 gap-1 items-center">
          <RxSlash className="font-semibold" />
          <a className="hover:text-black cursor-pointer">Update</a>
        </li>
        <li className="flex ml-2 gap-1 items-center">
          <RxSlash className="font-semibold" />
          <a className="hover:text-black cursor-pointer">Update2</a>
        </li>
        <li className="flex ml-2 gap-1 items-center text-black">
          <RxSlash className="text-subText" />
          <a className="font-semibold hover:text-black cursor-pointer">
            Update3
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
