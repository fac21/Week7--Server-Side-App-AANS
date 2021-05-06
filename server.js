const express = require("express");
const server = express();
const logger = require("./src/middleware/logger.js");
const home = require("./src/handlers/home");
const logIn = require("./src/handlers/logIn");
const hlGame = require("./src/handlers/higherLower")
const session = require("express-session");
const auth = require("./src/auth");

// Middleware
const cookieParser = require("cookie-parser");
const logger = require("./src/middleware/logger.js");
const errorHandler = require("./src/middleware/errorHandler.js");
const staticHandler = express.static("public");
const flash = require("connect-flash");
const bodyParser = express.urlencoded();

// Routes
const home = require("./src/handlers/home");
const signup = require("./src/handlers/signup");
const logIn = require("./src/handlers/logIn");

server.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: auth.COOKIE_SECRET,
    saveUninitialized: true, // don't save unmodified
    resave: true, // forces the session to be saved back to the store
  })
);
server.use(flash());
server.use(staticHandler);
server.use(logger.logger);
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", home.getLayout);

server.get("/games/higher-lower", hlGame.getHLPage)

server.get("/games/:gameName", (request, response) => {
  const gameName = request.params.gameName;
  response.send(`<h1>${gameName} is not available at this time! </h1>`);
});
// Log in route
server.get("/log-in", logIn.get);
server.post("/log-in", bodyParser, logIn.post);

// Sign up route
server.get("/sign-up", signup.get);
server.post("/sign-up", bodyParser, signup.post);

server.get("/error", (req, res, next) => {
  const fakeError = new Error("uh oh");
  fakeError.status = 403;
  next(fakeError);
});

server.use(errorHandler.handleErrors);

// server.use((request, response) => {
//   response.status(404).send(`<h1>Not found</h1>`);
// });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`started on http://localhost:${PORT}`));
