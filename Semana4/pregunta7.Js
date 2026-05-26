const express = require('express'); // Asegúrate de tener esta línea arriba si no se ve en la foto
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});