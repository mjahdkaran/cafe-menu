import { CartItem } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";


type CartState = {
  items: CartItem[];
};
const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }else{
        state.items.push({...action.payload,quantity:1})
      }
    },
    removeCart:(state,action:PayloadAction<number>)=>{
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity:(state,action:PayloadAction<number>)=>{
        const item=state.items.find(item=>item.id===action.payload)
        if(item){
            item.quantity+=1
        }
    },
    decrementQuantity:(state,action:PayloadAction<number>)=>{
        const item=state.items.find(item=>item.id===action.payload)
        if(item&&item.quantity>1){
            item.quantity -=1
        }
    },
    clearCart:state=>{
        state.items=[]
    }
    
  },
});
export const {addToCart,removeCart,incrementQuantity,decrementQuantity,clearCart}=cartSlice.actions
export default cartSlice.reducer