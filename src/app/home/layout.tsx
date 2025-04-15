import React, { ReactNode } from "react";
import Header from "../componnents/Header/Header";
import "./home.css";
import SearchInput from "../componnents/SearchInput/SearchInput";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" main_content    flex">
      <Header />
      <div className=" flex-1/2">
        
        <div className="    ml-10 md:ml-14   ">{children}</div>
      </div>
    </div>
  );
}
