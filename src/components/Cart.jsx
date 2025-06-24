import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeItem,
} from "../reduxStore/cartSlice";
import { toast } from "react-toastify";
const Cart = ({ name, price, image, id, qty }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-[130px] shadow-xl bg-amber-50 flex justify-between border-2 rounded-lg border-gray-200  "
      style={{ padding: "8px" }}
    >
      <div className="w-[60%] h-full flex  gap-3">
        <div className="w-[60%] h-full overflow-hidden rounded-lg ">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-2">
          <div className="text-lg text-gray-900 font-semibold">{name}</div>
          <div className="w-[110px] h-[30px] bg-slate-400 flex border-2 text-lg font-semibold text-green-500 border-green-500 rounded-lg overflow-hidden">
            <button
              className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200"
              onClick={() => {
                if (qty > 1) {
                  dispatch(decrementQty(id));
                }
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex items-center justify-center">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200"
              onClick={() => dispatch(incrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-around items-end"
        style={{ padding: "0px 20px" }}
      >
        <span className="text-xl text-green-500">Rs {price}/-</span>
        <RiDeleteBin6Line
          className="w-[30px] h-[30-x] text-xl text-red-800 cursor-pointer"
          onClick={() => {
            dispatch(removeItem(id));
            toast.error("item removed from cart!");
          }}
        />
      </div>
    </div>
  );
};

export default Cart;
