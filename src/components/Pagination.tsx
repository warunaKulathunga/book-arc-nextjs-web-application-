import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="flex gap-2">
      <a href="">
        <div className="bg-pagination_button text-pagination_disable_button size-[34px] rounded text-center font-bold flex items-center justify-center shadow">
          <IoIosArrowBack />
        </div>
      </a>
      <a>
        <div className="bg-primary size-[34px] rounded text-center font-bold flex items-center justify-center cursor-pointer shadow">
          1
        </div>
      </a>
      <a>
        <div className="bg-pagination_button size-[34px] rounded text-center font-bold flex items-center justify-center cursor-pointer shadow">
          2
        </div>
      </a>
      <a>
        <div className="bg-pagination_button size-[34px] rounded text-center font-bold flex items-center justify-center cursor-pointer shadow">
          3
        </div>
      </a>
      <a>
        <div className="bg-white size-[34px] rounded text-center font-bold flex items-center justify-center cursor-pointer shadow">
          ...
        </div>
      </a>
      <a>
        <div className="bg-pagination_button size-[34px] rounded text-center font-bold flex items-center justify-center cursor-pointer shadow">
          4
        </div>
      </a>
      <a>
        <div className="bg-white border border-subText size-[34px] rounded text-center font-bold flex items-center justify-center cursor-pointer shadow">
          <IoIosArrowForward />
        </div>
      </a>
    </div>
  );
};

export default Pagination;
