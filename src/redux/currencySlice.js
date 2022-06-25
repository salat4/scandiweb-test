import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "$",
  }

export const currencySlice = createSlice({
    name:'currency',
    initialState,
    reducers:{
        choiseCurrency: (state, action)=>{
            state.value = action.payload
        }
    }
})


export const {choiseCurrency} = currencySlice.actions

export default currencySlice.reducer
