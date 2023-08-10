const getFullName = ({ firstName, lastName }) => {
  if (typeof firstName != "string" || typeof lastName != "string")
    throw new TypeError("Cannot operate if input is not a string.");

  const normalizeName = (el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  };

  // If we have more that one name we split it
  const separatedFirstNames = firstName.split(" ");
  // And we map to have the normalized names
  const normalizedFirstName = separatedFirstNames.map(normalizeName);

  const separatedLastNames = lastName.split(" ");
  const normalizedLastName = separatedLastNames.map(normalizeName);

  //Names must be joined, they were trheated as arrays.
  return `${normalizedFirstName.join(" ")} ${normalizedLastName.join(" ")}`;
};

module.exports = getFullName;
