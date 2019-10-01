import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    RectButton
} from 'react-native';


// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import { GestureHandler } from 'expo-localization';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        color: '#4a4a4a',
        fontSize: 15,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#e4e4e4',
        marginLeft: 10,
    },
});

export const Separator = () => <View style={styles.separator} />;

const LeftActions = (progress, dragX) => {
    return (
        <View>
            <Text>
                Add to Cart
            </Text>
        </View>
    );
}

const ListItem = ({ text, onSwipeFromLeft, OnRightPress }) => (
    // <Swipeable renderLeftActions = {LeftActions}>
    <TouchableNativeFeedback onPress={() => {alert(text);}} >
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    
    </TouchableNativeFeedback>

);

export default ListItem;
// module.exports = ListItem;