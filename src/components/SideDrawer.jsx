import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import SideNavBar from './SideNavBar'

const SideDrawer = ({isOpen,onClose}) => {
  
    // const { isOpen, onOpen, onClose } = useDisclosure()
   
  
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
 >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
             <DrawerBody>
              <SideNavBar  />
             </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    
  )
}

export default SideDrawer