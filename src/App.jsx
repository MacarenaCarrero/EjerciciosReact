import Box from './components/box/Box';
import Card from './components/card/Card';

const App = () => {
	return (
		<>
			<Box>
				<Card
					url='/assets/images/sedan.svg'
					h2='SEDANS'
					text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
					button='Learn More'
					color='orange'
				/>
				<Card
					url='/assets/images/suv.svg'
					h2='SUVS'
					text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
					button='Learn More'
					color='blue'
				/>
				<Card
					url='public/assets/images/luxury.svg'
					h2='LUXURY'
					text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
					button='Learn More'
					color='green'
				/>
			</Box>
		</>
	);
};
export default App;
