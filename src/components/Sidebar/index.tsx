import {Button, VStack} from "@chakra-ui/react";
import {ReactComponent as Logo} from "../../logo.svg"
import Navigation from "./Navigation";


const Sidebar = () => (
    <VStack align="start" bg="#091336" color="gray.300" w="200px" spacing={8}>
        <Logo style={{margin: '15px 0 0 15px'}}/>
        <Navigation/>
        <VStack align="start" w="100%" pl={4} pr={4} spacing={4}>
            <Button
                variant="solid"
                colorScheme="blue" isFullWidth
            >
                Добавить заказ
            </Button>
            <Button
                variant="solid"
                colorScheme="blue" isFullWidth
            >
                Оплата
            </Button>
        </VStack>
    </VStack>
)

export default Sidebar
