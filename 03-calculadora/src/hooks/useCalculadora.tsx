import React, { useRef, useState } from 'react'

enum Operator {
    SUM,
    SUB,
    MUL,
    DIV,
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    
    const operation = useRef<Operator>();

    const clearNum = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }
    const armarNumero = (numeroTexto: string) => {

        if (numero.includes('.') && numeroTexto === '.') {
            return;
        }

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            
            if (numeroTexto === '.'){
                //Punto decimal
                setNumero(numero + numeroTexto);
            } else if (numeroTexto === '0' && numero.includes('.')) {
                // Evualuar si es otro cero, y hay un punto.
                setNumero(numero + numeroTexto);
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                // Evaluar si es difernte de cero y no tiene un punto
                setNumero(numeroTexto);
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                // Evitar 0000.0
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }

    }
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        let limit = 1;
        if (numero.startsWith('-')) {
            limit = 2;
        } 

        if (numero.length > limit) {
            setNumero(numero.slice(0, -1));
        } else {
            setNumero('0');
        }
    }

    const changeNumber = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }
    const btnSum = () => {
        changeNumber();
        operation.current = Operator.SUM;
    }
    const btnRes = () => {
        changeNumber();
        operation.current = Operator.SUB;
    }
    const btnMult = () => {
        changeNumber();
        operation.current = Operator.MUL;
    }
    const btnDiv = () => {
        changeNumber();
        operation.current = Operator.DIV;
    }
    const btnEqual = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch(operation.current) {
            case Operator.SUM:
                setNumero(`${num1 + num2}`);
                break;
            case Operator.SUB:
                setNumero(`${num2 - num1}`);
                break;
            case Operator.MUL:
                setNumero(`${num1 * num2}`);
                break;
            case Operator.DIV:
                setNumero(`${num2 / num1}`);
                break;
            default:
                break;
        }

        setNumeroAnterior('0');
    }
    
    return { 
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
        btnEqual,
    }
}
