import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Header from './components/Header';

import Home from './pages/Home';
import Destination from './pages/Destination';


// Pour forcer l'orientation de l'app en portait
import Orientation from 'react-native-orientation-locker';


// /Pour forcer l'orientation de l'app en portait

const Stack = createStackNavigator();

function App(){

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false,}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Destination" component={Destination} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );

  // return(
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Details" component={Destination} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  // )
}

export default App;
