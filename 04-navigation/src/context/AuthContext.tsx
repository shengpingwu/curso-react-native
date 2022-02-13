import React, { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";

// Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a React como luce y que expone el context.
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    signOut: () => void;
    changeUserName: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Definir el provider
export const AuthProvider = ({children}: any) => {
    
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    
    const signIn = () => {
        dispatch({
            type: 'signIn',
        });
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({
            type: 'changeFavIcon',
            payload: iconName,
        })
    }

    const signOut = () => {
        dispatch({
            type: 'logOut',
        });
    }

    const changeUserName = (userName: string) => {
        dispatch({
            type: 'changeUser',
            payload: userName,
        })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            signOut,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}