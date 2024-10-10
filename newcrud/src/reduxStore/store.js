import { configureStore } from "@reduxjs/toolkit";
import userDetail  from "../reduxfeatures/userDetails";

export const store = configureStore({
    reducer: {
        app:userDetail 
    },
})