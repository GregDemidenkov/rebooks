import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book, host } from "../types"

type getPublisherBooksType = {
    publisherName: String
}

export const getPublisherBooks = createAsyncThunk<Book[], getPublisherBooksType>("publisherBooks/getPublisherBooks", async ({publisherName}) => {
    return fetch(`${host}books?characteristics.publisher.0=${publisherName}`)
    .then((res) => 
        res.json()
    )
})

export type publisherBooksType = {
    publisher: string,
    books: Book[]
}

type publisherBooksState = {
    publisherBooks: publisherBooksType[],
    loaded: boolean
}

const initialState: publisherBooksState = {
    publisherBooks: [],
    loaded: false
}

const publisherBooksSlice = createSlice({
    name: "publisherBooks",
    initialState,
    reducers: {
        // getPublisherBooksList(state, action: PayloadAction<Author[]>) {
        //     state.PublisherBooks = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getPublisherBooks.pending, (state) => {
            state.loaded = false;
        });
        builder.addCase(getPublisherBooks.fulfilled, (state, action) => {
            state.loaded = true;
            if (state.publisherBooks.length < 6) {
                state.publisherBooks.push({publisher: action.payload[0].characteristics.publisher[0], books: action.payload});
            }
        });
        builder.addCase(getPublisherBooks.rejected, (state) => {
            state.loaded = false;
        });
    }
});

// export const { getPublisherBooksList } = PublisherBooksSlice.actions;

export default publisherBooksSlice.reducer