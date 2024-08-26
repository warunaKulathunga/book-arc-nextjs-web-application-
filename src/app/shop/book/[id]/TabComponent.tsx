"use client";
import React, { useState } from "react";
import DescriptionSection from "./DescriptionSection";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full p-4">
      <div className="max-w-[1200px] mx-auto">
        <ul className="flex flex-col md:flex-row lg:flex-row  md gap-5">
          {["Description", "Additional", "Review", "Video"].map((tab) => (
            <li
              key={tab}
              className={`text-subText font-medium cursor-pointer select-none ${
                activeTab === tab
                  ? "text-black border-b border-primary"
                  : "hover:text-black hover:border-b hover:border-primary"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {activeTab === "Description" && (
            <div>
              <DescriptionSection />
            </div>
          )}
          {activeTab === "Additional" && <div>Additional content here...</div>}
          {activeTab === "Review" && <div>Review content here...</div>}
          {activeTab === "Video" && <div>Video content here...</div>}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
