
/* ###########  DECLARATION  ############### */
// Importation / variable / constante
const express = require('express');

// Instance du serveur
const server = express();

/* ######################################### */




/* ###########    SERVER     ############### */

// configuration routes
server.get('/', function(request, response){

    response.setHeader('Content-Type', 'text/html');
    response.status(200).send('<h1> Mon SERVEUR </h1>')

});

// Ecoute serveur
server.listen(8080, () => {

    console.log('SERVEUR EN ECOUTE');

});

//  ==>  http://localhost:8080/  <==

/* ######################################### */