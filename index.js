const cache = require("./src/cache");
const error = require("./src/error");
const compression = require("./src/compression");

module.exports = function(app, options = {}) {

  cache(app, options);
  compression(app, options);
  error(app);
};
