import React from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const {valor, aumentar} = useCounter(10);

    return (
        <>
          <h3>Contador Con Hook: <small>{valor}</small></h3>  

          <button 
            className='btn btn-primary'
            onClick={() => aumentar(1)}
          >
              +1
          </button>
          &nbsp;
          <button 
            className='btn btn-primary'
            onClick={() => aumentar(-1)}
          >
              -1
          </button>
        </>
    )
}
