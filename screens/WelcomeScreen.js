import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@rneui/themed';

const WelcomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ alignItems: 'center' }}>
				<Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFFFFF' }}>
					FitTrack
				</Text>

				<FontAwesomeIcon
					icon={faDumbbell}
					style={{ color: '#EC7D07' }}
					size={200}
				/>

				<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>
					Track & Improve Your Fitness
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					onPress={() => navigation.navigate('LoginScreen')}
					buttonStyle={styles.outlineButton}
					title='Login'
					titleStyle={styles.outlineButtonText}
					containerStyle={styles.individualButtonsContainer}
				/>
				<Button
					onPress={() => navigation.navigate('RegisterScreen')}
					buttonStyle={styles.solidButton}
					title='Register'
					titleStyle={styles.solidButtonText}
					containerStyle={styles.individualButtonsContainer}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#161616',
	},
	buttonContainer: {
		alignItems: 'center',
		paddingTop: 48,
		width: '80%',
	},
	individualButtonsContainer: {
		width: '100%',
		marginVertical: 15,
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

export default WelcomeScreen;
