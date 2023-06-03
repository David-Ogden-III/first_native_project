import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainPage from './MainPage';
import Header from './Header';
import { useState } from 'react';

let nextId = 10;
let superNextId = 100

export default function App() {
  const [workoutList, setWorkoutList] = useState([{ id: 0, focus: '', date: '' }])

  const addTitle = (newTitleData) => {
    const newTitle = { id: nextId++, ...newTitleData }
    setWorkoutList([...workoutList, newTitle])
  }

  return (
    <SafeAreaProvider>
      <Header onSubmit={addTitle}/>
      <MainPage />
    </SafeAreaProvider>
  );
};

