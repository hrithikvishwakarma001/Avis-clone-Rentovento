import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	MenuButton,
	HStack,
	Radio,
	RadioGroup,
	Stack,
	Checkbox,
	Highlight,
	useHighlight,
	Heading,
	Mark,
	Box,
	Center,
	Flex,
	Text,
	useColorModeValue,
	useToast,
	Badge,
} from "@chakra-ui/react";
import { AiOutlineAmazon } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { DateContext } from "../../context/DateProviderContext";
import { useContext } from "react";
import Live from "./Live";
import AlertDialogBox from "./AlertDialog";
export default function ModalExample() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { auth, setAuth, setUser,} = useContext(DateContext);
	const chunks = useHighlight({
		text: "This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply. ",
		query: ["Privacy Policy", "Service apply."],
	});

	const initialState = {
		email: "",
		password: "",
		checkbox: false,
	};

	const [state, setState] = React.useState(initialState);
	const [data, setData] = React.useState([]);
	const toast = useToast();
	const handlClick = () => {
		console.log(state);
		(async function fetchUser() {
			let res = await axios.get(
				"https://peat-puzzled-oregano.glitch.me/auth"
			);
			setData(res.data);
		})();
		let count = 0;
		data.forEach((user) => {
			if (
				user.email === state.email &&
				user.password === state.password
			) {
				setAuth(true);
				setUser(user.firstName);
				setState(initialState);

				count++;
			}
		});
		if (count === 0) {
			toast({
				title: "Invalid Credentials.",
				description: "Please enter correct credentials.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
			setState(initialState);
		} else {
			toast({
				title: "Login Successful.",
				description: "You are logged in.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			onClose();
		}
	};
	const handleLogout = () => {
		setAuth(false);
		setUser("");

	};
	return (
		<>
			<Flex cursor='pointer' alignItems='center' justifyContent='center'>
				{auth ? (
					<AlertDialogBox />
				) : (
					<MenuButton onClick={onOpen}>LOGIN</MenuButton>
				)}
			</Flex>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					pt='10'
					pl='5'
					pr='5'
					bg={useColorModeValue("white", "black")}>
					<ModalHeader>Login to your rentovento account</ModalHeader>
					<ModalCloseButton />
					<ModalBody mb='2' spacing={4}>
						<FormControl>
							<Input
								type={"text"}
								h='50'
								placeholder='email/Wizard Number'
								bg
								onChange={(e) => {
									setState({
										...state,
										email: e.target.value,
									});
								}}
							/>
						</FormControl>

						<FormControl mt={4}>
							<Input
								type={"password"}
								h='50'
								placeholder='Password (Case Sensitive)'
								bg
								onChange={(e) => {
									setState({
										...state,
										password: e.target.value,
									});
								}}
							/>
						</FormControl>

						<HStack
							mt='4'
							mb='3'
							display={{ base: "block", sm: "flex" }}
							spacing={{ base: "0", sm: "24px" }}
							alignItems={{ base: "start", sm: "center" }}
							justifyContent={{
								base: "start",
								sm: "space-between",
							}}>
							<FormLabel>Remember me</FormLabel>
							<Checkbox
								onChange={(e) => {
									setState({
										...state,
										checkbox: e.target.checked,
									});
								}}></Checkbox>
						</HStack>
						<Box fontSize={"sm"}>
							{chunks.map(({ match, text }) => {
								if (!match) return text;
								return (
									<Mark key={text} color='red.500'>
										{text}
									</Mark>
								);
							})}
						</Box>
						<Center mt='5' mb='5'>
							<Button
								w='100%'
								bg={useColorModeValue("red.500", "red.600")}
								variant='solid'
								onClick={handlClick}>
								LOG IN
							</Button>
						</Center>
						<Flex justifyContent='space-between' color={"#e53e3e"}>
							<FormLabel>Forgot email?</FormLabel>
							<Center>
								<Box borderLeft='2px solid gray'>&nbsp;</Box>
							</Center>
							<FormLabel>Forgot Password?</FormLabel>
						</Flex>
						<Center mb='5'>or</Center>
						<Center mt='5' mb='5'>
							<Button
								w='60%'
								colorScheme='yellow'
								variant='solid'
								border={"1px solid black"}
								display='flex'
								justifyContent={"space-around"}
								onClick={onClose}>
								<AiOutlineAmazon size='25px' />
								&nbsp;Login with Amazon
							</Button>
						</Center>
						<Center mb='5'>or</Center>
						<Center>
							<NavLink>Need an account ? </NavLink>
							<NavLink
								to='/login'
								style={{ color: "#e53e3e" }}
								onClick={onClose}>
								&nbsp;Create new one
							</NavLink>
						</Center>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
