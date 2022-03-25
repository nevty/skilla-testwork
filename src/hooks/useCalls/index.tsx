import {useQuery} from "react-query";
import {getCallsList} from "../../api/callsAPI";
import {useCallsInterface, useCallsProps} from "./types";
import {useState} from "react";
import {Call} from "../../types/calls";

const useCalls = ({startDate, endDate, inOut}: useCallsProps): useCallsInterface => {
    const [list, setList] = useState<Call[]>([])

    const {isLoading} = useQuery(
        ['calls', {startDate, endDate, inOut}],
        () => getCallsList({date_start: startDate, date_end: endDate, in_out: inOut})
            .then(res => {
                setList(res.data)
            })
            .catch(err => {console.log(err)})
        , {enabled: !!startDate && !!endDate}
    )

    return {
        list,
        isLoading
    }
}

export default useCalls
