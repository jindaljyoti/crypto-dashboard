import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,Text,Tag,Show,Hide
  } from '@chakra-ui/react'
import { tableData } from './TableData';  
import CardData from './CardData';
import { useState } from 'react';
const TransactionTable = () => {

    // data is coming from table data file
    const statusColor = {
      Pending:"#797E82",
      Processing:"#F5A50B",
      Completed: "#059669",
      Cancelled:"#DC2626"
    }

    // const [isShow, setShow] = useState(true)
    return (
      <>
      
      <TableContainer display={{base:"none", md:"table-row"}} >  
    <Table variant="simple" >
   
    <Thead>
      <Tr display="flex" justifyContent="space-between" pr="" >
        <Th>ID</Th>
        <Th>Date & Time</Th>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        {tableData.map((data) => (
          <Flex key={data.type.name} justify="space-between"  > 
           <Td fontSize="md" fontWeight="700">{data.id}</Td>
           <Td>
            <Text fontSize="md" fontWeight="700">{data.date_time.date}</Text>
            <Text fontSize="sm" color="black.60">{data.date_time.time}</Text>
            </Td>
            <Td>
              <Text fontSize="md" fontWeight="700">{data.type.name}</Text>
              <Text fontSize="sm" color="black.60" >{data.type.transfer}</Text>
              </Td>
            <Td fontSize="md" fontWeight="700">{data.amount}</Td>  
            <Td>
              <Tag borderRadius="full" color="white" bg={statusColor[data.status]}>
                {data.status}</Tag>
                </Td>
        </Flex>  
        ))}
       
       
      </Tr>
      </Tbody>
  </Table>
  
</TableContainer>

<Hide above="md">
 < CardData />
    </Hide>
  </>
    )
}

export default TransactionTable;