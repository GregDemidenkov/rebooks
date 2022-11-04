import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "./types"

export const getRecommendation = createAsyncThunk<Book[]>("recommendation/getRecommendation", async () => {
    return fetch(`${host}books?name=Тайная история`)
    .then((res) => 
        res.json()
    )
})

type recommendationState = {
    book: Book | null,
    loading: boolean
}

const initialState: recommendationState = {
    book: null,
    loading: false
}

const recommendationSlice = createSlice({
    name: "recommendation",
    initialState,
    reducers: {
        getRecommendationBook(state, action: PayloadAction<Book[]>) {
            state.book = action.payload[0];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRecommendation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRecommendation.fulfilled, (state, action) => {
            state.loading = false;
            state.book = action.payload[0];
        });
        builder.addCase(getRecommendation.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { getRecommendationBook } = recommendationSlice.actions;

export default recommendationSlice.reducer