import { configureStore } from "@reduxjs/toolkit";

import header from '../slices/headerSlice'
import main from '../slices/mainSlice'
import cardInfo from '../slices/cardInfoSlice'

export const store = configureStore({
    reducer: {header, main, cardInfo}
})
