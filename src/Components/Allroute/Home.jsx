import profilePic from "../Images/Sagar-Sandbhor(2).jpg";
import { Box, Button, Flex,Heading,Image,List, ListIcon, ListItem, SimpleGrid, Spacer, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import "./Home.css";
import { useEffect, useState } from "react";
import { Contact } from "./Contact";
const imgStyle={border:"2px solid black"};
const boxStyle={boxShadow:"2xl",backgroundColor:"",padding:"2rem"}
const profileStyle={padding:"2rem",backgroundSize:"100%",
backgroundImage:`url("https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg")`}


export const Home=()=>{
let [skill,setSkill]=useState(null);
let [count,setCount]=useState(-1);

var skillData=["Html","CSS","JavaScript","React","Express","Node","MongoDb"];

useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      if(count===7){
        setCount(0);
      }
      setSkill(skillData[count]);

    }, 1000)
    
    return () => clearInterval(timer)
  }, [count])


    return<div style={{width:"90%",margin:"auto"}}>
        <VStack spacing="2rem" mt="2rem" pb="1rem">
            <Box borderRadius="1rem" boxShadow="dark-lg" style={boxStyle} width="100%">

<SimpleGrid columns={[1,1,2]} spacing='3rem' justifyContent="space-between">

  <Box className="Box" width="100%" bg="dark" height='auto' padding="1rem">
    <Text textAlign="left">
<Text className="type" fontWeight="extrabold" color="white" fontSize="2xl">Hey 👋...<br/>
I'm Sagar...</Text>
<Text className="type" color="pink" fontSize="1xl" fontFamily="sans-serif" fontWeight="medium">Welcome to my portfolio !</Text>
<Text color="white">I am a passionate Full Stack Web Developer
who focuses <br/> on writing
clean and user-friendly
applications using<Text color="red" fontSize="2xl" fontFamily="sans-serif" fontWeight="bold">{skill}</Text>
and some other cool libraries and frameworks.</Text></Text>
  </Box>

  <Box className="Box" width="100%" bg='grey' height='auto' padding="2rem" alignContent="center">
  <Heading size="md" color="white">
  About Me
 </Heading>
  <UnorderedList fontSize="sm" color="white" textAlign="left" mt="1rem" width="90%">
  <ListItem>🏡I am from Pune,Maharshtra.</ListItem>
  <ListItem>😍I like watching cricket,Interested in Mythology.</ListItem>
  <ListItem>🤝I think of myself as a people person.</ListItem>
  <ListItem>❤️I love designing websites and I am looking for more opportunities to work in coding.</ListItem>
  <ListItem>🤗Apart from being a good technocrat,I wish to contribute towards the betterment of the society with the knowledge I have gained so far and will be,in the coming years.</ListItem>
</UnorderedList>

  </Box>
  
</SimpleGrid>

            </Box>
        <Box borderRadius="1rem" style={profileStyle}>
        <Flex justifyContent="center">
        <Image className="profile" src={profilePic} style={imgStyle} alt="Sagar Sandbhor"/> 
        </Flex>

        <Stack color="white">
            <Text ml="1rem" fontWeight="extrabold" fontSize="3xl">Sagar Sandbhor</Text>
            <Text ml="3rem" fontStyle="italic" fontWeight="bold" fontSize="1xl">Full-Stack Developer</Text>
            <div style={{width:"90%",margin:"auto"}}>
              <Text className='desc'>
I'm an aspiring Full Stack Web Developer,with a 
specialization in HTML,CSS,JavaScript,MongoDb,
Express.js,React.js,Node.js eager to learn new
technologies to provide my skills for the
organization's growth.I'm self-motivated &
curious,with fast learning skills as well as an
Observant and detail oriented person with a keen
interest learning technology.</Text></div>
            <div style={{marginLeft:"0.7rem"}}>
                <Button width="auto" pd="1rem"colorScheme="whiteAlpha" >
                    <a style={{color:"white"}} href="https://drive.google.com/u/0/uc?id=1AiJ8g40LWW90ojtZtDCSJgHfN9fedKFT&export=download">
                        Resume
                        </a>
                </Button>
                </div>
        </Stack>
        </Box>
      <Contact/>
        </VStack>
        
    </div>
}
