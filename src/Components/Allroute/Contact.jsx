import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import "./Home.css"

const style={width:"90%",height:"80px",marginTop:"2.5rem",marginLeft:"0.5rem"}
export const Contact=()=>{
    return <div>
    <Box>
<Text color="white" fontSize="2xl" textAlign='center' fontFamily="sans-serif">Contact Me</Text>
<div align="center" class="socialbtns">
<ul>
<li><a target="_blank" href="tel:+919527109441" class="fa fa-lg fa-mobile"></a></li>
<li><a target="_blank" href="mailto:sagar12500gmail.com" class="fa fa-lg fa-google-plus"></a></li>
<li><a target="_blank" href="https://github.com/Sagarsandbhor17" class="fa fa-lg fa-github"></a></li>
<li><a target="_blank" href="https://www.linkedin.com/in/sagar-sandbhor-896474233" class="fa fa-lg fa-linkedin"></a></li>
<li><a target="_blank" href="https://instagram.com/sagar_sandbhor.17" class="fa fa-lg fa-instagram"></a></li>
</ul>
</div>
    </Box>
</div>
    
}