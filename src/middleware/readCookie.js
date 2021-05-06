const model = require("../../database/model");

function readCookie(req, res, next) {
  const sid = req.signedCookies.sid;
  if (sid) {
    model.selectSession(sid.sid).then((user) => {
      if (user.data) {
        console.log(user.data);
        req.userSession = user.data;
      }
      next();
    });
  }
  next();
}

module.exports = { readCookie };
