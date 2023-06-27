import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const workoutSlice = createSlice({
	name: 'workoutInfo',
	initialState: {
		id: 0,
		focus: '',
		date: '',
	},
	reducers: {
		addTitle: (state) => {
			state.id = uuidv4();
		},
	},
});

export const { addTitle } = workoutSlice.actions;

export default workoutSlice.reducer;
