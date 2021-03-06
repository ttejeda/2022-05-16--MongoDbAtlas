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

const mongoose = require('mongoose'); //Exportar módulo de mongoose
mongoose.connect(
`mongodb+srv://ttejeda:jOIJJnQ6gEILygAu@cluster0.uy9zi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, //Conección al cluster de MongoDB Atlas
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

const db = mongoose.connection; //Establece conexión con la base de datos
db.on("error", console.error.bind(console, "connection error: ")); //Mensaje de error si no se conecta adecuadamente
db.once("open", function () {
console.log("Connected successfully"); //Mensaje de éxito de conexión
});