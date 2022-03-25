import {Center, Container, HStack, Spacer} from "@chakra-ui/react";
import React from "react";
import DateRange from "../DateRange";
import CallsInfo from "./CallsInfo";
import Profile from "./Profile";


const Header: React.FC<Props> = ({height= '50'}) => (
    <Center
        w="100%" bg="white" color="black" h={`${height}px`}
        boxShadow="md"
    >
        <HStack as={Container} maxW="6xl" spacing={12}>
            <DateRange/>
            <CallsInfo/>
            <Spacer/>
            <Profile/>
        </HStack>
    </Center>
)
type Props = {
    height?: string
}

export default Header
