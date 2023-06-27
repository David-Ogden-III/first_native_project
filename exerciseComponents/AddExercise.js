import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

const AddExercise = ({ exerciseList, cardId, deleteExercise }) => {

    const exerciseFilter = exerciseList.filter(
        exercise => exercise.cardId === cardId
    );

    return (
        <View>
            {exerciseFilter.map(exercise => (
                <View key={exercise.id}>
                    {exercise.id !== 0 ?
                        <View>
                            <View>
                                <Text>{exercise.lift}</Text>
                                <Text>{exercise.weight}</Text>
                                <Text>{exercise.reps}</Text>
                            </View>
                            <View>
                                <Button
                                    onPress={() => deleteExercise(exercise.id)}
                                    title={'delete'}
                                    color='error'
                                />
                            </View>
                        </View>
                        :
                        <View />
                    }
                </View>
            ))}
        </View>
    );
};

export default AddExercise;