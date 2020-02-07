// middleware.js
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const withAuth = function(req, res, next) {
  const token = req.get('Authorization2');
  console.log(token);
  if (!token) {
    console.log('I am unauthorized');

    // res.status(401).send('Unauthorized: No token provided');
    next();
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        console.log('I am unauthorized');

        res.status(401).send('Unauthorized: Invalid token');
      } else {
        console.log('I am authorized');

        req.email = decoded.email;
        next();
      }
    });
  }
}
module.exports = withAuth;