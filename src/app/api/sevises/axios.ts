import axios from "axios";
import { IMenu, IMenuItem } from "@/app/types/types";

// axios.ts

export const fetchMenu = async (category: string): Promise<IMenuItem[]> => {
  const res = await fetch("/api/menu");
  const allMenu: IMenu = await res.json();
  return allMenu[category as keyof IMenu] || [];
};
