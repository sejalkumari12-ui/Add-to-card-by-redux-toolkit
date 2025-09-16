import { createSlice } from '@reduxjs/toolkit'

const initialState={
        items:[],
        totalPrice:0,
        value: 0
    }


export const  cartSlice = createSlice({
    name:"cart",
    initialState,

    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            state.items.push(newItem)
            state.totalPrice += newItem.price
        },
        clearCart:(state)=>{
            state.items = [],
            state.totalPrice = 0
        },
        increment: (state) => {
             state.value += 1
        },

        decrement: (state) => {
              state.value -= 1
    },


    },

})


export const selectCartItems = (state) =>state.cart.items

export const selectCartTotalPrice = (state)=>state.cart.totalPrice


export const {addToCart,clearCart,increment,decrement} = cartSlice.actions

export default cartSlice.reducer