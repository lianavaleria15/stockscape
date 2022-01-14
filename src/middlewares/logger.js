// log requests in terminal
const logger = (req, res, next) => {
  const { url, method } = req;
  console.log(`${method} request made at “${url}” endpoint.`);
  next();
};

module.exports = logger;
