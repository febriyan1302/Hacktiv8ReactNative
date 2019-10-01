import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button} from 'react-native';
import axios from 'axios';

export default class Budaya extends Component{
    constructor(props) {
        super(props)
        this.state = {
            budaya: []
        };
    }

    componentDidMount() {
        axios.get('http://mhs.rey1024.com/apibudaya/getListCategory.php')
          .then(res => {
            const budaya = res.data;
            // console.log(budaya);
            this.setState({ budaya });
          })
    }

    render() {
        return (
            <View>
              <View style={[{ backgroundColor: "red" }]}>
                <Button
                  title="Kategori Budaya"
                  color="#FF3D00"
                />
              </View>
              <FlatList
                data={this.state.budaya}
                // renderItem={({item}) => <Text>{item.nama}</Text>}
                renderItem={({item}) => 
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Image source = {{ uri: "http://wadaya.rey1024.com/upload/kategori/"+item.gambar }} style={styles.imageView} />
                    <Text style={styles.textView}>{item.nama}</Text>
                  </View>
                }
              />
           </View>
        );
      }
}


const styles = StyleSheet.create({
 
  MainContainer :{
   
      justifyContent: 'center',
      flex:1,
      margin: 5,
      marginTop: (Platform.OS === 'ios') ? 20 : 0,
   
  },
   
  imageView: {
   
      width: '20%',
      height: 100 ,
      margin: 7,
      borderRadius : 50
      // overflow: 'hidden'
   
  },
   
  textView: {
   
      width:'50%', 
      textAlignVertical:'center',
      padding:10,
      color: '#000'
   
  },

  buttonView:{
    height: "50",
    color: "red"
  }
});