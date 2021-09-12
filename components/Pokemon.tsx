import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Dimensions,
    } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CurrPokemon from './CurrPokemon';

const initialState = {
    name: '',
    id: 0,
    stats: [],
    abilities: [],
    sprites: {
        other: {
            'official-artwork': {
                front_default: "place holder"
            }
        }
    }
}

export default function Pokemon() {
    const [text, setText] = useState('')
    const [pokemon, setPokemon] = useState(initialState)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then(res => {
                setPokemon(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const fetchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data)
                setError('')
                setText('')
            })
            .catch(err => {
                console.log(err)
                setError('Not Found!')
                setText('')
            })
    }

    return (   
        <KeyboardAwareScrollView style={{ height: (Dimensions.get('screen').height), backgroundColor: 'green'}}>
            <View style={styles.screenWrapper}>
                <CurrPokemon pokemon={pokemon} />
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={error ? styles.error : styles.textInput} 
                        placeholder={error ? `${error}` : 'enter a pokemon name or ID'} 
                        value={text}
                        onChangeText={text => setText(text.toLowerCase())}
                    />
                    {text !== '' &&
                        <TouchableOpacity  onPress={() => fetchPokemon()} style={styles.button}>
                            <Text style={styles.buttonText}>Go</Text>
                        </TouchableOpacity>
                    }       
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    screenWrapper: {
        flexDirection: "column",
        backgroundColor: 'black',
        justifyContent: 'space-between'
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#a88220',
        paddingVertical: 10,
    },
    textInput: {
        width: '65%',
        height: 50,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
    },
    error: {
        width: '65%',
        height: 50,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 50,
    },
    button: {
        width: '25%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
    },
    buttonText: {
        textAlign:'center',
        padding: 10,
        fontSize: 18,
    },
})