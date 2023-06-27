import Header from '../Header';
import { useState } from 'react';
import ExerciseCard from '../ExerciseCard';
import { ScrollView } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const MainScreen = () => {
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
		<>
			<Header onSubmit={addTitle} />
			<ScrollView scrollEnabled scrollsToTop showsVerticalScrollIndicator>
				{workoutList.map((workout) => (
					<ExerciseCard
						key={workout.id}
						workoutList={workout}
						cardId={workout.id}
						addExercise={addExercise}
						exerciseList={exerciseList}
						onSubmit={addTitle}
						deleteExercise={deleteExercise}
					/>
				))}
			</ScrollView>
		</>
	);
};

export default MainScreen;
