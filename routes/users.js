var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')
/* GET users listing. */
router.post('/checkexist', userController.findUser);

router.post('/create', userController.createUser);

router.post('/encode', userController.encodePassword);

module.exports = router;
