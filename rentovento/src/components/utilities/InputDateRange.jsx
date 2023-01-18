import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Center,
	Input,
	Badge,
	useColorModeValue,
} from "@chakra-ui/react";
import { DateContext } from "../../context/DateProviderContext";
import DateRangePickerComp from "./DateRangePickerComp";
// import Icon from "react-icon";
import { AiFillCalendar } from "react-icons/ai";
export default function InputDateRange() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { sDate, eDate } = React.useContext(DateContext);
	return (
		<>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}
			<Center
				onClick={onOpen}
				w={"36%"}
				bg={useColorModeValue("white", "#2b2a33")}
				borderLeft={"1px solid #5e5d64"}
				borderRight={"1px solid #5e5d64"}
				h={"50px"}
				display='flex'
				alignItems={"center"}
				// color={useColorModeValue("black", "white")}
				pl={8}>
				{sDate}
				<AiFillCalendar
					size={"65%"}
					borderradius={"50%"}
					color={useColorModeValue("black", "white")}
				/>
			</Center>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset='slideInBottom'
				bg={useColorModeValue("gray.100", "black")}
				size='5xl'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize={"lg"}>
						<Badge colorScheme='purple'>
							Start Date {` : ${sDate}`}
						</Badge>
						<Badge colorScheme='green'>
							End Date {` : ${eDate}`}
						</Badge>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<DateRangePickerComp />
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
