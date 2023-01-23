import {
	Box,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Flex,
	Tag,
	useColorModeValue,
	Image,
} from "@chakra-ui/react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "black")}
			color={useColorModeValue("gray.700", "gray.200")}>
			<Flex
				align={"center"}
				_before={{
					content: '""',
					borderBottom: "1px solid",
					borderColor: useColorModeValue("gray.200", "gray.700"),
					flexGrow: 1,
					mr: 8,
				}}
				_after={{
					borderBottom: "1px solid",
					borderColor: useColorModeValue("gray.200", "gray.700"),
					flexGrow: 1,
					ml: 8,
				}}>
				{/* <Logo /> */}
			</Flex>
			<Container as={Stack} maxW={"8xl"} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							TOP US DESTINATIONS
						</Text>
						<Stack direction={"row"} align={"center"} spacing={2}>
							<Link href={"#"}>Travel Guides</Link>
							<Tag
								size={"sm"}
								bg={useColorModeValue("green.300", "green.800")}
								ml={2}
								color={"white"}>
								New
							</Tag>
						</Stack>
						<Link href={"#"}>Car Rental Las Vegas</Link>
						<Link href={"#"}>Car Rental Los Angeles</Link>
						<Link href={"#"}>Car Rental Chicago</Link>
						<Link href={"#"}>Car Rental Orlando</Link>
						<Link href={"#"}>Car Rental Miami</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							RENTAL CAR TYPES
						</Text>
						<Link href={"#"}>One-Way Airport Car Rental</Link>
						<Link href={"#"}>Luxury Car Rental</Link>
						<Link href={"#"}>Pickup Truck Rental</Link>
						<Link href={"#"}>Van Rental</Link>
						<Link href={"#"}>SUV Rental</Link>
						<Link href={"#"}>Rental Car Sizes—Sedans</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							AVIS EXTRAS
						</Text>
						<Link href={"#"}>Rental Car Products</Link>
						<Link href={"#"}>Car Rental Services</Link>
						<Link href={"#"}>Protections & Coverages</Link>
						<Link href={"#"}>Loss Damage Waiver</Link>
						<Link href={"#"}>Roadside Assistance</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							AVIS PARTNERS
						</Text>
						<Link href={"#"}>Affiliates</Link>
						<Link href={"#"}>Travel Agents</Link>
						<Link href={"#"}>Military & Veterans</Link>
						<Link href={"#"}>Airline Points Partners</Link>
						<Link href={"#"}>Hotel Points Partners</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							COMPANY INFO
						</Text>
						<Link href={"#"}>About Avis</Link>
						<Link href={"#"}>Best Price Pledge</Link>
						<Link href={"#"}>Avis Careers</Link>
						<Link href={"#"}>Site Map</Link>
						<Link href={"#"}>Lost & Found</Link>
						<Link href={"#"}>We Try Harder</Link>
						<Link href={"#"}>Accessibility</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							SECURITY & PRIVACY
						</Text>
						<Link href={"#"}>Terms Of Use</Link>
						<Link href={"#"}>Privacy Notice</Link>
						<Link href={"#"}>Your Privacy Choices</Link>
						<Link href={"#"}>Copyright Notices</Link>
						<Link href={"#"}>Fraud & Scams</Link>
					</Stack>
				</SimpleGrid>
				<Flex
					width={"full"}
					align={"center"}
					justify={"flex-end"}
					gap={6}
					fontSize={"2xl"}>
					<FaFacebookF />
					<FaTwitter />
					<FaInstagram />
					<FaYoutube />
					<FaLinkedinIn />
				</Flex>
			</Container>
			<Box p='10'>
				<Flex
					align={"center"}
					_before={{
						content: '""',
						borderBottom: "1px solid",
						borderColor: useColorModeValue("gray.200", "gray.700"),
						flexGrow: 1,
						mr: 8,
					}}
					_after={{
						content: '""',
						borderBottom: "1px solid",
						borderColor: useColorModeValue("gray.200", "gray.700"),
						flexGrow: 1,
						ml: 8,
					}}>
					<Image src='https://gdurl.com/Ze-r' w={150} />
				</Flex>
				<Text pt={6} fontSize={"sm"} textAlign={"center"}>
					© 2023 Rentovento Rent A Car System, LLC
				</Text>
			</Box>
		</Box>
	);
}
