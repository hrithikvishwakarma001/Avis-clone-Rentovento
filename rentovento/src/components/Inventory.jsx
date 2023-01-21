import { Search2Icon } from "@chakra-ui/icons";
import {
	Badge,
	Box,
	Code,
	Container,
	FormLabel,
	Grid,
	Heading,
	HStack,
	Input,
	Stack,
	Tag,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { DateContext } from "../context/DateProviderContext";
import CarCart from "./InventoryUtilities/CarCart";
import SideBar from "./InventoryUtilities/SideBar";
import SortComp from "./InventoryUtilities/SortComp";

const Inventory = () => {
	const { setSearch,totalCar } = React.useContext(DateContext);

	return (
		<div>
			<Container maxW='80%'>
				<VStack
					// height='11rem'
					mb={4}
					bg={useColorModeValue("gray.100", "black")}
					p={7}
					mt={6}
					spacing={4}>
					<Heading
						fontSize={"2xl"}
						fontFamily='franklin gothic medium'>
						Shop Used Cars and Fleet Vehicles for Sale
					</Heading>
					<VStack spacing={4}>
						<Text fontSize='lg' fontWeight='bold'>
							Search for used cars, trucks, vans, SUVs,
							motorcycles, boats, RVs, commercial vehicles, fleet
							vehicles, and more.
						</Text>
						<HStack>
							{totalCar && (
								<Code colorScheme={'green'} fontSize='1.5rem' fontWeight='bold' p={2}>
									{totalCar} Vehicles Found
								</Code>
							)}
						</HStack>
					</VStack>
				</VStack>

				<HStack
					width={"100%"}
					space={8}
					// border='1px solid black'
					align={"flex-start"}>
					<Stack
						w={"20rem"}
						height={"full"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"flex-start"}
						mr={8}
						bg={useColorModeValue("white", "black")}
						p={4}>
						<VStack h='10rem' mb='8'>
							<HStack w={"100%"}>
								<FormLabel>
									<Text fontWeight={"bold"} mb='1'>
										Keyword
									</Text>
									<Input
										placeholder='Search Vehicle'
										onChange={(e) =>
											setSearch(e.target.value)
										}
									/>
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
							<HStack w={"100%"}>
								<FormLabel>
									<Text fontWeight={"bold"} mb='1'>
										Sort by
									</Text>
									<SortComp />
								</FormLabel>
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
