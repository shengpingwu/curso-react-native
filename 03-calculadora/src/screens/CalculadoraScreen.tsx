import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BtnCalc } from '../components/BtnCalc'
import { styles } from '../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const {
        numero, 
        numeroAnterior, 
        clearNum,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnSum,
        btnRes,
        btnMult,
        btnDiv,
        btnEqual
    } = useCalculadora();

    return (
        <View style= { styles.calculadoraContainer }>
            { (numeroAnterior !== '0') && 
                (
                    <Text style = { styles.resultadoPetit }>{numeroAnterior}</Text>
                )
            }
            <Text 
                style = { styles.resultado }
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style = {styles.fila}>
                <BtnCalc texto="C"   color="#9B9B9B" action = {clearNum} />
                <BtnCalc texto="+/-" color="#9B9B9B" action = {positivoNegativo} />
                <BtnCalc texto="del"   color="#9B9B9B" action = {btnDelete} />
                <BtnCalc texto="÷"   color="#FF9427" action = {btnDiv} />
            </View>
            <View style = {styles.fila}>  
                <BtnCalc texto="7" action = {armarNumero} />
                <BtnCalc texto="8" action = {armarNumero} />
                <BtnCalc texto="9" action = {armarNumero} />
                <BtnCalc texto="x" color="#FF9427" action = {btnMult} />
            </View> 
            <View style = {styles.fila}>
                <BtnCalc texto="4" action = {armarNumero} />
                <BtnCalc texto="5" action = {armarNumero} />
                <BtnCalc texto="6" action = {armarNumero} />
                <BtnCalc texto="-" color="#FF9427" action = {btnRes} />
            </View> 
            <View style = {styles.fila}>
                <BtnCalc texto="1" action = {armarNumero} />
                <BtnCalc texto="2" action = {armarNumero} />
                <BtnCalc texto="3" action = {armarNumero} />
                <BtnCalc texto="+" color="#FF9427" action = {btnSum} />
            </View> 
            <View style = {styles.fila}>
                <BtnCalc texto="0" ancho action = {armarNumero} />
                <BtnCalc texto="." action = {armarNumero} />
                <BtnCalc texto="=" color="#FF9427" action = {btnEqual} />

                {/* #2D2D2D  gris oscuro */}
                {/* #FF9427  naranja */}
            </View>            
        </View>
    )
}
