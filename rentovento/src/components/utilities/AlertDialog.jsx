import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
  Button,
  Badge,
  useColorModeValue,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";
import { DateContext } from "../../context/DateProviderContext";
import { useContext } from "react";
 function AlertDialogBox() {
  const {auth,setAuth,setUser} = useContext(DateContext)
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
  const toast = useToast()
  const handleClick = () => {
    setAuth(!auth)
    setUser('')
    onClose()
    		toast({
				title: "Logout Successful.",
				description: "You are logged out.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
  }
	return (
		<>
			<Badge colorScheme='red' cursor='pointer' onClick={onOpen}>
				LOGOUT
			</Badge>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
        >
				<AlertDialogOverlay>
					<AlertDialogContent
            bg={useColorModeValue("white", "black")}
          >
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
				     <Badge
              colorScheme='green'
              p={2}
             >Logout User</Badge>
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You want to logout.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme='red' onClick={handleClick} ml={3}>
								Yes
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default AlertDialogBox;