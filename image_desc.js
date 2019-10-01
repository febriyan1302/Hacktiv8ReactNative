import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const ImageDesc = () => (
    <Text style={ styles.position }>Foto: Instagram</Text>
)

const styles = StyleSheet.create({
    position: {
        margin: 10,
        fontSize: 20,
    }
})

export default ImageDesc
