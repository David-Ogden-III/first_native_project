// import Header from '../Header';
import { useState } from 'react';
import ExerciseCard from '../exerciseComponents/ExerciseCard';
import { ScrollView, View, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import BottomTab from '../BottomTab';

const MainScreen = ({ navigation }) => {
	const [workoutList, setWorkoutList] = useState([
		{ id: 0, focus: '', date: '' },
	]);
	const [exerciseList, setExerciseList] = useState([
		{ id: 0, lift: '', weight: '', reps: '' },
	]);

	const addTitle = (newTitleData) => {
		const newTitle = { id: uuidv4(), ...newTitleData };
		setWorkoutList([...workoutList, newTitle]);
	};

	const addExercise = (newExerciseData) => {
		const newExercise = { id: uuidv4(), ...newExerciseData };
		setExerciseList([...exerciseList, newExercise]);
	};

	const deleteExercise = (idToDelete) => {
		setExerciseList(
			exerciseList.filter((exercise) => exercise.id !== idToDelete)
		);
	};

	return (
		<View style={styles.container}>
			<View></View>
			<View>
				<BottomTab navigation={navigation} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#161616',
		width: '100%',
	},
});

export default MainScreen;
