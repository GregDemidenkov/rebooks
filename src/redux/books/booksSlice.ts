import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "../types"

type getBooksType = {
    category: String,
    sort: String,
    page: number
}

const getFilterBySort = (sort: String) => {
    switch (sort) {
        case "Сначала дешевые":
            return "&_sort=info.currentPrice&_order=asc"
        case "Сначала дорогие":
            return "&_sort=info.currentPrice&_order=desc"
        case "Сначала новые":
            return "&_sort=characteristics.year&_order=desc"   
        default:
            return "&_sort=raiting.countBuy&_order=desc"
    }
}

export const getBooks = createAsyncThunk<Book[], getBooksType>("books/getBooks", async ({category, sort, page}) => {
    const filterByCategory: String = category === "Все категории" ? "?" : `?characteristics.genre=${category}`;
    const filterBySort = getFilterBySort(sort)
    const filterByPage = category === "Все категории" ? `&_limit=18&_page=${page}` : ""    
    
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
        // getBooksList(state, action: PayloadAction<Book[]>) {
        //     state.list = action.payload;
        // },
        setCategory(state, action: PayloadAction<String>) {
            state.category = action.payload;
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