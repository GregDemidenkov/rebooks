import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "../../types"

export const getBookById = createAsyncThunk("book/getBookById", async (id: string | undefined) => {
    const response = await fetch(`${host}books?id=${id}`)
    return (await response.json()) as Book[]
})

type bookState = {
    book: Book | null,
    loaded: boolean
}

const initialState: bookState = {
    book: null,
    loaded: false
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
            state.loaded = false;
        });
        builder.addCase(getBookById.fulfilled, (state, action) => {
            state.loaded = true;
            state.book = action.payload[0];
        });
        builder.addCase(getBookById.rejected, (state) => {
            state.loaded = false;
        });
    }
});

export const { getBook } = bookPageSlice.actions;

export default bookPageSlice.reducer