import {
	Flex,
	Container,
	Heading,
	Stack,
	Text,
	Button,
	Icon,
	Input,
	Center,
	HStack,
	useColorModeValue,
	MenuOptionGroup,
	Select,
	Box,
	Divider,
	Tag,
	color,
} from "@chakra-ui/react";
import InputDateRange from "./InputDateRange";
import React from "react";
import { DateContext } from "../../context/DateProviderContext";
import { AiFillCalendar, AiOutlineInfoCircle } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AdminPage from "../AdminPage";

export default function WelcomeHome() {
	const { sDate, eDate, auth,book,setBook } = React.useContext(DateContext);
	// console.log("frome welcom page", sDate, eDate);
	// console.log('frome welcom page',dateRange)
	const [noneState, setnoneState] = React.useState(true);
	const nevigate = useNavigate();
	// console.log('noneState',noneState)

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
	const initialState = {
		pickAdrees: "",
		dropAddress: "",
		pickTime: "",
		dropTime: "",
		country: "",
		age: "",
	};
	const [state, setstate] = React.useState(initialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setstate({ ...state, [name]: value });
	};
	const toast = useToast();
	const handleClick = () => {
		if (
			state.pickAdrees === "" ||
			state.dropAddress === "" ||
			state.pickTime === "" ||
			state.dropTime === "" ||
			state.country === "" ||
			state.age === ""
		) {
			toast({
				title: " Enter all fields.",
				description: "All fields are required",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		} else {
			console.log("state", state);
			setBook(state);
			setnoneState((prev) => !prev);
			setstate(initialState);

			if (auth) {
				nevigate("/Inventory");
				toast({
					title: "Thank you for your Details.",
					description: "We will contact you soon.",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
			}else{
				nevigate("/login");
				toast({ 
					title: "Please create your account first.",
					description: "And login to continue.",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
			}
		}
	};
	return (
		<Container maxW={"100%"} bg='#b20023'>
			<Stack
				textAlign={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}>
				<Heading
					fontWeight={700}
					fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
					lineHeight={"110%"}
					color={useColorModeValue("white", "black.100")}>
					FIND YOUR BEST CAR RENTAL WITH RENTOVENTO
				</Heading>
				<Center
					borderRadius='lg'
					maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
					m='auto'>
					<Stack
						// direction={{ base: "column", md: "row" }}
						spacing={{ base: 4, md: 3 }}
						w={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
						m='auto'
						bg={useColorModeValue("#ce667a", "black")}
						p={4}
						boxShadow='lg'
						// add transparency to the background
					>
						<HStack spacing={"-0.5"}>
							<Input
								value={state.pickAdrees}
								name='pickAdrees'
								onChange={handleChange}
								type={"text"}
								placeholder='Enter your pick-up location or zip code'
								bg
								h={"50px"}
								borderRadius={"0"}
								onClick={() => setnoneState(false)}
							/>
							<InputDateRange />
							<Select
								name='pickTime'
								onChange={handleChange}
								fontSize={"14px"}
								placeholder='Select time'
								bg={useColorModeValue("white", "#2b2a33")}
								border={"none"}
								maxW={"20%"}
								h={"50px"}
								borderRadius={"0"}>
								<option>midnight</option>
								<option>12:30 AM</option>
								<option>1:00 AM</option>
								<option>1:00 AM</option>
								<option>1:30 AM</option>
								<option>2:00 AM</option>
								<option>2:30 AM</option>
								<option>3:00 AM</option>
								<option>3:30 AM</option>
								<option>4:00 AM</option>
								<option>4:30 AM</option>
								<option>5:00 AM</option>
								<option>5:30 AM</option>
								<option>6:00 AM</option>
								<option>6:30 AM</option>
								<option>7:00 AM</option>
								<option>7:30 AM</option>
								<option>8:00 AM</option>
								<option>8:30 AM</option>
								<option>9:00 AM</option>
								<option>9:30 AM</option>
								<option>10:00 AM</option>
								<option>10:30 AM</option>
								<option>11:00 AM</option>
								<option>11:30 AM</option>
								<option>noon</option>
								<option>12:30 PM</option>
								<option>1:00 PM</option>
								<option>1:30 PM</option>
								<option>8:00 PM</option>
								<option>8:30 PM</option>
								<option>9:00 PM</option>
								<option>9:30 PM</option>
								<option>10:00 PM</option>
								<option>10:30 PM</option>
								<option>11:00 PM</option>
								<option>11:30 PM</option>
							</Select>
						</HStack>
						<HStack
							spacing={"-0.5"}
							// display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
							display={noneState ? "none" : "flex"}>
							<Input
								value={state.dropAddress}
								name='dropAddress'
								onChange={handleChange}
								type={"text"}
								placeholder='Return to same location'
								bg
								h={"50px"}
								borderRadius={"0"}
							/>

							<Center
								w={"36%"}
								bg={useColorModeValue("white", "#2b2a33")}
								borderLeft={"1px solid #5e5d64"}
								borderRight={"1px solid #5e5d64"}
								h={"50px"}
								display='flex'
								alignItems={"center"}
								pl={8}>
								{eDate}
								<AiFillCalendar
									size={"50%"}
									borderradius={"50%"}
									color={useColorModeValue("black", "white")}
								/>
							</Center>

							<Select
								name='dropTime'
								onChange={handleChange}
								fontSize={"14px"}
								border={"none"}
								placeholder='Select time'
								bg={useColorModeValue("white", "#2b2a33")}
								maxW={"20%"}
								h={"50px"}
								borderRadius={"0"}>
								<option>midnight</option>
								<option>12:30 AM</option>
								<option>1:00 AM</option>
								<option>1:00 AM</option>
								<option>1:30 AM</option>
								<option>2:00 AM</option>
								<option>2:30 AM</option>
								<option>3:00 AM</option>
								<option>3:30 AM</option>
								<option>4:00 AM</option>
								<option>4:30 AM</option>
								<option>5:00 AM</option>
								<option>5:30 AM</option>
								<option>6:00 AM</option>
								<option>6:30 AM</option>
								<option>7:00 AM</option>
								<option>7:30 AM</option>
								<option>8:00 AM</option>
								<option>8:30 AM</option>
								<option>9:00 AM</option>
								<option>9:30 AM</option>
								<option>10:00 AM</option>
								<option>10:30 AM</option>
								<option>11:00 AM</option>
								<option>11:30 AM</option>
								<option>noon</option>
								<option>12:30 PM</option>
								<option>1:00 PM</option>
								<option>1:30 PM</option>
								<option>8:00 PM</option>
								<option>8:30 PM</option>
								<option>9:00 PM</option>
								<option>9:30 PM</option>
								<option>10:00 PM</option>
								<option>10:30 PM</option>
								<option>11:00 PM</option>
								<option>11:30 PM</option>
							</Select>
						</HStack>
						<HStack>
							<Stack
								pl={4}
								w={"20%"}
								direction={"row"}
								align={"center"}
								bg={useColorModeValue("white", "#2b2a33")}>
								<AiOutlineInfoCircle
									size={"20px"}
									bg={useColorModeValue("white", "gray.100")}
								/>
								<Select
									name='age'
									onChange={handleChange}
									border={"none"}
									placeholder='age:&nbsp;&nbsp; 25+'
									bg={useColorModeValue("white", "#2b2a33")}
									maxW={"80%"}
									h={"40px"}
									borderRadius={"0"}
									fontSize={"14px"}>
									<option>25+</option>
									<option>24</option>
									<option>23</option>
									<option>22</option>
									<option>21</option>
									<option>20</option>
									<option>19</option>
									<option>18</option>
								</Select>
							</Stack>
							<Stack
								pl={4}
								w={"30%"}
								direction={"row"}
								align={"center"}
								bg={useColorModeValue("white", "#2b2a33")}>
								<AiOutlineInfoCircle
									size={"20px"}
									bg={useColorModeValue("white", "gray.100")}
								/>
								<Select
									name='country'
									onChange={handleChange}
									border={"none"}
									placeholder='Residency: &nbsp;&nbsp; USA'
									bg={useColorModeValue("white", "#2b2a33")}
									maxW={"80%"}
									h={"40px"}
									borderRadius={"0"}
									fontSize={"14px"}>
									{country.map((country) => {
										return (
											<option
												key={country}
												value={country}>
												{country}
											</option>
										);
									})}
								</Select>
							</Stack>

							<Button
								isLoading={noneState ? false : true}
								// loadingText='laoding*'
								bg={useColorModeValue("white", "#2b2a33")}
								variant='outline'
								spinnerPlacement='end'
								borderradius={"none"}>
								Wizard No*
							</Button>
							<Button
								isLoading={noneState ? false : true}
								// loadingText='Discounts Code *'
								w={"30%"}
								bg={useColorModeValue("white", "#2b2a33")}
								variant='outline'
								spinnerPlacement='end'
								borderradius={"none"}>
								Discounts*
							</Button>
							<Button
								isLoading={noneState ? false : true}
								// loadingText='Vehicle Type *'
								bg={useColorModeValue("white", "#2b2a33")}
								variant='outline'
								spinnerPlacement='end'
								borderradius={"none"}>
								Vehicle*
							</Button>
						</HStack>
						<Flex justifyContent='flex-end'>
							<Tag bg={useColorModeValue("white", "#2b2a33")}>
								* Optional
							</Tag>
						</Flex>
					</Stack>
				</Center>
				<Center
					borderRadius='lg'
					maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
					m='auto'>
					<Button
						onClick={handleClick}
						bg={useColorModeValue("white", "black")}
						w='15rem'
						h='3rem'
						borderRadius='none'>
						SELECT MY CAR
					</Button>
				</Center>
			</Stack>
		</Container>
	);
}
