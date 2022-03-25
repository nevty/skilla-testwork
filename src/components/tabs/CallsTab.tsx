import React, {useState} from "react";
import useCalls from "../../hooks/useCalls";
import {Avatar, HStack, Select, VStack} from "@chakra-ui/react";
import CallsTable from "../CallsTable";
import {Column} from "react-table";
import {Call} from "../../types/calls";
import {MdCallMade, MdCallReceived} from "react-icons/md";
import moment from "moment";
import {useAppSelector} from "../../hooks/use-app";
import {shallowEqual} from "react-redux";

const columns: Column<Call>[] = [
    {
        Header: 'Тип',
        accessor: 'in_out',
        Cell: ({cell}) => {
            if (cell.value === '1') return <MdCallReceived color="#005FF8"/>
            if (cell.value === '0') return <MdCallMade color="#28A879"/>
            return null
        }
    },
    {
        Header: 'Время',
        accessor: 'date',
        Cell: ({cell}) =>
            moment(cell.value).format('HH:mm')
    },
    {
        Header: 'Сотрудник',
        accessor: 'person_avatar',
        disableSortBy: true,
        Cell: ({cell}) =>
            <Avatar size="sm" src={cell.value} name={cell.row.original.person_name}/>
    },
    {
        Header: 'Звонок',
        accessor: 'from_number'
    },
    {
        Header: 'Источник',
        accessor: 'line_number'
    },
    {
        Header: 'Оценка',
        accessor: 'status'
    },
    {
        Header: 'Длительность',
        accessor: 'time',
        Cell: ({cell}) =>
            moment.utc(cell.value * 1000).format('mm:ss')
    },
]

const CallsTab = () => {
    const [callType, setCallType] = useState<string>("null")

    const {callsDates} = useAppSelector(state => ({
        callsDates: state.callsDates
    }), shallowEqual)

    const {list, isLoading} = useCalls({
        startDate: callsDates.start,
        endDate: callsDates.end,
        inOut: callType
    })

    return (
        <VStack pt={4} pb={4} spacing={4}>
            <HStack align="start" w="100%">
                <Select
                    variant="filled"
                    w="auto" size="sm" color="gray.500"
                    defaultValue={callType}
                    onChange={({target}) => setCallType(target.value)}
                >
                    <option value="null">Все</option>
                    <option value="1">Входящие</option>
                    <option value="0">Исходящие</option>
                </Select>
            </HStack>
            <CallsTable
                data={list} columns={columns}
                isLoading={isLoading}
            />
        </VStack>
    )
}

export default CallsTab
