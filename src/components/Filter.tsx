import React from "react";
import AppStrings from "@/constants/strings";
import { FaStar } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="bg-white w-full">
      <ol>
        <li className="text-black text-base font-semibold">
          {AppStrings.filter.book_category.head}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-6">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.fiction}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.non_fiction}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.children_books}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.educational_textbooks}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.graphic_novels_comics}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.religion_spirituality}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.arts_photography}
        </li>
        <li className="text-subText text-base font-normal flex gap-3 mt-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {AppStrings.filter.book_category.special_collections}
        </li>
      </ol>
      <ol className="mt-10">
        <li className="text-black text-base font-semibold">
          {AppStrings.filter.booking_rating.head}
        </li>
        <li className="flex gap-3 mt-4">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="text-starPrimary" />
            ))}
        </li>
        <li className="flex gap-3 mt-3">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < 4 ? "text-starPrimary" : "text-starSecondary"
                }
              />
            ))}
        </li>
        <li className="flex gap-3  mt-3">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < 3 ? "text-starPrimary" : "text-starSecondary"
                }
              />
            ))}
        </li>
        <li className="flex gap-3  mt-3">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < 2 ? "text-starPrimary" : "text-starSecondary"
                }
              />
            ))}
        </li>
      </ol>
      <ol className="mt-10">
        <li className="text-black text-base font-semibold">
          {AppStrings.filter.price_range.head}
        </li>
        <li className="mt-3">
          <input type="range" id="vol" name="vol" min="0" max="50" />
        </li>
      </ol>
    </div>
  );
};

export default Filter;
