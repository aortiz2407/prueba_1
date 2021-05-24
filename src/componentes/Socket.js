//let socket = io("http://tarea-3-websocket.2021-1.tallerdeintegracion.cl/");
// let socket = io("//localhost:3000");


const io = require("socket.io-client");
const socket = io('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/', {
    path: '/flights'
});

// Establezco conexión al server del curso
//const socket = io('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/',{
//    path: '/flights'
//});
export default socket; 
