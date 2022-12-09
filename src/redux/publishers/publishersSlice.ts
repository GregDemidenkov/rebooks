import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Publisher, host } from "../types"

export const getPublishers = createAsyncThunk<Publisher[]>("publishers/getPublishers", async () => {
    return fetch(`${host}publishers`)
    .then((res) => 
        res.json()
    )
})

type PublishersState = {
    publishers: Publisher[],
    loaded: boolean
}

const initialState: PublishersState = {
    publishers: [],
    loaded: false
}

const publishersSlice = createSlice({
    name: "publihers",
    initialState,
    reducers: {
        // getPublishersList(state, action: PayloadAction<Publisher[]>) {
        //     state.Publishers = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getPublishers.pending, (state) => {
            state.loaded = false;
        });
        builder.addCase(getPublishers.fulfilled, (state, action) => {
            state.loaded = true;
            state.publishers = action.payload;
        });
        builder.addCase(getPublishers.rejected, (state) => {
            state.loaded = false;
        });
    }
});

// export const { getPublishersList } = PublishersSlice.actions;

export default publishersSlice.reducer