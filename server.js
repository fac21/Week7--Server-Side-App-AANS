const express = require("express");
const server = express();
const logger = require("./src/middleware/logger.js");
const home = require("./src/handlers/home");

const cookieParser = require("cookie-parser");
const staticHandler = express.static("public");
const bodyParser = express.urlencoded();

// Routes
const signup = require("./src/handlers/signup");

server.use(staticHandler);
server.use(logger.logger);

server.get("/", home.getLayout);

server.get("/games/:gameName", (request, response) => {
  const gameName = request.params.gameName;
  response.send(`<h1>${gameName} is not available at this time! </h1>`);
});

// Sign up route
server.get("/sign-up", bodyParser, signup.get);
server.post("/sign-up", bodyParser, signup.post);

server.use((req, res) => {
  res.status(404).send(`<h1>Not found</h1>`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`started on http://localhost:${PORT}`));
