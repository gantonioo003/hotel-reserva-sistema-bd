const express = require('express');
const router = express.Router();
const controller = require('../controllers/telefoneController');

router.get('/', controller.getAllTelefones);
router.post('/', controller.createTelefone);
router.put('/:id', controller.updateTelefone);
router.delete('/:id', controller.deleteTelefone);

module.exports = router;
