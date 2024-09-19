import React from "react";
import all_the_light from "./../../../public/image 1.png";
import crawdads from "./../../../public/image 9.png";
import konspirasi from "./../../../public/image 15.png";
import Image from "next/image";

const OrderSummary = () => {
  const bookList = [
    {
      id: 1,
      image: all_the_light,
      product_name: "All the light we cannot see",
      price: "$ 24.99",
      quantity: "1",
      total: "$ 24.99",
    },
    {
      id: 2,
      product_name: "Where the crawdads sing",
      image: crawdads,
      price: "$ 34.99",
      quantity: "1",
      total: "$ 34.99",
    },
    {
      id: 3,
      image: konspirasi,
      product_name: "Rich people problems",
      price: "$ 13.99",
      quantity: "1",
      total: "$ 13.99",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1200px]">
        {/* <p></p> */}
        {bookList.map((item) => {
          return (
            <>
              <div className="flex justify-between items-center">
                <div className="flex text-sm items-center w-60">
                  <Image
                    src={item.image}
                    alt="Picture of the author"
                    height={40}
                    width={60}
                    className="shadow-sm object-cover mr-3 bg-imageBg rounded px-2"
                  />
                  {item.product_name}
                </div>
                <p>$ 59.98</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OrderSummary;
