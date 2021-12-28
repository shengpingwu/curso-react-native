import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador} 
            </Text>
            {/*}
            <Button
                title="Click +1"
                onPress={() => {
                    setContador(contador + 1)
                }}
            />
            <Button
                title="Click -1"
                onPress={() => {
                    setContador(contador - 1)
                }}
            />
            */}
            <Fab 
                title="+1"
                position='RIGHT'
                onPress={() => setContador(contador + 1)}
            />
            <Fab 
                title="-1"
                position='LEFT'
                onPress={() => setContador(contador - 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative',
        top: -15,
    },
    buttonplus: {
        backgroundColor: 'red',
        borderRadius: 100,
    },    
})
