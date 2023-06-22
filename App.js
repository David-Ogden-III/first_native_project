import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};