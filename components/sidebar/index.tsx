import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react';

import { SideBarNav } from './sideBarNav'
import { useSideBarContext } from '../../contexts/SideBarContext';

export function SideBar() {
    const { disclouser } = useSideBarContext();

    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false
    });

    if (isDrawerSideBar) {
        return (<Drawer isOpen={disclouser.isOpen} placement='left' onClose={disclouser.onClose}>
            <DrawerOverlay>
                <DrawerContent bg="gray.800" p="4">
                    <DrawerCloseButton mt="6" />
                    <DrawerHeader>Navegação</DrawerHeader>

                    <DrawerBody>
                        <SideBarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>)
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SideBarNav />
        </Box>
    )
}