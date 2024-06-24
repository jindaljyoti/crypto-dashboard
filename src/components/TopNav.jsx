import { Flex, Heading,MenuButton,MenuList,MenuItem,Button,Menu, HStack,Box, Icon } from "@chakra-ui/react"
import { FaUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
const TopNav = ({title, onOpen}) => {
    return (
       <Box px="4" bg="white"> 
         
        <HStack h="16" justifyContent="space-between" mx="auto" maxW="60rem">
        <Icon as={AiOutlineMenu } 
         onClick={onOpen}
         fontSize="28px" 
         display={{
            base:"block",
            lg: "none"
         }}
         
        />
         <Heading fontSize="28px">{title}</Heading>
         
         <Menu>
          <MenuButton as={Button} bg="white" fontSize="20px" color="balck" 
          _hover={{color: "white", bg: "#5F00D9"}}
          >
          <Icon as={FaUser} />
         </MenuButton>
      <MenuList>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Support</MenuItem>
       
     </MenuList>
   </Menu>
          </HStack>
          </Box>    
    )
}

export default TopNav