import { Box, color, Flex, HStack, Link, SimpleGrid, Stack, Text, } from "@chakra-ui/react";
import "./Navbar.css";
import { useState } from "react";
import {NavLink} from "react-router-dom";
import ContactModal from "./ContactModal";

const baseStyle={
    color:"white",
}
const activeStyle={
    color:"orangered"
}

const data=[{to:"/",title:"Home"},{to:"/skill",title:"Skills"},
{to:"/project",title:"Projects"}]
export const Navbar=()=>{
return<Flex className="nav">
{data.map((el,i)=><NavLink key={i} style={({isActive})=>isActive?activeStyle:baseStyle} to={el.to}>
    <Text fontWeight="bold" fontFamily="sans-serif">{el.title}</Text>
    </NavLink>)}
    <ContactModal/>
</Flex>
}