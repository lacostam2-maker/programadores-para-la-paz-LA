const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Mensaje recibido para ${nombre}`);
});

app.post('/reporte', (req, res) => {
    const message = req.body.mensaje;
    res.json({
        status: "Report received",
        Message: message
    });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});