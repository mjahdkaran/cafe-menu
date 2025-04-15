"use client";
import { fetchMenu } from "@/app/api/sevises/axios";
import React, { useEffect, useState } from "react";
import { IMenu ,IMenuItem} from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { formatPrice } from "@/app/functions/functions";
type ItemCardProps={
  item:IMenuItem
}

export default function ItemCard({item}:ItemCardProps) {


  return (
    <div key={item.id}
    className="   md:h-44 h-36 flex items-center p-2 rounded-tl-xl rounded-br-xl border"
    style={{
      backgroundColor: "var(--begie-FAF1E6)",
      borderColor: "var(--green-99BC85)",
    }}
  >
    <div className="w-1/2 h-full rounded-md">
      <Image
        src={item.img}
        alt=""
        width={100}
        height={100}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="text-right  w-1/2 h-full p-2 flex flex-col justify-between">
      <p className="font-bold ">{item.name}</p>
      <div className="flex justify-end">
        <p className="mr-2">تومان</p>
        <p>{formatPrice(item.price)}</p>
      </div>
      <div>
        <button className="button w-6 mx-2">+</button>
        <span>1</span>
        <button className="button w-6 mx-2">-</button>
      </div>
    </div>
  </div>

  );
}
