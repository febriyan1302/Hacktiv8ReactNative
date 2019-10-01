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

import React, {Component} from 'react';
import Budaya from './src/rest_budaya';

// type Props = {};
export default class App extends Component {
  render() {
    return (
        <Budaya />
    );
  }
}