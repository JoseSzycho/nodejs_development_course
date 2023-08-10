// Do deepClone without recursion

const deepCloneObject = (obj) => {
  // Variable declarations
  const visitedStack = []; // store obj nested objects, for Circular Reference handling
  const objectStack = []; // store obj nested objects, so we can keep track of them and come back to previous objects
  const newObjStack = []; // store newObject nested objects, so we can keep track of previous objects for copying the next values

  // Preparing newObj for object or string
  let newObj = {};
  if (Array.isArray(obj)) newObj = [];

  visitedStack.push(obj); // storing object for tracking circular reference

  let objKeys = Object.getOwnPropertyNames(obj); // getting keys for first run

  do {
    const key = objKeys.shift(); // taking first key for evaluating its content and copying it next

    if (typeof obj[key] == "object") {
      // if true, there is a nested object. We go inside for copying its properties and values
      if (visitedStack.includes(obj[key]))
        // checking for circular reference
        throw new Error("Circular referecernce detected.");

      visitedStack.push(obj[key]); // storing object as visited for tracking circular reference

      if (Array.isArray(obj[key])) {
        // Preparing the newObj for copying what is inside of the property
        newObj[key] = []; // creating "key" property that contains an empty array
      } else {
        newObj[key] = {}; // creating "key" property that contains an empty object
      }

      // Storing current obj and newObj and reaming keys for going one step back in the future
      objectStack.push([obj, objKeys]);
      newObjStack.push(newObj);

      // Entering to the new property that contains an object
      newObj = newObj[key];
      obj = obj[key];

      // Getting nested object properties for copyting its properties and values
      objKeys = Object.getOwnPropertyNames(obj);

      continue; // jump to next cycle
    }

    if (key !== undefined) newObj[key] = obj[key]; // copying new property and value

    if (objKeys.length == 0 && objectStack.length > 0) {
      // If there are no keys, but there are more objects in the stack,
      // we take next obj from the stack with its current key state for copying the values
      [obj, objKeys] = objectStack.pop();
      newObj = newObjStack.pop();
    }
  } while (objKeys.length > 0 || objectStack.length > 0); // repeating the cycle till there are no more keys and no more objects in the stack

  return newObj;
};

module.exports = { deepCloneObject };
