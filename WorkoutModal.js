import { View } from 'react-native';
import { Button, Dialog } from '@rneui/themed';
import { useState } from 'react';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'


const WorkoutModal = ({ onSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [focus, setFocus] = useState('Push')
  const [date, setDate] = useState(new Date());

  const handleSubmit = (values) => {
    const newTitle = {
      focus: values.focus,
      date: date.toLocaleDateString('en-US')
    }
    onSubmit(newTitle);
    setModalOpen(false)
    console.log(newTitle)
    setFocus('Push')
    setDate(new Date());
  }

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <View>
        <Button
          title='New workout'
          onPress={() => setModalOpen(true)}
        />
      </View>
      <Dialog
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
      >
        <Dialog.Title title='Select Focus and Date' />
        <Formik
          initialValues={{
            focus: 'Push',
            date: ''
          }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, handleSubmit, values }) => (
            <View>

              <View>
                <Picker
                  value={values.focus}
                  selectedValue={focus}
                  onValueChange={(itemValue) => {
                    setFieldValue('focus', itemValue)
                    setFocus(itemValue)
                  }}
                >
                  <Picker.Item label='Push' value='Push' />
                  <Picker.Item label='Pull' value='Pull' />
                  <Picker.Item label='Legs' value='Legs' />
                </Picker>
              </View>

              <View style={{ alignItems: 'center'}}>
                <DateTimePicker
                  value={date}
                  mode='date'
                  display='default'
                  onChange={onDateChange}
                />
              </View>

              <View>
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            </View>
          )}
        </Formik>
      </Dialog>
    </View>
  );
};

export default WorkoutModal;