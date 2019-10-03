import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';
import ImagesExample from "./image_example";
import ImageDesc from "./image_desc";
import Content from "./content";
export default class Home extends Component {

    onButtonPress = () => {
        // console.log('Button Pressed!!')
        this.props.navigation.navigate('List')
      }

    render() {
        return(
            <View>

                <ImagesExample/>
                <ImageDesc/>
                <Content/>
                <Text>
                    This is Home !
                </Text>

                {/*<Button*/}
                {/*    title="Go To List"*/}
                {/*    onPress = { this.onButtonPress }*/}
                {/*/>*/}
            </View>
        );
    };
}