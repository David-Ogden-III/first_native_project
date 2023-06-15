import { View, Text, TextInput } from "react-native";
import { Formik } from "formik";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const ExerciseForm = ({ onSubmit, cardId }) => {
    const [lift, setLift] = useState('Squat')

    const handleSubmit = (values) => {
        const newExercise = {
            lift: values.lift,
            weight: values.weight,
            reps: values.reps,
            cardId: cardId
        };
        onSubmit(newExercise);
        console.log(newExercise);
    };

    return (
        <View>
            <Formik
                initialValues={{
                    lift: 'Squat',
                    weight: '',
                    reps: ''
                }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, handleSubmit, handleChange, handleBlur, values }) => (
                    <View>

                        <View>
                            <Picker
                                value={values.lift}
                                selectedValue={lift}
                                onValueChange={(itemValue) => {
                                    setFieldValue('lift', itemValue)
                                    setLift(itemValue)
                                }}
                            >
                                
                                <Picker.Item label='Squat' value='squat' />
                                <Picker.Item label='Bench Press' value='bench' />
                                <Picker.Item label='Row' value='row' />
                            </Picker>
                        </View>

                        <View>
                            <TextInput
                                onChangeText={handleChange('weight')}
                                onBlur={handleBlur('weight')}
                                value={values.weight}
                                keyboardType="number-pad"
                                placeholder="Weight"
                                style={{ borderWidth: 1, padding: 2, margin: 5 }}
                            />
                        </View>

                        <View>
                            <TextInput
                                onChangeText={handleChange('reps')}
                                onBlur={handleBlur('reps')}
                                value={values.reps}
                                keyboardType="number-pad"
                                placeholder="reps"
                                style={{ borderWidth: 1, padding: 2, margin: 5 }}
                            />
                        </View>

                        <View>
                            <Button 
                                onPress={handleSubmit}
                                title='Add'
                                style={{ marginBottom: 5}}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default ExerciseForm;