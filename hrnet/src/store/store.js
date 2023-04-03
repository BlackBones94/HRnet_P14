import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import  userCreateSlice  from "../store/employeeCreateSlice";
// import  setTestReducer  from "../store/employeeCreateSlice";

const store = configureStore({
    reducer: {
        validate : userCreateSlice,
        // setTest : setTestReducer,
    },
    composeWithDevTools
});


export default store;