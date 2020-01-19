var express = require('express');
var router = express.Router();
const CommentsController = require('../controllers/comments.controller');

router.get('/get', CommentsController.getComments);

router.get('/getone/:id', CommentsController.getOneComment);

router.post('/create', CommentsController.createComment);

router.post('/bulkInsert', CommentsController.bulkInsert);

router.put('/update', CommentsController.updateComment);

router.delete('/delete/:id', CommentsController.deleteComment);

module.exports = router;