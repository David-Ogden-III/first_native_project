import { View, Modal, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';

const ExerciseModal = ({ onSubmit, exerciseList, workoutList, cardId, deleteExercise, editExercise }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View>
                <Button
                    title={'View Workout'}
                    onPress={() => setModalVisible(!modalVisible)}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <SafeAreaProvider>
                    <HeaderRNE
                        backgroundColor='#343a40'
                        centerComponent={{ text: 'Workout Tracker', style: styles.heading }}
                    />
                    <View>
                        <Text>This is the modal</Text>
                    </View>
                    <View>
                        <Button
                            title={'close'}
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </View>
                </SafeAreaProvider>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default ExerciseModal;