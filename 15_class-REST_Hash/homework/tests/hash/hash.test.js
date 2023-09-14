// Function to calculate a simple hash of a string
const { hash } = require("../../hash");

// Function to generate random strings for testing
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Object that stores the the hashes ocurriencies
const hashDistribution = {};
// Set that stores the generates Keys
const usedKeyes = new Set();

// Generates random keys, we will only test the uniques one,
// in order to not have a false collision
const numStrings = 1000000;
for (let i = 0; i < numStrings; i++) {
  const randomString = generateRandomString(5);

  // If random string used, continue to next cycle
  if (usedKeyes.has(randomString)) continue;

  // Store the random string as a used key
  usedKeyes.add(randomString);

  // Creates hash with the key
  const hashed = hash(randomString);

  // Store the hash
  if (hashDistribution[hashed]) {
    // If hash is already in the hash object,
    // increment occurrence
    hashDistribution[hashed]++;
  } else {
    // Add hash to object
    hashDistribution[hashed] = 1;
  }
}
test("Expect to not have collisions", () => {
  // Analyze the distribution by printing a histogram
  console.log("Hash Distribution:");
  for (const hash in hashDistribution) {
    const count = hashDistribution[hash];
    if (count > 1) {
      // If the hash have a collision, print the
      // hash with the number of collisions
      const histogram = "*".repeat(count);
      console.log(`${hash}: ${histogram}`);
    }
  }
});
test("Expect numbers to be hashed", () => {
  expect(hash("abcde1")).toBe(691404004693293883n);
  expect(hash("abcde2")).toBe(2404004693293883n);
});
