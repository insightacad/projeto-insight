const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.passwordverify = async (userid, passw) => {

    passwhash = await bcrypt.hash(passw, 32);

    const user = await User.findOne({
        attributes: ['id', 'username', 'password'],
        where: {
            id: userid
        }
    });

    if (passwhash == user.password) {
        return true
    } else {
        return false
    }
    
}
