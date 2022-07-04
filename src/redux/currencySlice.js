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


export const productSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addProduct: (state, action)=>{
            state.push(action.payload) 
        }
    }
})



export const { choiseCurrency } = currencySlice.actions
export const { addProduct } = productSlice.actions

// export default (currencySlice.reducer, productSlice.reducer)