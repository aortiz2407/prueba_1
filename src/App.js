import React, { useState, useEffect } from 'react';
import Chat from './componentes/Chat';
import Info from './componentes/Info';
import './App.css';
import MyMap from './componentes/Map';
import socket from './componentes/Socket';

var enviado = 0;

function App() {
// setear el nombre del usuario
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    // vamos a registrar el nombre y vamos a validarlo
    e.preventDefault();
    if (nombre !== ""){
      setRegistrado(true);
    }
  }

// bajar información de los vuelos
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
      console.log("Llegué aquí")
      if (enviado <2){
          socket.emit('FLIGHTS');
          console.log("mandé a pedir los aviones");
          enviado++;
          };
  });

  useEffect(() => {
      socket.on('FLIGHTS', (data) => {
          // aquí van los datos que obtengo del chat
          setVuelos([...data]);
          console.log(vuelos);

          console.log("Bajé la data de los vuelos");
    })
      return () => {socket.off()}
    });

  return (
    <div className="App">
      {
        !registrado && 

        <form onSubmit={registrar}> 
          <label htmlFor=""> Introduzca su nombre </label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Introduce nombre de usuario.."></input>
          <button class="button">Ir a la página</button>
        </form>
      }
      {
        registrado && 
        <React.Fragment>
          <MyMap vuelos={vuelos}></MyMap>
          <Info vuelos={vuelos}></Info>
          <Chat nombre={nombre}></Chat>
        </React.Fragment>
      }
    </div>
  );
}
// después de chat </Chat> va <MyMap />


export default App;
