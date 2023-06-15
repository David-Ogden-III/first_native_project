import { View, Text } from 'react-native';
import { Card } from '@rneui/themed';
import ExerciseModal from './ExerciseModal';

const ExerciseCard = ({ workoutList, addExercise, exerciseList, cardId, deleteExercise }) => {

    return (
        <>
            {workoutList.id !== 0
                ?
                <View>
                    <Card style={{ alignItems: 'center' }}>
                            <Text style={{ justifyContent: 'flex-start' }}>
                                {workoutList.focus}{'\n'}{workoutList.date}
                            </Text>
                            <ExerciseModal onSubmit={addExercise} workoutList={workoutList} exerciseList={exerciseList} cardId={cardId} deleteExercise={deleteExercise} />
                    </Card>
                </View>
                :
                <View />
            }
        </>
    )
}

export default ExerciseCard;