import { Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { DateContext } from '../../context/DateProviderContext';

const SortComp = () => {
  const {setSort} = React.useContext(DateContext)
  const handleChange = (e) => {
   setSort(e);
  }
  return (
		<div>
			<Menu closeOnSelect={false} w='100%'>
				<MenuButton as={Button}>Select your options</MenuButton>
				<MenuList minWidth='240px'
        // bg={useColorModeValue("gray.100", "black")}
        >
					<MenuOptionGroup
						defaultValue='price asc'
						title='Order by price'
						type='radio'
						name='price'
						onChange={handleChange}>
						<MenuItemOption value='price asc'>
							Price : Low To High
						</MenuItemOption>
						<MenuItemOption value='price desc'>
							Price : High To Low
						</MenuItemOption>
						<MenuDivider />
						<MenuOptionGroup
							defaultValue=''
							title='Order by mileage'
							type='radio'
							name='mileage'
							onChange={handleChange}></MenuOptionGroup>
						<MenuItemOption value='miles asc'>
							Mileage : Low To High
						</MenuItemOption>
						<MenuItemOption value='miles desc'>
							Mileage : High To Low
						</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</div>
  );
}

export default SortComp
