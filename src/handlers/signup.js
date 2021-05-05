const templates = require("../components/templates");

function get(request, response) {
  const pageContent = templates.signupForm;
  response.send(templates.getHtml("Sign up", pageContent));
}

function post(request, response) {
  const { username, email, password } = request.body;
  console.log(username, email, password);

  response.redirect("/");
}

module.exports = { get, post };
