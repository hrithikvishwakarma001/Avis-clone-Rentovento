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
} from "@chakra-ui/react";
import { AiOutlineAmazon } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export default function ModalExample() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const chunks = useHighlight({
		text: "This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply. ",
		query: ["Privacy Policy", "Service apply."],
	});
	// const responsive = {
	// 	base:"100%",
	// 	sm:"100%",
	// 	md:"100%",
	// 	lg:"100%",
	// 	xl:"100%",
	// 	"2xl":"100%",
	// }

	return (
		<>
			<MenuButton onClick={onOpen}>LOGIN</MenuButton>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent pt='10' pl='5' pr='5'>
					<ModalHeader>Login to your rentovento account</ModalHeader>
					<ModalCloseButton />
					<ModalBody mb='2' spacing={4}>
						<FormControl>
							<Input
								type={"text"}
								h='50'
								ref={initialRef}
								placeholder='Username/Wizard Number'
							/>
						</FormControl>

						<FormControl mt={4}>
							<Input
								type={"password"}
								h='50'
								placeholder='Password (Case Sensitive)'
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
							<Checkbox></Checkbox>
						</HStack>
						<Box
							fontSize={"sm"}
							>
							{chunks.map(({ match, text }) => {
								if (!match) return text;
								return <Mark color='red'>{text}</Mark>;
							})}
						</Box>
						<Center mt='5' mb='5'>
							<Button
								w='100%'
								colorScheme='red'
								variant='solid'
								onClick={onClose}>
								LOG IN
							</Button>
						</Center>
						<Flex justifyContent='space-between' color={"red"}>
							<FormLabel>Forgot username?</FormLabel>
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
								style={{ color: "red" }}
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
