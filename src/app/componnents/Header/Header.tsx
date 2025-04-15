'use client'
import React from "react";
import Coffee from "../../../../public/Coffee-2346113.svg";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import style from './Header.module.css'
import { useRouter } from "next/navigation";
export default function Header() {
const router=useRouter()
const clickHandler=()=>{
  router.push('/shoppingcart')
}
  return (
  
    <header className={ `${style.header} flex justify-between items-center w-full md:h-28 px-5 fixed`}>
      <div>
        {" "}
        <div className=" pt-3 pl-5">
          <div className="flex items-center text-3xl ">
            <span className="m-1">Real</span>
            <Coffee width={50} height={50} />
          </div>
          <p className="text-3xl font-bold pl-5">Cafe</p>
        </div>
      </div>
      <button
      onClick={clickHandler}
       className={`${style.button} flex items-center p-1  md:w-24 md:h-12 rounded-lg border cursor-pointer `}>
        <ShoppingCartIcon className="size-7" />
        <span className="md:block hidden"> سبد خرید</span>
      </button>
    </header>
  );
}
