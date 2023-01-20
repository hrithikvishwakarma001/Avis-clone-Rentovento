import React from "react";
import {
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Portal,
  PopoverFooter,
  PopoverArrow,
  useDisclosure,
  IconButton,
  Stack,
  Input,
  FormLabel,
  FormControl,
  ButtonGroup,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";



// export default function CartQuickLook() {
// 	const initRef = React.useRef();
// 	return (
// 		<Popover>
// 			<PopoverTrigger>
// 				<Button>Quick Look</Button>
// 			</PopoverTrigger>
// 			{/* <PopoverTrigger>
// 				<Button>Quick Look</Button>
// 			</PopoverTrigger> */}
// 			<PopoverContent>
// 				<PopoverArrow />
// 				<PopoverCloseButton />
// 				<PopoverHeader>Confirmation!</PopoverHeader>
// 				<PopoverBody zIndex={"1000"}>
// 					Are you sure you want to have that milkshake?
// 				</PopoverBody>
// 			</PopoverContent>
// 		</Popover>
// 	);
// }

// import  FocusLock from "react-focus-lock"


// 1. Create a text input component
const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

// 2. Create the form
const Form = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <TextInput
        label='First name'
        id='first-name'
        ref={firstFieldRef}
        defaultValue='John'
      />
      <TextInput label='Last name' id='last-name' defaultValue='Smith' />
      <ButtonGroup display='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme='teal'>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const CartQuickLook = () => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const firstFieldRef = React.useRef(null);

	return (
		<>
			<Box display='inline-block' mr={3}>
				John Smith
			</Box>
			<Popover
				isOpen={isOpen}
				initialFocusRef={firstFieldRef}
				onOpen={onOpen}
				onClose={onClose}
				placement='right'
				closeOnBlur={false}>
				<PopoverTrigger>
					<IconButton size='sm' icon={<EditIcon />} />
				</PopoverTrigger>
				<PopoverContent p={5}>
					{/* <FocusLock returnFocus persistentFocus={false}> */}
						<PopoverArrow />
						<PopoverCloseButton />
						<Form
							firstFieldRef={firstFieldRef}
							onCancel={onClose}
						/>
					{/* </FocusLock> */}
				</PopoverContent>
			</Popover>
		</>
	);
};

export default CartQuickLook;