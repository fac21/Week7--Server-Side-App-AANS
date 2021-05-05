const templates = require("../components/templates.js");
const auth = require("../auth.js");

function get(request, response) {
  const pageContent = templates.signupForm;
  response.send(templates.getHtml("Sign up", pageContent));
}

function post(request, response) {
  const { username, email, password } = request.body;
  //console.log(username, email, password);
  auth
    .createUser(username, email, password)
    // .then((user) => auth.saveUserSessioon(user))
    // .then((sid) => {});
    .then(() => {
      response.redirect("/");
    });
}

module.exports = { get, post };
