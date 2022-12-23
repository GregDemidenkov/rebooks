import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "../../types"

export const getBestsellers = createAsyncThunk<Book[]>("bestsellers/getBestsellers", async () => {
    return fetch(`${host}books?_sort=raiting.countBuy&_order=desc&_limit=10`)
    .then((res) => 
        res.json()
    )
})

type bestsellersState = {
    list: Book[],
    loaded: boolean
}

const initialState: bestsellersState = {
    list: [],
    loaded: false
}

const bestsellersSlice = createSlice({
    name: "bestsellers",
    initialState,
    reducers: {
        getBestsellersList(state, action: PayloadAction<Book[]>) {
            state.list = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBestsellers.pending, (state) => {
            state.loaded = false;
        });
        builder.addCase(getBestsellers.fulfilled, (state, action) => {
            state.loaded = true;
            state.list = action.payload;
        });
        builder.addCase(getBestsellers.rejected, (state) => {
            state.loaded = false;
        });
    }
});

export const { getBestsellersList } = bestsellersSlice.actions;

export default bestsellersSlice.reducer