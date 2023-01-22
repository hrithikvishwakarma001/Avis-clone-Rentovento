import React from "react";
import { Container, Box, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
	return (
		<div>
			<Box textAlign='center' py={10} px={6} height='50vh' mt={10}>
				<Heading
					display='inline-block'
					as='h2'
					size='3xl'
					bgGradient='linear(to-r, teal.400, teal.600)'
					backgroundClip='text'>
					404
				</Heading>
				<Text fontSize='18px' mt={3} mb={2}>
					Page Not Found
				</Text>
				<Text color={"gray.500"} mb={6}>
					The page you're looking for does not seem to exist
				</Text>
				<NavLink to='/'>
					<Button
						colorScheme='teal'
						bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
						color='white'
						variant='solid'>
						Go to Home
					</Button>
				</NavLink>
			</Box>
		</div>
	);
};

export default NotFound;
