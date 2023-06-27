import { View, TouchableOpacity } from 'react-native';
import { Dialog } from '@rneui/themed';
import { useState } from 'react';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const WorkoutModal = ({ onSubmit, cardId }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const [openPicker, setOpenPicker] = useState(false);
	const [focusValue, setFocusValue] = useState(null);
	const [focuses, setFocuses] = useState([
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
	]);

	const handleSubmit = () => {
		const newTitle = {
			focus: focusValue,
			date: date.toLocaleDateString('en-US'),
		};
		onSubmit(newTitle);
		setModalOpen(false);
		console.log(newTitle);
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
					setOpenPicker(false);
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
									open={openPicker}
									value={focusValue}
									items={focuses.sort(focusSorter)}
									setOpen={setOpenPicker}
									setValue={setFocusValue}
									setItems={setFocuses}
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
