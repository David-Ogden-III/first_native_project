import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<Stack.Navigator initialRouteName='WelcomeScreen'>
					<Stack.Screen
						name='WelcomeScreen'
						component={WelcomeScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='RegisterScreen'
						component={RegisterScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='LoginScreen'
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='MainScreen'
						component={MainScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</SafeAreaProvider>
		</NavigationContainer>
	);
}
