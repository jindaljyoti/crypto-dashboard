import { Flex, Stack, Text, Icon,FormControl,FormLabel,Input,
HStack, Textarea,Checkbox,Button} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

const ContactCard = () => {
    return (
      <Flex ml="4" flexDir={{base:"column",xl:"row"}}> 
        
       
        <Stack bg="white" borderRadius="16px" p="2" spacing={6} mt={{base:"3"}}>
        <Text fontWeight="md">You will receive response within 24 hours of time of submit.</Text>
        
        <Flex gap="2" w="500px" flexDir={{base:"column", xl:"row"}} >
        <FormControl >
         
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="Enter your first name" />
        </FormControl>  
        <FormControl>
         <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Enter your last name" />
       </FormControl>
       </Flex>
       <FormControl>
        <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
       </FormControl> 
       <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" />
       </FormControl> 
       <FormControl>
       <Checkbox Checked>
          I agree with Terms & Conditions
       </Checkbox>
          
       </FormControl> 
       
        
        <Button mt="6" bg="black.5" color="black.40" fontSize="sm"
        _hover={{bg:"black.60", color:"black.5"}}
        >Send a Message</Button>
       
       <Button bg="black.5" color="black.40" fontSize="sm"
        _hover={{bg:"black.60", color:"black.5"}}
       >Book a Meeting</Button>
       
        </Stack>
        </Flex>  
    )
}

export default ContactCard