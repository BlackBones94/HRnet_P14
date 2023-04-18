import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import  userCreateSlice  from "../store/employeeCreateSlice";

const store = configureStore({
    reducer: {
        validate : userCreateSlice,
    },
    composeWithDevTools
});


export default store;