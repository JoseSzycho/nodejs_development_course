const filterUniqueWords = (text) => {
  const splitText = (x) => x.split(" "); //separate words into an array
  const textToLowerCase = (x) => x.toLowerCase(); //lower case each word element
  const selectUniqueWords = (x) => [...new Set(x)]; //delete repeated elements
  const sort = (x) => x.sort(); //sorts in alphabetical order

  // First, we separate each word into an array
  // Second, we convert each word to lower case, so all have the same format
  // Third, we delete the repeatied words
  // Fourth, we sort everything
  const composedWordsFilter = (x) =>
    sort(selectUniqueWords(splitText(x).map(textToLowerCase)));

  return composedWordsFilter(text);
};

module.exports = filterUniqueWords;
