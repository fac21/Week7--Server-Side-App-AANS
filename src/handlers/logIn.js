const model = require("../../database/model");

function get(req, res) {
  req.send("test");
}

module.exports = { get };
