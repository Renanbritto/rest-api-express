const errorHandler = (erro, _req, res, _next) => {
  console.log(error);
  res.status(500) .send({ message: error.message })
}

module.exports = errorHandler
