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

module.exports = { insertUser, insertSession };
