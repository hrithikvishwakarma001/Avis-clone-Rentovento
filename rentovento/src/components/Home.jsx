import { useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import Footer from './utilities/Footer';
import MidHomePage from './utilities/MidHomePage';
import WelcomeHome from './utilities/WelcomeHome';


const Home = () => {
  return (
		<div bg={useColorModeValue("gray.100", "black")}>
			<WelcomeHome />
			<MidHomePage />
			<Footer />
		</div>
  );
}

export default Home
