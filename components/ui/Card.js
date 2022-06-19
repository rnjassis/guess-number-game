import { View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function Card({children}) {
	return (
		<View style={styles.card}>{children}</View>

	);
}

const styles = StyleSheet.create({
	card: {
			padding: 16,
			marginTop: 36,
			backgroundColor: Colors.primary800,
			marginHorizontal: 24,
			borderRadius: 8,
			elevation: 16,
			shadowColor: 'black',
			shadowOffset: { width: 2, height: 2 },
			shadowRadius: 6,
			shadowOpacity: 0.25,
			justifyContent: 'center',
			alignItems: 'center'
		},

})
export default Card;
