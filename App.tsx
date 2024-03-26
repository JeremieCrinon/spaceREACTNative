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

import WpPosts from './components/WpPosts';
import Header from './components/Header';


function App(){
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Header />
      
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  
})
