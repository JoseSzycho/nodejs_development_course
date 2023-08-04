// Test with person from task1 in "../tests/task5.test.js"

const observedObject = (obj, callback) => {
  const handler = {
    get(target, prop) {
      callback(prop, "get");
      return target[prop];
    },
    set(target, prop, received) {
      callback(prop, "set");
      target[prop] = received;
    },
  };

  return new Proxy(obj, handler);
};

module.exports = { observedObject };
