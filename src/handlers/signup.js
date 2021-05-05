const templates = require("../components/templates.js");
const auth = require("../auth.js");

function get(request, response) {
  const pageContent = templates.signupForm;
  response.send(templates.getHtml("Sign up", pageContent));
}

function post(request, response) {
  const { username, email, password } = request.body;

  auth
    .createUser(username, email, password)
    .then((user) => auth.saveUserSession(user))
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/");
    })
    .catch((error) => {
      console.error(error);
      response.status(401).send(`<h1>Something went wrong</h1>`);
    });
}

module.exports = { get, post };
