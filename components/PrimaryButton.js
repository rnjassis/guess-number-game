import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({children, onPress}) {
	return  (
		<View style={styles.buttonOutterContainer}>
			<Pressable onPress={onPress} 
				style={({pressed}) => 
					pressed 
					? [  styles.buttonInnerContainer, styles.pressedIOS ] 
					: styles.buttonInnerContainer}
				android_ripple={{color: '#640233'}}>
					<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOutterContainer: {
		margin: 4,
		borderRadius: 28,
		overflow: 'hidden'
	},
	buttonInnerContainer: {
		backgroundColor: '#72063c',
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color:'white',
		textAlign: 'center'
	},
	pressedIOS: {
		opacity: 0.75
	}
});
export default PrimaryButton;
