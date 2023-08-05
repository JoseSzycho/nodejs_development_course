// Compare an object with a object schema structure, propertie names and data type.
// The function can handle nested objects and nested object-arrays
// Example of schema:

/*  const newSchema = {
    firstName: "string",
    lastName: "string",
    age: "number",
    location: {
      city: "string",
      country: "string",
    },
    favouriteTeams: {
      sports: {
        footbal: "string",
        basketball: "string",
      },
      chess: {
        player1: "string",
        player2: "string",
      },
    },
    interests: ["string", "string"],
  };

*/


// Functions declarations
const getObjectKeys = (obj) => {
  let keys = Object.getOwnPropertyNames(obj);
  if (Array.isArray(obj)) keys.pop(); // pop last element that is arr length
  return keys;
};

const includeKeysOf = (arr) => {
  return (el) => arr.includes(el); // use include as properties may be in different order
};

const propertiesNamesAreDifferent = (obj1, obj2) =>
  !obj1.every(includeKeysOf(obj2)); // returns true if properties names are different

const lengthsAreNotEqual = (obj1, obj2) => obj1.length != obj2.length; // reuturns true if different lenghts

const propertyTypeIsEqual = (el, expectedType) => typeof el === expectedType;

// Here starts the validateObject function
const validateObject = (obj, schema) => {
  const objKeys = getObjectKeys(obj);
  const schemaKeys = getObjectKeys(schema);

  // First test: property length must be equals
  if (lengthsAreNotEqual(objKeys, schemaKeys)) return false;

  // Second test: property names must be equals
  if (propertiesNamesAreDifferent(objKeys, schemaKeys)) return false;

  // Third test: checking for all properties types
  for (const key of schemaKeys) {
    if (propertyTypeIsEqual(schema[key], "object")) {
      // If property is a object, we handle it with recursion
      if (!validateObject(obj[key], schema[key])) return false; // if result in recursion is false, there is a missmatch
      continue; // Skips to next for cycle
    }

    if (!propertyTypeIsEqual(obj[key], schema[key])) return false; // If obj property type dont match schema type, there is no match
  }

  // If we get here, there is a match
  return true;
};

module.exports = { validateObject };
