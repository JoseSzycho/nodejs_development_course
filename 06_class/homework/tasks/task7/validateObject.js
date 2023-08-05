const getObjectKeys = (obj) => {
  let keys = Object.getOwnPropertyNames(obj);
  if (Array.isArray(obj)) keys.pop(); // pop last element that is arr length
  return keys;
};
const includeKeysOf = (arr) => {
  return (el) => arr.includes(el); // use include as properties may be in different order
};

const validateObject = (obj, schema) => {
  const objKeys = getObjectKeys(obj);
  const schemaKeys = getObjectKeys(schema);

  // First test: property length must be equal
  if (objKeys.length != schemaKeys.length) return false;

  // Second test: property names must be equal
  if (!objKeys.every(includeKeysOf(schemaKeys))) return false;

  // Checking for all properties type
  for (const key of schemaKeys) {
    if (typeof schema[key] == "object") {
      // If property is a object, we handle it with recursion
      if (!validateObject(obj[key], schema[key])) return false; // if result in recursion is false, there is a missmatch
      continue; // Skips to next for cycle
    }

    if (typeof obj[key] !== schema[key]) return false; // If obj property type dont match schema type, there is no match
  }

  // If we get here, there is a match
  return true;
};

module.exports = { validateObject };
