const jwt = require('jsonwebtoken');
const moment = require('moment');
const Constants = require('./Constants');
const tokenUtils = {};

tokenUtils.generateJWTToken = async (
  userId,
  ttl = 24 * 60 * 60,
  secretKey = Constants.JWT_SECRET,
) => {
  const expiry = moment().add(ttl, 'seconds').toDate();
  const tokenPromise = new Promise((resolve, reject) => {
    jwt.sign(
      { user_id: userId, expiry },
      secretKey,
      { algorithm: 'HS256' },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      },
    );
  });
  return tokenPromise;
};
tokenUtils.decodeJwtToken = async (
  token,
  secretKey = Constants.JWT_SECRET,
) => {
  if (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return reject(err);
        return resolve(decoded);
      });
    });
  }
  throw new Error('Token Not Provided');
};
module.exports = tokenUtils;