import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import './App.css'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isDark = colorMode === 'dark'

  return (
		<Box className='App'
    bg={useColorModeValue("white", "black")}
    >
			<Navbar />
			<AllRoutes />
   
		</Box>
  );
}

export default App
