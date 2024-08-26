"use client";
import React, { useState } from "react";

const DescriptionSection = () => {
  const [isReadMore, setIsReadME] = useState(true);

  const toggleReadMore = () => {
    setIsReadME(!isReadMore);
  };

  const maxLength = 400;
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl
          sed sit aliquet nullam pretium. Velit vel aliquam amet augue. Risus id
          purus dolor dolor. Sagittis at vulputate rhoncus pharetra purus vitae,
          ac. Sit nam eleifend mauris, duis mattis leo, ut. Viverra accumsan
          elementum vehicula orci magna. Elementum, euismod ut sed at ut non.
          Eget commodo mi scelerisque erat. Mus adipiscing et mattis vitae
          sapien turpis. Eu, sit urna, convallis in commodo, sed condimentum
          dictumst vitae. Ultricies aenean a non tincidunt tortor ut pulvinar.
          Vulputate viverra tempor sed turpis at blandit malesuada at quam. Enim
          cursus vitae turpis lectus egestas nunc risus. Read More...`;

  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-subText text-sm">
          {isReadMore ? `${text.slice(0, maxLength)}` : text}
          <button
            onClick={toggleReadMore}
            className="text-primary font-semibold hover:underline focus:outline-none ml-2"
          >
            {isReadMore ? "Read More..." : "Read Less"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default DescriptionSection;
