import {configureStore} from "@reduxjs/toolkit";
import {callsDatesReducer} from "./modules/calls-dates";


export const store = configureStore({
    reducer: {
        callsDates: callsDatesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
