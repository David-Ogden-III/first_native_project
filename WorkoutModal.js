import { Text, View, TextInput } from 'react-native';
import { Button, Dialog } from '@rneui/themed';
import { useState } from 'react';
import { Formik } from 'formik';



const WorkoutModal = ({ onSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (values) => {
    const newTitle = {
      focus: values.focus,
      date: values.date
    }
    onSubmit(newTitle);
    setModalOpen(false)
    console.log(newTitle)
  }

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
            focus: '',
            date: ''
          }}
          onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  style={{ borderWidth: 1, padding: 5, margin: 6 }}
                  onChangeText={handleChange('focus')}
                  onBlur={handleBlur('focus')}
                  value={values.focus}
                  placeholder='Choose a Focus'
                />

                <TextInput
                  style={{ borderWidth: 1, padding: 5, marginHorizontal: 6, marginBottom: 6 }}
                  onChangeText={handleChange('date')}
                  onBlur={handleBlur('date')}
                  value={values.date}
                  placeholder='Choose a Date'
                  type='date'
                />
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            )}
        </Formik>
      </Dialog>
    </View>
  );
};

export default WorkoutModal;