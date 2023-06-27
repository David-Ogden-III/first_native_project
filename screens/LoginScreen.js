import {
	View,
	TextInput,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
} from 'react-native';
import { useState } from 'react';
import { Button, CheckBox, Image } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [checked, setChecked] = useState(false);

	const toggleCheckbox = () => setChecked(!checked);

	const signIn = () => {
		navigation.replace('MainScreen');
		console.log(username);
		console.log(password);
		console.log(checked);
		resetForm();
	};

	const cancelLogin = () => {
		resetForm();
		navigation.pop();
	};

	const resetForm = () => {
		setUsername('');
		setPassword('');
	};

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<View
				style={{
					flex: 1,
					backgroundColor: '#313131',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					borderRadius: 24,
				}}>
				<FontAwesomeIcon
					icon={faDumbbell}
					style={{ color: '#EC7D07' }}
					size={120}
				/>
				<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }}>
					FitTrack
				</Text>
				<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>
					Track your fitness progress with ease!
				</Text>
			</View>

			<View
				style={{
					flex: 3,
					width: '80%',
					paddingTop: 60,
				}}>
				<View style={{}}>
					<TextInput
						placeholder='Username'
						placeholderTextColor='#BABABA'
						value={username}
						onChangeText={(text) => setUsername(text)}
						style={styles.input}
					/>
					<TextInput
						placeholder='Password'
						placeholderTextColor='#BABABA'
						value={password}
						onChangeText={(text) => setPassword(text)}
						style={styles.input}
						secureTextEntry
					/>
					<CheckBox
						checked={checked}
						onPress={toggleCheckbox}
						iconType='material-community'
						checkedIcon='checkbox-marked'
						uncheckedIcon='checkbox-blank-outline'
						checkedColor='#EC7D07'
						textStyle={styles.checkBoxText}
						title='Remember Me'
						containerStyle={styles.checkBoxContainer}
					/>
				</View>

				<View style={styles.buttonContainer}>
					<Button
						onPress={() => cancelLogin()}
						buttonStyle={styles.outlineButton}
						title='Cancel'
						titleStyle={styles.outlineButtonText}
						containerStyle={styles.individualButtonsContainer}
					/>
					<Button
						onPress={() => signIn()}
						buttonStyle={styles.solidButton}
						title='Sign In'
						titleStyle={styles.solidButtonText}
						containerStyle={styles.individualButtonsContainer}
					/>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#161616',
	},
	inputContainer: {},
	input: {
		backgroundColor: '#313131',
		borderRadius: 24,
		color: '#BABABA',
		height: 60,
		fontSize: 16,
		marginVertical: 10,
		paddingLeft: 20,
	},
	buttonContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingTop: 48,
	},
	individualButtonsContainer: {
		width: '45%',
		height: '100%',
	},
	solidButton: {
		backgroundColor: '#EC7D07',
		borderRadius: 24,
		alignItems: 'center',
		padding: 15,
		borderColor: '#EC7D07',
		borderWidth: 2,
	},
	solidButtonText: {
		color: '#313131',
		fontWeight: '700',
		fontSize: 16,
	},
	outlineButton: {
		backgroundColor: '#313131',
		borderRadius: 24,
		alignItems: 'center',
		padding: 15,
		borderColor: '#EC7D07',
		borderWidth: 2,
	},
	outlineButtonText: {
		color: '#BABABA',
		fontWeight: 'bold',
		fontSize: 16,
	},
	checkBoxText: {
		color: '#BABABA',
		fontSize: 14,
	},
	checkBoxContainer: {
		backgroundColor: '#161616',
	},
});

export default LoginScreen;
