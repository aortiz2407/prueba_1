import React, { useState, useEffect, useRef} from 'react';
import socket from './Socket';
import '../App.css';

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState(""); 
  const [mensajes, setMensajes] = useState([]);

  //saber si estoy conectado
  socket.on("connect", () => {
    console.log(socket.connected); // me tiene que decir si me conecté o no 
    console.log("Me conecté al socket")
  });

  // recibir los mensajes del servidor del curso
  useEffect(() => {
    socket.on('CHAT', (data) => {
          // aquí van los datos que obtengo del chat
          setMensajes([...mensajes, data]);
          console.log(data);
          console.log(mensajes)
          console.log("Bajé la data");
    })
    return () => {socket.off()}
  });

  //para que haga scroll por si solo
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'})
  });
  
  //voy a enviar un evento al servidor de la tarea
  const submit = (e) => { 
    e.preventDefault();
    const msje = {
      name: nombre, 
      message: mensaje
    }
    // var data = JSON.stringify(msje)
    socket.emit('CHAT', msje);
    console.log("Subí la data" + msje);
    //setMensajes([...mensajes, msje]);
    setMensaje("");
  };


  return (
    // el lugar donde vamos a escribir los mensajes
    <div>
    <div className="chat">

      {mensajes.map((e, i) => (
        <div key={i}>
          <div> <b>{e.name} </b>: {e.message}</div>
        </div>
      ))}
      <div ref={divRef}></div>
    </div>
    <form onSubmit={submit}>
      <div><label htmlFor="">   Escriba su mensaje</label></div>
      <textarea name="" id="" cols="30" rows="5" value={mensaje} onChange={(e) => setMensaje(e.target.value)}
      ></textarea>
      <div><button class="button">Enviar</button></div>
    </form>
  </div>
  );
};

export default Chat;