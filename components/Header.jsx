import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

const screenHeight = Dimensions.get('window').height;

function Header (){
    const navigation = useNavigation();
    const [isViewVisible, setIsViewVisible] = useState(false);

    const toggleView = () => {
        setIsViewVisible(!isViewVisible);
    };

    return (
        <>
            <View style={styles.container}>
                <Image 
                    source={require('../img/logo.png')}
                    style={styles.logo}
                />
                
                <TouchableOpacity onPress={toggleView} style={styles.burger_container}>
                    <View style={!isViewVisible ? styles.burger_line : styles.burger_line_1}></View>
                    <View style={!isViewVisible ? styles.burger_line : styles.burger_line_2}></View>
                    <View style={!isViewVisible ? styles.burger_line : styles.burger_line_3}></View>
                </TouchableOpacity>
            </View>
            {isViewVisible && (
                <BlurView style={styles.burger_inside} blurType="light" blurAmount={3} blurRadius={15}>
                    <View style={styles.burger_inside_nav}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home'), toggleView()}}>
                            <Text style={styles.burger_inside_link}>
                                <Text style={styles.burger_inside_link_bold}>00</Text> Accueil
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Destination'), toggleView()}}>
                            <Text style={styles.burger_inside_link}>
                                <Text style={styles.burger_inside_link_bold}>01</Text> Destination
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Crew'), toggleView()}}>
                            <Text style={styles.burger_inside_link}>
                                <Text style={styles.burger_inside_link_bold}>02</Text> Equipage
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Tech'), toggleView()}}>
                            <Text style={styles.burger_inside_link}>
                                <Text style={styles.burger_inside_link_bold}>03</Text> Technologie
                            </Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            )}
            
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
      width: '87.2%',
      marginLeft: '6.4%',
      marginTop: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1001,
    },
    burger_container: {
        width: '7%',
        aspectRatio: '1.2/1',
        // backgroundColor: 'blue',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        position: 'relative',
    },
    burger_line: {
        backgroundColor: 'white',
        height: 3,
    },

    burger_space: {
        flex: 2,
    },

    burger_inside: {
        position: 'absolute',
        zIndex: 1000,
        width: '67.73%',
        height: screenHeight,
        right: 0,
    },

    burger_inside_nav: {
        marginTop: 100,
        marginLeft: '9.86%',
        height: 150,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    burger_inside_link: {
        fontFamily: 'BarlowCondensed-Regular',
        color: '#FFFFFF',
        fontSize: 16,
        letterSpacing: 1.5,
    },

    burger_inside_link_bold: {
        fontFamily: 'BarlowCondensed-Bold',
    },

    burger_line_2: {
        display: 'none',
    },

    burger_line_1: {
        backgroundColor: 'white',
        height: 3,
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
        width: '100%',
        bottom: '50%',
    },

    burger_line_3: {
        backgroundColor: 'white',
        height: 3,
        transform: [{ rotate: '-45deg' }],
        position: 'absolute',
        width: '100%',
        bottom: '50%',
    }
});

export default Header;