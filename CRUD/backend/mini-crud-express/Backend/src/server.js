// Encender servidor
require('dotenv').config();

const app = require('./app');
const conectarDB = require('./config/db.js');

const PUERTO = process.env.PORT || 3000;

const iniciarServidor = async () => {
    try {
        await conectarDB();

        app.listen(PUERTO, () => {
            console.log(`API tareas en http://localhost:${PUERTO}/api/tareas`);
            console.log(`Documentación OpenAPI en http://localhost:${PUERTO}/api-docs`);
        });

    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
};

iniciarServidor();