const isCallBackStyleFunction = (fun) => {
  if (!(typeof fun === "function" && fun.length === 2))
    throw new Error("Input must be a function with two arguments.");
};

module.exports = { isCallBackStyleFunction };
