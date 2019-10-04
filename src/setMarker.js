import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken("pk.eyJ1IjoiZmVicml5YW4xMzAyIiwiYSI6ImNrMWJqeDJ3djA0aHYzYm55c202eW5zZmsifQ.7wtlDVbxgmN6dtdcm4AMiA");

const SetMarker = () => {
    const listcoordinatest = [
        [-73.98330688476561, 40.76975180901395],
        [-73.96682739257812, 40.761560925502806],
        [-74.00751113891602, 40.746346606483826],
        [-73.95343780517578, 40.7849607714286],
        [-73.99017333984375, 40.71135347314246],
        [-73.98880004882812, 40.758960433915284],
        [-73.96064758300781, 40.718379593199494],
        [-73.95172119140624, 40.82731951134558],
        [-73.9829635620117, 40.769101775774935],
        [-73.9822769165039, 40.76273111352534],
        [-73.98571014404297, 40.748947591479705]
    ];

    const renderAnotasions = () => {
        const items = [];
        for(let i=0; i<listcoordinatest.length; i++){
            const title = `Longitude: ${listcoordinatest[i][0]} Latitude: ${listcoordinatest[i][1]}`;
            const id = `pointAnnotation${i}`;

            items.push(
                <MapboxGL.PointAnnotation
                    key={id}
                    id={id}
                    coordinate={listcoordinatest[i]}
                    title={"this is a point ann"}
                >
                    {/*<Image*/}
                    {/*    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}*/}
                    {/*    style={styles.marker}*/}
                    {/*/>*/}
                </MapboxGL.PointAnnotation>
            )
        }

        return items
    };

    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView
                    style={styles.map}
                >
                    <MapboxGL.Camera zoomLevel={10}
                                     centerCoordinate={listcoordinatest[0]}>
                    </MapboxGL.Camera>
                    {renderAnotasions()}
                </MapboxGL.MapView>
            </View>
            {/*{renderAnotasions()}*/}
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        height: "100%",
        width: "100%",
    },
    map: {
        flex: 1,
    },
    marker: {
        flex: 1,
        resizeMode: 'contain',
        width: 25,
        height: 25
    }
});

export default SetMarker