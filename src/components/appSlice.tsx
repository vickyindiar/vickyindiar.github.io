import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type initType = {
    item: string,
    mobils: string[]
}
const initialState: initType = {
    item: '',
    mobils: ["defaultnya"] 
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        addMobils: (state, action) => {
            debugger;
            state.mobils = [...state.mobils,action.payload]
        }, 
        addString: (state, action) =>{
               state.item =  action.payload     
        }
    }
})
export const { addMobils } = appSlice.actions;

export const selectMobils = (state:RootState) => state.app.mobils
export default appSlice.reducer;