import React, { useState, useEffect } from 'react';
import { ImageBackground, ScrollView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/home_bg.jpg')} resizeMode="cover" style={styles.imageBackground}>

                <Text style={styles.title}>Donc vous voulez voyager dans</Text>
                <Text style={styles.titleSpace}>L'espace</Text>
                <Text style={styles.mainText}>Soyons objectif; si vous voulez aller dans l'espace, vous pouvez véritablement aller dans le véritable espace, et non juste planer sur le bord de celui-ci. Eh bien, asseyez-vous parce que nous allons vous donner une expérience vraiement extraordinaire!</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Destination')} style={styles.cta}>
                    <Text style={styles.ctaText}>Explorer</Text>
                </TouchableOpacity>

            </ImageBackground>
            
        </View>
        
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1, 
    },

    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    title: {
        color: '#D0D6F9',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 125,
        fontFamily: 'BarlowCondensed-Regular',
        fontSize: 16,
        letterSpacing: 1.5,
    },

    titleSpace: {
        fontFamily: 'Bellefair-Regular',
        color: 'white',
        textAlign: 'center',
        fontSize: 76,
        textTransform: 'uppercase',
        marginTop: 25,
    },

    mainText: {
        color: '#D0D6F9',
        textAlign: 'center',
        fontFamily: 'Barlow-Regular',
        fontSize: 15,
        width: '87.2%',
        marginLeft: '6.4%',
        lineHeight: 24,
    },

    cta: {
        width: '40%',
        aspectRatio: '1',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        position: 'absolute',
        bottom: 50,
        left: '30%',
    },

    ctaText: {
        color: '#0B0D17',
        fontFamily: 'Bellefair-Regular',
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
});