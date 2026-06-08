const LazyLoad = require("./lazyload");
const Prefetch = require("./prefetch");
const Cache = require("./cache");
const Network = require("./network");
const Monitor = require("./monitor");

class Core {

  constructor(options = {}) {
    this.options = options;
  }

  init() {

    LazyLoad.start(this.options);

    Prefetch.start(this.options);

    Cache.start(this.options);

    Network.start(this.options);

    Monitor.start(this.options);

  }

}

module.exports = Core;
