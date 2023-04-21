
// importando el modulo http

import http from 'http';


//  crear el servidor

const server = http.createServer((req, res) => {
    // logica del server
    // respondiendo 
    res.write('Hello from the server');
    // Cerrar la conexion 
    res.end();
});

// arrancar el servidor

server.listen(3000, "0.0.0.0", () => {
    console.log('Servidor escuchando en HTTP://localhost:3000');
});
