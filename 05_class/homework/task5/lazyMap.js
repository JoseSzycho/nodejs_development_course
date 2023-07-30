const lazyMap = (array, fn) => {
  const newArray = [...array]; // Copying element to not working over original array reference
  let counter = -1; // Setting counter, will be 0 in first call

  const lazyReturn = () => {
    counter++;

    if (counter >= array.length) // We cannot map a number if the returned all array
      throw new Error("No element left to lazy map.");

    return fn(newArray[counter]); // return the maped array[n element]
  };

  return lazyReturn;
};

module.exports = lazyMap;
