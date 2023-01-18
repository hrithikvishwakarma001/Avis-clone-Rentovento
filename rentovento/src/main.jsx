import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import DateProviderContext from "./context/DateProviderContext";
ReactDOM.createRoot(document.getElementById("root")).render(
	<ChakraProvider>
		<ColorModeScript initialColorMode='dark' />
		<BrowserRouter>
			<DateProviderContext>
				<App />
			</DateProviderContext>
		</BrowserRouter>
	</ChakraProvider>
);
