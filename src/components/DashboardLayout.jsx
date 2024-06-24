import { Flex,Box, Container, useDisclosure, calc } from "@chakra-ui/react";
import SideNavBar from "./SideNavBar";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({title,children}) => {

  const {isOpen,onClose,onOpen} = useDisclosure();
    return (
      <div>
        <Flex>
            
            <Box 
              display={{
                base:"none",
                lg: "flex"
              }}
            >
            <SideNavBar />
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose}/>
            <Box flexGrow={1}>
            <TopNav title={title} onOpen={onOpen} />

            <Container maxW="60rem"  mt="6" h="106px" borderRadius="16px" 
              
            >
                {children}
            </Container>

            
            </Box>
            
        </Flex>
      </div>
    )
}

export default DashboardLayout