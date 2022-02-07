const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res, next){
    // Get the token from the header
    const token = req.header('x-auth-token');

    //Check if not token
    if(!token) {
        return res.status(401).json({msg: 'Unauthorized user'})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtsecret'));

        req.client = decoded.client;
        next()

    } catch (err) {
        res.status(401).json({msg:'token is not valid'})
    }
}