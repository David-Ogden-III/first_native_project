import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainPage from './MainPage';
import Header from './Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <MainPage />
    </SafeAreaProvider>
  );
};

