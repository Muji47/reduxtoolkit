import { createSlice } from "@reduxjs/toolkit";

const listSlice=createSlice({
    name:"todoList",
    initialState:[],
    reducers:{
        addToList:(state,action)=>{
            state.push(action.payload)
        },
        removeFromList:(state,action)=>{
            state.splice(action.payload,1)
        },
        removeAll:()=>{
            return []
        }
        
    }
})
export default listSlice.reducer;
export const {addToList,removeFromList,removeAll} = listSlice.actions;