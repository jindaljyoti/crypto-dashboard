import { HStack,Stack,Text,Icon,Image,Button
    ,Tab,Tabs,TabList,TabPanel,TabPanels,Flex} from "@chakra-ui/react"
import { MdArrowOutward } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";


const CurrentPrice = () => {
    const timeStamps = ["7:15PM","12:55PM","6:35AM","12:15PM","5:55PM"]
    const days = ["1H","1D","1W","1M"]
    return (
      <HStack spacing="14" flexDir={{base: "column", xl: "row"}} borderRadius="xl"
      align={{base: "flex-start", xl: "center"}} bg="white" mx="-4" p="2"
      gap ={{base: "0", xl:"14"}}
     >
          
            <Stack w="468px" h="360px" mb="10px"> 
                <HStack  color="black.80" fontWeight="500" 
                justify="space-between"
                >
                    <Text fontSize="sm">Current Price</Text>
                    <Stack > 
                <HStack mt="30px"  color="black.80" >
                    <Button leftIcon={ <Icon as={FaCirclePlus} />} >
                   
                    Buy
                    </Button>
                    <Button leftIcon={ <Icon as={FaCircleMinus } />}>
                  
                  Sell</Button>
                </HStack>
                
            </Stack>
                    
                </HStack>
                <HStack color="black" spacing="0.8" mt="-4" >
                    <Text textStyle="h2" >₹ 26,670.25</Text> 
                    <Icon as={MdArrowOutward}  color="green.500" fontWeight="700"/>
                    <Text textStyle="sm" color="green.500" fontWeight="700">0.04%</Text>

                </HStack>
                 
                 <Tabs variant='soft-rounded'>
                    <Flex justify="end">
                  <TabList color="black.60" bg="black.5" fontSize="sm" borderRadius="5px" h="27px">
                    {days.map((day) => (
                        <Tab _selected={{ color: 'black', bg: 'white' }} fontSize="sm">{day}</Tab>
                    ))}
                 
            </TabList>
            </Flex>
           <TabPanels>
            <TabPanel>
            <HStack>
                    <Image src="\images\Graph.png" mt="20"/ >
                    
                </HStack>
                 
                <HStack justify="space-between">
                     {timeStamps.map((timeStamp) => (
                        <Text key={timeStamp}>{timeStamp}</Text>
                     ))}
                </HStack>
              </TabPanel>
            <TabPanel w="450px">
          <p>1D</p>
            </TabPanel>
            <TabPanel w="450px">
          <p>1W</p>
            </TabPanel>
            <TabPanel w="450px">
          <p>1M</p>
            </TabPanel>
        </TabPanels>
             </Tabs>
                               
            </Stack>  
       </HStack>
        

    )
}

export default CurrentPrice;