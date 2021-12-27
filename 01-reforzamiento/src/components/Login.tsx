import React, { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}
const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginActionPayload = {
  username: string;
  nombre: string;
};
type AuthAction =
  | { type: "logout" }
  | { type: "login"; payload: LoginActionPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        nombre: nombre,
        username: username,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "logout",
      });
    }, 1500);
  }, []);

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Juan",
        username: "juan",
      },
    });
  };
  if (state.validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info">Validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>

      {state.token ? (
        <div className="alert alert-success">Autenticado</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}
      {state.token ? (
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
