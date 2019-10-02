import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';

export default class List extends Component {

    onButtonPress = () => {
        // console.log('Button Pressed!!')
        this.props.navigation.navigate('Home')
      }

    render() {
        return(
            <View>
                <Text>
                    Ini List
                </Text>

                <Button
                    title="Back to Home"
                    onPress = { this.onButtonPress }
                />
            </View>
        );
    };
}