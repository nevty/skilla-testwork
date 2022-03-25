import {createSlice} from "@reduxjs/toolkit";
import moment from "moment";
import {DATE_FORMAT} from "../../consts";

interface CallsDatesState {
    start: string | null
    end: string | null
}

const initialState = (): CallsDatesState => ({
    start: moment().format(DATE_FORMAT),
    end: moment().add(3, 'days').format(DATE_FORMAT)
})

const callsDatesSlice = createSlice({
    name: "calls/dates",
    initialState,
    reducers: {
        setCallsStart(state, {payload}) {
            state.start = payload
        },
        setCallsEnd(state, {payload}) {
            state.end = payload
        }
    }
})

export const {
    actions: {setCallsStart, setCallsEnd},
    reducer: callsDatesReducer
} = callsDatesSlice
