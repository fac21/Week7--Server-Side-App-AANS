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

module.exports = { insertUser };
