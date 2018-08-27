// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Create a component
const Header = (props) => {
const { textStyle, viewStyle } = styles; // Just for better looking 

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export { Header };

