import React, { useState } from 'react'

export const useCounter = (inicial: number = 10) => {

    const [valor, setValor] = useState<number>(inicial);

    const aumentar = (numero: number) => {
        setValor(valor + numero);
    }
    
    return {
        valor: valor, 
        aumentar: aumentar
    }
}
