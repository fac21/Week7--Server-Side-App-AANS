const db = require("./connection.js");
const templates = require("../src/components/templates")

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
  const game_details = `SELECT games.game_name, games.game_path FROM games`;
  return db.query(game_details).then((result) => result.rows)
  .then((array) => array.map(item => [item.game_name, item.game_path]))
  //.then(result => console.log(result))
}

module.exports = { getGames, insertUser };
