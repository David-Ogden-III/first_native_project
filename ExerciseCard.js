import { View, Text } from 'react-native';
import { Card, Button } from '@rneui/themed';

const ExerciseCard = ({ workoutList, addExercise, exerciseList, onSubmit, cardId, deleteExercise, navigation }) => {

    return (
        <>
            {workoutList.id !== 0
                ?
                <View>
                    <Card style={{ alignItems: 'center' }}>
                            <Text style={{ justifyContent: 'flex-start' }}>
                                {workoutList.focus}{'\n'}{workoutList.date}
                            </Text>
                            <Button 
                            title='View Workout'
                            onPress={() => navigation.navigate('ExerciseModal')}
                            size='sm' buttonStyle={{ borderWidth: 0, borderRadius: 10 }} style={{ justifyContent: 'flex-end' }} />
                    </Card>
                </View>
                :
                <View />
            }
        </>
    )
}

export default ExerciseCard;