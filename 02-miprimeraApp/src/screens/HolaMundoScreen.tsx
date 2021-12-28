import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          //blackgroundColor: '#fff',
        }}>
          <Text style={{
            fontSize: 45,
            textAlign: 'center',
          }}>Hola Mundo React</Text>
        </View>
      )
}
