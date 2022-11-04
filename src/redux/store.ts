import {configureStore} from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

import bestsellersReducer from "./books/bestsellersSlice"
import recommendationReducer from "./books/recommendationSlice"
import bookPageReducer from "./books/bookPageSlice"
import booksReducer from "./books/booksSlice";

export const store = configureStore({
    reducer: {
        bestsellers: bestsellersReducer,
        recommendation: recommendationReducer,
        book: bookPageReducer,
        books: booksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;