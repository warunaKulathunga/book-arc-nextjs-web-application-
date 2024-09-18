import React from "react";
import all_the_light from "./../../../public/image 1.png";
import crawdads from "./../../../public/image 9.png";
import konspirasi from "./../../../public/image 15.png";
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";

const CartProductList = () => {
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
    <div className="w-full mb-6 pr-4">
      <div className="mx-auto max-w-[1200px] flex">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-base font-normal">
                <div className="flex py-5">Product</div>
              </th>
              <th className="text-base font-normal hidden sm:table-cell lg:table-cell">
                <div className="flex px-8 py-5">Price</div>
              </th>
              <th className="text-base font-normal">
                <div className="flex px-8 py-5">Quantity</div>
              </th>
              <th className="text-base font-normal hidden sm:table-cell lg:table-cell">
                <div className="flex px-8 py-5">Total</div>
              </th>
              <th className="text-base font-normal">
                <div className="flex px-8 py-5"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((item) => {
              return (
                <tr key={item.id} className="border-t border-b">
                  <td className="py-4 flex items-center max-w-[250px] font-medium text-xs sm:text-base">
                    <Image
                      src={item.image}
                      alt="Picture of the author"
                      height={60}
                      width={70}
                      className="shadow-sm object-cover mr-3 bg-imageBg rounded px-2"
                    />
                    {item.product_name}
                  </td>
                  <td className="px-8 py-6 font-medium hidden sm:table-cell lg:table-cell">
                    {item.price}
                  </td>
                  <td className="px-8 py-6 font-medium">
                    <div className="flex justify-center">{item.quantity}</div>
                  </td>
                  <td className="px-8 py-6 font-medium hidden sm:table-cell lg:table-cell">
                    {item.total}
                  </td>
                  <td className="px-8 py-6">
                    <RiDeleteBinFill className="text-red-500 cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProductList;
