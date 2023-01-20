import React, { useState } from "react";
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,
	GridItem,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	InputLeftAddon,
	InputGroup,
	Textarea,
	FormHelperText,
	InputRightElement,
	useColorModeValue,
	Container,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Form1 = () => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const inintialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};
	const [state, setState] = useState(inintialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
 console.log(state)
	return (
		<>
			<Heading w='100%' textAlign={"center"} fontWeight='normal' m={'5%'}
			size='lg'
			fontFamily={"franklin gothic medium"}
			>
				Join Rentovento Preferred ®
			</Heading>
			<Flex>
				<FormControl mr='5%'>
					<FormLabel htmlFor='first-name' fontWeight={"normal"}>
						First name
					</FormLabel>
					<Input
						id='first-name'
						name='firstName'
						placeholder='First name'
						onChange={handleChange}
					/>
				</FormControl>

				<FormControl>
					<FormLabel htmlFor='last-name' fontWeight={"normal"}>
						Last name
					</FormLabel>
					<Input
						id='last-name'
						name='lastName'
						placeholder='First name'
						onChange={handleChange}
					/>
				</FormControl>
			</Flex>
			<FormControl mt='2%'>
				<FormLabel htmlFor='email' fontWeight={"normal"}>
					Email address
				</FormLabel>
				<Input id='email' type='email' name='email'
				onChange={handleChange}/>
				<FormHelperText>We'll never share your email.</FormHelperText>
			</FormControl>

			<FormControl 
			>
				<FormLabel htmlFor='password' fontWeight={"normal"} mt='2%'>
					Password
				</FormLabel>
				<InputGroup size='md'>
					<Input
						pr='4.5rem'
						type={show ? "text" : "password"}
						placeholder='Enter password'
						name='password'
						onChange={handleChange}
					/>
					<InputRightElement width='4.5rem'>
						<Button h='1.75rem' size='sm' onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
		</>
	);
};

