class Cache {
  constructor(ttl) {
    this.ttl = ttl;
    this.store = new Map();
    this.pending = new Map();
  }

  get(key) {
    const item = this.store.get(key);
    if (!item) return null;
    if (Date.now() > item.expire) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }

  set(key, value) {
    this.store.set(key, {
      value,
      expire: Date.now() + this.ttl
    });

  }

  async dedupe(key, fn) {
    if (this.pending.has(key)) {
      return this.pending.get(key);
    }

    const promise = fn();
    this.pending.set(key, promise);
    try {
      return await promise;
    } finally {
      this.pending.delete(key);
    }
  }
}

module.exports = Cache;
