class Metrics {
  constructor() {
    this.cacheHits = 0;
    this.cacheMisses = 0;
    this.totalTime = 0;

  }

  hit() {
    this.cacheHits++;
  }

  miss() {
    this.cacheMisses++;
  }

  addTime(ms) {
    this.totalTime += ms;
  }

  get() {

    return {
      hits: this.cacheHits,
      misses: this.cacheMisses,
      savedRequests:
        this.cacheHits,
      totalProcessingTime:
        this.totalTime
    };
  }
}

module.exports = Metrics;
