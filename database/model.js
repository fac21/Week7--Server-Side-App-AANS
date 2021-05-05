const db = require("./connection");

function getGames() {
  const game_name = `SELECT game_name FROM games`;

  return db.query(game_name).then((resolve) => console.log(resolve));
}

function getGamePath() {
  const game_path = `SELECT file_path FROM games`;

  return db.query(game_path).then((resolve) => console.log(resolve));
}

module.exports = { getGames, getGamePath };

