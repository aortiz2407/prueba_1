// I tried https://github.com/FedericoTartarini/react-leaflet-tutorial/blob/part_1_getting_started/src/Components/MyMap.js
// but didn't work 
// luego usé este https://www.youtube.com/watch?v=JJatzkPcmoI&t=701s&ab_channel=LeighHalliday
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import PolylineOverlay from './Lines';

const MyMap = (vuelos) => {
  var lista_vuelos = vuelos.vuelos;
  const [viewport, setViewport] = useState({
    latitude: 0, 
    longitude: 0,
    width: '50vw',
    height: '25vw',
    zoom: 0
  });

  var points = [];
    for (const property in lista_vuelos) {
      var point = [];
      var e = lista_vuelos[property];

      var origin = []; 
      origin.push(e.origin[1]);
      origin.push(e.origin[0]);

      var destination = []; 
      destination.push(e.destination[1]);
      destination.push(e.destination[0]);

      point.push(origin);
      point.push(destination);
      
      points.push(point)
    }
  // var ejemplo = [[-58.533321,-34.82264],[-70.803203, -33.382761]];

  return (
        // despliegue del mapa  
        // points is an array of [[lat, lon], [lat, lon], ...]
        // points será el array de todos los pares de inicio y final 
        <div>
          <ReactMapGL 
          {...viewport} 
          mapboxApiAccessToken='pk.eyJ1IjoiYWxvcnRpeiIsImEiOiJja3AyNWNoNGQxaGJ1MnZtdzV5MDU5ejdtIn0.Ih459NVdR91AZxTKOp0ufQ'
          onViewportChange={(viewport) => {setViewport(viewport);
          }}> 
          {points.map((a,j) => (
              <div key={j}>
                <PolylineOverlay points={a} />
              </div>
          ))}          
          </ReactMapGL>
        </div>      
      );
};


export default MyMap;
