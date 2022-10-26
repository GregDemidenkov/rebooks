import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "./types"

export const getBookById = createAsyncThunk<Book[]>("book/getBookById", async (id: number) => {
    return fetch(`${host}books?id=${id}`)
    .then((res) => 
        res.json()
    )
})

type bookState = {
    book: Book | null,
    loading: boolean
}

const initialState: bookState = {
    book: null,
    loading: false
}

const bookPageSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBook(state, action: PayloadAction<Book[]>) {
            state.book = action.payload[0];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBookById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBookById.fulfilled, (state, action) => {
            state.loading = false;
            state.book = action.payload[0];
        });
        builder.addCase(getBookById.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { getBook } = bookPageSlice.actions;

export default bookPageSlice.reducer