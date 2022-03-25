import {Avatar, HStack} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";
import AvatarImage from '../../Avatar.png'

const Profile = () => (
    <HStack color="gray.400" spacing={1}>
        <Avatar size="sm" src={AvatarImage}/>
        <BiChevronDown size="20"/>
    </HStack>
)

export default Profile
