import { AuthState, AuthContext } from './AuthContext';

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'logOut'}
    | { type: 'changeFavIcon', payload: string}
    | { type: 'changeUser', payload: string};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ... state,
                isLoggedIn: true,
                userName: 'no-username-yet'
            }
        case 'changeFavIcon':
            return {
                ... state, 
                favoriteIcon: action.payload
            }
        case 'logOut':
            return {
                ... state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeUser':
            return {
                ... state,
                userName: action.payload
            }
        default:
            return state;
    }
}