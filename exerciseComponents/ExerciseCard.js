import { View, Text } from 'react-native';
import { Card } from '@rneui/themed';
import ExerciseModal from './ExerciseModal';

const ExerciseCard = ({
	workoutList,
	addExercise,
	exerciseList,
	cardId,
	deleteExercise,
}) => {
	return (
		<View
			style={{
				marginTop: 30,
				borderRadius: 24,
				width: '42.5%',
				height: '33%',
				backgroundColor: '#FFFFFF',
			}}
			wrapperStyle={{ margin: 0, padding: 0 }}>
			<View
				style={{
					height: '100%',
					backgroundColor: '#EC7D07',
					borderRadius: 24,
				}}></View>
			<View
				style={{
					backgroundColor: '#313131',
					width: '100%',
					borderRadius: 24,
					height: 70,
					padding: 15,
					justifyContent: 'center',
					position: 'absolute',
					bottom: 0,
				}}>
				<Text style={{ color: '#FFFFFF', fontSize: 16 }}>Chest</Text>
				<Text style={{ color: '#FFFFFF', fontSize: 12 }}>06/29/23</Text>
			</View>
		</View>
	);
};

export default ExerciseCard;
