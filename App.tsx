import 'react-native-gesture-handler';
import React from 'react';
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

import WpPosts from './components/WpPosts';
import Header from './components/Header';

import Home from './pages/Home';
import Destination from './pages/Destination';

const Stack = createStackNavigator();

function App(){
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
