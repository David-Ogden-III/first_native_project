import { StyleSheet } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';
import WorkoutModal from './workoutComponents/WorkoutModal';

const Header = ({ onSubmit, cardId }) => {
	return (
		<HeaderRNE
			backgroundColor='#161616'
			leftComponent={{ text: 'Workout Tracker', style: styles.headerText }}
		/>
	);
};

const styles = StyleSheet.create({
	headerText: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
	},
});

export default Header;
