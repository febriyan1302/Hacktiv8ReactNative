import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert, StyleSheet
} from 'react-native';
import {db} from './config';

const InsertData = () => {

    let [name, setName] = useState("");
    let addItem = item => {
        db.ref('/items').push({
            name: item
        })
    };
    let handleSubmit = () => {
        addItem(name);
        Alert.alert(name);
    };

    return(
        <View>
            <Text style={styles.text}>Insert Name</Text>
            <TextInput
                style={styles.text}
                placeholder="Masukkan Nama"
                onChangeText={value=>setName(value)}>
            </TextInput>
            <Button
                style={{fontSize: 20}}
                title={"Masukkan Data"}
                onPress={handleSubmit}>
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10
    }
});

export default InsertData