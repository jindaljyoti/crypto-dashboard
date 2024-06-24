import { HStack,Stack,Text,Button, Icon, Flex,Box, Grid, Divider} from "@chakra-ui/react"
import { LuIndianRupee } from "react-icons/lu";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";
const Transactions = () => {

    const transactions = [{
        id: 1,
        icon: LuIndianRupee,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        date: "2022-06-09 7:06 PM"
     },
     {
        id: 2,
        icon: FaBtc,
        text: "BTC Sell",
        amount: "- 12.48513391 BTC",
        date: "2022-05-27 12:32 PM"
    },
    {
        id: 3,
        icon: LuIndianRupee,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        date: "2022-06-09 7:06 PM"
    } ]
    return (
        <HStack spacing="14" flexDir={{base: "column", xl: "row"}} borderRadius="xl"
         align={{base: "flex-start", xl: "center"}} bg="white" p="2" pt="-12" 
         gap ={{base: "0", xl:"14"}} ml="3" 
        >

        <Stack w="468px" h="365px" mb="10px" > 
        <HStack mt="30px" color="black.80" fontWeight="500" 
        justify="space-between" 
        >
         <Text fontSize="sm" px="3">Recent Transactions</Text>
         </HStack>
      
            <Stack > 
                {transactions.map((transaction,i) => (
                   <Fragment key={transaction.id}> 
                     {i !== 0 && <Divider />}
                    <Flex  justify="space-between" gap="4" px="20px">
                        
                     <Grid placeItems="center" boxSize={10} bg="black.5" borderRadius="full" mx="10px" >
                     <Icon as= {transaction.icon } >  </Icon> 
                     
                    </Grid>   
                  <Flex justify="space-between" w="full">  
                    <Stack spacing="0">
                        <Text fontSize="sm" >{transaction.text}</Text>
                        <Text fontSize="sm" color="black.80">{transaction.date}</Text>
                        
                        
                    </Stack>
                    <Text>{transaction.amount}</Text>
                     
                    </Flex>
                    </Flex>
                   </Fragment>
                ))}
            </Stack>
           <Button mt="58px" bg="black.5" color="black.80" 
           _hover={{color:"white", bg:"p.purple"}}
           >View All</Button>
      </Stack>  
      </HStack>   
    )
}

export default Transactions;