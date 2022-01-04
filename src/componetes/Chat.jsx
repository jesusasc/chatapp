import React from 'react'

import {ChatContext} from '../context/ChatProvider'
import Agregar from './Agregar'

const Chat = () => {

    const {usuario, mensajes} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect(() => {
        if(refZonaChat.current !== null){
        //   console.log('useefecct', refZonaChat.current)
        //   console.log('scrollTop', refZonaChat.current.scrollTop)
        //   console.log('scrollHeight', refZonaChat.current.scrollHeight)
          refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
        }
      }, [mensajes])

    return (
        <div 
            className='mt-3 px-2' 
            ref={refZonaChat} 
            style={{ height: '75vh', overflowY: 'scroll'}}
        >

            {
                mensajes.map((item, index) => (
                    item.uid === usuario.uid ? (
                        <div className="d-flex justify-content-end" key={index}>
                            <p className="text-primary"><b>Usuario:</b> {item.email} <br/>
                            dice: {item.texto}
                            </p>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start" key={index}>
                            <p className="text-success"><b>Usuario:</b> {item.email} <br/>
                            dice: {item.texto}
                            </p>
                        </div>
                    )
                ))
            }

            <Agregar />
        
        </div>
    )
}

export default Chat