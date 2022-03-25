import {Skeleton, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {HeaderGroup} from "react-table";
import {Call} from "../../types/calls";


const TableLoading: React.FC<Props> = ({headerGroups}) => {
    const rows = Array(10).fill('')
    return (
        <Table bg="white" borderRadius="md">
            <Thead>
                {headerGroups.map((headerGroup, index) => (
                    <Tr key={index}>
                        {headerGroup.headers.map((column) => (
                            <Th
                                textTransform="capitalize"
                                fontWeight="500"
                                color="gray.400"
                                key={column.id}
                            >
                                {column.Header}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {rows.map((row, index) => (
                    <Tr key={index}>
                        {headerGroups.map(({headers}, i) =>
                            headers.map((column) => (
                                <Td key={`${i}${column.id}`}>
                                    <Skeleton height="30px"/>
                                </Td>
                            ))
                        )}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}
type Props = {
    headerGroups: Array<HeaderGroup<Call>>
}

export default TableLoading
