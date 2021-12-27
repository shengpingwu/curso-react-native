import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { User, ReqResListado } from '../interface/reqRes.interface';

export const useUsuarios = () => {
    
    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);

    useEffect(() => {
        //llamando al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        //llamando al API
        const resq = await reqResApi.get<ReqResListado>("/users", {
            params: {
                page: pageRef.current
            }
        })

        if (resq.data.data.length > 0) {
            setUsers(resq.data.data);
        } else {
            pageRef.current--;
            alert('No hay mas usuarios');
        }
        
    }

    const paginaSiguiente = () => {
        pageRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (pageRef.current > 1) {
            pageRef.current--;
            cargarUsuarios();
        }
    }

    return {
        users,
        paginaSiguiente,
        paginaAnterior,
    }
}
