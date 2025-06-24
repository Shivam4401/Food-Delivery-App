import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import foods from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  useEffect(() => {
    let newFoods = foods.filter((item) =>
      item.food_name.toLowerCase().includes(input)
    );
    setCate(newFoods);
  }, [input]);

  let items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div
      className="w-full h-20 flex items-center justify-between p-4"
      style={{ padding: "15px" }}
    >
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl ">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        action=""
        className="flex items-center justify-start w-[60%] h-14 bg-white gap-3 shadow-xl rounded-md"
        style={{ paddingLeft: "10px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <MdOutlineSearch className="text-green-500 w-8 h-8 " />
        <input
          type="text"
          placeholder="Search Items...."
          className="w-full outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative"
        onClick={() => setShowCart(true)}
      >
        <span className="text-green-500 absolute top-0 right-2 font-bold text-xl">
          {items.length}
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
