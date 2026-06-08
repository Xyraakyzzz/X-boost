const Core = require("./src/core");

module.exports = {
  init: (config = {}) => {
    const boost = new Core(config);
    boost.init();
    return boost;
  }
};
