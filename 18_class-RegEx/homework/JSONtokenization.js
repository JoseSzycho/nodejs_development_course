const JSONtokenization = (JSONstring) => {
  /*
    matching object keys    (?<key>"[a-zA-Z]+")(?=:) 
    matching boolean        (?<boolean>true|false)
    matching null           (?<null>null)
    matching array limits   (?<array>\[|\])
    matching obj limits     (\{|\})
    matching separators     (:|,)
    matching string lazily  (?<string>".+?")
    matching numbers        (-?\d+\.?\d*)
  */
  const regEx =
    /(?<object>\{|\})|(?<key>"[a-zA-Z]+")(?=:)|(?<string>".+?")|(?<separator>:|,)|(?<boolean>(true|false))|(?<number>-?\d+\.?\d*)|(?<array>\[|\])|(?<null>null)/g;
  let match;
  const tokens = [];
  while ((match = regEx.exec(JSONstring))) {
    console.log(match.groups);
    tokens.push(match[0]);
  }
  return tokens;
};

const JSONString = JSON.stringify({
  nameKEY: "names",
  ageKEY: 25,
  numbersKEY: [1, { name: 2.5 }, -3, -4.5, -999.32, 331.211, 99],
  isMarriedKEY: false,
  numberOfChildKEY: null,
  textKEY: "more Text",
  petsKEY: ["John true", "false{},Snow"],
  moreInfoKEY: {
    lastNameKEY: "Last,Name",
    houseOwnerKEY: false,
    likeStudyingKEY: true,
    arrayKey: [1, [2], [[[3]]]],
  },
  stringKEY: "[im a string] a null true false{not a object} or ar,,ray",
});

const tokens = JSONtokenization(JSONString);
console.log(JSONString);
console.log(tokens);
