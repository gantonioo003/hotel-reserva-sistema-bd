const express = require('express');
const router = express.Router();
const controller = require('../controllers/hospedeController');

router.get('/', controller.getAllHospedes);
router.post('/', controller.createHospede);
router.put('/:id', controller.updateHospede);
router.delete('/:id', controller.deleteHospede);

module.exports = router;
