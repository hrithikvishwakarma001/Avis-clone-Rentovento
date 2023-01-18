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
} from "@chakra-ui/react";
import InputDateRange from "./InputDateRange";
import React from "react";
import { DateContext } from "../../context/DateProviderContext";
import { AiFillCalendar } from "react-icons/ai";
export default function WelcomeHome() {
	const { sDate, eDate } = React.useContext(DateContext);
	console.log("frome welcom page", sDate, eDate);
	// console.log('frome welcom page',dateRange)
  
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
								type={"text"}
								placeholder='Enter your pick-up location or zip code'
								bg
								h={"50px"}
								borderRadius={"0"}
							/>
							<InputDateRange />
							<Select
								placeholder='Select option'
								bg
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
						<HStack spacing={"-0.5"}>
							<Input
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
									size={"65%"}
									borderradius={"50%"}
									color={useColorModeValue("black", "white")}
								/>
							</Center>
							<Select
								placeholder='Select option'
								bg
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
						<HStack></HStack>
					</Stack>
				</Center>
			</Stack>
		</Container>
	);
}
