import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Drawer, TabNavigation, BottomTabNavigation, StackNavigator } from  './src/config/routes';

const NavPage = createAppContainer(TabNavigation);
const BottomNavPage = createAppContainer(BottomTabNavigation);
const TopStackNavigator = createAppContainer(StackNavigator);

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        {/*<TopStackNavigator />*/}
        <BottomNavPage />
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