"use client";
import React from "react";
import Image from "next/image";
import allTheLight from "./../../../../../public/image_10.png";
import { FaStar } from "react-icons/fa";
import AppStrings from "@/constants/strings";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";

const BookDetail = () => {
  const router = useRouter();
  const bookDetails = {
    id: 1,
    image: allTheLight,
    name: "All the light we cannot see",
    author: "By Anthony Doerr",
    publish: "1 July 2016",
    price: "$ 24.99",
    rate: 3,
    category: ["Religion", "Spirituality", "Novels"],
  };

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-0 md:gap-1 lg:gap-5 max-w-[1200px] mx-auto">
        <div className="bg-imageBg flex justify-center pt-4 rounded-lg shadow hover:shadow-md">
          <Image
            src={bookDetails.image}
            alt="Picture of the author"
            height={400}
            width={250}
            className="shadow-sm object-cover"
          />
        </div>
        <div className="col-span-2 px-2">
          <h1 className="text-3xl font-semibold mt-5 md:mt-0">
            {bookDetails.name}
          </h1>
          <h4 className="text-lg text-subText mt-5">{bookDetails.author}</h4>
          <div className="flex gap-2 mt-5">
            <p className="text-subText text-base">
              {AppStrings.book_detail.publish}
            </p>
            <p className="text-subText text">{bookDetails.publish}</p>
          </div>
          <p className="text-darkGreen text-3xl font-semibold mt-5">
            {bookDetails.price}
          </p>
          <div className="flex gap-2 mt-5">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < bookDetails.rate
                      ? "text-starPrimary"
                      : "text-starSecondary"
                  }
                />
              ))}
          </div>
          <div className="mt-5 flex gap-6 items-center">
            <p className="text-subText">{AppStrings.book_detail.category}</p>
            <div className="flex flex-col md:flex-row gap-2">
              {bookDetails.category.map((value) => {
                return (
                  <>
                    <button className="bg-secondaryGreen text-darkGreen bg-opacity-20 p-1 text-sm rounded-full px-4">
                      {value}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-primary text-black font-medium text-sm px-6 py-2 mx-auto rounded-lg"
              onClick={() => router.push("/cart")}
            >
              {AppStrings.button.buyNow}
            </button>
            <button className="bg-secondaryButton text-black py-2 font-medium px-6 mx-auto rounded-lg text-sm ml-2">
              {AppStrings.button.addToCart}
            </button>
          </div>
          <p className="text-subText mt-7">
            {AppStrings.book_detail.lifetime_access}
          </p>
          <div className="flex items-center mt-5 mb-1">
            <p className="text-subText">{AppStrings.book_detail.share}</p>
            <div className="flex gap-3 ml-4">
              <div className="w-6 h-6 border rounded-full flex justify-center items-center">
                <BiLogoFacebook
                  size={15}
                  className="text-primary cursor-pointer"
                />
              </div>
              <div className="w-6 h-6 border rounded-full flex justify-center items-center">
                <BiLogoInstagramAlt
                  size={15}
                  className="text-primary cursor-pointer"
                />
              </div>
              <div className="w-6 h-6 border rounded-full flex justify-center items-center">
                <FaTwitter size={15} className="text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
