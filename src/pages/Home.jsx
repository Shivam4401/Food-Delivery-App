import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Category from "../components/Category";
import Card from "../components/Card";
import foods from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";

const Home = () => {
  // You can add filtering logic here if needed
  // const [cate, setCate] = useState(foods);
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  const filtering = (category) => {
    if (category === "All") {
      setCate(foods);
      console.log(category);
    } else {
      let newFoods = foods.filter(
        (item) =>
          item.food_category &&
          item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(newFoods);
      //   console.log(category);
      //   console.log(newFoods);
    }
  };

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log(subtotal);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = subtotal + deliveryFee + taxes;

  return (
    <div className="bg-slate-300 w-full min-h-screen p-5">
      <Nav />
      {!input ? <Category filtering={filtering} /> : null}

      <div
        className="flex flex-wrap justify-center gap-6 px-6 py-8"
        style={{ padding: "20px 30px" }}
      >
        {cate.length > 0 ? (
          cate.map((food) => (
            <Card
              key={food.id}
              name={food.food_name}
              image={food.food_image}
              price={food.price}
              id={food.id}
              type={food.food_type}
            />
          ))
        ) : (
          <div
            className="text-green-500 text-2xl font-semibold text-center"
            style={{ padding: "20px" }}
          >
            No Items found
          </div>
        )}
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] overflow-auto fixed top-0 right-0 bg-white shadow-2xl transition-all duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header
          className="w-[100%] flex justify-between items-center"
          style={{ padding: "10px 15px" }}
        >
          <span className="text-green-500 font-semibold text-xl">
            Order Items
          </span>
          <RxCross2
            className="w-[30px] h-[30px] text-[18px] text-green-500 cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </header>
        <div>
          {items.length > 0 ? (
            <div>
              {" "}
              <div
                className="w-[80
          %] flex flex-col gap-8 mt-10"
                style={{ margin: "20px" }}
              >
                {items.map((item) => {
                  return (
                    <Cart
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      id={item.id}
                      qty={item.qty}
                    />
                  );
                })}
              </div>
              <div
                className="w-[93%] border-t-2 border-gray-400"
                style={{ padding: "opx 20px", margin: "10px 20px" }}
              >
                <div
                  className="flex items-center justify-between  "
                  style={{ padding: "5px 20px" }}
                >
                  <span className="font-semibold">Subtotal</span>
                  <span className="text-green-500 font-semibold">
                    Rs {subtotal}/-
                  </span>
                </div>
                <div
                  className="flex items-center justify-between  "
                  style={{ padding: "5px 20px" }}
                >
                  <span className="font-semibold">Delivery Fee</span>
                  <span className="text-green-500 font-semibold">
                    Rs {deliveryFee}/-
                  </span>
                </div>
                <div
                  className="flex items-center justify-between  "
                  style={{ padding: "5px 20px" }}
                >
                  <span className="font-semibold">Taxes</span>
                  <span className="text-green-500 font-semibold">
                    Rs {taxes}/-
                  </span>
                </div>
              </div>
              <div
                className="w-[93%] border-t-2 border-gray-400"
                style={{ padding: "opx 20px", margin: "10px 20px" }}
              >
                <div
                  className="flex items-center justify-between"
                  style={{ padding: "10px 20px" }}
                >
                  <span className="font-bold text-xl">Total</span>
                  <span className="text-green-500 font-bold text-xl">
                    Rs {total}/-
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="w-[88%] h-[38px] bg-green-500 text-white text-xl font-bold text-center rounded-lg cursor-pointer"
                  style={{ margin: "10px", padding: "3px" }}
                >
                  Place Order
                </div>
              </div>
            </div>
          ) : (
            <div
              className="text-green-500 text-2xl font-semibold text-center"
              style={{ padding: "20px" }}
            >
              Empty cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
