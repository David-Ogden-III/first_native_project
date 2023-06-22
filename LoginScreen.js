import { View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    signIn = () => {
        navigation.replace('MainScreen');
        console.log(username);
    };

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}
        >
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder='Username'
                    value={username}
                    onChangeText={text => setusername(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer} >
                <TouchableOpacity
                    onPress={() => signIn()}
                    style={styles.button} >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonOutline]} >
                    <Text style={styles.buttonOutlineText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default LoginScreen;