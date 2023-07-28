const getFullName = ({ firstName, lastName }) => {
  const normalizeName = (el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  };

  const separatedFirstNames = firstName.split(" ");
  const normalizedFirstName = separatedFirstNames.map(normalizeName);

  const separatedLastNames = lastName.split(" ");
  const normalizedLastName = separatedLastNames.map(normalizeName);

  return `${normalizedFirstName.join(" ")} ${normalizedLastName.join(" ")}`;
};

module.exports = getFullName;
