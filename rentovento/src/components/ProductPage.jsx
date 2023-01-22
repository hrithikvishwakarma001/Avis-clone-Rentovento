import {
	Box,
	Card,
	Center,
	Container,
	Divider,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
	useColorModeValue,
	VStack,
	CardHeader,
	CardBody,
	CardFooter,
	Stack,
	StackDivider,
	StatArrow,
	List,
	ListItem,
	ListIcon,
	Button,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";
import { MdLocalGasStation, MdCheckCircle, MdSettings } from "react-icons/md";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import CardSkeleton from "./InventoryUtilities/CardSkeleton";
import CardSkeleton2 from "./InventoryUtilities/CardSkeleton2";
const ProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = React.useState(null);
	const nevigate = useNavigate();
	async function fetchProduct(id) {
		let res = await axios.get(
			`https://heavenly-brief-antarctopelta.glitch.me/cars/${id}`
		);
		setProduct(res.data);
	}
	useEffect(() => {
		fetchProduct(id);
	}, []);

	console.log("product : ", product);

	if (!product)
		return (
			<Center
				maxW={{ base: "100%", md: "60%", lg: "75%" }}
				mt={"1rem"}
				mb={"5rem"}
				mx='auto'>
				<Box
					maxW={{ base: "100%", md: "80%" }}
					mx='auto'
					mt={"5rem"}
					borderRadius={"lg"}
					p={10}
					 h='80vh'
					>
					<CardSkeleton2 />
				</Box>
			</Center>
		);
	console.log("product : ", product.image);
	return (
		<>
			<Center
				maxW={{ base: "100%", md: "60%", lg: "75%" }}
				mt={"1rem"}
				mb={"5rem"}
				mx='auto'>
				<Box
					maxW={{ base: "100%", md: "80%" }}
					mx='auto'
					mt={"5rem"}
					bg={useColorModeValue("gray.100", "black")}
					borderRadius={"lg"}
					p={10}>
					<Grid
						// border={{ base: "1px solid red", md: "1px solid green" }}
						templateColumns={{
							base: "repeat(1,1fr)",
							md: "repeat(3,1fr)",
						}}
						templateRows={{
							base: "repeat(3,1fr)",
							md: "repeat(1,1fr)",
						}}
						gap={4}
						mt={"2rem"}
						mb={"2rem"}>
						<GridItem>
							<Image
								boxShadow={"2xl"}
								src={product?.image[0]?.src}
								alt={product.name}
							/>
						</GridItem>
						<GridItem>
							<Image
								boxShadow={"2xl"}
								src={product?.image[0]?.side}
								alt={product.name}
							/>
						</GridItem>
						<GridItem>
							<Image
								boxShadow={"2xl"}
								src={product?.image[0]?.back}
								alt={product.name}
							/>
						</GridItem>
					</Grid>
					<Divider orientation='vertical' />
					<VStack>
						<Stack
							direction={{ base: "column", md: "row" }}
							spacing={{ base: 2, md: 4 }}
							// border='1px solid red'
						>
							<Card
								bg={useColorModeValue("white", "#121212")}
								boxShadow={"2xl"}
								p={1}>
								<CardHeader>
									<Heading size='md'>{product.title}</Heading>
								</CardHeader>

								<CardBody>
									<Stack
										divider={<StackDivider />}
										spacing='4'>
										<Box>
											<Heading
												size='xs'
												textTransform='uppercase'>
												Price
											</Heading>
											<Text pt='2' fontSize='sm'>
												<Stat>
													<StatNumber>
														£{product.price}
													</StatNumber>
													<StatHelpText>
														Feb 12 - Feb 28
													</StatHelpText>
												</Stat>
											</Text>
										</Box>
										<Box>
											<Heading
												size='xs'
												textTransform='uppercase'>
												Mileage
											</Heading>
											<Text pt='2' fontSize='sm'>
												<Stat>
													<StatLabel>
														Good at price
													</StatLabel>
													<StatNumber>
														345,670
													</StatNumber>
													<StatHelpText>
														<StatArrow type='increase' />
														23.36%
													</StatHelpText>
												</Stat>
											</Text>
										</Box>
										<Box>
											<Heading
												size='xs'
												textTransform='uppercase'>
												Color availability
											</Heading>
											<Text pt='2' fontSize='sm'>
												<Stat>
													<StatNumber>
														{product?.color}
													</StatNumber>
													<StatHelpText>
														<StatArrow type='decrease' />
														9.05%
													</StatHelpText>
												</Stat>
											</Text>
										</Box>
									</Stack>
								</CardBody>
							</Card>
							<Card
								bg={useColorModeValue("white", "#121212")}
								boxShadow={"2xl"}>
								<CardBody>
									<Stack
										divider={<StackDivider />}
										spacing='5'>
										<Box>
											<Heading
												size='xs'
												textTransform='uppercase'>
												Loan terms
											</Heading>
											<Text pt='2' fontSize='sm'>
												Estimated Loan term, monthly
												payment and APR are all based on
												approved credit. Your actual
												APR, monthly payment and loan
												term could change depending on
												your actual credit and amount
												financed.
											</Text>
										</Box>
										<Box>
											<Heading
												size='xs'
												textTransform='uppercase'>
												Note have to look
											</Heading>
											<Text pt='2' fontSize='sm'>
												Please note: If SiriusXM is
												available as one of the
												entertainment features on the
												pre-owned vehicle, SiriusXM
												Satellite radio trial duration
												with used vehicle purchase is
												only for 3 months, irrespective
												of what shows in the details
												below.
											</Text>
										</Box>
										<Box>
											<Heading
												size='xs'
												textTransform='uppercase'>
												Highlighted Features
											</Heading>
											<List spacing={3} mt={2}>
												<ListItem>
													<ListIcon
														as={MdCheckCircle}
														color='green.500'
													/>
													Navigation system Lane
													departure
												</ListItem>
												<ListItem>
													<ListIcon
														as={MdCheckCircle}
														color='green.500'
													/>
													Leather upholstery Automatic
												</ListItem>
												<ListItem>
													<ListIcon
														as={MdCheckCircle}
														color='green.500'
													/>
													temperature control
													Emergency
												</ListItem>
												{/* You can also use custom icons from react-icons */}
												<ListItem>
													<ListIcon
														as={MdSettings}
														color='green.500'
													/>
													communication system Power
													moonroof
												</ListItem>
												<ListItem>
													<ListIcon
														as={MdSettings}
														color='green.500'
													/>
													Wireless phone connectivity
												</ListItem>
											</List>
											<Divider mt={4} mb={4} />
											<Box>
												<Heading
													size='xs'
													textTransform='uppercase'>
													Dealer Notes
												</Heading>
												<Text pt='2' fontSize='sm'>
													** Prices do not include
													tax, tag, and title fees,
													and $150 dealer
													documentation fee.
												</Text>
											</Box>
										</Box>
									</Stack>
								</CardBody>
							</Card>
						</Stack>
					</VStack>
				</Box>
			</Center>
			<Center mb={12} mt={-12}>
				<Button onClick={() => nevigate("/booking")}>
					Continue &nbsp;
					<ExternalLinkIcon />
				</Button>
			</Center>
		</>
	);
};
export default ProductPage;
