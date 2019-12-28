const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const EmployeeSchema = new mongoose.Schema({
    age:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    }, 
    country: {
        type: String,
        required: true
    }, 
    "date of joining": {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    employeeid: {
        type: Number,
        required: true
    }, 
    info: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    "phone number": {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }, 
    street: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);