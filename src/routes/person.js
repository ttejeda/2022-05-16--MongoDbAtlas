let express = require('express'); //Dependencia del paquete de express
let router = express.Router();

router.get('/person', (req, res) => { //Dirección de esta ruta (lo mismo que se hacía en server.js)
    res.send('has solicitado el listado de personas');
});

module.exports = router; //exporta el módulo