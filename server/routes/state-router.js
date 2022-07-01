const express = require('express');

const StateController = require('../controllers/state-controller')

const router = express.Router()

router.get('/states',StateController.getStates);

module.exports = router