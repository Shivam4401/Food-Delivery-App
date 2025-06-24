import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../reduxStore/cartSlice";
import { toast } from "react-toastify";

const Card = ({ name, image, id, price, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full sm:w-[240px] md:w-[280px]">
      <div
        key={id}
        className="bg-white rounded-xl border-2 border-green-500 flex flex-col items-center gap-4 p-4 h-[370px] hover:bg-green-100 transition duration-300 hover:scale-105"
        style={{ padding: "16px" }}
      >
        <img
          className="h-[210px] w-full rounded-lg object-cover"
          src={image}
          alt={name}
        />
        <h1 className="text-xl font-bold text-center">{name}</h1>
        <div
          className="flex items-center justify-between w-full px-2 text-green-500 font-bold text-sm"
          style={{ padding: "0px 8px" }}
        >
          <h5>Rs {price}/-</h5>
          <h6>{type}</h6>
        </div>
        <button
          className="w-full h-9 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm font-medium"
          onClick={() => {
            dispatch(
              addItem({
                id: id,
                name: name,
                price: price,
                image: image,
                qty: 1,
              })
            );
            toast.success("items added");
          }}
        >
          Add to Dish
        </button>
      </div>
    </div>
  );
};

export default Card;
