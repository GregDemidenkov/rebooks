import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import bestsellersReducer from "./books/bestsellersSlice"
import recommendationReducer from "./books/recommendationSlice"
import bookPageReducer from "./books/bookPageSlice"
import booksReducer from "./books/booksSlice";

import authorsReducer from "./authors/authorsSlice"
import authorsBooksReducer from "./authors/authorsBooksSlice"

import publishersReducer from "./publishers/publishersSlice"
import publishersBooksReducer from "./publishers/publishersBooksSlice"

import cartReducer from './cart/cartSlice'

export const store = configureStore({
    reducer: {
        bestsellers: bestsellersReducer,
        recommendation: recommendationReducer,
        book: bookPageReducer,
        books: booksReducer,
        authors: authorsReducer,
        authorsBooks: authorsBooksReducer,
        publishers: publishersReducer,
        publishersBook: publishersBooksReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;