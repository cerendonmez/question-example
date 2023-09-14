const bcrypt = require("bcryptjs");

const validateUserInput = (email, password) => {
    return email && password;
};

const forgotPassword = (email) => {
    return email;
};

const comparePassword = (password,hashedPasswword) => {
    return bcrypt.compareSync(password, hashedPasswword);
};

module.exports = {
    validateUserInput,
    comparePassword,
    forgotPassword
}