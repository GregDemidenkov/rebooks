import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Author, host } from "../../types"

export const getAuthors = createAsyncThunk<Author[]>("authors/getAuthors", async () => {
    return fetch(`${host}authors`)
    .then((res) => 
        res.json()
    )
})

type authorsState = {
    authors: Author[],
    loaded: boolean
}

const initialState: authorsState = {
    authors: [],
    loaded: false
}

const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthors.pending, (state) => {
            state.loaded = false;
        });
        builder.addCase(getAuthors.fulfilled, (state, action) => {
            state.loaded = true;
            state.authors = action.payload;
        });
        builder.addCase(getAuthors.rejected, (state) => {
            state.loaded = false;
        });
    }
});

export default authorsSlice.reducer