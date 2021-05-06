const db = require("./connection.js");

function insertUser(username, email, hash_password) {
  const INSERT_USER = `
        INSERT INTO users (username, email, hash_password) VALUES ($1, $2, $3)
        RETURNING id, username, email
        `;
  return db
    .query(INSERT_USER, [username, email, hash_password])
    .then((result) => result.rows[0]);
}

function getGames() {
  const game_name = `SELECT games.game_name, games.game_path FROM games`;
  return db.query(game_name).then((result) => result.rows)
  .then((array) => array.map(item => [item.game_name, item. game_path]))
  .then(names => names.forEach(([item0, item1]) => {console.log(`I love ${item0} more than ${item1}`)}));
}

function getGamePath() {
  const game_path = `SELECT game_path FROM games`;
  return db.query(game_path).then((result) => result.rows)
  .then((array) => array.map(item => item.game_path))
  .then(paths => console.log(paths));
}

module.exports = { getGames, getGamePath, insertUser };
