import { StyleSheet } from 'react-native';
import { Avatar, Header as HeaderRNE } from '@rneui/themed';
import WorkoutModal from './workoutComponents/WorkoutModal';

const Header = ({ onSubmit, cardId }) => {
	return (
		<HeaderRNE
			backgroundColor='#161616'
			centerComponent={{ text: `Hello, \n Nickname`, style: styles.headerText }}
			placement='left'
			leftComponent={
				<Avatar
					size={40}
					rounded
					title='DO'
					containerStyle={{ backgroundColor: '#313131' }}
				/>
			}
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
