import { configureStore } from "@reduxjs/toolkit";
import { rates } from "./slyses";

export const store = configureStore({
    reducer:{
        rates: rates.reducer
    }
})