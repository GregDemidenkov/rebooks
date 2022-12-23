import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookInFavorite } from 'types'

type favoriteState = {
    items: BookInFavorite[],
    count: number
}

const initialState: favoriteState = {
    items: [],
    count: 0
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    clickItem(state, action: PayloadAction<BookInFavorite>) {
      const foundItem = state.items.find((obj) => obj.id === action.payload.id)

      if (foundItem) {
            const index = state.items.indexOf(foundItem)
            state.items.splice(index, 1)
      } else {
            state.items.push({...action.payload})
      }

      state.count = state.items.length

    }
  }
})

export const { clickItem } = favoriteSlice.actions

export default favoriteSlice.reducer