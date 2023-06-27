import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainComponent from './screens/MainComponent';

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<MainComponent />
			</SafeAreaProvider>
		</NavigationContainer>
	);
}
