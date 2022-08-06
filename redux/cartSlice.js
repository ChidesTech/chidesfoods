import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
       cartItems :[]

        
    },
    reducers:{    
        addToCart : (state, action) =>{
            const item = action.payload;
            let existingItem = state.cartItems.find(x => x._id === item._id )
           if(existingItem){
            state.cartItems = state.cartItems.map(x => x._id === existingItem._id ? item : x ) 
           }else{
             state.cartItems = [...state.cartItems, item];
           }
           
         },
         removeCartItem : (state, action) =>{
           state.cartItems = state.cartItems.filter(x => x._id !== action.payload)
         },
         increaseProductCount : (state, action) =>{
            let item = state.cartItems.find(x => x._id === action.payload );     
            item.quantity = Number(item.quantity) + 1;

         },
        decreaseProductCount : (state, action) =>{
           let item = state.cartItems.find(x => x._id === action.payload );     
            if(item.quantity === 1){
                return;
            }
            item.quantity = Number(item.quantity) - 1;
           
         },

        
        reset : state => state = initialState

    }
});

export const {addToCart, removeCartItem, increaseProductCount, decreaseProductCount, reset} = cartSlice.actions;
export default cartSlice.reducer;