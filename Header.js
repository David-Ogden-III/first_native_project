import { StyleSheet } from 'react-native';
import { Header as HeaderRNE, Button } from '@rneui/themed';
import WorkoutModal from './WorkoutModal';


const Header = () => {

    return (
        <HeaderRNE
            backgroundColor='#343a40'
            centerComponent={{ text: 'Workout Tracker', style: styles.heading }}
            rightComponent={
                    <WorkoutModal />
            }
        />
    );
};

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default Header;
