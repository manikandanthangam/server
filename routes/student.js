var express = require('express');
var router = express.Router();
const studentController = require('../controllers/student.controller');

/* GET users listing. */
router.get('/', studentController.getStudents);

router.post('/', studentController.getStudentsPost);


module.exports = router;
