"use client";

import React, { useState } from "react";
import "./menu.css";
import Image from "next/image";

import { fetchMenu } from "@/app/api/sevises/axios";
import { IMenu, IMenuItem } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import SideBar from "../componnents/SideBar/SideBar";
import ItemCard from "../componnents/ItemCard/ItemCard";
import SearchInput from "../componnents/SearchInput/SearchInput";

export default function page() {
  const [activeTab, setActiveTab] = useState("coffee");
 
  const { data, isLoading, isError } = useQuery<IMenuItem[]>({
    queryKey: ["menu", activeTab],
    queryFn: () => fetchMenu(activeTab),
  });
  console.log('data',data)
  return (
    <div>
      <SideBar onSelect={setActiveTab} />
      <SearchInput/>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:p-4 0 px-6 py-4    ">

        {data&& data.map((item )=><ItemCard item={item}/>
        )
           }
     
      </div>
    </div>
  );
}
