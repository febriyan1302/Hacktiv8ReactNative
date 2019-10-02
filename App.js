import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Drawer } from  './src/config/routes';

const NavPage = createAppContainer(Drawer);

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <NavPage />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});