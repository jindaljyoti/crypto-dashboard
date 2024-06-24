import { Flex,Box, GridItem ,Grid} from "@chakra-ui/react";

import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import CurrentPrice from "./components/CurrentPrice";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
 
    return (
     
           <DashboardLayout title="Dashboard">
         <Grid gridTemplateColumn={{base: "repeat(1,1fr)", xl: "repeat(2, 1fr)"}}
          gap="6"
          >
            <GridItem colSpan={{base: 1, xl: 2}}>
              <PortfolioSection />
            </GridItem>
            <GridItem colSpan={1}
             
            >
              <CurrentPrice />
              
            </GridItem>
            <GridItem colSpan={1}>
              <Transactions />
              
            </GridItem>
            <GridItem colSpan={1}>

              <InfoCard imgUrl="url('/images/Shapes.png')" tagText ="Loan" text=
              "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" 
              inverted={false}
              />
              
            </GridItem>
            <GridItem colSpan={1}>
              <InfoCard imgUrl="url('/images/Visual.png')"  tagText ="Contact"  text=
              "Learn more about our real estate, mortgage, and  corporate account services"
              inverted={true}
              />
              
            </GridItem>
           
        </Grid>   
           </DashboardLayout>
       
           
        
    )
}

export default Dashboard;