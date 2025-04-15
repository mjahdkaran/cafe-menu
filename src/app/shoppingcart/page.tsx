"use client";
import Image from "next/image";
import React, { useState } from "react";
import { formatPrice } from "../functions/functions";
import { useSwipeable } from "react-swipeable";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function page() {
  const [showDelete, setShowDelete] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setShowDelete(true),
    onSwipedRight: () => setShowDelete(false),
    // trackMouse: true,
  });
  return (
    <div className="flex flex-col h-full">
      <header
        className=" h-32 "
        style={{ backgroundColor: "var(--green-99BC85)" }}
      >
        {" "}
        header
      </header>

      <div
        className=" flex-1/2 grid md:grid-cols-3 grid-cols-1 gap-4 p-5  "
        style={{ backgroundColor: "var(--green-E4EFE7)" }}
      >
        {/* //////// */}
        <div className="h-28 rounded-xl  relative " {...handlers}>
          <div
            className={`h-28 rounded-xl border flex items-center p-2 transition-all duration-300 
              ${showDelete ? "-translate-x-[60px]" : ""}`}
            style={{
              backgroundColor: "var(--begie-FAF1E6)",
              borderColor: "var(--green-99BC85)",
            }}
          >
            <Image
              className="rounded-xl"
              src="/cafeimage/coldDrink/شیک توت فرنگی.jpg"
              alt=""
              width={100}
              height={100}
            />
            <div className=" flex-1/3 flex flex-col h-full justify-evenly items-center">
              <p className="font-bold ">آب توت فرنگی </p>
              <div className="flex justify-start">
                <p className="mr-2 text-sm">تومان</p>
                <p>{formatPrice(250000)}</p>
              </div>
            </div>
            <div className=" h-full flex flex-col items-end justify-evenly">
              <div className="">
                <button className="button w-6 mx-2">+</button>
                <span>1</span>
                <button className="button w-6 mx-2">-</button>
              </div>
              <button className=" hidden md:block">
                <TrashIcon className="size-6 text-red-600 hover:bg-red-600 hover:text-white rounded-full" />
              </button>
            </div>
          </div>

          {/* نمایش دکمه ی حذف در حالت گوشی با کشید به سمت چپ */}
          {showDelete && (
            <button
              className="absolute top-0 right-0 h-full bg-red-600 text-white px-4 rounded-r-xl z-10"
            >
              حذف
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
