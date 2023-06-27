import {
	View,
	TextInput,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
} from 'react-native';
import { useState } from 'react';
import { Button } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const RegisterScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	signIn = () => {
		navigation.replace('MainScreen');
		console.log(firstName);
		console.log(lastName);
		console.log(email);
		console.log(password);
		console.log(confirmPassword);
		resetForm();
	};

	const cancelRegistration = () => {
		resetForm();
		navigation.pop();
	};

	const resetForm = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
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
						placeholder='First Name'
						placeholderTextColor='#BABABA'
						value={firstName}
						onChangeText={(text) => setFirstName(text)}
						style={styles.input}
					/>
					<TextInput
						placeholder='Last Name'
						placeholderTextColor='#BABABA'
						value={lastName}
						onChangeText={(text) => setLastName(text)}
						style={styles.input}
					/>
					<TextInput
						placeholder='Email'
						placeholderTextColor='#BABABA'
						value={email}
						onChangeText={(text) => setEmail(text)}
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
					<TextInput
						placeholder='Confirm Password'
						placeholderTextColor='#BABABA'
						value={confirmPassword}
						onChangeText={(text) => setConfirmPassword(text)}
						style={styles.input}
						secureTextEntry
					/>
				</View>

				<View style={styles.buttonContainer}>
					<Button
						onPress={() => cancelRegistration()}
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
});

export default RegisterScreen;
