import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Stack,
	HStack,
	Input,
	Checkbox,
	FormLabel,
} from "@chakra-ui/react";
const SideBar = () => {
	const locationArray = [
		"Rentovento Auto Sales",
		"Rentovento Car Sales",
		"Rentovento Car Houston South",
		"Rentovento Car Houston North",
		"Rentovento Car Houston East",
		"Rentovento Car Houston West",
		"Rentovento Car Houston Central",
		"Rentovento Car Sales Colton",
		"Rentovento Car Sales Fontana",
		"Rentovento Car Sales Ontario",
		"Rentovento Car Sales Riverside",
		"Rentovento Car Sales San Bernardino",
		"Rentovento Car Sales San Diego",
		"Rentovento Car Sales San Fernando Valley",
		"Rentovento Car Sales San Gabriel Valley",
		"Rentovento Car Sales San Jose",
		"Rentovento Car Sales Santa Ana",
		"Rentovento Car Sales Temecula",
		"Rentovento Car Sales Victorville",
		"Rentovento Car Sales West Covina",
		"Rentovento Car Sales West Los Angeles",
		"Rentovento Car Sales West Valley",
		"Rentovento Car Sales Whittier",
		"Rentovento Car Sales Yorba Linda",
		"Rentovento Car Sales Anaheim",
		"Rentovento Car Sales Bakersfield",
	];

	const CarBrandNames = [
		"Acura",
		"Audi",
		"BMW",
		"Buick",
		"Cadillac",
		"Chevrolet",
		"Chrysler",
		"Dodge",
		"Fiat",
		"Ford",
		"GMC",
		"Honda",
		"Hyundai",
		"Infiniti",
		"Jaguar",
		"Jeep",
		"Kia",
		"Land Rover",
		"Lexus",
		"Mazda",
		"Mercedes-Benz",
		"Mini",
		"Mitsubishi",
		"Nissan",
		"Porsche",
		"Scion",
		"Subaru",
		"Tesla",
		"Toyota",
		"Volkswagen",
		"Volvo",
		"zoyasuki",
	];

	const CarModelNames = [
		"Accord",
		"Altima",
		"Camry",
		"Charger",
		"Cherokee",
		"Corolla",
		"Cruze",
		"Elantra",
		"Escape",
		"Explorer",
		"F-150",
		"Fusion",
		"Grand Cherokee",
		"Highlander",
		"Impala",
		"Jetta",
		"Malibu",
		"Maxima",
		"Optima",
		"Passat",
		"Pathfinder",
		"Rav4",
	];

	const CarTrimNames = [
		"1.8T SE",
		"1.8T SEL",
		"1.8T SEL Premium",
		"1.8T S",
		"1.8T Sport",
		"1.8T Wolfsburg Edition",
		"1.8T Wolfsburg Edition PZEV",
		"2.0T Premium",
		"2.0T Premium Plus",
		"2.0T Premium Plus PZEV",
		"2.0T Premium PZEV",
		"2.0T S",
		"2.0T SE",
		"2.0T SEL",
		"2.0T SEL Premium",
		"2.0T Sport",
		"2.0T Wolfsburg Edition",
		"2.0T Wolfsburg Edition PZEV",
		"2.5 S",
		"2.5 SL",
		"2.5 SV",
		"25t Premium",
		"25t Prestige",
		"25t Premium Plus",
		"25t Premium Plus PZEV",
		"25t Premium PZEV",
	]

	const CarYearNames = [
		"2010",
		"2011",
		"2012",
		"2013",
		"2014",
		"2015",
		"2016",
		"2017",
		"2018",
		"2019",
		"2020",
		"2021",
		"2022",
		"2023"
	]

	const CarPrice = [
		"$10,000 - $19,000 (1297)",
		"$20,000 - $29,000 (1899)",
		"$30,000 - $39,000 (1099)",
		"$40,000 - $49,000 (299)",
		"$50,000 - $59,000 (99)",
		"$60,000 - $69,000 (49)",
		"$70,000 - $79,000 (19)",
		"$80,000 - $89,000 (9)",
		"$90,000 - $99,000 (9)",
		"$100,000 - $109,000 (9)"
	]

	const CarMileage = [
		"30,000 or less (282)",
		"40,000 or less (482)",
		"50,000 or less (682)",
		"60,000 or less (882)",
		"70,000 or less (1082)",
		"80,000 or less (1282)",
		"90,000 or less (1482)",
		"100,000 or less (1682)",
		"110,000 or less (1882)",
	]

	const CarColor = [
		"Black",
		"Blue",
		"Brown",
		"Gold",
		"Gray",
		"Green",
		"Orange",
		"Pink",
		"Purple",
		"Red",
		"Silver",
		"White",
		"Yellow"
	]

  const Features = [
		"ABS Brakes",
		"Air Conditioning",
		"Alloy Wheels",
		"AM/FM Radio",
		"Anti-Lock Brakes",
		"Automatic Climate Control",
		"Automatic Headlights",
		"Automatic Transmission",
		"Bluetooth",
		"CD Player",
		"Cruise Control",
		"Daytime Running Lights",
		"Driver Airbag",
		"Driver Multi-Adjustable Power Seat",
		"Electrochromic Interior Rearview Mirror",
		"Electronic Brake Assistance",
		"Electronic Parking Aid",
		"Fog Lights",
		"Front Air Dam",
		"Front Power Lumbar Support",
		"Front Side Airbag",
		"Front Side Airbag with Head Protection",
		"Full Size Spare Tire",
		"Heated Exterior Mirror",
		"Heated Seats",
		"Interval Wipers",
		"Keyless Entry",
		"Leather Steering Wheel",
		"Leather Seats",
		"Leather Upholstery",
		"Passenger Airbag",
		"Passenger Multi-Adjustable Power Seat",
		"Power Adjustable Exterior Mirror",
		"Power Door Locks",
		"Power Windows",
		"Rear Defroster",
		"Rear Spoiler",
		"Rear Wiper",
		"Second Row Folding Seat",
		"Separate Driver/Front Passenger Climate Controls",
		"Side Head Curtain Airbag",
		"Steering Wheel Mounted Controls",
		"Subwoofer",
		"Sun Roof",
	]




	return (
		<div>
			<Accordion allowToggle>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Location
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{locationArray.map((location,id) => (
							<HStack spacing={4} key={id}>
								<Checkbox />
								<FormLabel>{location}</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Inventory Type
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<HStack spacing={4}>
							<Checkbox />
							<FormLabel>All (3947)</FormLabel>
						</HStack>
						<HStack spacing={4}>
							<Checkbox />
							<FormLabel>On The Lot (1620)</FormLabel>
						</HStack>
						<HStack spacing={4}>
							<Checkbox />
							<FormLabel>Ultimate Test Drive (2327)</FormLabel>
						</HStack>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Car Brands
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarBrandNames.map((brand, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>
									{brand} (
									{Math.floor(Math.random() * 100 + i)})
								</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Mileage
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarMileage.map((brand, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>
									{brand} (
									{Math.floor(Math.random() * 100 + i)})
								</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Car Models
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarModelNames.map((model, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>
									{model} (
									{Math.floor(Math.random() * 100 + i)})
								</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Year
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarYearNames.map((model, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>
									{model} (
									{Math.floor(Math.random() * 100 + i)})
								</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Car Trim
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarTrimNames.map((model, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>
									{model} (
									{Math.floor(Math.random() * 100 + i)})
								</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Price Range
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarPrice.map((model, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>{model}</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Color
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{CarColor.map((model, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>{model}</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								Features
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{Features.map((model, i) => (
							<HStack spacing={4} key={i}>
								<Checkbox />
								<FormLabel>{model}</FormLabel>
							</HStack>
						))}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default SideBar;
