// Highlights a specified keyword
const highlight = (keyword) => {
  return `<span class='highlight'>${keyword}</span>`;
};

const errorIfNotString = (template) => {
  if (!(typeof template == "string"))
    throw new Error("Template must be a string.");
};

const errorIfNotArray = (keywords) => {
  if (!Array.isArray(keywords)) throw new Error("Keywords must be a array.");
};

// Receibe a string with "${n}" expresions that must be replaced
// with the highlighed "n" element of the keywords array.
// Values in the string that do not have a corresponding element
// to the keywords element, will be skiped.
const highlightKeywords = (templeate, keywords) => {
  // Checking for errors
  errorIfNotString(templeate);
  errorIfNotArray(keywords);

  let highlightedTemplate = templeate; // copy content to not manipulate original template

  for (let key in keywords) {
    // Using "in" operator so we can work with the keys, this allows us
    // easily find the corresponding ${n} expression in the string, for replasing
    // it with the corresponding keyword[n] element

    // Replacing the expresion in the string with its corresponding keyword
    highlightedTemplate = highlightedTemplate.replace(
      `\${${key}}`,
      highlight(keywords[key])
    );
  }

  // Here we could add a function that searchs for a
  // remainding ${n} expressions that did not have an keyword[n]
  // element and throw an error.

  return highlightedTemplate;
};

module.exports = {
  highlight, // for testing porpouses
  highlightKeywords,
};
