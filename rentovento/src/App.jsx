import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import './App.css'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/utilities/Footer';

function App() {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isDark = colorMode === 'dark'

  return (
		<Box
			className='App'
			bg={useColorModeValue("white", "#111111")}
			margin={"auto"}>
			<Navbar />
			<AllRoutes />
			<Footer />
		</Box>
  );
}

export default App
