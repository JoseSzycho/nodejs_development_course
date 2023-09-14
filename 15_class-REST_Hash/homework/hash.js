const hash = (key) => {
  if (typeof key != "string") throw new Error("Key must be String type.");
  let keyCharCode = "";

  for (char of key) {
    keyCharCode = String(keyCharCode.concat(char.charCodeAt(0) << 2));
  }

  keyCharCode = keyCharCode.split("").reverse("").join("");

  return BigInt(keyCharCode) % BigInt(Number.MAX_VALUE);
};

module.exports = { hash };
