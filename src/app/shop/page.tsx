import React from "react";
import Button from "../(components)/Button";
import HeaderSection from "./HeaderSection";
import Filter from "@/components/Filter";
import BookList from "./BookList";

const page = () => {
  return (
    <div className="mx-auto max-w-[1200px]">
      {/* <HeaderSection />
      <Filter />
      <BookList /> */}
      <div>
        <HeaderSection />
      </div>
      <div className="flex">
        <div className="w-[20%]">
          <Filter />
        </div>
        <div className="w-[80%]">
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default page;
