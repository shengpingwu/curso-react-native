import { useUsuarios } from '../hooks/useUsuarios';
import { User } from '../interface/reqRes.interface';

export const Usuario = () => {

    const { users, paginaAnterior, paginaSiguiente} = useUsuarios();
    
    const renderItem = (user: User) => {
        return (
            <tr key={user.id.toString()}>
                <td><img src={user.avatar}
                    style={
                        {
                            width: 50,
                            borderRadius: 100,
                        }
                    }></img></td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }
    return (
        <>
        <h3>Usuarios: </h3>  
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                 {
                     users.map(renderItem)
                 }
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={paginaAnterior} >Anterior </button>
        &nbsp;
        <button className="btn btn-primary" onClick={paginaSiguiente}>Siguiente</button>         
        </>
    )
}
