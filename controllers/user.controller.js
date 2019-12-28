const User = require('../models/user.model');

exports.getUser = function (req, res, next) {
    User.find(
        (error, data) => {

            if (error) res.json(error)
            res.json(data)
        }
    )
}

exports.createUser = function(req, res, next){
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    let newUser = new User(req.body);
    newUser.save((error, data) => {
        // res.json({'result':'success'});
        if (error) res.json(error)
        res.json(data)
    });
    
}



