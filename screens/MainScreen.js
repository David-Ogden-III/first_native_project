import { useState } from 'react';
import ExerciseCard from '../exerciseComponents/ExerciseCard';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import BottomTab from '../BottomTab';
import { Avatar } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearProgress } from '@rneui/base';

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
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					width: '90%',
					paddingTop: 10,
				}}>
				<View>
					<Avatar
						size={48}
						rounded
						title='DO'
						containerStyle={{ backgroundColor: '#313131' }}
					/>
				</View>
				<View style={{ paddingLeft: 16 }}>
					<Text style={{ color: '#FFFFFF', fontSize: 18 }}>Hello,</Text>
					<Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }}>
						David
					</Text>
				</View>
			</View>
			<View
				style={{
					backgroundColor: '#313131',
					width: '90%',
					height: 118,
					alignItems: 'center',
					borderRadius: 24,
					marginTop: 34,
					paddingTop: 22,
				}}>
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: 16,
						fontWeight: 'bold',
						marginBottom: 8,
					}}>
					You've completed 3 workouts this week!
				</Text>
				<Text style={{ color: '#FFFFFF', fontSize: 14, marginBottom: 16 }}>
					75% of your weekly goal is completed!
				</Text>
				<LinearProgress
					value={0.75}
					variant='determinate'
					style={{ width: '85%', height: 8, borderRadius: 100 }}
					color='#EC7D07'
					trackColor='#161616'
				/>
			</View>
			<View
				style={{
					width: '90%',
					paddingTop: 40,
				}}>
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: 20,
						fontWeight: 'bold',
					}}>
					Latest Workouts
				</Text>
			</View>
			<View
				style={{
					width: '90%',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
				}}>
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
			</View>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
				}}>
				<BottomTab navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#161616',
	},
});

export default MainScreen;
