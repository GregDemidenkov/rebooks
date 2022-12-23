import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "../../types"

import { slidebarList } from "components/pages/books/slidebar/slidebar-data-mock"

type getBooksType = {
    genre: String,
    sort: String,
    page: number
}

const getFilterBySort = (sort: String) => {
    switch (sort) {
        case "cheap":
            return "&_sort=info.currentPrice&_order=asc"
        case "expensive":
            return "&_sort=info.currentPrice&_order=desc"
        case "new":
            return "&_sort=characteristics.year&_order=desc"   
        default:
            return "&_sort=raiting.countBuy&_order=desc"
    }
}

export const getBooks = createAsyncThunk<Book[], getBooksType>("books/getBooks", async ({genre, sort, page}) => {
    const foundItem = slidebarList.find((obj) => obj.url === genre)
    const filterByCategory: String = foundItem?.label === "Все категории" ? "?" : `?characteristics.genre=${foundItem?.label}`;
    const filterBySort = getFilterBySort(sort)
    const filterByPage = foundItem?.label === "Все категории" ? `&_limit=18&_page=${page}` : ""    
    
    return fetch(`${host}books${filterByCategory}${filterBySort}${filterByPage}`)
    .then((res) => 
        res.json()
    )
})

type bookState = {
    list: Book[],
    category: String,
    sort: String,
    page: number,
    loaded: boolean
}

const initialState: bookState = {
    list: [],
    category: "Все категории",
    sort: "Сначала популярные",
    page: 1,
    loaded: false
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<String>) {
            const foundItem = slidebarList.find((obj) => obj.url === action.payload)
            state.category = foundItem ? foundItem.label : state.category;
        },
        setSort(state, action: PayloadAction<String>) {
            state.sort = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
            state.loaded = false;
        });
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.loaded = true;
            state.list = action.payload;
        });
        builder.addCase(getBooks.rejected, (state) => {
            state.loaded = false;
        });
    }
});

export const { setCategory, setSort, setPage } = booksSlice.actions;

export default booksSlice.reducer