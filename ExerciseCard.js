import { View, Text } from 'react-native';
import { Card } from '@rneui/themed';

const ExerciseCard = ({ workoutList, addExercise, exerciseList, onSubmit, cardId, deleteExercise }) => {

    return (
        <>
            {workoutList.id !== 0
                ?
                <View>
                    <Card>
                        <Card.Title>{workoutList.focus}{workoutList.date}</Card.Title>
                        <Card.Divider />
                        <Text>This is the card body</Text>
                    </Card>
                </View>
                :
                <View />
            }
        </>
    )
}

export default ExerciseCard;