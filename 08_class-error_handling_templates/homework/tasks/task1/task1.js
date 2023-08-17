// Checks if the desire languaje is in the translations,
// if not, thrwos an error.
const checkLanguajeAvailable = (language, translations) => {
  const availableLanguajes = Object.getOwnPropertyNames(translations);
  if (!availableLanguajes.includes(language))
    throw new Error("Languaje not available.");
};

// Checks if the the desire translation is in the translation object,
// if not, throws error.
const checkTranslationAvailable = (toTranslate, language, translations) => {
  const availableTranslations = Object.getOwnPropertyNames(
    translations[language]
  );
  if (!availableTranslations.includes(toTranslate))
    throw new Error("Translation not available.");
};

// Checks if the thranslation object is available, 
// if not, thrwos error.
const checkTranslationsObjectAvailable = (translations) => {
  if (!(typeof translations == "object"))
    throw new Error("Translations must be an object.");
};

// It accepts a string template, a desire property to translate, the desire languaje
// to be translated and a translation object.
// It returns the desired translation.
const localize = (str, toTranslate, language, translations) => {
  // Checking for input errors
  checkTranslationsObjectAvailable(translations);
  checkLanguajeAvailable(language, translations);
  checkTranslationAvailable(toTranslate, language, translations);

  // If here, retur translations
  return translations[language][toTranslate];
};

module.exports = localize;
