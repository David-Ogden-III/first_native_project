import { View, Modal, StyleSheet, TouchableOpacity, ScrollView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Header as HeaderRNE } from "@rneui/themed";
import { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import AddExercise from "./AddExercise";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const ExerciseModal = ({ onSubmit, exerciseList, workoutList, cardId, deleteExercise }) => {
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
                        centerComponent={{ text: `${workoutList.focus}${' '}${workoutList.date}`, style: styles.heading }}
                        leftComponent={
                            <View>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                                    <FontAwesomeIcon
                                        icon={faCircleXmark}
                                        style={{ color: 'white' }}
                                        size={26}
                                    />
                                </TouchableOpacity>
                            </View>
                        }
                    />

                    <ScrollView
                        scrollEnabled
                        scrollsToTop
                        showsVerticalScrollIndicator
                    >
                        <View>
                            <ExerciseForm onSubmit={onSubmit} cardId={cardId} />
                        </View>

                        <View>
                            <AddExercise exerciseList={exerciseList} cardId={cardId} onSubmit={onSubmit} deleteExercise={deleteExercise} />
                        </View>
                    </ScrollView>
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