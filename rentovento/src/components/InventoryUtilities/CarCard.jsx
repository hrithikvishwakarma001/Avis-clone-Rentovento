import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Badge,
	TagLabel,
	Tag,
	Button,
} from "@chakra-ui/react";
import CarSlider from "./CarSlider";
import CartQuickLook from "./CartQuickLook";
import React from "react";
const IMAGE =
	"https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3459.jpg?w=360";

export default function CardCard({ images,color,title,price,miles }) {

  const imgArr = []
  for(let x of images){
    imgArr.push(x.src)
    imgArr.push(x.back)
    imgArr.push(x.side)
  }



//  console.log(title)
 let newTitle = title.trim()
 let str = ''
 for(let i=0;i<newTitle.length;i++){
	if(str.length<=30){
		str+=newTitle[i]
	}else{
		str+='...'
		break
	}
 }
 let tempColor= color.trim()
 let newColor = ''
 for(let i=0;i<tempColor.length;i++){
	if(newColor.length<=11){
		newColor+=tempColor[i]
	}else{
		newColor+='...'
		break
	}
	 }
 return (
		<Center py={12}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}
				zIndex={1}>
				<Box
					rounded={"lg"}
					mt={-12}
					pos={"relative"}
					height={"230px"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						// backgroundImage: `url(${IMAGE})`,
						filter: "blur(20px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(20px)",
						},
					}}>
					<Center width={280} bg='white' borderRadius={"lg"}
					boxShadow={"2xl"}
					>
						<CarSlider width={280} height={218} image={imgArr} />
					</Center>
				</Box>
				<Stack pt={10}>
					<Stat>
						<StatLabel>
							<Text
								color={"gray.500"}
								fontSize={"sm"}
								textTransform={"uppercase"}>
								{str}
							</Text>
						</StatLabel>
						<StatNumber>£{price}</StatNumber>
						<StatHelpText>Feb 12 - Feb 28</StatHelpText>
						<StatGroup>
							<Stat>
								<StatLabel>Miles</StatLabel>
								<StatNumber>{miles}</StatNumber>
								<StatHelpText>
									<StatArrow type='increase' />
									{(parseInt(price) / 3).toFixed(2)}%
								</StatHelpText>
							</Stat>
							<Stat>
								{/* <CartQuickLook/> */}
								<StatLabel>Color in stock</StatLabel>
								<StatNumber
									fontFamily='franklin gothic medium'
									fontSize={"xl"}>
									{newColor}
								</StatNumber>
								<StatHelpText>
									<StatArrow type='decrease' />
									{(parseInt(price) / 7).toFixed(2)}%
									<Tag
										size='md'
										colorScheme='green'
										ml='3'
										>
										<TagLabel>Available</TagLabel>
									</Tag>
								</StatHelpText>
							</Stat>
						</StatGroup>
					</Stat>
					<Button
					
					>
						Request More Info
					</Button>
				</Stack>
			</Box>
		</Center>
	);
}
