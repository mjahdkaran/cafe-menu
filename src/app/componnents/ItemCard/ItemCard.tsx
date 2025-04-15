"use client";

import { IMenuItem } from "@/app/types/types";
import { formatPrice } from "@/app/functions/functions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity, removeCart } from "@/app/store/slices/slices";
import Image from "next/image";
import { RootState } from "@/app/store/store";
import React from "react";

type ItemCardProps = {
  item: IMenuItem;
};

export default function ItemCard({ item }: ItemCardProps) {
  const dispatch = useDispatch();

  const quantity = useSelector((state: RootState) =>
    state.cart.items.find((i) => i.id === item.id)?.quantity || 0
  );

  

  return (
    <div
      className="md:h-44 h-36 flex items-center p-2 rounded-tl-xl rounded-br-xl border"
      style={{
        backgroundColor: "var(--begie-FAF1E6)",
        borderColor: "var(--green-99BC85)",
      }}
    >
      <div className="w-1/2 h-full rounded-md">
        <Image
          src={item.img}
          alt={item.name}
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="text-right w-1/2 h-full p-2 flex flex-col justify-between">
        <p className="font-bold">{item.name}</p>
        <div className="flex justify-end">
          <p className="mr-2">تومان</p>
          <p>{formatPrice(item.price)}</p>
        </div>

        <div className="flex items-center justify-end">
          
          {quantity > 0 ? (
            <>
              <button className="button w-6 mx-2" onClick={() => 
              {if(quantity===1){dispatch(removeCart(item.id))}else{
                dispatch(decrementQuantity(item.id))
              }}}>-</button>
              <span>{quantity}</span>

              <button className="button w-6 mx-2" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            </>
          ) : (
            <button className="button px-3 py-1" onClick={()=>dispatch(addToCart(item))}>
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
