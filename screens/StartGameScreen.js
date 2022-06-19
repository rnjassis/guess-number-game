import { TextInput, Text, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}) {
	const[enteredNumber, setEnteredNumber] = useState('');

	function numberInputHandler(inputText) {
		setEnteredNumber(inputText);
	};

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >= 99) {
			Alert.alert('Invalid Number', 'Number has to be between 1 and 99.', 
				[{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
			);
			return;
		}
		onPickNumber(chosenNumber);
	};

	return (
		<View style={styles.rootContainer}>
			<Title>Guess the number</Title>
			<Card>
					<InstructionText>Enter a number</InstructionText>
					<TextInput style={styles.numberInput} 
					maxLength={2} 
					keyboardType="number-pad" 
					autoCapitalize="none" 
					autoCorrect={false} 
					onChangeText={numberInputHandler}
					value={enteredNumber}/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

//elevation only works on Android and shadow* only works on iOS
const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center'
	},
	numberInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		fontWeight: 'bold',
		width: 50,
		textAlign: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1
	}
});

export default StartGameScreen;
