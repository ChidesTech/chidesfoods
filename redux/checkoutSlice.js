import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:"checkout",
    initialState:{
       info :{}

        
    },
    reducers:{    
        addCheckoutInfo : (state, action) =>{
           state.info = action.payload;
             },
        reset : state => state = initialState

    }
});

export const {addCheckoutInfo, reset} = checkoutSlice.actions;
export default checkoutSlice.reducer;