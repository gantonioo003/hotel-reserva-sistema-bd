const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionarioController');

router.get('/', controller.getAllFuncionarios);
router.post('/', controller.createFuncionario);
router.put('/:id', controller.updateFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;
