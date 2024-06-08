const express = require('express');
const router = express.Router();
const cuentosController = require('../controllers/cuentos');

router.get('/cuentos',cuentosController.getCuentos);
router.post('/cuentos',cuentosController.createCuento);
router.get('/cuentos/:author', cuentosController.getAuthor);
router.delete('/cuentos/:author', cuentosController.deleteCuento);
//router.put('/cuentos/:author', cuentosController.deleteCuento);
//http://localhost:8081/api/cuentos/a1
module.exports = router;