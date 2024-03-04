import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchText: ''
}

const HeaderSlice = createSlice({
    initialState,
    name: 'header',
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload
        }
    }
})

const { actions, reducer } = HeaderSlice;
export default reducer;

export const { setSearchText } = actions;