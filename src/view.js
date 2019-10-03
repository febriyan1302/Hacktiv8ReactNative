import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import {db} from './config';
import Icon from 'react-native-vector-icons/dist/Entypo';

const ViewData = () => {

    let dataFirebase = db.ref('items');
    const [data, setData] = useState();
    const [del, setDel] = useState();

    useEffect(() => {
        dataFirebase.on('value', snapshot=>{
            let data = snapshot.val();
            let items = Object.values(data);
            let key = Object.keys(data);
            // console.log(key);
            setData(items);
            setDel(key);
        })
    }, [setData, setDel]);

    console.log(del);
    // db.ref('/items/'+'-LqF_Q8fREXivYG7Ris5').remove()
    return(
        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={{
                        paddingVertical: 15,
                        paddingHorizontal: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text style={{fontSize: 20 , paddingLeft: 10, paddingTop: 10}}>{item.name}</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Update')}>
                            <Icon name="edit" size={20} />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => db.ref('/items/'+del[index]).remove()}>
                            <Icon name="trash" size={20} />
                        </TouchableHighlight>
                    </View>
                )}
            />
        </View>
    )
};

export default ViewData