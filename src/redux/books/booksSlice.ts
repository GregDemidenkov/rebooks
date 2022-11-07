import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "./types"

type getBooksType = {
    category: String,
    sort: String
}

const getFilterBySort = (sort: String) => {
    switch (sort) {
        case "Сначала дешевые":
            return "&_sort=info.price&_order=asc"
        case "Сначала дорогие":
            return "&_sort=info.price&_order=desc"
        case "Сначала новые":
            return "&_sort=characteristics.year&_order=desc"   
        default:
            return "&_sort=raiting.countBuy&_order=desc"
    }
}

export const getBooks = createAsyncThunk<Book[], getBooksType>("books/getBooks", async ({category, sort}) => {
    const filterByCategory = category === "Все категории" ? "?" : `?characteristics.genre=${category}`;
    const filterBySort = getFilterBySort(sort)
    
    return fetch(`${host}books${filterByCategory}${filterBySort}`)
    .then((res) => 
        res.json()
    )
})

type bookState = {
    list: Book[],
    category: String,
    sort: String,
    loading: boolean
}

const initialState: bookState = {
    list: [],
    category: "Все категории",
    sort: "Сначала популярные",
    loading: false
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        });
        builder.addCase(getBooks.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { setCategory, setSort } = booksSlice.actions;

export default booksSlice.reducer