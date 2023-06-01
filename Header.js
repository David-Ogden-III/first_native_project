import { StyleSheet } from 'react-native';
import { Header as HeaderRNE, Button } from '@rneui/themed';


const Header = () => {

    return (
        <HeaderRNE
            backgroundColor='#343a40'
            centerComponent={{ text: 'Workout Tracker', style: styles.heading }}
            rightComponent={<Button
                title='New Workout'
                size='sm'
                type='outline'
                color='white'
                buttonStyle={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderwidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 90,
                    marginHorizontal: 0,
                    marginVertical: 0,
                  }}
                  titleStyle={{ color: 'white', marginHorizontal: 0 }}
            />
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
