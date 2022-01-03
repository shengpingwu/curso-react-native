import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaAzul } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        //flex: 2,
        borderWidth: 10, 
        borderColor: 'white',
        backgroundColor: '#5856D6',
        //alignSelf: 'flex-end',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        //flex: 2,
        borderWidth: 10, 
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        //alignSelf: 'center',
    },
    cajaAzul: {
        width: 100,
        height: 100,
        //flex: 4,
        borderWidth: 10, 
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        //alignSelf: 'flex-start',
    },
});
