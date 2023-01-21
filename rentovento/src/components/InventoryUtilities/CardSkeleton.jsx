import React from "react";
import {
	Center,
	HStack,
	Skeleton,
	Stack,
} from "@chakra-ui/react";
const CardSkeleton = () => {
	return (
		<div>
			<Center>
				<Skeleton
					height='200px'
					w={["100%", "100%", "100%", "100%"]}
					mb={8}>
					<div>fdfdfd</div>
					<div>fdfdfd</div>
				</Skeleton>
			</Center>
			<Skeleton height='20px' w='100%' mb='4' />

			<HStack>
				<Stack>
					<Skeleton height='20px' w='160px' />
					<Skeleton height='20px' w='160px' />
					<Skeleton height='20px' w='160px' />
					<Skeleton height='20px' w='160px' />
				</Stack>
				<Stack>
					<Skeleton height='48px' w='160px' />
					<Skeleton height='48px' w='160px' />
				</Stack>
			</HStack>
			<Skeleton height='40px' w='100%' mt='4' />
		</div>
	);
};

export default CardSkeleton;
