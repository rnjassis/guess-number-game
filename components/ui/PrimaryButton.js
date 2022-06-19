import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPress}) {
	return  (
		<View style={styles.buttonOutterContainer}>
			<Pressable onPress={onPress} 
				style={({pressed}) => 
					pressed 
					? [  styles.buttonInnerContainer, styles.pressedIOS ] 
					: styles.buttonInnerContainer}
				android_ripple={{color: Colors.primary600}}>
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
		backgroundColor: Colors.primary500,
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
