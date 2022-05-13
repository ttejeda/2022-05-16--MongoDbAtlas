let express = require('express'); //Uso de la dependencia express
let app = express(); //Se ejecuta la dependencia
let personsRoute = require('./routes/person'); //Se importa la ruta person.js

app.set('view engine', 'ejs'); //Se usa ejs como view engine
app.use(personsRoute); //Se usa la ruta person.js
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000; //Se queda abierto en el puerto que le designen o en el 3000

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000'); //Mensaje para asegurarse de que se levantó el servidor correctamente
});