import React, {useCallback, useMemo} from "react";
import {Box, HStack} from "@chakra-ui/react";
import DatePicker, {registerLocale} from 'react-datepicker'
import {useAppDispatch, useAppSelector} from "../../hooks/use-app";
import CustomInput from "./CustomInput";
import {DATE_FORMAT} from "../../consts";
import {shallowEqual} from "react-redux";
import moment from "moment";
import ru from "date-fns/locale/ru"
import {setCallsEnd, setCallsStart} from "../../redux/modules/calls-dates";

registerLocale('ru', ru)

const DateRange = () => {
    const {callsDates} = useAppSelector(state => ({
        callsDates: state.callsDates
    }), shallowEqual)
    const dispatch = useAppDispatch()

    const startDate = useMemo(
        () => callsDates.start ? moment(callsDates.start).toDate() : null,
        [callsDates.start]
    )

    const endDate = useMemo(
        () => callsDates.end ? moment(callsDates.end).toDate() : null,
        [callsDates.end]
    )

    const onStartChange = useCallback((date: Date | null) => {
        dispatch(setCallsStart(moment(date).format(DATE_FORMAT)))
    }, [dispatch])
    const onEndChange = useCallback((date: Date | null) => {
        dispatch(setCallsEnd(moment(date).format(DATE_FORMAT)))
    }, [dispatch])

    return (
        <HStack spacing={0}>
            <Box w="80px">
                <DatePicker
                    selected={startDate}
                    onChange={onStartChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    customInput={React.createElement(React.forwardRef(CustomInput))}
                    dateFormat="dd.MM.yyyy"
                    locale="ru"
                />
            </Box>
            <Box>-</Box>
            <Box w="80px">
                <DatePicker
                    selected={endDate}
                    onChange={onEndChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    customInput={React.createElement(React.forwardRef(CustomInput))}
                    dateFormat="dd.MM.yyyy"
                    locale="ru"
                />
            </Box>
        </HStack>
    )
}



export default DateRange
