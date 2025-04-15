"use client";
import React from "react";
import CartItem from "../componnents/CartItem/CartItem";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../store/slices/slices";
import { formatPrice } from "../functions/functions";
export default function page() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/home");
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalprice= cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)
  const tax=totalprice*(0.1)
  const grandTotal=totalprice+tax
  return (
    <div className="flex flex-col h-full">
      <header
        className=" md:h-24  h-20 flex"
        style={{ backgroundColor: "var(--green-99BC85)" }}
      >
        <button
          onClick={clickHandler}
          className="flex justify-start items-center  h-full w-fit ml-6 cursor-pointer"
        >
          <ChevronLeftIcon className="size-14 " />
        </button>
        <div className=" w-full h-ful flex justify-center items-center md:text-4xl text-2xl mr-20">
          سبد خرید
        </div>
      </header>

      <div
        className="  flex-1/2 grid md:grid-cols-3 grid-cols-1 gap-4 p-5  "
        style={{ backgroundColor: "var(--green-E4EFE7)" }}
      >
        {cartItems.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
            onDelete={() => dispatch(removeCart(item.id))}
            onIncrement={() => dispatch(incrementQuantity(item.id))}
            onDecrement={() => dispatch(decrementQuantity(item.id))}
          />
        ))}
      </div>
      <div className="flex flex-col  w-full flex-1/2 pb-5  ">
        <div className="flex justify-center items-center md:text-2xl text-lg md:h-14 h-12 text-white "
        style={{ backgroundColor: "var(--green-6F826A)" }}> جمع پرداخت</div>
        <div className="flex justify-evenly flex-col px-10 h-full pb-4  "
        style={{ backgroundColor: "var(--begie-FAF1E6)" }}>
          <p className=" flex justify-between border-b " style={{borderBlockColor:"var(--green-99BC85)"}}>
            {" "}
            {formatPrice(totalprice)} <span> : جمع مبلغ</span>
          </p>
          <p className="flex justify-between border-b " style={{borderBlockColor:"var(--green-99BC85)"}}>
            {" "}
            {formatPrice(tax)} <span> : مالیات و عوارض</span>
          </p>
          <p className="flex justify-between border-b " style={{borderBlockColor:"var(--green-99BC85)"}}>
            {" "}
            {formatPrice(grandTotal)}
            <span> : مجموع قابل پرداخت</span>
          </p>
        </div>
        <div className="flex justify-center mt-4 h-16">
        <button className="button md:w-1/3 w-full "> پرداخت</button> 
        </div>
      
      </div>
    </div>
  );
}
