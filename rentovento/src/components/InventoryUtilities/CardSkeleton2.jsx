import React from "react";
import { Center, HStack, Skeleton, Stack } from "@chakra-ui/react";
const CardSkeleton2 = () => {
	return (
		<div >
			<Center w='50rem' 
      >
				<Skeleton
					height='200px'
					w={["100%", "100%", "100%", "100%"]}
					mb={8}>
					<div>fdfdfd</div>
					<div>fdfdfd</div>
				</Skeleton>
			</Center>

			<HStack  >
				<Stack>
					<Skeleton height='400px' w='160px' />
				</Stack>
				<Skeleton height='400px' w='100%'  />
			</HStack>
		</div>
	);
};

export default CardSkeleton2;
