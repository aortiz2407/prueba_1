import React, { useState, useEffect, useRef} from 'react';
import socket from './Socket';
import '../App.css';


const Chat = ({nombre}) => {
    // mensaje que escribe cada uno 
    const [mensaje, setMensaje] = useState(""); 
    const [mensajes, setMensajes] = useState([]);

    useEffect( () => {
        // en emit, una vez conectado, queremos pasarle al servidor el usuario
        //paso la orden "conectado" 
        // socket.emit('conectado', nombre);
        console.log("Intenté conectarme");
    }, [nombre]);

    // useEffect(() => {
        // socket.on('mensajes', mensaje => {
            // aquí nuestro mensaje se va a enviar al último elemento del array mensajes
    //        setMensajes([...mensajes, mensaje])
    //    })
    //    return () => {socket.off()}
    //}, [mensajes])

    useEffect(() => {
      socket.on('CHAT', (data) => {
          // aquí van los datos que obtengo del chat
          console.log(data);
      })
      return () => {socket.off()}
    });

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    //para que haga scroll por si solo
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({behavior: 'smooth'})
    });


    const submit = (e) => {
        //pedir que la página se recargue
        e.preventDefault();
        socket.emit('mensaje', nombre, mensaje);
        setMensaje("");
    };

    return (
        // el lugar donde vamos a escribir los mensajes
        <div>
          <div className="chat">
            {mensajes.map((e, i) => (
              <div key={i}>
                <div>{e.nombre}</div>
                <div>{e.mensaje}</div>
              </div>
            ))}
            <div ref={divRef}></div>
          </div>
          <form onSubmit={submit}>
            <label htmlFor="">Escriba su mensaje</label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <button class="button">Enviar</button>
          </form>
        </div>
      );

});
}
export default Chat;
