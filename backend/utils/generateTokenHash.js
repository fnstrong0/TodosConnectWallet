const crypto = require('crypto');

const generateTokenHash = () => {
  return crypto.randomBytes(32).toString('hex');
};

module.exports = generateTokenHash;
