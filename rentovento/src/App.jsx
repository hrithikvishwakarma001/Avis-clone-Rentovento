import { Button, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";
import './App.css'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
		<div className='App'>
			<Button onClick={toggleColorMode} >
				{!isDark ? <FaSun /> : <FaMoon />}
			</Button>
		</div>
  );
}

export default App
