const express = require('express');
const router = express.Router();
const CalculatorController = require('../controllers/calculatorControllers');

const calculatorController = new CalculatorController();

router.post('/add', calculatorController.add);
router.post('/subtract', calculatorController.subtract);
router.post('/multiply', calculatorController.multiply);
router.post('/divide', calculatorController.divide);

module.exports = router;