import MainScreen from './MainScreen';
import PastWorkoutsScreen from './PastWorkoutsScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import RegisterScreen from './RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainComponent = () => {
	return (
		<Stack.Navigator initialRouteName='Welcome'>
			<Stack.Screen
				name='Home'
				component={MainScreen}
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen
				name='Past Workouts'
				component={PastWorkoutsScreen}
				options={{ headerShown: false, animationEnabled: false }}
			/>
			<Stack.Screen
				name='Search'
				component={SearchScreen}
				options={{ headerShown: false, animationEnabled: false }}
			/>
			<Stack.Screen
				name='Profile'
				component={ProfileScreen}
				options={{ headerShown: false, animationEnabled: false }}
			/>
			<Stack.Screen
				name='Register'
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Welcome'
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
export default MainComponent;
