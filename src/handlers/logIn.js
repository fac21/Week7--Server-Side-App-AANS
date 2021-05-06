const model = require("../../database/model");
const templates = require("../components/templates");

function get(request, response) {
  const pageContent = templates.logInForm;
  response.send(templates.getHtml("Log In", pageContent));
}

module.exports = { get };

