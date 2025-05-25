const express = require('express');
const router = express.Router();
const controller = require('../controllers/quartoController');

router.get('/', controller.getAllQuartos);
router.post('/', controller.createQuarto);
router.put('/:id', controller.updateQuarto);
router.delete('/:id', controller.deleteQuarto);

module.exports = router;
