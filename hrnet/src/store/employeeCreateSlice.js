
import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    inputState : [],
})


const userCreateSlice = createSlice({
    name: 'createEmployee',
    initialState,
    reducers: {
        validate:(state,action) => {
            state.inputState.push(action.payload)
        },
    }
})


export const {validate} = userCreateSlice.actions

export default userCreateSlice.reducer;