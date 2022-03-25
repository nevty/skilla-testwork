import React from "react";
import {Text} from "@chakra-ui/react";

const CustomInput = ({ value, onClick }: InputProps, ref: React.Ref<HTMLInputElement>) => (
    <Text className="example-custom-input" onClick={onClick} color="gray.500" fontSize="sm">
        {value}
    </Text>
);

type InputProps = {
    value: string
    onClick: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
}

export default CustomInput
