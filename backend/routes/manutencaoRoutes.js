const express = require('express');
const router = express.Router();
const controller = require('../controllers/manutencaoController');

router.get('/', controller.getAllManutencoes);
router.post('/', controller.createManutencao);
router.put('/:id', controller.updateManutencao);
router.delete('/:id', controller.deleteManutencao);

module.exports = router;
