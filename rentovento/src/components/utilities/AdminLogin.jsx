import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Stack,
	Box,
	Input,
	FormLabel,
	useDisclosure,
	MenuButton,
	useColorModeValue,
	useToast,
  Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const [admin, setAdmin] = React.useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const nevigate = useNavigate();
	const email = React.useRef();
	const password = React.useRef();
	const handleClick = () => {
		if (
			email.current.value === "admin@gmail.com" &&
			password.current.value === "admin1432"
		) {
			onClose();
			toast({
				title: "Admin Login Successfull",
				description: "Welcome to Admin Panel",
				status: "success",
				duration: 4000,
				isClosable: true,
			});
			setAdmin(true);
			nevigate("/admin");
		} else {
			toast({
				title: "Admin Login Failed",
				description: "Please enter valid credentials",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		}
	};
	return (
		<>
			<MenuButton onClick={onOpen}>
				{!admin ? ("ADMIN LOGIN"):(<Badge colorScheme="green">Admin Panel</Badge>)}
			</MenuButton>
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={email}
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bg={useColorModeValue("white", "black")}>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						Admin Login
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<FormLabel htmlFor='username'>Email</FormLabel>
								<Input
									color={useColorModeValue("black", "white")}
									ref={email}
									id='username'
									placeholder='Please enter user name'
								/>
							</Box>
							<Box>
								<FormLabel htmlFor='username'>
									Password
								</FormLabel>
								<Input
									color={useColorModeValue("black", "white")}
									ref={password}
									id='username'
									placeholder='Please enter user name'
								/>
							</Box>
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth='1px'>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue' onClick={handleClick}>
							Submit
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
