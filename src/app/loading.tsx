"use client";
import React from "react";
import Lottie from "react-lottie-player";
import AnimationData from "../../public/icons/bubble-tea.json";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="md:w-1/2 w-4/6 flex justify-around items-center flex-col">
        <p className="font-bold md:text-3xl text-xl mb-5">... درحال بارگذاری</p>
        <div></div>
      </div>
    </div>
  );
}
