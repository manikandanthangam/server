const mongoose = require('mongoose');

let ModelSchema = mongoose.Schema;
const CommentsSchema = new ModelSchema({
    postId: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Comments = module.exports = mongoose.model('Comments', CommentsSchema);
