import { createSlice } from "@reduxjs/toolkit";


export const rates = createSlice({
    name: "rates",
    initialState: {},
    reducers:{
        setRates: (state, action) => {
            return action.payload;
        }
    }
})

export const {setRates} = rates.actions;