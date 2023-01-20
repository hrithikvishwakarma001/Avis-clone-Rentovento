import { Search2Icon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	FormLabel,
	Grid,
	Heading,
	HStack,
	Input,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import CarCart from "./InventoryUtilities/CarCart";
import SideBar from "./InventoryUtilities/SideBar";

const Inventory = () => {
	return (
		<div>
			<Container maxW='80%'>
				<VStack>
					<Heading
						fontSize={"2xl"}
						fontFamily='franklin gothic medium'>
						Shop Used Cars and Fleet Vehicles for Sale
					</Heading>
					<HStack>
						<Box>Sort By</Box>
						<Box>Price</Box>
						<Box>Year</Box>
						<Box>Make</Box>
					</HStack>
				</VStack>
				<HStack width={"100%"} space={8}>
					<Stack
						w={"20rem"}
						height={"120rem"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"flex-start"}

						mr={8}>
						<VStack  h='10rem' mb='8'>
							<HStack>
								<FormLabel>
									<Text fontWeight={"bold"} mb='1'>Keyword</Text>
									<Input placeholder='Search Vehicle' />
								</FormLabel>
								<Search2Icon 
								 bg={useColorModeValue("gray.100", "black")}
								 color={useColorModeValue("black", "white")}
								 w={10}
								 h={10}
								 p={2}
								 borderRadius={"10px"}
								 position={"relative"}
								 top={2}
								 right={2}
								/>
							</HStack>
							<HStack>
								<FormLabel>
									<Text fontWeight={"bold"} mb='1'>Keyword</Text>
									<Input placeholder='Search Brand' />
								</FormLabel>
								<Search2Icon 
								 bg={useColorModeValue("gray.100", "black")}
								 color={useColorModeValue("black", "white")}
								 w={10}
								 h={10}
								 p={2}
								 borderRadius={"10px"}
								 position={"relative"}
								 top={2}
								 right={2}
								/>
							</HStack>
						</VStack>
						<SideBar />
					</Stack>
					<Stack>
						<CarCart />
					</Stack>
				</HStack>
			</Container>
		</div>
	);
};

export default Inventory;
