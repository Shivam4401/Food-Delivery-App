import React from "react";
import foodType from "../Food-type";

const Category = ({ filtering }) => {
  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center gap-6 "
        style={{ padding: "10px" }}
      >
        {foodType.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[140px] h-[150px] bg-white flex flex-col-reverse items-center gap-3 justify-center rounded-md shadow-2xl text-xl text-gray-800 font-semibold hover:bg-green-100 transition-all duration-300 cursor-pointer hover:scale-105 "
              onClick={() => filtering(item.name)}
            >
              {item.name}
              {item.image}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
