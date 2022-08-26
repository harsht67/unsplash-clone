import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    query: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchCleared(state, action) {
            state.query = ""
        },
        searchUpdated(state, action) {
            const newQuery = action.payload

            state.query = newQuery
        }
    }
})

export const { searchCleared, searchUpdated } = searchSlice.actions

export default searchSlice.reducer 