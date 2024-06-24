import { Button, Card,Container,Flex, Icon,Text,Tag,Stack,Input,InputGroup,InputLeftElement } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { IoMdDownload } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from "./component/TransactionTable";
import { CiSearch } from "react-icons/ci";
const TransactionPage = () => {
 
  const tabs = [{
    id:1,
    name: "All",
    total: 349
  },
  { id: 2,
    name: "Deposit",
    total: 114
  },
  { 
    id:3,
    name: "Withdraw",
    total: 213
  },
  { id:4,
    name: "Trade",
    total: 22
  }
]

    return (
         
       <DashboardLayout title="Transactions">
       
       <Flex justify="end">
       <Button mt="6" mb="3" leftIcon={<Icon as={IoMdDownload } />}>
        
        Export CSV</Button>
        </Flex>
          <Card>
          <Tabs >
      <TabList pt="3" pl="6" >
         {tabs.map((tab) => (
          <Tab key={tab.id} >
            <Flex gap="2" mb="3" >
              <Text>{tab.name} </Text>
              <Tag color="black.60" borderRadius="full">{tab.total}</Tag> 
            </Flex>
             </Tab>
            
         ))}

         <Stack ml="90px">
       <InputGroup >
      <InputLeftElement pointerEvents='none'>
     <Icon as={CiSearch}/>
     </InputLeftElement>
    
     <Input type='tel' placeholder='Search'/>
    
     </InputGroup>
     </Stack>
      </TabList>

    <TabPanels>
    <TabPanel>
       <TransactionTable />
    </TabPanel>
    <TabPanel>
      <p>Deposit</p>
    </TabPanel>
    <TabPanel>
      <p>Withdraw</p>
    </TabPanel>
    <TabPanel>
      <p>Trade</p>
    </TabPanel>
    </TabPanels>
    </Tabs>
  </Card>    
         </DashboardLayout>
      
    
    )
}

export default TransactionPage