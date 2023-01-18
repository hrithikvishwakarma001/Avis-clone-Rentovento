import './App.css'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isDark = colorMode === 'dark'

  return (
		<div className='App'>
			<Navbar />
			<AllRoutes />
   
		</div>
  );
}

export default App
