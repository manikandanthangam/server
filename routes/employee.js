var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employee.controller');

/* GET users listing. */
router.get('/', employeeController.getEmployee);

router.post('/', employeeController.createEmployee);

module.exports = router;
