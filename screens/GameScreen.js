import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons  } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
	if(min === max){
		return min;
	}
	const rndNum = Math.floor(Math.random() * (max-min)) + min;

	if(rndNum === exclude){
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
	const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	{/* 
		Is executed only the first time the component is evaluated. If is removed from ui and re-added later, is executed again.
		if is updated, it will not be executed
	*/}
	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	{/* Check whenever the currentGuess, userNumber or onGameOver changes. If so, run the function */}
	useEffect(() => {
		if(currentGuess === userNumber){
			onGameOver(guessRounds.length);
		}
	},
	[currentGuess, userNumber, onGameOver]);

	function nextGuessHandler(direction) {
		if((direction === 'lower' && currentGuess < userNumber)
		|| (direction === 'greater' && currentGuess > userNumber)){
			Alert.alert('Stop lying!', 'This is wrong!!', [{text: 'Ok', style: 'cancel'}]);
			return;
		}
		if(direction === 'lower'){
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		
		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
		setCurrentGuess(newRndNumber);
		setGuessRounds(previusGuessRounds => [newRndNumber, ...previusGuessRounds]);
	}

	const guessRoundListLenght = guessRounds.length;

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
							<Ionicons name="md-add" size={24} color="white"/>
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
							<Ionicons name="md-remove" size={24} color="white"/>
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View styles={styles.listContainer}>
				{/* This is fine because the list is short
				{guessRounds.map(guessRound =>
					<Text key={guessRound}>{guessRound}</Text>
				)}*/}
				<FlatList 
					data={guessRounds} 
					renderItem={
						(itemData) => ( 
							<GuessLogItem 
								roundNumber={guessRoundListLenght - itemData.index} 
								guess={itemData.item}
							/>
						)} 
					keyExtractor={(item) => item} 
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex:1,
		padding:36
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex:1
	},
	instructionText: {
		marginBottom: 12
	},
	listContainer: {
		flex: 1,
		padding: 16
	}
})

export default GameScreen;
