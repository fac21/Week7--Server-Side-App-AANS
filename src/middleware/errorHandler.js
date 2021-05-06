function handleErrors(error, req, res, next) {
  console.error(error);
  res.status(500).send(`<h1>Something went wrong</h1>`);
}

module.exports = { handleErrors };
