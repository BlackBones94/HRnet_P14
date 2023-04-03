
import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    inputState : [],
    // firstName : "",
})


const userCreateSlice = createSlice({
    name: 'createEmployee',
    initialState,
    reducers: {
        validate:(state,action) => {
            state.inputState.push(action.payload)
            // state.inputState = action.payload
            // state.test = true
        },

        // setTest:(state)=>{
        //     state.test = true
        // }
    }
})


export const {validate} = userCreateSlice.actions

export default userCreateSlice.reducer;