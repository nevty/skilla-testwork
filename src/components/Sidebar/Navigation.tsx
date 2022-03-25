import React from "react";
import {VStack} from "@chakra-ui/react";
import {IoAnalyticsSharp, IoCheckmarkDoneSharp, IoDocumentTextOutline} from "react-icons/io5";
import {AiOutlineMail, AiOutlineUser} from "react-icons/ai"
import {MdOutlinePeopleAlt, MdOutlinePhone} from "react-icons/md";
import {BsBriefcase, BsGear} from "react-icons/bs";
import {BiBookReader} from "react-icons/bi";
import NavButton from "./NavButton";


const Navigation = () => (
    <VStack align="left" w="100%" spacing={0}>
        <NavButton leftIcon={<IoAnalyticsSharp/>}>Итоги</NavButton>
        <NavButton leftIcon={<IoCheckmarkDoneSharp/>}>Заказы</NavButton>
        <NavButton leftIcon={<AiOutlineMail/>}>Сообщения</NavButton>
        <NavButton leftIcon={<MdOutlinePhone/>} isActive>Звонки</NavButton>
        <NavButton leftIcon={<MdOutlinePeopleAlt/>}>Контрагенты</NavButton>
        <NavButton leftIcon={<IoDocumentTextOutline/>}>Документы</NavButton>
        <NavButton leftIcon={<AiOutlineUser/>}>Исполнители</NavButton>
        <NavButton leftIcon={<BsBriefcase/>}>Отчеты</NavButton>
        <NavButton leftIcon={<BiBookReader/>}>База знаний</NavButton>
        <NavButton leftIcon={<BsGear/>}>Настройки</NavButton>
    </VStack>
)

export default Navigation
