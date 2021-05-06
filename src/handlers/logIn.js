const templates = require("../components/templates");
const auth = require("../auth");

function get(request, response) {
  const pageContent = templates.logInForm;
  console.log(request)
  response.send(templates.getHtml("Log In", pageContent));
}

function post(request, response) {
  const { username, password } = request.body;

  auth
    .verifyUser(username, password)
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