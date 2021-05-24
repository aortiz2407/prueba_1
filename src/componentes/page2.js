var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvcnRpeiIsImEiOiJja3AyNWNoNGQxaGJ1MnZtdzV5MDU5ejdtIn0.Ih459NVdR91AZxTKOp0ufQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});