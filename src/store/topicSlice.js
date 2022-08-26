import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: 'editorial'
}

const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {
        topicChanged(state, action) {
            const newTopic = action.payload 
            state.current = newTopic
        }
    }
})

export const { topicChanged } = topicSlice.actions

export default topicSlice.reducer