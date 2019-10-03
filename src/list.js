import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';
import Budaya from "./rest_budaya";
export default class List extends Component {

    onButtonPress = () => {
        // console.log('Button Pressed!!')
        this.props.navigation.navigate('Home')
      }

    render() {
        return(
            <View>
                <Budaya />
            </View>
        );
    };
}