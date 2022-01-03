import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.fondo }>
      {/* StatusBar para que no se vea la barra de estado */}
      <StatusBar 
        backgroundColor={ styles.fondo.backgroundColor }
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;

