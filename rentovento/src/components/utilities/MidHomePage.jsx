import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Center,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const MidHomePage = () => {
	const gridArray = [
		{
			img: "https://www.avis.com/content/dam/avis/na/us/common/campaigns/$15OFF_Img@2x.jpg/jcr:content/renditions/cq5dam.web.750.750.webp",
			title: "GET A FREE UPGRADE!",
			text: "Travel in a  roomier ride.",
		},
		{
			img: "https://www.avis.com/content/dam/avis/na/us/common/campaigns/shutterstock_655431676.jpg/jcr:content/renditions/cq5dam.web.750.750.webp",
			title: "GET LAST MINUTE TRAVEL DEALS",
			text: "Use our last-minute car rental travel deals to save today.",
		},
		{
			img: "https://www.avis.com/content/dam/avis/na/us/common/offers/avis-hp-earnfreedays-800x502.jpg/jcr:content/renditions/cq5dam.web.750.750.webp",
			title: "EARN FREE DAYS!",
			text: "Start earning FREE days by registering today.",
		},
	];
	const gridArray2 = [
		{
			img: "https://www.avis.com/content/dam/avis/na/us/common/offers/Deal_AmazonTestingPhase.jpg/jcr:content/renditions/cq5dam.web.750.750.webp",
			text: "Get up to 30% off with pay now plus 10% back in an Amazon Gift Card*",
		},
		{
			img: "https://www.avis.com/content/dam/avis/na/us/common/offers/avis-hp-aarp-logo-150x150.jpg/jcr:content/renditions/cq5dam.web.150.150.webp",
			text: "Learn more about our exclusive offers and savings for AARP members",
		},
		{
			img: "https://www.avis.com/content/dam/avis/na/us/common/offers/Deal_Veterans_Testing.jpg/jcr:content/renditions/cq5dam.web.150.150.webp",
			text: "Save up to 25% with Veteran's Advantage",
		},
	];

	return (
		<div>
			<Center
			  display={{ base: "none", md: "none", sm: "none",lg:"flex" }}
				width={"80%"}
				margin={"auto"}
				marginTop={"2rem"}
				boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
				h={"17rem"}
				backgroundImage="url('https://www.avis.com/content/dam/avis/na/us/common/offers/avis-hp-wintersale22-desktopbg.jpg/jcr:content/renditions/cq5dam.web.1536.1008.webp')"
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				objectFit={"cover"}
				backgroundSize='cover'>
				<Stack
					width={{ base: "100%", md: "100%", sm: "100%",lg:"80%" }}
					ml={"35rem"}
          display={{ base: "none", md: "none", sm: "none",lg:"flex" }}
					color={useColorModeValue("black", "black")}
					spacing={5}>
					<Text as='b' fontSize='2xl' forntWeight='bold'>
						Get OUR BEST RATES when you book ar Rentovento.com
					</Text>
					<Text as='b' fontSize='xl' forntWeight='bold'>
						PLUS save up to 35% when you pay now!
					</Text>
					<Button
						w={"150px"}
						color='white'
						bg={useColorModeValue("#b20023", "black")}
						borderRadius='0'>
						Save Now
					</Button>
				</Stack>
			</Center>
			<Container maxW={"90%"} marginTop={"2rem"}>
				<Flex
					alignItems={"center"}
					justifyContent={"space-between"}
          display={{ base: "none", md: "block", sm: "block",lg:"flex" }}
					width={"99.5%"}
					margin={"auto"}>
					<Stack>
						<Heading
							as='h2'
							fontSize='3rem'
							fontWeight='bold'
							fontFamily={"heading"}>
							EXPLORE ALL THE WAYS YOU CAN SAVE
						</Heading>
						<Text>
							Save on your next daily or monthly car rental with
							these deals ond offers.
						</Text>
					</Stack>
					<Button
						w='200px'
						h='50px'
						color={useColorModeValue("white", "black")}
						bg={useColorModeValue("#b20023", "white")}
						borderRadius='0'>
						VIEW ALL OFFERS
					</Button>
				</Flex>
				<SimpleGrid
					mt='12'
					mb={12}
					templateColumns={{
						base: "repeat(1, 1fr)",
						sm: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={6}>
					{gridArray.map((item, index) => (
						<Box key={index}>
							<Card
								direction={{ base: "row", sm: "column" }}
								overflow='hidden'
								variant='outline'
								borderRadius={0}
								maxW='40rem'>
								<Image
									key={index}
									h='20em'
									objectFit='cover'
									maxW={{ base: "100%", sm: "40rem" }}
									src={item.img}
									alt='image'
								/>

								<Stack>
									<CardBody>
										<Heading size='md'>
											{item.title}
										</Heading>

										<Text py='2'>{item.text}</Text>
										<Button
											ml={-17}
											variant='ghost'
											color={useColorModeValue(
												"red.500",
												"#f69d1f"
											)}>
											UPGRADE NOW!
										</Button>
									</CardBody>
								</Stack>
							</Card>
						</Box>
					))}
				</SimpleGrid>
				<Flex
					alignItems={"center"}
					justifyContent={"space-between"}
					width={"100%"}
					margin={"auto"}>
					<Stack>
						<Heading
							as='h1'
							fontSize='3rem'
							fontWeight='bold'
							fontFamily={"heading"}>
							BENEFITS FROM OUR TRAVEL PARTNERS
						</Heading>
					</Stack>
				</Flex>
				<SimpleGrid
					mt='12'
					mb={12}
					templateColumns={{
						base: "repeat(1, 1fr)",
						sm: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={2}>
					{gridArray2.map((item, index) => (
						<Box key={index} w={{ base: "100%", sm: "28rem" }}>
							<Card
								direction={{ base: "column", sm: "row" }}
								overflow='hidden'
								variant='outline'
								borderRadius={0}
								w='32rem'
								h={{ base: "20em", sm: "10em" }}>
								<Image
									w='-moz-fit-content'
									h={{ base: "20em", sm: "10em" }}
									key={index}
									objectFit='cover'
									maxW={{ base: "100%", sm: "200px" }}
									src={item.img}
									alt='img'
								/>
								<Stack>
									<CardBody>
										<Text>{item.text}</Text>
									</CardBody>
									<CardFooter>
										<Button
											variant='ghost'
											// color='red.500'
											color={useColorModeValue(
												"red.500",
												"#f69d1f"
											)}>
											LEARN MORE
										</Button>
									</CardFooter>
								</Stack>
							</Card>
						</Box>
					))}
				</SimpleGrid>
				<Center
					width={"100%"}
					margin={"auto"}
					marginTop={"2rem"}
					boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
					h={"28rem"}
					mb={12}
					backgroundImage="url('https://www.avis.com/content/dam/avis/na/us/common/offers/avis-car-sales-suv-hp-tile-1000x440.jpg/jcr:content/renditions/cq5dam.web.1920.930.webp')"
					backgroundPosition='center'
					backgroundRepeat='no-repeat'
					objectFit={"cover"}
					backgroundSize='cover'>
					<Stack
						bg={useColorModeValue("rgba(256,256,256,80%)", "black")}
						width={"45%"}
						padding={"2rem"}
						ml={"53.9rem"}
						// color={useColorModeValue("black", "white")}
						spacing={5}>
						<Text as='b' fontSize='2xl' forntWeight='bold'>
							BUY A CERTIFIED PRE-OWNED CAR WITH AVIS CAR SALES
							AND SAVE AN AVERAGE OF $2500*
						</Text>
						<Text as='b' fontSize='xl' forntWeight='bold'>
							Find your car today.
						</Text>
						<Button
							w={"150px"}
							color='white'
							bg={useColorModeValue("#b20023", "#b20023")}
							borderRadius='0'>
							LEARN MORE
						</Button>
					</Stack>
				</Center>
			</Container>
		</div>
	);
};

export default MidHomePage;

// <Card
// 	direction={{ base: "row", sm: "column" }}
// 	overflow='hidden'
// 	variant='outline'
// 	maxW='40rem'>
// 	<Image
// 		h='20em'
// 		objectFit='cover'
// 		maxW={{ base: "100%", sm: "40rem" }}
// 		src='https://www.avis.com/content/dam/avis/na/us/common/campaigns/shutterstock_655431676.jpg/jcr:content/renditions/cq5dam.web.750.750.webp'
// 		alt='Caffe Latte'
// 	/>

// 	<Stack>
// 		<CardBody>
// 			<Heading size='md'>GET LAST MINUTE TRAVEL DEALS</Heading>

// 			<Text py='2'>
// 				Use our last-minute car rental travel deals to save today.
// 			</Text>
// 			<Button variant='ghost' colorScheme='red'>
// 				UPGRADE NOW!
// 			</Button>
// 		</CardBody>
// 	</Stack>
// </Card>;
//  Image constructor: 'new' is required

<Card
	direction={{ base: "column", sm: "row" }}
	overflow='hidden'
	variant='outline'
	w='37rem'>
	<Image
		objectFit='cover'
		maxW={{ base: "100%", sm: "200px" }}
		src='https://www.avis.com/content/dam/avis/na/us/common/offers/avis-hp-aarp-logo-150x150.jpg/jcr:content/renditions/cq5dam.web.150.150.webp'
		alt='Caffe Latte'
	/>

	<Stack>
		<CardBody>
			<Text py='2'>
				Learn more about our exclusive offers and savings for AARP
				members
			</Text>
		</CardBody>

		<CardFooter>
			<Button variant='ghost' color='red.500'>
				Buy Latte
			</Button>
		</CardFooter>
	</Stack>
</Card>;
