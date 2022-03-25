import {Call} from "../../types/calls";

export type useCallsProps = {
    startDate: string | null
    endDate: string | null
    inOut: string
}

export interface useCallsInterface {
    list: Call[]
    isLoading: boolean
}
