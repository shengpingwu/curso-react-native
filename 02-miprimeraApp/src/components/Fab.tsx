import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string,
    position?: 'LEFT' | 'RIGHT',
    onPress: () => void,    
}
export const Fab = ({title, onPress, position = 'RIGHT'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity  
                activeOpacity={0.8}
                style={[
                    styles.fabLocation,
                    (position === 'RIGHT')
                    ? styles.fabLocationBorderRight
                    : styles.fabLocationBorderLeft
                ]}
                onPress={() => onPress()}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View  
                style={[
                    styles.fabLocation,
                    (position === 'RIGHT')
                    ? styles.fabLocationBorderRight
                    : styles.fabLocationBorderLeft
                ]}
            >
                <TouchableNativeFeedback onPress={() => onPress()}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
        </View>
        )
    }
    return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({

    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    fabLocationBorderRight: {
        right: 25,
    },
    fabLocationBorderLeft: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})
