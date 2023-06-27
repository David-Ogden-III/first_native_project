import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faHouseChimney,
	faBars,
	faMagnifyingGlass,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import WorkoutModal from './workoutComponents/WorkoutModal';

const BottomTab = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<FontAwesomeIcon
					icon={faHouseChimney}
					size={30}
					style={{ color: 'white' }}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Past Workouts')}>
				<FontAwesomeIcon icon={faBars} size={30} style={{ color: 'white' }} />
			</TouchableOpacity>
			<WorkoutModal />
			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					size={30}
					style={{ color: 'white' }}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
				<FontAwesomeIcon icon={faUser} size={30} style={{ color: 'white' }} />
			</TouchableOpacity>
		</View>
	);
};
export default BottomTab;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#313131',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		height: 64,
	},
});
