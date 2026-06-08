module.exports = function(options) {
  if (
    options.ttl !== undefined &&
    typeof options.ttl !== "number") {
    throw new Error(
      "[XBoost] ttl must be a number"
    );
  }
};
