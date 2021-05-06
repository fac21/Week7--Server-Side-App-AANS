const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("../database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};

function createUser(username, email, password) {
  return bcrypt
    .hash(password, 10)
    .then((hash) => model.insertUser(username, email, hash));
}

function saveUserSession(user) {
  const randSID = crypto.randomBytes(18).toString("base64");
  return model.insertSession(randSID, { user });
}

function verifyUser(userName, password) {
  return model.selectUser(userName).then((user) => {
    return bcrypt.compare(password, user.hash_password).then((match) => {
      if (!match) {
        throw new Error("password doesn't match!");
      } else {
        delete user.hash_password;
        return user;
      }
    });
  });
}

module.exports = { COOKIE_OPTIONS, createUser, saveUserSession, verifyUser };
