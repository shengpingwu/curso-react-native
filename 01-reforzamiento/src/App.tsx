// import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Formulario } from './components/Formulario';
import { Login } from './components/Login';
import { Usuario } from './components/Usuario';



const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS -React </h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      <Contador />
      <ContadorConHook />
      <Login />
      <Usuario />
      <Formulario />
    </div>
  )
}

export default App;