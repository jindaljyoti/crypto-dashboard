import {  HStack, Heading, Icon, Stack,Text,Box} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import {Link, useLocation} from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
const SideNavBar = () => {
 const location = useLocation();
 
 const isActiveLink = (link) => {
    return location.pathname === link
 }
    const navLinks = [{
        icon: RxDashboard,
        text: "Dashboard",
        link: "/"
    },
    {
        icon: GrTransaction,
        text: "Transactions" ,
        link: "/transactions"
    },
]
     return (
        // .class {display:flex, flex-direction:column} stack does the same thing
       <>
        <Stack boxShadow={{
            base: "none",
            lg: "lg"
        }} w={{
            base: "full",
            lg: "16rem"
        }} minH="100vh" justify="space-between" 
           bg="white"
         
        >
            <Box>
            <Heading as="h1" fontSize="1rem" mt="54px" marginLeft="28px" 
             color="#7F00FF">
                @PORTFOLIOPROJECT</Heading>
                
                {navLinks.map((navLink) => (
                 // stack elements into horizontal direction<HStack>
                 // stack elements into vertical direction <VStack> 
             <Box mt="6" mx="3" key={navLink.text}> 
              
              <Link to={navLink.link}> 
               <HStack 
              
               _hover={{bg:"#F3F3F7", color:"#171717", fontWeight:"600"}} 
               
               ml="12px" mt="1rem" px={3} py={2} borderRadius="10px"
                 >
                  
                    <Icon as={navLink.icon} />
                    <Text>{navLink.text}</Text>
                   
                  </HStack>
                  </Link>
                 </Box>
                   
                  ))}
                  
                  </Box>
          <Box mt="6" mx="3">
            <Link to="/support">
           <HStack 
               _hover={{bg:"lightgray", color:"#171717", fontWeight:"600"}}
               
               ml="12px" mt="1rem" px={3} py={2} mb="3" borderRadius="10px">
                   
                    <Icon as={BiSupport}/>
                    <Text>Support</Text>
                                
          </HStack>
          </Link>
          </Box>  
        
        </Stack>
        </> 
    )
}

export default SideNavBar;