import { Fragment } from "react"
import { tableData } from "./TableData"
import Card1 from "./Card1"
import Card2 from "./Card2"
import { Card, CardHeader, CardBody, CardFooter,Tag,Heading,Stack,StackDivider,Box,Text} from '@chakra-ui/react'
const CardData = ({isShow,setShow}) => {
    return (
       <Card >
        <Box mt="2">
         <Card1 />
        </Box>  
        <Box mt="2">  
         <Card2 />
       </Box> 
      </Card>   
    )

         
    
}

export default CardData