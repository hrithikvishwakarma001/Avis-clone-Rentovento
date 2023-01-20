import SimpleImageSlider from "react-simple-image-slider";


const CarSlider = ({width,height,image}) => {
	return (
		<div>
			<SimpleImageSlider
				bgColor='white'
				width={width}
				height={height}
				images={image}
				showNavs={true}
				navSize={28}
				navMargin={10}
				autoPlay
				// autoPlayDelay={1000}
			/>
		</div>
	);
};

export default CarSlider;