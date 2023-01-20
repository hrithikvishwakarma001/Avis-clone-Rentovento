import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Image,
	Portal,
	Modal,
	Badge,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import ModalExample from "./utilities/ModalExample";
import Live from "./utilities/Live";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	// const handleModal = () => {
	//   console.log('handleModal')
	//   return <Modal />
	// };
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "black")} p={1}>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}>
					<NavLink to='/'>
						<Box>
							<Image
								boxSize='320px'
								fit='cover'
								src='/src/assets/RentoVento2.png'
							/>
						</Box>
					</NavLink>
					<Stack
						direction={"row"}
						spacing={5}
						fontSize={"13px"}
						position={"relative"}
						left={220}
						display={{
							base: "none",
							sm: "none",
							md: "none",
							lg: "block",
						}}>
						<Menu>
							<MenuButton>RESERVATIONS</MenuButton>
							<Portal>
								<MenuList fontSize={"13px"}>
									<MenuItem>MAKE A RESERVATION</MenuItem>
									<MenuItem>VIEW / MODIFY / CANCEL</MenuItem>
									<MenuItem>GET E-RECEIPT</MenuItem>
									<MenuItem>AVIS TRIPIT SERVICE</MenuItem>
									<MenuItem>AVIS PRECHECK</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
						<Menu>
							<MenuButton>OFFERS</MenuButton>
							<Portal>
								<MenuList fontSize={"13"}>
									<MenuItem>US OFFERS</MenuItem>
									<MenuItem>INTERNATIONAL OFFERS</MenuItem>
									<MenuItem>PARTNER OFFERS</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
						<Menu>
							<MenuButton>LOCATION</MenuButton>
							<Portal>
								<MenuList fontSize={"13"}>
									<MenuItem>FIND A LOCATION</MenuItem>
									<MenuItem>
										TOP AIRPORT CAR RENTAL LOCATIONS
									</MenuItem>
									<MenuItem>ALL US LOCATIONS</MenuItem>
									<MenuItem>ALL GLOBAL LOCATION</MenuItem>
									<MenuItem>TAVEL GUIDE</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
						<Menu>
							<MenuButton>CARS & SERVICES</MenuButton>
							<Portal>
								<MenuList fontSize={"13"}>
									<MenuItem>AVIS APP</MenuItem>
									<MenuItem>CAT GUIDE</MenuItem>
									<MenuItem>AVISE SIGNATURE SERIES</MenuItem>
									<MenuItem>PRODUCTS & SERVICES</MenuItem>
									<MenuItem>PROTETIONS & COVERAGES</MenuItem>
									<MenuItem>
										MILES, POINTS & PARTNERS
									</MenuItem>
									<MenuItem>
										AVIS FLEX-LONG TERM CAR RENTAL
									</MenuItem>
									<MenuItem>
										MEETING & GROUPS CAR RENTALS
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
						<Menu>
							<MenuButton> BUSINESS RENTALS</MenuButton>
							<Portal>
								<MenuList fontSize={"13"}>
									<MenuItem>
										SMALL & MID-SIZED BUSINESS
									</MenuItem>
									<MenuItem>
										CAR RENTAL AFFILIATE PROGRAM
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
						<NavLink to='/Inventory'>
							<Menu>
								<MenuButton>
									<Flex>
										<Badge colorScheme='purple'>
											CAR SALE
										</Badge>
										<Live />
									</Flex>
								</MenuButton>
							</Menu>
						</NavLink>
						<Menu>
							<MenuButton> HELP</MenuButton>
							<Portal>
								<MenuList fontSize={"13"}>
									<MenuItem>CUSTOMER SERVICE</MenuItem>
									<MenuItem>US FAQS</MenuItem>
									<MenuItem>
										WORLD WIDE TELEPHONE NUMBERS
									</MenuItem>
									<MenuItem>TTY/TDD INFORMATION</MenuItem>
									<MenuItem>GET RECEIPT</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</Stack>
					<Stack
						borderLeft={"1px solid gray"}
						borderRight={"1px solid gray"}
						pt={6}
						pb={6}
						pl={3}
						pr={3}
						direction={"row"}
						spacing={5}
						fontSize={"13px"}
						position={"relative"}
						left={59}>
						<Menu
							display={{
								base: "none",
								sm: "none",
								md: "none",
								lg: "block",
							}}>
							<MenuButton>AVIS PREFERRED</MenuButton>
						</Menu>
						<NavLink to='/login'>
							<Menu>
								<MenuButton>SIGN UP</MenuButton>
							</Menu>
						</NavLink>
						<Menu>
							<ModalExample />
						</Menu>
					</Stack>
					<Flex alignItems={"center"} mr={"15px"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
