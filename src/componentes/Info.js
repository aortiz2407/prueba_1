import '../App.css';
import React from 'react';


const Info = (vuelos) => {
    var lista_vuelos = vuelos.vuelos;

    return (
        // el lugar donde vamos a escribir los mensajes
        <div>
            <div className="vuelos">
                {lista_vuelos.map((e, i) => (
                <div key={i}>
                    <div> <h1><b>Avión de código </b>: {e.code} </h1> </div>
                    <div> <b>Aerolínea </b>: {e.airline}</div>
                    <div> <b>Origen </b>: {e.origin} </div>
                    <div> <b>Destino </b>: {e.destination}</div>
                    <div> <b>Modelo </b>: {e.plane}</div>
                    <div> <b>Cantidad de asientos </b>: {e.seats}</div>
                    <div> <b> Personas </b>: </div>
                    {e.passengers.map((a,j) => (
                        <div key={j}>
                            <div> <b> {a.name}: </b> de {a.age} de edad</div>
                        </div>
                    ))}
                </div>
                ))}
            </div>
        </div>

      );

};

export default Info;
