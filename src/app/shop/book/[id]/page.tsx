import React from "react";
import BookDetail from "./BookDetail";
import AdditionalDetailsSection from "./AdditionalDetailsSection";
import RelatedProductsSection from "./RelatedProductsSection";

type Params = {
  id: string;
};

const page = ({ params }: { params: Params }) => {
  return (
    <div>
      <BookDetail />
      <AdditionalDetailsSection />
      <RelatedProductsSection />
    </div>
  );
};

export default page;
