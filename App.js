import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Header';
import { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import { ScrollView } from 'react-native';

let nextId = 10;
let superNextId = 100

export default function App() {
  const [workoutList, setWorkoutList] = useState([{ id: 0, focus: '', date: '' }])
  const [exerciseList, setExerciseList] = useState([{ id: 0, lift: '', weight: '', reps: '' }])

  const addTitle = (newTitleData) => {
    const newTitle = { id: nextId++, ...newTitleData }
    setWorkoutList([...workoutList, newTitle])
  }

  const addExercise = (newExerciseData) => {
    const newExercise = { id: superNextId++, ...newExerciseData }
    setExerciseList([...exerciseList, newExercise])
  }

  const deleteExercise = (idToDelete) => {
    setExerciseList(exerciseList.filter(exercise => exercise.id !== idToDelete))
  }

  return (
    <SafeAreaProvider>
      
        <Header onSubmit={addTitle} />
        <ScrollView scrollEnabled>
        {workoutList.map(workout =>
          <ExerciseCard
            key={workout.id}
            workoutList={workout}
            cardId={workout.id}
            addExercise={addExercise}
            exerciseList={exerciseList} onSubmit={addTitle}
            deleteExercise={deleteExercise}
          />
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
};