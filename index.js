const Cache = require("./core/cache");
const Metrics = require("./core/metrics");
const validate = require("./core/validator");

class XBoost {
  constructor(options = {}) {
    validate(options);
    
    this.cache = new Cache(
      options.ttl || 60000
    );
    this.metrics = new Metrics();
  }

  async cached(key, fn) {
    const start = performance.now();
    const cached = this.cache.get(key);
    if (cached) {
      this.metrics.hit();
      return cached;
    }

    const data = await this.cache.dedupe(
      key,
      fn
    );

    this.cache.set(key, data);
    this.metrics.miss();
    this.metrics.addTime(
      performance.now() - start
    );
    return data;
  }

  stats() {
    return this.metrics.get();
  }
}

module.exports = XBoost;
