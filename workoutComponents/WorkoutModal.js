import { View, TouchableOpacity } from 'react-native';
import { Dialog } from '@rneui/themed';
import { useState } from 'react';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addTitle, togglePicker } from '../redux/slices/workoutSlice';

const WorkoutModal = ({ onSubmit }) => {
	const title = useSelector((state) => state.workoutInfo.id);
	const focus = useSelector((state) => state.workoutInfo.focus);
	const dateDate = useSelector((state) => state.workoutInfo.date);
	const picker = useSelector((state) => state.workoutInfo.picker);
	const items = useSelector((state) => state.workoutInfo.items);
	const dispatch = useDispatch();

	const [modalOpen, setModalOpen] = useState(false);

	const [date, setDate] = useState(new Date());
	const [focusValue, setFocusValue] = useState(null);

	const handleSubmit = () => {
		const newTitle = {
			focus: focusValue,
			date: date.toLocaleDateString('en-US'),
		};
		onSubmit(newTitle);
		setModalOpen(false);
		setDate(new Date());
		setFocusValue('');
	};

	const onDateChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setDate(currentDate);
	};

	const focusSorter = (a, b) => {
		if (a.label < b.label) {
			return -1;
		}
		if (a.label > b.label) {
			return 1;
		}
		return 0;
	};

	return (
		<View>
			<View>
				<TouchableOpacity onPress={() => setModalOpen(true)}>
					<FontAwesomeIcon
						icon={faCirclePlus}
						size={40}
						style={{ color: '#EC7D07' }}
					/>
				</TouchableOpacity>
			</View>
			<Dialog
				isVisible={modalOpen}
				onBackdropPress={() => {
					setModalOpen(false);
					setDate(new Date());
					setFocusValue('');
				}}>
				<Dialog.Title title='Select Focus and Date' />
				<Formik
					initialValues={{
						focus: '',
						date: '',
					}}
					onSubmit={handleSubmit}>
					{({ handleSubmit }) => (
						<View>
							<View style={{ alignItems: 'center' }}>
								<DropDownPicker
									open={picker}
									value={focusValue}
									items={items}
									setOpen={() => dispatch(togglePicker())}
									setValue={setFocusValue}
									searchable={true}
									closeAfterSelecting={true}
									placeholder='Select Focus...'
									style={{ marginVertical: 3 }}
								/>

								<DateTimePicker
									value={date}
									onChange={onDateChange}
									style={{ marginVertical: 3 }}
								/>

								<Dialog.Button
									onPress={handleSubmit}
									title='Submit'
									buttonStyle={{ marginTop: 3 }}
								/>
							</View>
						</View>
					)}
				</Formik>
			</Dialog>
		</View>
	);
};

export default WorkoutModal;
