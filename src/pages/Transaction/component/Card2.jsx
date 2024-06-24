import { Fragment } from "react"
import { tableData } from "./TableData"
import { Card, CardHeader, CardBody, CardFooter,Tag,Heading,Stack,StackDivider,Box,Text} from '@chakra-ui/react'

const Card2 = () => {
    return(
        <Card w="50%">
        <CardHeader>
          <Heading size='md'>Transactions</Heading>
        </CardHeader>
      
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
         
            <Box h="60px">
              
              <Heading size='xs' textTransform='uppercase'>
                ID
              </Heading>
             
               {tableData.map((data) => (
      
              <Text pt='2' fontSize='sm' key={data.type.name}>
              {data.card === "2" && data.id}
            </Text>
               ))}
            </Box>
          
           <Box h= "80px">
              <Heading size='xs' textTransform='uppercase'>
                Date & Time
              </Heading>
                {tableData.map((data) => (
              <Stack>   
              <Text pt='2' fontSize='sm'>
                {data.card === "2" && data.date_time.date}
              </Text>
              <Text>
                 {data.card === "2" && data.date_time.time}
              </Text>
               
              </Stack> 
               ))}
            </Box>
            <Box h="80px">
              <Heading size='xs' textTransform='uppercase'>
                Type
              </Heading>
              {tableData.map((data) => ( 
             <Stack>  
              <Text pt='2' fontSize='sm'>
                {data.card === "2" && data.type.name}
              </Text>
              <Text>
              {data.card === "2" && data.type.transfer}
              </Text>
              </Stack> 
              ))}
                </Box>
                <Box h="60px">
              
              <Heading size='xs' textTransform='uppercase'>
                Amount
              </Heading>
             
               {tableData.map((data) => (
      
              <Text pt='2' fontSize='sm' key={data.type.name}>
              {data.card === "2" && data.amount}
            </Text>
               ))}
            </Box>
            <Box h="60px">
              
              <Heading size='xs' textTransform='uppercase'>
                Status
              </Heading>
             
               {tableData.map((data) => (
              
              <Text mt="2" w="20" fontSize='sm' bg="#F5A50B" pl="2" borderRadius="full" color="white" key={data.type.name} >
              
              {data.card === "2" && data.status}
                </Text>
                
               ))} 
            </Box>
          </Stack>
        </CardBody>
      </Card>
    )
}
export default Card2