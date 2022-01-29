import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight, StatusBar, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import baseUrl from '../utils/helpers';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import NewsItem from '../components/NewsItem';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';


const Landing = ({navigation}) => {
let isfocused = useIsFocused()
    const [news, setNews] = useState();

    const fetchNews = async()=>{
      try {
        let  response = await axios.get(baseUrl+"news")
        setNews(response.data)
        console.log(response.data, "this is the response")
      } catch (error) {
        console.log(error)
      }
    }  
    
    useEffect(()=>{
      if(isfocused){
        fetchNews()
      }
   
    },[])
    
    
    
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle= 'light-content'  />
          <Text style={styles.c}>cc News Today!</Text>
          {!news?
      <View style={styles.activity}>
        <ActivityIndicator size={"large"} color={"green"} />
        <Text>Fetching News</Text>
      </View>:( <>
        
        <FlatList
        data={news}
        renderItem={({item})=><NewsItem  data={item} nav={navigation.navigate} />}
        keyExtractor={item => item.id}
      />

          {/* <ScrollView style={styles.scroll}>
          
          {news&&news.length>0?news.map((e,id)=>
    <NewsItem key={id} data={e} nav={navigation} />
          ):null}
          
          
          {news?<Text>{news.length}</Text>:null}
          </ScrollView> */}
          
          
          </>)}
          <TouchableOpacity style={styles.btn}  onPress={()=>{navigation.navigate("AddNews")}}>
            <View style={styles.iconbutton}>
          <Icon  color={"#fff"}  name='feather' size={30}/>
          <Text style={styles.btntext}>Add News</Text>
            </View>
          </TouchableOpacity>
          
        </SafeAreaView>
      );
    };
    
    
export default Landing;

const styles = StyleSheet.create({
    container:{flex:1,
      display:"flex"
   },
    scroll:{
      backgroundColor:"#eee", 
      width:"100%", 
      height:"50%"
    },
    btn:{
      position:"absolute",
      bottom:30,
      right:10,
    },
    iconbutton:{
        padding:15,
        borderRadius:30,
        backgroundColor:"rgba(26, 137, 23, 1)",
        zIndex:12,
        display:"flex",
        flexDirection:"row",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,
justifyContent:'center',
alignItems:'center',

    },
    btntext:{
      color:"#fff"
    },
    c:{
      alignSelf:"center",
      fontSize:18

    },
    activity:{
      justifyContent:"center",
      alignItems:'center',
      alignSelf:"center",
      flex:1
    }
    
    });
