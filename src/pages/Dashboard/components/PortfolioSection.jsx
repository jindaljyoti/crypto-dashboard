import { HStack, Icon, Stack,Tag,Text,Box, Button } from "@chakra-ui/react";
import { IoMdInformationCircle } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
const PortfolioSection = () => {
    return (
       
        <HStack spacing="14" flexDir={{base: "column", xl: "row"}} borderRadius="xl"
         align={{base: "flex-start", xl: "center"}} bg="white" mx="-4" p="2"
         gap ={{base: "0", xl:"14"}}
        >
            <Stack > 
                <HStack mt="30px" color="black.80" fontWeight="500" 
                
                >
                    <Text fontSize="sm">Total Portfolio Value</Text>
                    <Icon as={IoMdInformationCircle} />
                    
                </HStack>
                <HStack color="black" >
                    <Text textStyle="h2" >₹ 112,312.24</Text> 
                </HStack>
            </Stack>
            <Stack > 
                
                <HStack mt="30px" color="black.80" fontWeight="500" 
                
                >
                    <Text fontSize="sm">Wallet Balances</Text>
                    
                    
                </HStack>
                <HStack spacing="4"  flexDir={{base: "column", lg: "row"}}
                  align={{base: "flex-start", xl: "center"}}
                >
                <HStack color="black" >
                    <Text textStyle="h2" >22.39401000</Text><Tag bg="black.5" color="black.60">BTC</Tag>
                </HStack>
                <HStack color="black">
                    <Text textStyle="h2">₹ 1,300.00</Text><Tag bg="black.5" color="black.60">INR</Tag>
                   
              </HStack>
            </HStack>
            
            </Stack>
            <Stack  > 
                <HStack mt="30px" color="black.80" >
                    <Button mt="-10px" >
                     <Icon as={IoIosArrowRoundDown} fontSize="md" />
                    Deposit
                    </Button>
                    <Button mt= "-10px" >
                    <Icon as={IoIosArrowRoundUp } fontSize="md" />    
                    Withdraw</Button>
                </HStack>
                <HStack color="black" >
                    
                </HStack>
            </Stack>
                 
         </HStack>
         
       
    )
}

export default PortfolioSection;