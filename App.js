import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import GetLatLong from "./src/getLatLong";
import SetMarker from "./src/setMarker";
// import MapboxGL from '@react-native-mapbox-gl/maps'
//
// const App = () => {
//
//     MapboxGL.setAccessToken("pk.eyJ1IjoiZmVicml5YW4xMzAyIiwiYSI6ImNrMWJqeDJ3djA0aHYzYm55c202eW5zZmsifQ.7wtlDVbxgmN6dtdcm4AMiA");
//
//     return (
//         <View style={styles.page}>
//             <View style={styles.container}>
//                 <MapboxGL.MapView
//                     style={styles.map}
//                 >
//                     <MapboxGL.Camera zoomLevel={11}
//                                      centerCoordinate={[119.952193, -9.690647]}>
//                     </MapboxGL.Camera>
//                 </MapboxGL.MapView>
//             </View>
//         </View>
//     )
// }
//
// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//     },
//     container: {
//         height: '100%',
//         width: '100%',
//     },
//     map: {
//         flex: 1
//     }
// });
// export default App;


// =======================

export default class App extends Component{
    render(){
        return(
            <View style={styles.page}>
                <View style={styles.container}>
                    <SetMarker />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        height: '100%',
        width: '100%',
    },
    map: {
        flex: 1
    }
});