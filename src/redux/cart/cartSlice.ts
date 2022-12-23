import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calcTotalPrice, calcTotalCurrentPrice, calcTotalWeight } from './utils/cartFunctions'

import { BookInCart } from 'types'

type cartState = {
    items: BookInCart[],
    totalCount: number,
    totalWeight: number,
    totalPrice: number,
    totalCurrentPrice: number
}

const initialState: cartState = {
    items: [],
    totalCount: 0,
    totalWeight: 0,
    totalPrice: 0,
    totalCurrentPrice: 0
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

      state.totalCount = state.items.length
      state.totalWeight = calcTotalWeight(state.items)
      state.totalPrice = calcTotalPrice(state.items)
      state.totalCurrentPrice = calcTotalCurrentPrice(state.items)

    },
    minusItem(state, action: PayloadAction<number>) {
      const foundItem = state.items.find((obj) => obj.id === action.payload);
      if (foundItem) {
        if (foundItem.count !== 1) {
            foundItem.count--;
        } else {
          const index = state.items.indexOf(foundItem)
          state.items.splice(index, 1)
        }
      }

      state.totalCount = state.items.length
      state.totalWeight = calcTotalWeight(state.items)
      state.totalPrice = calcTotalPrice(state.items)
      state.totalCurrentPrice = calcTotalCurrentPrice(state.items)

    },
    deleteItem(state, action: PayloadAction<number>) {
      const foundItem = state.items.find((obj) => obj.id === action.payload);

      if (foundItem) {
          const index = state.items.indexOf(foundItem)
          state.items.splice(index, 1)
      }

      state.totalCount = state.items.length
      state.totalWeight = calcTotalWeight(state.items)
      state.totalPrice = calcTotalPrice(state.items)
      state.totalCurrentPrice = calcTotalCurrentPrice(state.items)

    },
    clearCart(state) {
        state.items = []
        state.totalCount = 0
        state.totalPrice = 0
    }
  }
})

export const { addItem, minusItem, deleteItem, clearCart } = cartSlice.actions

export default cartSlice.reducer