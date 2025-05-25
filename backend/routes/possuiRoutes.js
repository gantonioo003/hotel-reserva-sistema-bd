const express = require('express');
const router = express.Router();
const controller = require('../controllers/possuiController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:idServico/:idReserva', controller.remove);

module.exports = router;
