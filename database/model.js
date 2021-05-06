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

function insertSession(sid, data) {
  const INSERT_SESSION = `
        INSERT INTO sessions (sid, data) VALUES ($1, $2)
        RETURNING sid
        `;
  return db.query(INSERT_SESSION, [sid, data]).then((result) => result.rows[0]);
}

function getGames() {
  const game_name = `SELECT game_name FROM games`;

  return db.query(game_name).then((resolve) => console.log(resolve));
}

function getGamePath() {
  const game_path = `SELECT file_path FROM games`;

  return db.query(game_path).then((resolve) => console.log(resolve));
}

module.exports = { getGames, getGamePath, insertUser, insertSession };
