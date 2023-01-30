import React from "react";
import { DateContext } from "../context/DateProviderContext";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
	useColorModeValue,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Heading,
	Center,
	StatArrow,
	StatHelpText,
} from "@chakra-ui/react";
import AdminTable from "./utilities/AdminTable";

const AdminPage = () => {
	const { book, sDate, eDate, user, bookData } =
		React.useContext(DateContext);
	let userData = {
		...book,
		fname: user.firstName,
		lname: user.lastName,
		email: user.email,
		start: sDate,
		end: eDate,
	};
	console.log("from admin : ", userData);
	console.log("from admin table : ", bookData);
	return (
		<>
			<Center mt={20}>
				<Heading>Users History</Heading>
			</Center>
			<Container
				maxW={"container.lg"}
				mt={20}
				mb={40}
				p={4}
				boxShadow={"2xl"}
				rounded={"md"}
				bg={useColorModeValue("gray.100", "#000")}>
				<Tabs variant='soft-rounded' colorScheme='green'>
					<TabList gap={40} pl={"20"}>
						<Tab mr='10'>User Details</Tab>
						<Tab mr='10'>Booking Details</Tab>
						<Tab>Inventory Details</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<AdminTable
								fname={userData.fname}
								lname={userData.lname}
								email={userData.email}
								age={userData.age}
								country={userData.country}
							/>
						</TabPanel>
						<TabPanel>
							<TableContainer>
								<Table variant='simple'>
									<Thead>
										<Tr>
											<Th>S no.</Th>
											<Th>Pick-up date</Th>
											<Th>Pick-up time</Th>
											<Th>Pick-up address</Th>
											<Th>drop address</Th>
											<Th>drop date</Th>
											<Th>drop time</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td>1</Td>
											<Td>{userData.start}</Td>
											<Td>{userData.pickTime}</Td>
											<Td>{userData.pickAdrees}</Td>
											<Td>{userData.dropAddress}</Td>
											<Td>{userData.end}</Td>
											<Td>{userData.dropTime}</Td>
										</Tr>
									</Tbody>
								</Table>
							</TableContainer>
						</TabPanel>
						<TabPanel>
							<TableContainer>
								<Table variant='simple'>
									<Thead>
										<Tr>
											<Th>S no.</Th>
											<Th>Vehicle</Th>
											<Th>Price</Th>
											<Th>Mileage</Th>
											<Th>Color</Th>
											<Th>Product Id</Th>
										</Tr>
									</Thead>
									<Tbody>
										{bookData.map((item, index) => {
											return (
												<>
													<Tr key={index}>
														<Td>{index + 1}</Td>
														<Td>{item.title.trim()}</Td>
														<Td>£{item.price}</Td>
														<Td>{item.miles}</Td>
														<Td>{item.color}</Td>
														<Td>
															{"#"+item.id+Math.random().toString(10).substr(2, 7)}
														</Td>
													</Tr>
												</>
											);
										})}
									</Tbody>
								</Table>
							</TableContainer>
						</TabPanel>
						<TabPanel>
							<p>cars!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</>
	);
};

export default AdminPage;
