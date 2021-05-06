const templates = require("../components/templates.js");
const model = require("../../database/model");
const flashMessage = require("../middleware/flashMessages");

function getLayout(req, res) {
  const flashMes = flashMessage.getFleshMessage(req);

  const title = "Game Home Page";
  model
    .getGames()
    .then((gamesArray) => {
      let gameListHtml = "";
      gamesArray.forEach(
        (array) =>
          (gameListHtml += `<li><a href="/games${array[1]}">${array[0]}</a></li>`)
      );
      return gameListHtml;
    })
    .then((gamesList) => {
      return `
    <nav>
    <h1 class="logo">GAME LOGO</h1>
    <ul>
      <li><a href="/sign-up">Sign Up</a></li>
      <li><a href="/log-in">Log In</a></li>
    </ul>
    <ul>
    ${gamesList}
    </ul>
  </nav>`;
    })
    .then((mainContent) => {
      res.send(templates.getHtml(title, flashMes + mainContent));
    });
}

module.exports = { getLayout };
