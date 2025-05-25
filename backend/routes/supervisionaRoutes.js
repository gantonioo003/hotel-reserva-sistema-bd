const express = require('express');
const router = express.Router();
const controller = require('../controllers/supervisionaController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:supervisorId/:supervisionadoId', controller.remove);

module.exports = router;
