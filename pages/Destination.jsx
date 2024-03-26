import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

function Destination(){
    return (
        <ScrollView style={{backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>Hello Word! From Destination.</Text>
        </ScrollView>
        
    )
}

export default Destination;