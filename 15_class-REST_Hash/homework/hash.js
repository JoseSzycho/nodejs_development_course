const hash = (key) => {
  if (typeof key != "string") throw new Error("Key must be String type.");
  let keyCharCode = "";

  for (char of key) keyCharCode = keyCharCode.concat(char.charCodeAt(0));

  return BigInt(keyCharCode) % BigInt(Number.MAX_VALUE);
};

module.exports = { hash };
