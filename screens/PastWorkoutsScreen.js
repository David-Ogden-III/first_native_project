import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ExerciseCard from '../exerciseComponents/ExerciseCard';
import BottomTab from '../BottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';

const PastWorkoutsScreen = ({ navigation }) => {
	const [search, setSearch] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					alignItems: 'flex-start',
					width: '90%',
					paddingTop: 10,
				}}>
				<Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }}>
					Past Workouts
				</Text>
			</View>

			<View
				style={{
					width: '90%',
					paddingTop: 10,
				}}>
				<SearchBar
					value={search}
					onChangeText={(search) => setSearch(search)}
					placeholder='Search Previous Workouts'
					containerStyle={{
						width: '100%',
						borderRadius: 24,
						backgroundColor: '#313131',
					}}
					inputContainerStyle={{
						borderRadius: 24,
						backgroundColor: '#313131',
						width: '100%',
					}}
					showCancel
				/>
			</View>

			<ScrollView
				scrollEnabled
				style={{}}
				contentContainerStyle={{
					justifyContent: 'space-evenly',
					width: '90%',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}>
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
				<ExerciseCard />
			</ScrollView>

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
export default PastWorkoutsScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#161616',
	},
});