const Form2 = () => {
		const country = [
			"Afghanistan",
			"Albania",
			"Algeria",
			"Andorra",
			"Angola",
			"Antigua and Barbuda",
			"Argentina",
			"Armenia",
			"Australia",
			"Austria",
			"Azerbaijan",
			"Bahamas",
			"Bahrain",
			"Bangladesh",
			"Barbados",
			"Belarus",
			"Belgium",
			"Belize",
			"Benin",
			"Bhutan",
			"Bolivia",
			"Bosnia and Herzegovina",
			"Botswana",
			"Brazil",
			"Brunei",
			"Bulgaria",
			"Burkina Faso",
			"Burundi",
			"Cabo Verde",
			"Cambodia",
			"Cameroon",
			"Canada",
			"Central African Republic (CAR)",
			"Chad",
			"Chile",
			"China",
			"Colombia",
			"Comoros",
			"Democratic Republic of the Congo",
			"Republic of the Congo",
			"Costa Rica",
			"Cote d'Ivoire",
			"Croatia",
			"Cuba",
			"Cyprus",
			"Czech Republic",
			"Denmark",
			"Djibouti",
			"Dominica",
			"Dominican Republic",
			"Ecuador",
			"Egypt",
			"El Salvador",
			"Equatorial Guinea",
			"Eritrea",
			"Estonia",
			"Eswatini (fmr. Swaziland)",
			"Ethiopia",
			"Fiji",
			"Finland",
			"France",
			"Gabon",
			"Gambia",
			"Georgia",
			"Germany",
			"Ghana",
			"Greece",
			"Grenada",
			"Guatemala",
			"Guinea",
			"Guinea-Bissau",
			"Guyana",
			"Haiti",
			"Honduras",
			"Hungary",
			"Iceland",
			"India",
			"Indonesia",
			"Iran",
			"Iraq",
			"Ireland",
		];
	const inintialState = {
		country: "",
		address: "",
		city: "",
		state: "",
		zip: "",
	};
	const [state, setState] = useState(inintialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	console.log(state);
	return (
		<>
			<Heading w='100%' textAlign={"center"} fontWeight='normal' mb='2%'>
				User Details
			</Heading>
			<FormControl as={GridItem} colSpan={[6, 3]}>
				<FormLabel
					htmlFor='country'
					fontSize='sm'
					fontWeight='md'
					color='gray.700'
					_dark={{
						color: "gray.50",
					}}>
					Country / Region
				</FormLabel>
				<Select
					id='country'
					name='country'
					autoComplete='country'
					placeholder='Select option'
					focusBorderColor='brand.400'
					shadow='sm'
					size='sm'
					w='full'
					rounded='md'
					onChange={handleChange}>
					{country.map((country) => {
						return (
							<option key={country} value={country}>
								{country}
							</option>
						);
					})}
				</Select>
			</FormControl>

			<FormControl as={GridItem} colSpan={6}>
				<FormLabel
					htmlFor='street_address'
					fontSize='sm'
					fontWeight='md'
					color='gray.700'
					_dark={{
						color: "gray.50",
					}}
					mt='2%'>
					Street address
				</FormLabel>
				<Input
					type='text'
					name='address'
					id='street_address'
					autoComplete='street-address'
					focusBorderColor='brand.400'
					shadow='sm'
					size='sm'
					w='full'
					rounded='md'
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
				<FormLabel
					htmlFor='city'
					fontSize='sm'
					fontWeight='md'
					color='gray.700'
					_dark={{
						color: "gray.50",
					}}
					mt='2%'>
					City
				</FormLabel>
				<Input
					type='text'
					name='city'
					id='city'
					autoComplete='city'
					focusBorderColor='brand.400'
					shadow='sm'
					size='sm'
					w='full'
					rounded='md'
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
				<FormLabel
					htmlFor='state'
					fontSize='sm'
					fontWeight='md'
					color='gray.700'
					_dark={{
						color: "gray.50",
					}}
					mt='2%'>
					State / Province
				</FormLabel>
				<Input
					type='text'
					name='state'
					id='state'
					autoComplete='state'
					focusBorderColor='brand.400'
					shadow='sm'
					size='sm'
					w='full'
					rounded='md'
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
				<FormLabel
					htmlFor='postal_code'
					fontSize='sm'
					fontWeight='md'
					color='gray.700'
					_dark={{
						color: "gray.50",
					}}
					mt='2%'>
					ZIP / Postal
				</FormLabel>
				<Input
					type='text'
					name='zip'
					id='postal_code'
					autoComplete='postal-code'
					focusBorderColor='brand.400'
					shadow='sm'
					size='sm'
					w='full'
					rounded='md'
					onChange={handleChange}
				/>
			</FormControl>
		</>
	);
};

const Form3 = () => {
	const inintialValues = {
		website: "",
		about: "",
	}
	const [state, setState] = useState(inintialValues)
	const handleChange = (e) => {
		const { name, value } = e.target
		setState({ ...state, [name]: value })
	}
	console.log(state)
	return (
		<>
			<Heading w='100%' textAlign={"center"} fontWeight='normal'>
				Social Handles
			</Heading>
			<SimpleGrid columns={1} spacing={6}>
				<FormControl as={GridItem} colSpan={[3, 2]}>
					<FormLabel
						fontSize='sm'
						fontWeight='md'
						color='gray.700'
						_dark={{
							color: "gray.50",
						}}>
						Website
					</FormLabel>
					<InputGroup size='sm'>
						<InputLeftAddon
							bg='gray.50'
							_dark={{
								bg: "gray.800",
							}}
							color='gray.500'
							rounded='md'>
							http://
						</InputLeftAddon>
						<Input
							type='tel'
							placeholder='www.example.com'
							focusBorderColor='brand.400'
							rounded='md'
							name="website"
							onChange={handleChange}
						/>
					</InputGroup>
				</FormControl>

				<FormControl id='email' mt={1}>
					<FormLabel
						fontSize='sm'
						fontWeight='md'
						color='gray.700'
						_dark={{
							color: "gray.50",
						}}>
						About
					</FormLabel>
					<Textarea
						placeholder='you@example.com'
						rows={3}
						shadow='sm'
						focusBorderColor='brand.400'
						fontSize={{
							sm: "sm",
						}}
						rounded='md'
						name="about"
						onChange={handleChange}
					/>
					<FormHelperText>
						Brief description for your profile. URLs are
						hyperlinked.
					</FormHelperText>
				</FormControl>
			</SimpleGrid>
		</>
	);
};

export default function Login() {
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(33.33);
	return (
		<>
			<Container
			 h='100vh'
			>
				<Box
					borderWidth='1px'
					rounded='lg'
					shadow='1px 1px 3px rgba(0,0,0,0.3)'
					maxWidth={450}
					p={6}
					m='50px auto'
					as='form'>
					<Progress
						hasStripe
						value={progress}
						mb='5%'
						mx='5%'
						isAnimated></Progress>
					{step === 1 ? (
						<Form1 />
					) : step === 2 ? (
						<Form2 />
					) : (
						<Form3 />
					)}
					<ButtonGroup mt='5%' w='100%'>
						<Flex w='100%' justifyContent='space-between'>
							<Flex>
								<Button
									onClick={() => {
										setStep(step - 1);
										setProgress(progress - 33.33);
									}}
									isDisabled={step === 1}
									colorScheme='teal'
									variant='solid'
									w='7rem'
									mr='5%'>
									Back
								</Button>
								<Button
									w='7rem'
									isDisabled={step === 3}
									onClick={() => {
										setStep(step + 1);
										if (step === 3) {
											setProgress(100);
										} else {
											setProgress(progress + 33.33);
										}
									}}
									colorScheme='teal'
									variant='outline'>
									Next
								</Button>
							</Flex>
							{step === 3 ? (
							<NavLink to="/">
								<Button
									w='7rem'
									colorScheme='red'
									variant='solid'
									onClick={() => {
										toast({
											title: "Account created.",
											description:
												"We've created your account for you.",
											status: "success",
											duration: 3000,
											isClosable: true,
										});
									}}>
									Submit
								</Button>
							</NavLink>
							) : null}
						</Flex>
					</ButtonGroup>
				</Box>
			</Container>
		</>
	);
}
