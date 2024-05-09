// index.js
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para obtener datos desde la API externa
app.get('/', (req, res) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Cambia la URL según la API que desees consultar

    request(apiUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            res.send(data); // Envía los datos como respuesta
        } else {
            res.status(500).send('Error al obtener datos desde la API');
        }
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
