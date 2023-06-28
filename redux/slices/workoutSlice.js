import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const workoutSlice = createSlice({
	name: 'workoutInfo',
	initialState: {
		id: uuidv4(),
		focus: '',
		date: '',
		picker: false,
		items: [
			{ label: 'Shoulders', value: 'Shoulders' },
			{ label: 'Back', value: 'Back' },
			{ label: 'Arms', value: 'Arms' },
			{ label: 'Chest', value: 'Chest' },
			{ label: 'Hamstrings', value: 'Hamstrings' },
			{ label: 'Legs', value: 'Legs' },
			{ label: 'Lower Body', value: 'Lower Body' },
			{ label: 'Pull', value: 'Pull' },
			{ label: 'Push', value: 'Push' },
			{ label: 'Quads', value: 'Quads' },
			{ label: 'Upper Body', value: 'Upper Body' },
		],
		focusValue: null,
	},
	reducers: {
		addTitle: (state) => {
			state.id = uuidv4();
		},
		togglePicker: (state) => {
			state.picker = !state.picker;
		},
	},
});

export const { addTitle, togglePicker } = workoutSlice.actions;

export default workoutSlice.reducer;
