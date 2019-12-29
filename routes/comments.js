var express = require('express');
var router = express.Router();
const CommentsController = require('../controllers/comments.controller');

router.get('/get', CommentsController.getComments);

router.post('/create', CommentsController.createComment);

router.get('/bulkInsert', CommentsController.bulkInsert);

module.exports = router;