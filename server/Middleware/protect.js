const jwt = require('jsonwebtoken')
const authenticationToken = async (req,res,next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        console.log('token in authRequire : ',token);

        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log('Decoded Data in authRequire:', decode);

        req.user = decode;
        next();

    } catch (error) {
        res.status(403).send('Invalid token');
    }
}

module.exports = authenticationToken;