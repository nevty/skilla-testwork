import {HStack, VStack, Text, Progress, ProgressLabel} from "@chakra-ui/react";


const CallsInfo = () => (
    <HStack spacing={10}>
        <VStack spacing={1}>
            <Text fontSize="sm">
                Новые звонки
                <span style={{color: "green", marginLeft: '5px'}}>
                    20 из 30 шт
                </span>
            </Text>
            <Progress
                value={42}
                w="100%" size="xs"
                colorScheme="green"
                borderRadius="5"
            />
        </VStack>
        <VStack spacing={1}>
            <Text fontSize="sm">
                Качество разговоров
                <span style={{color: "#d69e2e", marginLeft: '5px'}}>
                    40%
                </span>
            </Text>
            <Progress
                value={40}
                w="100%" size="xs"
                colorScheme="yellow"
                borderRadius="5"
            />
        </VStack>
        <VStack spacing={1}>
            <Text fontSize="sm">
                Конверсия в заказ
                <span style={{color: "red", marginLeft: '5px'}}>
                    67%
                </span>
            </Text>
            <Progress
                value={67}
                w="100%" size="xs"
                colorScheme="red"
                borderRadius="5"
            />
        </VStack>
    </HStack>
)

export default CallsInfo
