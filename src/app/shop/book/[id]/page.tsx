import React from "react";

type Params = {
  id: string;
};

const page = ({ params }: { params: Params }) => {
  return <div>BOOK {params.id}</div>;
};

export default page;
