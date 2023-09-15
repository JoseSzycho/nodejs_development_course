/** Returns the hashed value of a given key.
 *
 * The algorithm works the next way:
 * - __First step:__ loops throw all of the chars of the key. For each
 * iteration, it concatenates the previous hashedKey with the quadruple
 * of the ASCII character code of the char, in order to add some avalanche
 * effect.
 * - __Second step:__ reverses the hashedKey to add more randomness to the hashed
 * value, as the latest number are more prone to change faster, we move them
 * to the beginning.
 * - __Third step:__ with return the hashedKey mod a big number, for adding a
 * a upper limit.
 *
 * @param {String} key The key
 * @returns {BigInt} The hashed key
 */
const hash = (key) => {
  // Checks for input error
  if (typeof key != "string") throw new Error("Key must be String type.");

  let keyCharCode = "";

  for (char of key) {
    // Concatenate the previous keyCharCode with the quadruple
    // of the ASCII character code of the char
    keyCharCode = String(keyCharCode.concat(char.charCodeAt(0) << 2));
  }

  // Reversing keyCharCode adding a little of avalanche effect, as
  // the last digits are more prone to change faster
  keyCharCode = keyCharCode.split("").reverse("").join("");

  // Dividing by a big number to add a max limit to the hash.
  return BigInt(keyCharCode) % BigInt(Number.MAX_VALUE);
};

module.exports = { hash };
