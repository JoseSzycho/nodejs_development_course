const repeatFunction = (fn, timesToRepeat) => {
  if (timesToRepeat >= 0) {
    return () => {
      for (let i = 0; i < timesToRepeat; i++) {
        fn();
      }
    };
  }
  // If number is negative, we go here
  return () => {
    while (true) {
      fn();
    }
  };
};

module.exports = repeatFunction;
