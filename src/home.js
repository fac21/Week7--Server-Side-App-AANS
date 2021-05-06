const templates = require("./components/templates.js");
const model = require("../database/model");

function getLayout(req, res) {
  const tittle = "Game Home Page";
  const mainContent = `
  <nav>
  <h1 class="logo">GAME LOGO</h1>
  <ul>
    <li><a href="/sign-up">Sign Up</a></li>
    <li><a href="/log-in">Log In</a></li>
  </ul>
</nav>`;
  res.send(templates.getHtml(tittle, mainContent));
}

module.exports = { getLayout };
