import React, { useContext } from "react";
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
} from "@chakra-ui/react";

const AdminTable = ({ fname, lname, email, age, country }) => {
	console.log("from table : ", fname, lname, email, age, country);

	return (
		<div>
			<TableContainer>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>S no.</Th>
							<Th>Fisrt name</Th>
							<Th>last name</Th>
							<Th>age</Th>
							<Th>country</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>1</Td>
							<Td>{fname}</Td>
							<Td>{lname}</Td>
							<Td>{age}</Td>
							<Td>{country}</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AdminTable;
