const templates = require("../components/templates");
const auth = require("../auth");
const flashMessages = require("../middleware/flashMessages");

function get(request, response) {
  const pageContent = templates.logInForm;
  const flashMes = flashMessages.getFleshMessage(request);

  response.send(templates.getHtml("Log In", flashMes + pageContent));
}

function post(request, response) {
  const { username, password } = request.body;

  auth
    .verifyUser(username, password)
    .then((user) => auth.saveUserSession(user))
    .then((sid) => {
      request.flash("loginMessage", flashMessages.loginMessage);
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/");
    })
    .catch((error) => {
      console.error(error);
      request.flash("LoginErrorMessage", flashMessages.loginErrorMessage);
      response.status(401).redirect(`/log-in`);
    });
}

module.exports = { get, post };
