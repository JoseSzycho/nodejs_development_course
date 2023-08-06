const isObjectType = (prop) => typeof prop == "object";
const isArrayObjectType = (prop) => Array.isArray(prop);
const getKeys = (obj) => Object.getOwnPropertyNames(obj);
const isCircularReference = (obj, calledObjects) => calledObjects.includes(obj);

// deepCloneObject function starts here
const deepCloneObject = (originalObject) => {
  const newObject = []; // Cloned object will be stored here
  const calledObjects = []; // Stack for saving already called objects for testing circular reference

  // Recursive function
  const cloneObject = (newObject, originalObject) => {
    const originalObjectKeys = getKeys(originalObject);
    calledObjects.push(originalObject);

    for (const key of originalObjectKeys) {
      if (isObjectType(originalObject[key])) {
        if (isCircularReference(originalObject[key], calledObjects)) {
          throw new Error("Circular referecernce detected.");
        }

        if (isArrayObjectType(originalObject[key])) {
          // If it is object type, we handle it with recursion to get the final values
          newObject[key] = []; // Treating new property as an array
        } else {
          newObject[key] = {}; // Treating new property as an object
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