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
} from "@chakra-ui/react";
import InputDateRange from "./InputDateRange";
import React from "react";
import { DateContext } from "../../context/DateProviderContext";
import { AiFillCalendar } from "react-icons/ai";
export default function WelcomeHome() {
    const {sDate,eDate} = React.useContext(DateContext)
    console.log('frome welcom page',sDate,eDate)
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
					color='white'>
					FIND YOUR BEST CAR RENTAL WITH RENTOVENTO
				</Heading>
				<Center
					borderRadius='lg'
					maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
					m='auto'>
					<Stack
						// direction={{ base: "column", md: "row" }}
						spacing={{ base: 4, md: 10 }}
						w={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
						m='auto'
						bg={useColorModeValue("#ce667a", "black")}
						p={4}
						pt={10}
						borderRadius='lg'
						boxShadow='lg'
						// add transparency to the background
					>
						<HStack>
							<Input
								type={"text"}
								placeholder='Enter your pick-up location or zip code'
								bg
								h={"50px"}
								borderRadius={"0"}
							/>
							<InputDateRange />
							<Input
								type={"text"}
								bg
								h={"50px"}
								borderRadius={"0"}
							/>
						</HStack>
						<HStack>
							<Input
								type={"text"}
								placeholder='Return to same location'
								bg
								h={"50px"}
								borderRadius={"0"}
							/>
							<Input
								type={"text"}
								value={eDate}
								bg
								h={"50px"}
								borderRadius={"0"}
							/>
							<AiFillCalendar
								size={"10%"}
								borderRadius={"50%"}
								color={useColorModeValue("black", "white")}
                posistion='relative'
                left='10px'
							/>
							<Input
								type={"text"}
								bg
								h={"50px"}
								borderRadius={"0"}
							/>
						</HStack>
						<HStack></HStack>
					</Stack>
				</Center>
			</Stack>
		</Container>
	);
}
