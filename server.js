const express = require("express");
const server = express();
const logger = require("./src/middleware/logger.js");
const home = require("./src/home");

const cookieParser = require("cookie-parser");

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded();

server.use(logger.logger);

server.get("/", home.getLayout);

server.post("/submit", bodyParser, (request, response) => {});

server.use((req, res) => {
  res.status(404).send(`<h1>Not found</h1>`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`started on http://localhost:${PORT}`));
