/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';
import Landing  from './screens/Landing';
import axios from "axios"
import NewsItem from "./components/NewsItem"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './screens/News';
import AddNews from './screens/AddNews';
import { Provider } from 'react-redux';

const Stack  = createNativeStackNavigator()

const App: () => Node = () => {
 




  return (
    // <Provider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Landing'>
    <Stack.Screen name='Landing' component={Landing} />
      <Stack.Screen name='News' component={News} />
      <Stack.Screen name="AddNews" component={AddNews}/>
    </Stack.Navigator>
 
  </NavigationContainer>
  // </Provider>
  );
};



export default App;
//"$ adb -s <device name> reverse tcp:8081 tcp:8081"