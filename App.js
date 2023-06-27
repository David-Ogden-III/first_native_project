import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainComponent from './screens/MainComponent';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<MainComponent />
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}
