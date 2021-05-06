const db = require("./connection.js");
const templates = require("../src/components/templates");

function insertUser(username, email, hash_password) {
  const INSERT_USER = `
        INSERT INTO users (username, email, hash_password) VALUES ($1, $2, $3)
        RETURNING id, username, email
        `;
  return db
    .query(INSERT_USER, [username, email, hash_password])
    .then((result) => result.rows[0]);
}

function selectUser(username) {
  const SELECT_USER = `
        SELECT * FROM users WHERE username = $1
        `;
  return db.query(SELECT_USER, [username]).then((result) => result.rows[0]);
}

function insertSession(sid, data) {
  const INSERT_SESSION = `
        INSERT INTO sessions (sid, data) VALUES ($1, $2)
        RETURNING sid
        `;
  return db.query(INSERT_SESSION, [sid, data]).then((result) => result.rows[0]);
}

function selectSession(sid) {
  const SELECT_SESSION = `
  SELECT * FROM sessions WHERE sid = $1
  `;
  return db.query(SELECT_SESSION, [sid]).then((result) => result.rows[0]);
}

function getGames() {
  const game_details = `SELECT games.game_name, games.game_path FROM games`;
  return db
    .query(game_details)
    .then((result) => result.rows)
    .then((array) => array.map((item) => [item.game_name, item.game_path]));
}

module.exports = {
  getGames,
  insertUser,
  insertSession,
  selectUser,
  selectSession,
};
