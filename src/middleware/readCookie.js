const model = require("../../database/model");

function readCookie(req, res, next) {
  const sid = req.signedCookies.sid;
  if (sid) {
    model.selectSession(sid.sid).then((user) => {
      const userData = user.data.user;
      if (userData) {
        req.userSession = userData;
      }
      next();
    });
  } else {
    next();
  }
}

module.exports = { readCookie };
