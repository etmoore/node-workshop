function add(a, b) {
  return a + b;
}

function addAsync(a, b, fn) {
  return fn(a + b);
}

module.exports = {
  add,
  addAsync,
};
