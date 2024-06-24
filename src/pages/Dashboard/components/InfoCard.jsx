import { Flex, HStack,Tag,Text,Stack,Image} from "@chakra-ui/react";
const InfoCard = ({tagText,text,imgUrl,inverted}) => {
    return (
        <HStack spacing="14" flexDir={{base: "column", xl: "row"}} borderRadius="xl"
        align={{base: "flex-start", xl: "center"}}  p="2" pt="-12" 
        gap ={{base: "0", xl:"14"}} 
        bg ={inverted ? "p.purple": "white"}
        bgImage= {imgUrl} bgSize="cover" bgRepeat="no-repeat"
        
        >
         <Stack mt="5px" p="2px" w="460px">  
       

        <Tag mt="10px"  borderRadius="full" w="fit-content"
         bg={!inverted ? "p.purple": "white"}
         color={!inverted ? "white" : "p.purple"}
         
        >{tagText}</Tag>
        
        <Text mt="4" textStyle="h5" fontWeight="medium"
         color={!inverted ? "black" : "white"}
        >
          {text}
        </Text>
        
        </Stack> 
        </HStack>
    )
}
export default InfoCard;