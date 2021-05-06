const express = require("express");
const server = express();
const logger = require("./src/middleware/logger.js");
const home = require("./src/handlers/home");
const logIn = require("./src/handlers/logIn");
const hlGame = require("./src/handlers/higherLower")

const cookieParser = require("cookie-parser");
const staticHandler = express.static("public");
const bodyParser = express.urlencoded();

// Routes
const signup = require("./src/handlers/signup");

server.use(staticHandler);
server.use(logger.logger);
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", home.getLayout);

server.get("/games/higher-lower", hlGame.getHLPage);

server.post("/update-score", (request, response) => {
  if(request){
    console.log(request)
  }
  response.redirect("/")
});

server.get("/games/:gameName", (request, response) => {
  const gameName = request.params.gameName;
  console.log(request)
  if(gameName != 'higher-lower'){
    console.log("dynamic")
  response.send(`<h1>${gameName} is not available at this time! </h1>`)
}
});

// Log in route
server.get("/log-in", logIn.get);
server.post("/log-in", bodyParser, logIn.post);

// Sign up route
server.get("/sign-up", signup.get);
server.post("/sign-up", bodyParser, signup.post);

server.use((request, response) => {
  response.status(404).send(`<h1>Not found</h1>`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`started on http://localhost:${PORT}`));
