import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function CurrPokemon({pokemon}) {
    return (
        <View style={styles.currPokemonWrapper}>
            <Image source={{uri: pokemon.sprites.other['official-artwork'].front_default}} style={styles.img}/>
            <View style={styles.info}>
                <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
                <Text style={styles.id}>- {pokemon.id}</Text>
            </View>
            <View style={styles.stats}>
                {pokemon.stats.map(stat => {
                    return (
                        <Text 
                            key={stat.stat.name} 
                            style={styles.stat}
                        >
                            {stat.stat.name}: {stat.base_stat}
                        </Text>
                    )
                })} 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    currPokemonWrapper: {
        height: (Dimensions.get('screen').height),
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 100,
        overflow: 'visible',
        marginTop: 25,
    },
    info: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10,
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    id: {
        color: 'white',
        marginLeft: 10,
        fontSize: 24,
    },
    stats: {
        color: 'white',
        width: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    stat: {
        color: 'white',
        width: '50%',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    abilities: {
        borderColor: 'white',
        width: '90%',
    },
    ability: {
        color: 'white',
    }
})