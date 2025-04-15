export interface IMenuItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

export interface IMenu {
  coffee: MenuItem[];
  warm_drink: MenuItem[];
  salad: MenuItem[];
  main_food: MenuItem[];
}
// types.ts


export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}
