import React, { useState } from 'react'

export const useForm = <T extends Object> ( form: T) => {
    
    const [formulario, setFormulario] = useState(form);
    
    const onChange = ( value: string, campo: keyof T) => {
        setFormulario({
            ...formulario,
            [campo]: value
        })
    }

    return {
        ...formulario,
        formulario,
        onChange
    }
}

