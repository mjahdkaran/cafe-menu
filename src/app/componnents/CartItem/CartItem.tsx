// components/CartItem.tsx

"use client";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { formatPrice } from "@/app/functions/functions";
import { useDebugValue } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeCart,
} from "@/app/store/slices/slices";
import { useDispatch } from "react-redux";
type CartItemProps = {
  name: string;
  price: number;
  img: string;
  quantity:number;
  onDelete: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function CartItem({
  name,
  price,
  img,
  quantity,
  onDelete,
  onIncrement,
  onDecrement,
}: CartItemProps) {
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setShowDelete(true),
    onSwipedRight: () => setShowDelete(false),
  });

  return (
    <div className="h-28 rounded-xl relative" {...handlers}>
      <div
        className={`h-28 rounded-xl border flex items-center p-2 transition-all duration-300 ${
          showDelete ? "-translate-x-[60px]" : ""
        }`}
        style={{
          backgroundColor: "var(--begie-FAF1E6)",
          borderColor: "var(--green-99BC85)",
        }}
      >
        <Image
          className="rounded-xl"
          src={img}
          alt=""
          width={100}
          height={100}
        />
        <div className="flex-1/3 flex flex-col h-full justify-evenly items-center">
          <p className="font-bold">{name}</p>
          <div className="flex justify-start">
            <p className="mr-2 text-sm">تومان</p>
            <p>{formatPrice(price)}</p>
          </div>
        </div>
        <div className="h-full flex flex-col items-end justify-evenly">
          <div>
            <button className="button w-6 mx-2" onClick={onDecrement}>-</button>
            <span>{quantity}</span>
            <button className="button w-6 mx-2" onClick={onIncrement}>+</button>
          </div>
          <button
          onClick={onDelete}
           className="hidden md:block">
            <TrashIcon className="size-6 text-red-600 hover:bg-red-600 hover:text-white rounded-full" />
          </button>
        </div>
      </div>

      {showDelete && (
        <button
          onClick={onDelete}
          className="absolute top-0 right-0 h-full bg-red-600 text-white px-4 rounded-r-xl"
        >
          <TrashIcon className="size-6 text-white rounded-full" />
        </button>
      )}
    </div>
  );
}
