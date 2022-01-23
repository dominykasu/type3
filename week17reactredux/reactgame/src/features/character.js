import {createSlice} from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name:"character",
    initialState:{
        name:"",
        value:{}
    },
    reducers:{
        updateCharacter: (state,action) => {
            state.value = action.payload
        }

    }
})

//export methods to update state
export const {updateCharacter} = characterSlice.actions

export default characterSlice.reducer