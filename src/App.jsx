import React from 'react'
import {ChatContext} from './context/ChatProvider'
import Chat from './componetes/Chat'
import Navbar from './componetes/Navbar'
import './App.css';

function App() {
  const {usuario} = React.useContext(ChatContext)

    return usuario.activo !== null ? (
        <div className='container'>
            <Navbar />
            {
                usuario.activo ? (
                    <Chat/>
                ) : (
                    <div className='text-center mt-5 lead'>
                        <br/>
                        <p>Click en acceder para iniciar chat</p>
                    </div>
                )
            }
        </div>
    ) : (<div>Cargando...</div>)
}
export default App;
