import { Grid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import CardCard from "./CarCard";
import CardSkeleton from "./CardSkeleton";
import Skeleton from "./CardSkeleton";

const inintialState = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload,
			};
		case "FETCH_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			throw new Error();
	}
};

const CarCart = () => {
	const [state, dispatch] = React.useReducer(reducer, inintialState);

	async function fetchCars() {
		dispatch({ type: "FETCH_INIT" });
		try {
			let res = await axios.get(
				"https://heavenly-brief-antarctopelta.glitch.me/cars?page=1&_limit=9"
			);
			dispatch({ type: "FETCH_SUCCESS", payload: res.data });
		} catch (error) {
			dispatch({ type: "FETCH_FAILURE", payload: error.message });
		}
	}
	React.useEffect(() => {
		fetchCars();
	}, []);
	if (state.error) return <h1>Error: {state.error}</h1>;
		// <CardSkeleton />;
	console.log(state.data);
	return state.loading?(
		<div>
			<Grid
				templateColumns={{
					base: "repeat(1,1fr)",
					md: "repeat(2,1fr)",
					lg: "repeat(3,1fr)",
				}}
				gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
				mb="30rem"
			>
				{[1,2,3,4,5,6,7,8,9].map((car) => (
					<CardSkeleton key={car} />
				))}
			</Grid>
		</div>
		) :(
		<div>
			<Grid
				templateColumns={{
					base: "repeat(1,1fr)",
					md: "repeat(2,1fr)",
					lg: "repeat(3,1fr)",
				}}
				gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
				//  width={{base:"100%",md:"100%",lg:"70%"}}
				//  border="1px solid black"
			>
				{state?.data.map((car) => (
					<CardCard
						key={car.id}
						images={car.image}
						title={car.title}
						price={car.price}
						miles={car.miles}
						color={car.color}
					/>
				))}
			</Grid>
		</div>
	);
};

export default CarCart;
