import React from "react";
import {ButtonGroup, HStack, VStack, IconButton, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import {Column, usePagination, useSortBy, useTable} from "react-table";
import {Call} from "../../types/calls";
import TableLoading from "./TableLoading";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";


const CallsTable: React.FC<Props> = ({data, columns, isLoading}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: {pageIndex}
    } = useTable({
        columns, data,
        initialState: {pageSize: 10}
    }, useSortBy, usePagination)

    if (isLoading) return  <TableLoading headerGroups={headerGroups}/>

    return (
        <VStack w="100%">
            <Table {...getTableProps()} bg="white" borderRadius="md">
                <Thead>
                    {headerGroups.map(headerGroup => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <Th {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                                    textTransform="capitalize"
                                    fontWeight="500"
                                    color="gray.400"
                                >
                                    <HStack>
                                        <Text>{column.render('Header')}</Text>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <BiChevronDown/>
                                                : <BiChevronUp/>
                                            : ''}
                                    </HStack>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <Td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </Td>
                                ))}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
            <HStack>
                <ButtonGroup size="sm">
                    <IconButton
                        icon={<AiOutlineDoubleLeft/>}
                        disabled={!canPreviousPage}
                        onClick={() => gotoPage(0)}
                        aria-label="first"
                    />
                    <IconButton
                        icon={<AiOutlineArrowLeft/>}
                        disabled={!canPreviousPage}
                        onClick={() => previousPage()}
                        aria-label="back"
                    />
                    <IconButton
                        icon={<AiOutlineArrowRight/>}
                        disabled={!canNextPage}
                        onClick={() => nextPage()}
                        aria-label="next"
                    />
                    <IconButton
                        icon={<AiOutlineDoubleRight/>}
                        aria-label="last"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    />
                </ButtonGroup>
                <HStack>
                    <Text>{pageIndex + 1}</Text>
                    <Text>/</Text>
                    <Text>{pageCount}</Text>
                </HStack>
            </HStack>
        </VStack>
    )
}

type Props = {
    data: Call[]
    isLoading: boolean
    columns: Column<Call>[]
}

export default CallsTable

