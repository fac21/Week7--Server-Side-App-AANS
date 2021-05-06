const templates = require("../components/templates.js");
const auth = require("../auth.js");
const flashMessages = require("../middleware/flashMessages");

function get(request, response) {
  const pageContent = templates.signupForm;
  const flashMes = flashMessages.getFleshMessage(request);

  response.send(templates.getHtml("Sign up", flashMes + pageContent));
}

function post(request, response) {
  const { username, email, password } = request.body;

  auth
    .createUser(username, email, password)
    .then((user) => auth.saveUserSession(user))
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);

      request.flash("signUpMessage", flashMessages.signupMessage);

      response.redirect("/");
    })
    .catch((error) => {
      // if (error.code === "23505") {
      //   request.flash(
      //     "signUpErrorMessage",
      //     `<h2>${error.detail.split("=")[1]}</h2>`
      //   );

      //   response.status(401).redirect(`/log-in`);
      // }
      console.error(error);

      response.status(401).send(`Server Error`);
    });
}

module.exports = { get, post };
