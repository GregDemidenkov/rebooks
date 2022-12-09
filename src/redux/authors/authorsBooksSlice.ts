import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "../types"

type getAuthorsBooksType = {
    name: String
}

export const getAuthorsBooks = createAsyncThunk<Book[], getAuthorsBooksType>("authorsBooks/getAuthorsBooks", async ({name}) => {
    return fetch(`${host}books?author=${name}`)
    .then((res) => 
        res.json()
    )
})

export type authorsBooksType = {
    name: string,
    books: Book[]
}

type authorsBooksState = {
    authorsBooks: authorsBooksType[],
    loaded: boolean
}

const initialState: authorsBooksState = {
    authorsBooks: [],
    loaded: false
}

const authorsBooksSlice = createSlice({
    name: "authorsBooks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthorsBooks.pending, (state) => {
            state.loaded = false;
        });
        builder.addCase(getAuthorsBooks.fulfilled, (state, action) => {
            state.loaded = true;
            if (state.authorsBooks.length < 3) {
                state.authorsBooks.push({name: action.payload[0].author, books: action.payload});
            }
        });
        builder.addCase(getAuthorsBooks.rejected, (state) => {
            state.loaded = false;
        });
    }
});

export default authorsBooksSlice.reducer