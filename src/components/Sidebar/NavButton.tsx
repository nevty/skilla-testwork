import React from "react";
import {Button, ButtonProps, Text} from "@chakra-ui/react";
import {GoPrimitiveDot} from "react-icons/go";

const NavButton: React.FC<ButtonProps> = (
    {children, isActive, ...props}
) => (
    <Button
        isFullWidth
        justifyContent="start"
        variant="ghost" borderRadius={0}
        _hover={{bg: 'rgba(216, 228, 251, 0.3)', color: 'white'}}
        _focus={{bg: 'rgba(216, 228, 251, 0.3)', color: 'white'}}
        _active={{bg: 'rgba(216, 228, 251, 0.3)', color: 'white'}}
        style={isActive ? {
            borderLeft: '2px solid blue',
            background: 'rgba(216, 228, 251, 0.32)',
            color: 'white'
        } : {}}
        pr={1}
        rightIcon={isActive ? <GoPrimitiveDot color="#FFD500" size="14px"/> : undefined}
        {...props}
    >
        <Text flexGrow={1} textAlign="left">
            {children}
        </Text>
    </Button>
)

export default NavButton
