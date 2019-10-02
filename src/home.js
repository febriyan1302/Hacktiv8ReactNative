import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';

export default class Home extends Component {

    onButtonPress = () => {
        // console.log('Button Pressed!!')
        this.props.navigation.navigate('List')
      }

    render() {
        return(
            <View>
                <Text>
                    This is Home !
                </Text>

                <Button
                    title="Go To List"
                    onPress = { this.onButtonPress }
                />
            </View>
        );
    };
}