import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "./types"

export const getBooks = createAsyncThunk<Book[]>("books/getBooks", async () => {
    return fetch(`${host}books`)
    .then((res) => 
        res.json()
    )
})

type bookState = {
    list: Book[],
    loading: boolean
}

const initialState: bookState = {
    list: [],
    loading: false
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        getBooksList(state, action: PayloadAction<Book[]>) {
            state.list = action.payload;
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

export const { getBooksList } = booksSlice.actions;

export default booksSlice.reducer