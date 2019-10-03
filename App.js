import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import InsertData from './src/insert';
import { createAppContainer } from 'react-navigation';
import ViewData from "./src/view";
import { BottomTabNavigation } from  './src/routes';

import './src/fixTime';

const BottomNavPage = createAppContainer(BottomTabNavigation);

export default class App extends Component{
  render(){
    return(
        <View style={styles.container}>
            <BottomNavPage />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        fontSize: 20,
    }
});