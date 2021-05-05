BEGIN;

DROP TABLE IF EXISTS users, games, stats, sessions CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    hash_password TEXT NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY, 
    game_name TEXT NOT NULL,
    file_path TEXT NOT NULL /*link to game*/
);


CREATE TABLE stats (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    score INTEGER,
    last_played timestamp
);

CREATE TABLE sessions (
    sid TEXT PRIMARY KEY,
   data JSON NOT NULL
);

INSERT INTO users (username, email, hash_password) VALUES (
    'amyk', 
    'amyk@amyk.com', 
    'drglshiusb\gis\nbiuABEiu29bjksJ'
);

INSERT INTO sessions (sid, data) VALUES 
(
    'sessionsjgbKG', 
    '{"info":"things"}'
);

INSERT INTO games (game_name, game_path) VALUES (
    'hangman', '/hangman'
    );

INSERT INTO stats ( user_id, game_id, score, last_played) VALUES
  (1,  1, 2, (SELECT CURRENT_TIMESTAMP));

COMMIT;