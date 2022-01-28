import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React,{useEffect, useState} from 'react';
import axios from "axios"

export default function NewsItem({data,nav}) {
    const [images, setImages] = useState([]);

   const fetchImages = async()=>{

   } 
useEffect(()=>{
 
},[])
  return (
      <TouchableWithoutFeedback  onPress={()=>nav.navigate("News", data)}>

    <View style={styles.container}>
      <Text style={styles.newstitle}>{data.title}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"95%",
        backgroundColor:"#eee",
        padding:5,
        borderRadius:5,
        alignSelf:"center",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
marginVertical:5

    },
    newstitle:{
        color:"black",
        fontSize:16
    
    }
});
