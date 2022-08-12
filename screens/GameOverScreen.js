import { Text, View, Image, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER</Title>
			<View style={styles.imageContainer}>
				<Image source={require('../assets/images/success.png')} style={styles.image}/>
			</View>
			<Text style={styles.summaryText}> The device needed 
				<Text style={styles.highlight}> {roundsNumber} </Text> 
				rounds to guess the number  
				<Text style={styles.highlight}> {userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	imageContainer: {
		borderRadius: 150,
		height: 300,
		width: 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36
	},
	image: {
		width: '100%',
		height: '100%'
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center'
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		marginBottom: 24
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500
	}
});

export default GameOverScreen;
