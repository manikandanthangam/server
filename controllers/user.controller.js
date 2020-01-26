const User = require('../models/user.model');

try {
    exports.findUser = function (req, res, next) {
        let inputData = "";
        if(req.body.password){
            inputData = {email:req.body.email, password:req.body.password};
        } else {
            inputData = {email:req.body.email};
        }
        User.findOne(inputData,
            (error, data) => {
                if (error || data === null){
                    res.json({ 'data': error, 'Msg': 'Failed to get', 'Status': -101 });
                } else {
                    let outputData = "";
                    if(req.body.password){
                        outputData = data;
                    } else {
                        outputData = inputData;
                    }
                    res.json({ 'data': outputData, 'Msg': 'Successfully Collected', 'Status': 1 });
                }
            }
        )
    }
} catch(ex){
    res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -201 });
}

try {
    exports.createUser = function(req, res, next){
        console.log(req.body);
        // var username = req.body.username;
        // var password = req.body.password;
        let newUser = new User(req.body);
        newUser.save((error, data) => {
            // res.json({'result':'success'});
            if (error){
                res.json({ 'data': error, 'Msg': 'Failed to Save', 'Status': -102});
            } else {
                res.json({'data': data, 'Msg': 'Successfully Saved', 'Status': 1});
            }
        });
    }
} catch(ex){
    res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -202 });
}


