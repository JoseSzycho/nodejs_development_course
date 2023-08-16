function square(x) {
  return x * x;
}

function sum(a, b) {
  return a + b;
}

function double(a) {
  return a * 2;
}

function compose(...fns) {
  // must return something with this shape: (el) => fun1(func2(fun..(el)))
  // I tried to compose functions with recursion but couldn´t achieve this, so
  // I go with a serial evaluation of each fn
  
  return (...args) => {
    // first we evaluate the last function with its arguments
    let lastFnEval = fns.pop()(...args);

    // With this previous result I must eval the previous fns till there
    // are no more functions to evaluate
    while (fns.length > 0) {
      lastFnEval = fns.pop()(lastFnEval);
    }

    // If there are no more fns to evaluate, result is returned
    return lastFnEval;
  };
}

const calculateSquareOfSum = compose(square, sum);

const calculateDoubleSquareOfSum = compose(double, square, sum);

const result = calculateSquareOfSum(3, 4);
console.log("Result:", result);

const result_double = calculateDoubleSquareOfSum(3, 4);
console.log("Result double:", result_double);
