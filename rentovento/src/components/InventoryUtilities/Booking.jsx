import React from "react";
import { DateContext } from "../../context/DateProviderContext";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Container,
	Center,
	useColorModeValue,
} from "@chakra-ui/react";
const Booking = () => {
	const { book, sDate, eDate, user } = React.useContext(DateContext);
	let userData = {
		...book,
		fname: user.firstName,
		lname: user.lastName,

		email: user.email,
		start: sDate,
		end: eDate,
	};
	console.log("userData : ", userData);
	return (
		<Center h={"100vh"}>
			<TableContainer
				maxW={"container.md"}
				p={4}
				boxShadow={"2xl"}
				rounded={"md"}
				bg={useColorModeValue("gray.100", "#000")}>
				<Table size='lg'>
					<Thead>
						<Tr>
							<Th>User Details</Th>
							<Td>
								{userData.lname
									? `${userData.fname} ${userData.lname} `
									: "--"}
							</Td>
							<Td>{userData.email ? userData.email : "--"}</Td>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Th>Booking Address</Th>
							<Td>
								{userData.pickAdrees
									? userData.pickAdrees
									: "--"}
							</Td>
							<Td>
								{userData.dropAddress
									? userData.dropAddress
									: "--"}
							</Td>
						</Tr>
						<Tr>
							<Th>Booking Date</Th>
							<Td>{userData.start}</Td>
							<Td>{userData.end}</Td>
						</Tr>
						<Tr>
							<Th>Booking Time</Th>
							<Td>
								{userData.pickTime ? userData.pickTime : "--"}
							</Td>
							<Td>
								{userData.dropTime ? userData.dropTime : "--"}
							</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>Country & Age</Th>
							<Th>
								{userData.country ? userData.country : "--"}
							</Th>
							<Th>{userData.age ? userData.age : "--"}</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</Center>
	);
};

export default Booking;
