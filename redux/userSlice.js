import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
       info : null,      
    },
    reducers:{    
        saveUser : (state, action) =>{
            
           state.info = action.payload;
         },
         removeUser : state => state = initialState

    }
});

export const {saveUser, removeUser} = userSlice.actions;
export default userSlice.reducer;