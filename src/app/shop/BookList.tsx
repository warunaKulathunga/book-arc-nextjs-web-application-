import React from "react";
import Image from "next/image";
import all_the_light from "./../../../public/image 1.png";
import crawdads from "./../../../public/image 9.png";
import konspirasi from "./../../../public/image 15.png";
import becoming from "./../../../public/image 16.png";
import crazy_rich from "./../../../public/image 13.png";
import { FaStar } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { PiTagSimpleFill } from "react-icons/pi";

const BookList = () => {
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
    {
      id: 5,
      name: "Konspirasi alam semesta",
      image: konspirasi,
      author: "by delia owens",
      price: "$ 74.99",
      rate: 3,
    },
    {
      name: "Becoming",
      image: becoming,
      author: "By Miechelle obama",
      price: "$ 93.99",
      rate: 2,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 w-ful">
      <div className="col-span-3">01</div>
      {bookList.map((book) => {
        return (
          <div key={book.id} className="bg-white shadow-md">
            <div className="bg-imageBg flex justify-center h-[285px] relative">
              <Image
                src={book.image}
                alt="Picture of the author"
                height={225}
                width={146}
                className="shadow-sm object-cover"
              />
              <div className="flex flex-col gap-4 p-4 absolute right-0 top-14">
                <div className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center shadow-md">
                  <PiEyeFill height={18} width={18} />
                </div>
                <div className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center shadow-md">
                  <FaCartShopping height={18} width={18} />
                </div>
                <div className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center shadow-md">
                  <PiTagSimpleFill height={18} width={18} />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h6 className="text-lg capitalize font-semibold text-black">
                {book.name}
              </h6>
              <p className="text-base capitalize font-normal text-subText mt-3">
                {book.author}
              </p>
              <p className="text-lg text-darkGreen font-semibold mt-5">
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
      <div className="col-span-3 bg-red-400">01</div>
    </div>
  );
};

export default BookList;
