import { View, TextInput } from "react-native";
import { Formik } from "formik";
import { Button } from "@rneui/themed";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';

const ExerciseForm = ({ onSubmit, cardId }) => {
    const [openPicker, setOpenPicker] = useState(false);
    const [liftValue, setLiftValue] = useState(null);
    const [lifts, setLifts] = useState([
        { label: 'Bench Press', value: 'Bench Press' },
        { label: 'Squat', value: 'Squat' },
        { label: 'Shoulder Press', value: 'Shoulder Press' },
        { label: 'Tricep Extension', value: 'Tricep Extension' },
        { label: 'DB Curl', value: 'DB Curl' },
        { label: 'Lat Pulldown', value: 'Lat Pulldown' },
        { label: 'Leg Press', value: 'Leg Press' },
        { label: 'Incline DB Fly', value: 'Incline DB Fly' },
        { label: 'Cable Fly', value: 'Cable Fly' },
        { label: 'Goblet Squat', value: 'Goblet Squat' },
        { label: 'Cable Row', value: 'Cable Row' }
    ]);

    const handleSubmit = (values) => {
        const newExercise = {
            lift: liftValue,
            weight: values.weight,
            reps: values.reps,
            cardId: cardId
        };
        onSubmit(newExercise);
        console.log(`Lift: ${newExercise.lift} \n Reps: ${newExercise.reps} \n Weight: ${newExercise.weight}`);
    };

    const liftSorter = (a,b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      };

    return (
        <View>
            <Formik
                initialValues={{
                    lift: '',
                    weight: '',
                    reps: ''
                }}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, handleBlur, values }) => (
                    <View>

                        <View style={{ padding: 5}}>
                            <DropDownPicker
                                open={openPicker}
                                value={liftValue}
                                items={lifts.sort(liftSorter)}
                                setOpen={setOpenPicker}
                                setValue={setLiftValue}
                                setItems={setLifts}
                                searchable={true}
                                closeAfterSelecting={true}
                                placeholder='Select Exercise...'
                                style={{ marginVertical: 3 }}
                                listMode="SCROLLVIEW"
                            />
                        
                            <TextInput
                                onChangeText={handleChange('weight')}
                                onBlur={handleBlur('weight')}
                                value={values.weight}
                                keyboardType="number-pad"
                                placeholder="Weight"
                                style={{ borderWidth: 1, padding: 2, margin: 5 }}
                            />
                        
                            <TextInput
                                onChangeText={handleChange('reps')}
                                onBlur={handleBlur('reps')}
                                value={values.reps}
                                keyboardType="number-pad"
                                placeholder="reps"
                                style={{ borderWidth: 1, padding: 2, margin: 5 }}
                            />
                       
                            <Button
                                onPress={handleSubmit}
                                title='Add'
                                style={{ marginBottom: 5 }}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default ExerciseForm;