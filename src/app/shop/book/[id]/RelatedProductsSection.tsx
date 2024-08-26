import React from "react";
import Image from "next/image";
import all_the_light from "./../../../../../public/image 1.png";
import crawdads from "./../../../../../public/image 9.png";
import crazy_rich from "./../../../../../public/image 13.png";
import { FaStar } from "react-icons/fa";
import AppString from "./../../../../constants/strings";

const RelatedProductsSection = () => {
  const bookList = [
    {
      id: 1,
      image: all_the_light,
      name: "all the light we cannot see",
      author: "by anthony doerr",
      price: "$ 24.99",
      rate: 4,
    },
    {
      id: 2,
      name: "where the crawdads sing",
      image: crawdads,
      author: "by delia owens",
      price: "$ 34.99",
      rate: 3,
    },
    {
      id: 3,
      name: "rich people problems",
      image: all_the_light,
      author: "by anthony doerr",
      price: "$ 13.99",
      rate: 2,
    },
    {
      id: 4,
      name: "crazy rich asians",
      image: crazy_rich,
      author: "by kevin kwa",
      price: "$ 64.99",
      rate: 3,
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-medium text-lg">
          {AppString.related_products.header}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-16">
          {bookList.map((book) => {
            return (
              <div
                key={book.id}
                className="bg-white shadow-md hover:shadow-lg cursor-pointer"
              >
                <div className="bg-imageBg flex justify-center h-[285px]">
                  <Image
                    src={book.image}
                    alt="Picture of the author"
                    height={225}
                    width={146}
                    className="shadow-sm object-cover"
                  />
                </div>
                <div className="p-4">
                  <h6 className="text-lg capitalize font-[500px] text-black">
                    {book.name}
                  </h6>
                  <p className="text-base capitalize font-[500ox] text-subText mt-3">
                    {book.author}
                  </p>
                  <p className="text-lg text-darkGreen font-[500px] mt-5">
                    {book.price}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < book.rate
                              ? "text-starPrimary"
                              : "text-starSecondary"
                          }
                        />
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProductsSection;
