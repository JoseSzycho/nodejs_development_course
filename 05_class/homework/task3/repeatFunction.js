const repeatFunction = (fn, timesToRepeat) => {
  if (timesToRepeat >= 0) {
    return () => {
      for (let i = 0; i < timesToRepeat; i++) {
        fn();
      }
    };
  }

  return () => {
    while (true) {
      fn();
    }
  };
};

module.exports = repeatFunction;
