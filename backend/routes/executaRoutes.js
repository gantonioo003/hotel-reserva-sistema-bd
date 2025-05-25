const express = require('express');
const router = express.Router();
const controller = require('../controllers/executaController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/', controller.remove);

module.exports = router;
