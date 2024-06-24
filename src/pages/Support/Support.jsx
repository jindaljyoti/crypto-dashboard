import { GridItem,Grid } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from "../Dashboard/components/InfoCard";
const Support = () => {
    return (
       <DashboardLayout title="Support">
          <Grid gridTemplateColumn = {{base:"repeat(1,1fr)",xl:"repeat(2,1fr)" }} >
             <GridItem colSpan={1} >
                <SupportCard rightComponent={<ContactCard />} icon={IoMdMail} title="Contact Us" 
                text= " Have a question or just want to know more? Feel free to reach out to us."/>
             </GridItem>
             <GridItem colSpan={1} mt="40px">
                <SupportCard rightComponent={<InfoCard imgUrl="url('/images/Visual.png')"  tagText ="Chatbot"  text=
              "Chat with us now"
              inverted={true} />}
               icon={BiSolidMessageRounded} title="Live Chat" 
               text= " Don’t have time to wait for the answer? Chat with us now."/>
             </GridItem>
           
           
          </Grid>
       </DashboardLayout>
    )
}

export default Support;