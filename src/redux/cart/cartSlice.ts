import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calcTotalPrice, calcTotalCount } from './utils/cartFunctions'

import { BookInCart } from 'redux/types'

type cartState = {
    items: BookInCart[],
    totalCount: number,
    totalPrice: number
}

const initialState: cartState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<BookInCart>) {
      const foundItem = state.items.find((obj) => obj.id === action.payload.id)

      if (foundItem) {
        foundItem.count++
      } else {
        state.items.push({...action.payload})
      }

      state.totalPrice = calcTotalPrice(state.items)
      state.totalCount = calcTotalCount(state.items)
    },
    clearCart(state) {
        state.items = []
        state.totalCount = 0
        state.totalPrice = 0
    }
  }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer