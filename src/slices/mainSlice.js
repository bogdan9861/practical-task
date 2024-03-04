import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    savedSearchText: '',
    limit: 10
}

const MainSlice = createSlice({
    initialState,
    name: 'main',
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },

        deleteElementById: (state, action) => {
            state.data.splice(action.payload, 1);
        },

        setSavedSearchText: (state, action) => {
            state.savedSearchText = action.payload
        },

        setLimit: (state, action) => {
            state.limit = action.payload
        }
    }
})

const { actions, reducer } = MainSlice;
export default reducer;

export const {
    setData,
    setSavedSearchText,
    setLimit,
    deleteElementById
} = actions;