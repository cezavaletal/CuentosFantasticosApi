const express = require('express');
const router = express.Router();
const cuentosController = require('../controllers/cuentos');

router.get('/cuentos',cuentosController.getCuentos);
router.post('/cuentos',cuentosController.createCuento);

module.exports = router;