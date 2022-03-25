import {instance} from "./index";
import {Call} from "../types/calls";

export const getCallsList = (data: getListParams) =>
    instance.post<getListResponse>('mango/getList', data)

type getListParams = {
    date_start: string | null
    date_end: string | null
    in_out: string
}
type getListResponse = Call[]
