var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employee.controller');

/* GET users listing. */
router.get('/', employeeController.getEmployee);

router.get("/getone/:id", employeeController.getOneEmployee);

router.post('/', employeeController.createEmployee);

router.get('/bulkInsert', employeeController.bulkInsert);

router.put('/update', employeeController.updateEmployee);

router.delete('/delete/:id', employeeController.deleteEmployee);

module.exports = router;
