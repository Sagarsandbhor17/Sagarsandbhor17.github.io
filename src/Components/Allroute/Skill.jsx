import {Box, SimpleGrid, Text} from "@chakra-ui/react";
import "./Home.css";
import GitHubCalendar from 'github-calendar';

const gif={display:"flex",width:"20%",margin:"auto",justifyContent:"space-around",alignItems:"center"};
const heading={color:"orangered",fontFamily:"sans-serif",fontSize:"2xl",fontWeight:"bold"};
const boxStyle={bg:'white',padding:"1rem",height:"200px",width:"200px",margin:"auto"};


export const Skill=()=>{
    return<div style={{width:"90%",margin:"auto",paddingBottom:"1rem"}}>
        <div style={gif}>
            {/* <Text fontSize="4xl" fontFamily="sans-serif" fontWeight="extrabold" color="orange">Skills</Text> */}
        <img style={{height:"60px",width:"100px"}} src="https://miro.medium.com/max/700/1*vJjJ3Mdok6Rvxx85IIRqBQ.gif"/>
        </div>
       <hr style={{backgroundColor:"grey",height:"3px",marginBottom:"1rem"}}/>
       <div style={{border:"1px solid ",paddingTop:"1rem",marginBottom:"1rem"}}>
        <Text color="orangered" fontFamily="sans-serif" fontSize="3xl" fontWeight="extrabold" >
            Front End
            </Text>
        <hr style={{backgroundColor:"grey",width:"100%",height:"2px",marginBottom:"1rem"}}/>
<SimpleGrid columns={[1,2,4]} spacing='20px' width="90%" margin="auto" padding="1rem">

  <Box bg="white" style={boxStyle} className="Box" border="3px solid orangered">
    <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/html.png"/>
    <Text style={heading}>HTML</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid teal">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/css.png"/>
    <Text style={heading}>CSS</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid yellow">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/js.png"/>
    <Text style={heading}>JavaScript</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid teal">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/logo512.png"/>
    <Text style={heading}>React</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid violet">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/redux.png"/>
    <Text style={heading}>Redux</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid blue">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/ts.png"/>
    <Text style={heading}>TypeScript</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid orangered">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://git-scm.com/images/logos/logomark-orange@2x.png"/>
    <Text style={heading}>Git</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid turquoise">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4"/>
    <Text style={heading}>Chakra Ui</Text>
  </Box>
</SimpleGrid>
       </div>

       <div style={{border:"1px solid ",paddingTop:"1rem",marginBottom:"1rem"}}>
        <Text color="orangered" fontFamily="sans-serif" fontSize="3xl" fontWeight="extrabold" >
            Back End
            </Text>
        <hr style={{backgroundColor:"grey",width:"100%",height:"2px",marginBottom:"1rem"}}/>
<SimpleGrid columns={[1,3,3]} spacing='20px' width="90%" margin="auto" padding="1rem">

  <Box bg="white" style={boxStyle} className="Box" border="3px solid green">
    <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://premj44.github.io/static/media/node.952a9ea986dcfa5229ad.png"/>
    <Text style={heading}>NodeJs</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid grey">
  <img style={{width:"70%",height:"150px",margin:"auto"}} src="https://gayathry-portfolio.vercel.app/express.png"/>
    <Text style={heading}>Express</Text>
  </Box>

  <Box bg="white" style={boxStyle} className="Box" border="3px solid green">
  <img style={{width:"70%",height:"150px",margin:"auto"}}src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg" />
    <Text style={heading}>MongoDB</Text>
  </Box>

</SimpleGrid>
       </div>
       <Box mt="1rem" mb="1rem" border="1px solid">
       <Text color="orangered" fontFamily="sans-serif" fontSize="3xl" fontWeight="extrabold" >
            Soft Skills
            </Text>
        <hr style={{backgroundColor:"grey",width:"100%",height:"2px"}}/>
  <img style={{width:"100%",height:"600px",margin:"auto"}} src="https://elearningindustry.com/wp-content/uploads/2015/02/shutterstock_164393432.jpg" />
      </Box>

       <div style={{border:"1px solid",paddingTop:"1rem"}}>
        <Text color="orangered" fontFamily="sans-serif" fontSize="3xl" fontWeight="extrabold" >
            Some Data
            </Text>
        <hr style={{backgroundColor:"grey",width:"100%",height:"2px",marginBottom:"1rem"}}/>
<SimpleGrid columns={[1,2,4]} spacing='20px' width="90%" margin="auto" padding="1rem">

  <Box bg="black" style={boxStyle} borderRadius="full" className="Box" border="3px solid orangered">
    <Text color="white" fontSize="2xl" fontWeight="extrabold" mt="2rem">1500+</Text>
    <Text color="white">Hours Of Full Stack Coding</Text>
  </Box>

  <Box bg="black" style={boxStyle} borderRadius="full" className="Box" border="3px solid orangered">
    <Text color="white" fontSize="2xl" fontWeight="extrabold" mt="2rem">500+</Text>
    <Text color="white">DSA Problems</Text>
  </Box>

  <Box bg="black" style={boxStyle} borderRadius="full" className="Box" border="3px solid orangered">
    <Text color="white" fontSize="2xl" fontWeight="extrabold" mt="2rem">4</Text>
    <Text color="white">PROJECTS</Text>
  </Box>

  <Box bg="black" style={boxStyle} borderRadius="full" className="Box" border="3px solid orangered">
    <Text color="white" fontSize="2xl" fontWeight="extrabold" mt="2rem">100+</Text>
    <Text color="white">Hours of Soft Skills Sessions.</Text>
  </Box>

</SimpleGrid>
{/* <GitHubCalendar ="Sagarsandbhor17"/> */}
       </div>


    </div>
}