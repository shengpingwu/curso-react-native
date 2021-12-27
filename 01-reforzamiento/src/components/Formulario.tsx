import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const Formulario = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456',
    });
    
    return (
        <>
            <h3>Formulario</h3> 
            <input 
                type="text"
                className='form-control'
                placeholder='Email'
                value = {email}
                onChange={(ev)=> onChange(ev.target.value, 'email')}
            />
            <input 
                type="text"
                className='form-control mt-2 mb-2'
                placeholder='Password'
                value = {password}
                onChange={(ev)=> onChange(ev.target.value, 'password')}
            />
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
