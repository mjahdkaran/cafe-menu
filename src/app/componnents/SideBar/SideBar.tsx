"use client";
import { KeyObject } from "crypto";
import { useParams } from "next/navigation";
import React, { act, useState } from "react";

type MenuProps = {
  onSelect: (value: string) => void;
};
export default function SideBar({ onSelect }: MenuProps) {
  const [activeTab, setActiveTab] = useState({
    main_food: false,
    salad: false,
    warm_drink: false,
    cold_drink: false,
    coffee: true,
  });
  const clickHandler = (e: any) => {
    let selected = e.target.id;
    onSelect(selected);
    const updatedTabs = Object.fromEntries(
      Object.keys(activeTab).map((key) => [key, key === selected])
    ) as typeof activeTab;

    setActiveTab(updatedTabs);
  };
  return (
    <div
      className="fixed left-0 top-20 bottom-0 w-10 md:w-14 rounded-r-full mt-5 flex justify-evenly items-center list-none"
      style={{
        writingMode: "sideways-lr",
        backgroundColor: "var(--green-99BC85)",
      }}
    >
      <li
        onClick={clickHandler}
        className={`${
          activeTab.main_food && `font-bold text-amber-100`
        } cursor-pointer`}
        id="main_food"
      >
        غذای اصلی
      </li>
      <li
        onClick={clickHandler}
        className={`${
          activeTab.salad && `font-bold text-amber-100`
        } cursor-pointer`}
        id="salad"
      >
        دسر و سالاد
      </li>
      <li
        onClick={clickHandler}
        className={`${
          activeTab.cold_drink && `font-bold text-amber-100`
        } cursor-pointer`}
        id="cold_drink"
      >
        نوشیدنی سرد
      </li>{" "}
      <li
        onClick={clickHandler}
        className={`${
          activeTab.warm_drink && `font-bold text-amber-100`
        } cursor-pointer`}
        id="warm_drink"
      >
        نوشیدنی گرم
      </li>
      {/* استفاده از تایپ سفارشی برای لی */}
      <li
        onClick={clickHandler}
        className={`${
          activeTab.coffee && `font-bold text-amber-100`
        } cursor-pointer`}
        id="coffee"
      >
        قهوه
      </li>
    </div>
  );
}
