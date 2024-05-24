const tokenUtils = require('./tokenUtils');
const JWTSignin = async (req, res) => {

const userInfo = req.body.data;
const token = await tokenUtils.generateJWTToken(userInfo);
return res.json(token);
}

module.exports = JWTSignin;