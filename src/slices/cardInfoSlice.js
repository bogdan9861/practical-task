import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    props: {}
}

const CardInfo = createSlice({
    initialState,
    name: 'cardinfo',
    reducers: {
        setProps: (state, action) => {
            state.props = action.payload
        }
    }
})

const { actions, reducer } = CardInfo;
export default reducer;

export const { setProps } = actions;