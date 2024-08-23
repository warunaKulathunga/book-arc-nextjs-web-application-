import React from "react";
import Button from "../(components)/Button";
import HeaderSection from "./HeaderSection";
import Filter from "@/components/Filter";
import BookList from "./BookList";

const page = () => {
  return (
    <div className="w-full px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* <HeaderSection />
      <Filter />
      <BookList /> */}
        <div>
          <HeaderSection />
        </div>
        <div className="block md:block lg:flex mt-10">
          <div className="w-[100%] md:w-[100%] lg:w-[20%]">
            <Filter />
          </div>
          <div className="w-[100%] md:w-[100%] lg:[80%] ml-0 md:ml-0 lg:ml-10">
            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
