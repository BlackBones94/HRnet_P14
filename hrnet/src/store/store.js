import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userCreateSlice } from "./employeeCreateSlice";


const store = configureStore({
    reducer: {
        createEmployee : userCreateSlice.reducer,
    },
    composeWithDevTools
});


export default store;