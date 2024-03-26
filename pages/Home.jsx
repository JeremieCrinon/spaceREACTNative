import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

function Home(){
    return (
        <ScrollView style={{backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>Hello Word! From Home.</Text>
        </ScrollView>
        
    )
}

export default Home;