import { Text, View } from 'react-native';
import { Button, Dialog, CheckBox, ListItem, Avatar, } from '@rneui/themed';
import { useState } from 'react';



const WorkoutModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Text>Modal body text</Text>
      </Dialog>
    </View>
  );
};

export default WorkoutModal;