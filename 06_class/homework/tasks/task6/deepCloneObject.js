const isObjectType = (prop) => typeof prop == "object";
const isArrayObjectType = (prop) => Array.isArray(prop);
const getKeys = (obj) => Object.getOwnPropertyNames(obj);

// deepCloneObject function starts here
const deepCloneObject = (originalObject) => {
  const newObject = {};

  const cloneObject = (newObject, originalObject) => {
    const originalObjectKeys = getKeys(originalObject);

    for (const key of originalObjectKeys) {
      if (isObjectType(originalObject[key])) {
        // If it is object type, we handle it with recursion to get the final values
        if (isArrayObjectType(originalObject[key])) {
          // Treating new property as an array
          newObject[key] = [];
        } else {
          // Treating new property as an object
          newObject[key] = {};
        }
        cloneObject(newObject[key], originalObject[key]); // Calling recursion to get the final values
        continue;
      }
      newObject[key] = originalObject[key]; // saving value if not object type
    }

    // If here, object has been cloned
    return newObject;
  };

  return cloneObject(newObject, originalObject);
};

module.exports = { deepCloneObject };
