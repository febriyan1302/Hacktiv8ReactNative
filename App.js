// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import ImagesExample from './image_example.js';
// import ImageDesc from './image_desc';
// import Content from './content';
// import Frisbee from './rest_api';

// export default class HelloWorldApp extends Component{
//   render(){
//     return(
//       <View>
//         {/* <ImagesExample />
//         <ImageDesc />
//         <Content /> */}

//         <Text>Test Rest !</Text>
//         <Text>{ Frisbee }</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   baseText: {
//     flex: 1, 
//     justifyContent: "center", 
//     alignItems:"center"
//   },
// })

// import React from 'react';
// import { Button, Icon, ThemeProvider } from 'react-native-elements';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Icon from 'react-native-vector-icons/AntDesign';
// // import Icon from "react-native-vector-icons/AntDesign";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <Button 
//         icon={
//           <Icon
//             name="aperture"
//             size={25}
//             color="white"
//           />
//         }
//         title=" Home" 
//       />
//     </ThemeProvider>
//   );
// };

// export default App;

// import React, {Component} from 'react';
// import Budaya from './src/rest_budaya';

// // type Props = {};
// export default class App extends Component {
//   render() {
//     return (
//         <Budaya />
//     );
//   }
// }

// ================= SWIPE GESTURE
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, RectButton } from 'react-native';
import ListItem, { Separator } from './src/listitem';
import { colors } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={goods}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem 
              {...item}
              onSwipeFromLeft={() => alert('swiped from left')}
              OnRightPress={() => alert('pressed right')}
            />
            // <Text>{item.text}</Text>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
  }
}

const goods = [
  {"id": '0', "text": "Soap"},
  {"id": '1', "text": "Shampo"},
  {"id": '2', "text": "Conditioner"},
  {"id": '3', "text": "Toothpaste"},
  {"id": '4', "text": "Teeth Brush"}
];