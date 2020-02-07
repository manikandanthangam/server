const User = require('../models/user.model');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.findUser = function (req, res, next) {
    try {
        let inputData = { email: req.body.email };
        User.findOne(inputData,
            (error, data) => {
                if (error || data === null) {
                    res.json({ 'data': error, 'Msg': 'Invalid email', 'Status': -101 });
                } else {
                    let outputData = "";
                    if (req.body.password) {
                        let userPwd = data.password;
                        console.log(userPwd);
                        bcrypt.compare(req.body.password, userPwd, function (err, booleanData) {
                            if (err) {
                                console.log(err);
                                res.json({ 'data': err, 'Msg': 'bcrypt compare error', 'Status': -402 });

                            }
                            if (booleanData) {
                                console.log("success");
                                outputData = data;
                                const secret = 'mysecretsshhh';

                                // Issue token
                                let email = data.email;
                                const payload = { email };
                                const token = jwt.sign(payload, secret, {
                                    expiresIn: '1h'
                                });
                                console.log(token);
                                console.log(req.cookies.token);
                                console.log('token');
                                // res.cookie('token', token, { httpOnly: true }).sendStatus(200);

                                // res.cookie('token', token, { maxAge: 900000, httpOnly: true }).sendStatus(200);
                                res.json({ 'token': token, 'data': booleanData, 'Msg': 'Successfullly logged in', 'Status': 200 });

                            } else {
                                console.log("failed");
                                res.json({ 'data': booleanData, 'Msg': 'Invalid password', 'Status': -402 });
                            }
                        });
                    } else {
                        outputData = req.body.email;
                        res.json({ 'data': outputData, 'Msg': 'Please enter password', 'Status': 1 });

                    }
                    // res.json({ 'data': outputData, 'Msg': 'Successfully Collected', 'Status': 1 });
                }
            }
        )
    } catch (ex) {
        res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -201 });
    }
}

exports.createUser = function (req, res, next) {
    try {
        console.log(req.body);
        // var username = req.body.username;
        // var password = req.body.password;
        let userData = req.body;

        encryptPassword(req.body.password, function (err, data) {
            if (err) {
                res.json({ 'data': err, 'Msg': 'passowrd hash error', 'Status': -401 });
            }
            userData.password = data;
            let newUser = new User(req.body);
            newUser.save((error, data) => {
                // res.json({'result':'success'});
                if (error) {
                    res.json({ 'data': error, 'Msg': 'Failed to Save', 'Status': -102 });
                } else {
                    res.json({ 'data': data, 'Msg': 'Successfully Saved', 'Status': 1 });
                }
            });
        })
    } catch (ex) {
        res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -202 });
    }
}


exports.encodePassword = function (req, res, next) {
    try {
        encryptPassword(req.body.password, function (err, password) {
            res.json({ err: err, password: password });
        })

    } catch (ex) {
        res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -203 });
    }
}


encryptPassword = (password, callback) => {
    try {
        bcrypt.genSalt(10, function (err, salt) {
            console.log("salt : " + salt);
            console.log(password);

            bcrypt.hash(password, salt, function (err, hash) {
                console.log("hash: " + hash);
                console.log("error: " + err);
                // res.json({ req: req.body, hashData: hash, err: err });
                callback(err, hash)
            });
        });

    } catch (ex) {
        callback(ex, null);
    }
}


// exports.encodePassword = function (req, res, next) {
//     try {
//         bcrypt.genSalt(10, function (err, salt) {
//             console.log("salt : " + salt);
//             console.log(req.body.password);

//             bcrypt.hash(req.body.password, salt, function (err, hash) {
//                 console.log("hash: " + hash);
//                 console.log("error: " + err);
//                 res.json({ req: req.body, hashData: hash, err: err });
//             });
//         });

//     } catch (ex) {
//         res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -203 });
//     }
// }