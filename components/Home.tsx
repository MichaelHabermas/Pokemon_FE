import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {

    return (
        <ImageBackground source={require('../images/umbreon.jpg')} resizeMode='center' style={styles.bgImg}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Pokemans</Text>
            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.push("Pokemon")}>
                    <Text style={styles.buttonText}>Enter</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        alignItems: 'center'
    },
    titleWrap: {
        position: 'absolute',
        top:'10%',
        width: '80%',
        shadowColor: '#a88220', 
        borderColor: '#a88220',
        borderWidth: 3,
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: .8,
        shadowRadius: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#a88220',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        padding: 5,
    },
    wrapper: {
        width: '80%', 
        position: "absolute",
        bottom: '10%',
        paddingVertical: 10,
        backgroundColor: '#a88220',
        color: '#FFF',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
  });
