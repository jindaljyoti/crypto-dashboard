import {Flex, Stack,Icon,Text,Box} from "@chakra-ui/react"
import ContactCard from "./ContactCard";
import { IoMdMail } from "react-icons/io";
const SupportCard = ({rightComponent,icon,title,text}) => {
  return (
     
    <Flex  flexDir={{base:"column",xl:"row"}} ml="4" >
    <Stack w="386px" pl="2" > 
          <Icon as={icon} fontSize="30px" color="p.purple" />
          <Text textStyle="h1" fontWeight="700">
            {title}
          </Text>
          <Text fontSize="md" color="black.60">
            {text}
          </Text>
        </Stack>
       <Box maxW="530px" w="full" ml="4" >
    {rightComponent}
    </Box> 
   </Flex>
  );
};

export default SupportCard;
