import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import "./Home.css"

const btnStyle={display:"flex",justifyContent:"space-between",width:"45%",marginTop:"0.8rem"}
const imgStyle={width:"90%",display:"block",margin:"auto"}

export const Project=()=>{
    return<div>
        <VStack width="80%" gap="2rem" margin="auto" pb="2rem">
            <Text color="red" fontSize="2xl" >My Projects</Text>
            <hr style={{backgroundColor:"orange",width:"100%",height:"2px",marginBottom:"1rem"}}/>

            <SimpleGrid columns={[1,1,2]} spacing='10px'>
  <Box className="Box" width="100%"><img style={imgStyle} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1).png"/></Box>
  <Box textAlign="left" mt="1rem" ml="1rem" width="100%">
    <Text fontSize="3xl" fontWeight="medium" color="white">My-hours Clone -Project</Text>
    <Text fontSize="1xl" fontWeight="medium" color="pink">Tools: React || TypeScript || Chakra Ui || Redux || Node.js || MongoDB || Express ||</Text>
    <Text color="yellow">My Hours is a cloud based time tracking software designed for small teams and freelancers. Track time on projects with tasks, generate insightful reports and send invoices to clients.A solo project excuted in 5 days.</Text>
    <div style={btnStyle}>
        <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://my-hourss.netlify.app/"><Text fontWeight="bold">Live</Text></a>
            </Button>
            <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://github.com/Sagarsandbhor17/Myhours-clone"><Text fontWeight="bold">Code</Text></a>
            </Button>
    </div>
  </Box>
</SimpleGrid>

<SimpleGrid columns={[1,1,2]} spacing='10px'>
  <Box className="Box" width="100%"><img style={imgStyle} src="https://axiomq.com/wp-content/uploads/2020/11/fiverr-1.jpg"/></Box>
  <Box textAlign="left" mt="1rem" ml="1rem" width="100%">
    <Text fontSize="3xl" fontWeight="medium" color="white">Fiverr Clone -Project</Text>
    <Text fontSize="1xl" fontWeight="medium" color="pink">Tools: React || JavaScript || Chakra Ui</Text>
    <Text color="yellow">
Fiverr connects entrepreneurs to experts to help them get every great idea done. Whether you need a variety of services to build your business from the ground up or one expert to complete one perfect job, Fiverr offers a world of creative freelancers.A solo project excuted in 3 days.</Text>
    <div style={btnStyle}>
        <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://fiverr-clone-peach.vercel.app/"><Text fontWeight="bold">Live</Text></a>
            </Button>
            <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://github.com/Sagarsandbhor17/rct101project/tree/main/fiverr"><Text fontWeight="bold">Code</Text></a>
            </Button>
    </div>
  </Box>
</SimpleGrid>

<SimpleGrid columns={[1,1,2]} spacing='10px'>
  <Box className="Box" width="100%"><img style={imgStyle} src="https://i.pinimg.com/originals/8b/d4/68/8bd4680f9123e5063b7c512c6e8ae2a2.jpg"/></Box>
  <Box textAlign="left" mt="1rem" ml="1rem" width="100%">
    <Text fontSize="2xl" fontWeight="medium" color="white">Bath & Body Works Clone</Text>
    <Text fontSize="1xl" fontWeight="medium" color="pink">Tools: HTML || JavaScript || CSS ||</Text>
    <Text color="yellow">A collaborative project built by a team of 6 members in 4 days.</Text>
    <Text color="white">Feature: Sign in,Sign up,Product pages,Sorting,Filter,Product Shipping</Text>
    <div style={btnStyle}>
        <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://starlit-haupia-dada95.netlify.app/"><Text fontWeight="bold">Live</Text></a>
            </Button>
            <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://github.com/humamul/Cool-Coders"><Text fontWeight="bold">Code</Text></a>
            </Button>
    </div>
  </Box>
</SimpleGrid>

<SimpleGrid columns={[1,1,2]} spacing='10px'>
  <Box className="Box" width="100%"><img style={imgStyle} src="https://dataman.in/wp-content/uploads/2020/05/Hospital-Management-System-1024x576.jpg"/></Box>
  <Box textAlign="left" mt="1rem" ml="1rem" width="100%">
    <Text fontSize="2xl" fontWeight="medium" color="white">Hospital Management App</Text>
    <Text fontSize="1xl" fontWeight="medium" color="pink">Tools: React || JavaScript || Chakra Ui || RestAPI</Text>
    <Text color="yellow">A solo app built in 1 day.</Text>
    <Text color="white">Feature: Add Hospital,Add Doctor,Filter,Sort,View Details</Text>
    <div style={btnStyle}>
        <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://codesandbox.io/s/hospital-management-03h5ix?file=/src/App.js"><Text fontWeight="bold">Live</Text></a>
            </Button>
            <Button variant="outline" colorScheme="pink">
           <a target="_blank" href="https://codesandbox.io/s/hospital-management-03h5ix?file=/src/App.js"><Text fontWeight="bold">Code</Text></a>
            </Button>
    </div>
  </Box>
</SimpleGrid>

        </VStack>
    </div>
}