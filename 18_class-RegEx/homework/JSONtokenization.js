const JSONtokenization = (JSONstring) => {
  /* To catch:
    x strings 
    x numbers
    x objects
    x array
    x boolean
    x null
    x keys
    x , : separators

   */
  /*
    ("[a-zA-Z]+") => capture key names and some string cases
    (-?\d+\.?\d*) => capture negative, positive numbers with or with not decimals
    (true|false) => capture boolean
    (null) => capture null
    (\[|\]) => capture array aperture and closing
    (\{|\}) => capture object aperture and closing
    (".+") => capture string
    (:|,) => : and , separators
  */
  const regEx =
    /("[a-zA-Z]+")|(-?\d+\.?\d*)|(true|false)|(null)|(\[|\])|(\{|\})|(".+")|(:|,)/g;
  let match;
  const tokens = [];
  while ((match = regEx.exec(JSONstring))) {
    tokens.push(match[0]);
  }
  return tokens;
};

const JSONString = JSON.stringify({
  name: "name",
  age: 25,
  numbers: [1, 2.5, -3, -4.5, -999.32, 331.211, 99],
  isMarried: false,
  numberOfChild: null,
  pets: ["John", "Snow"],
  moreInfo: {
    lastName: "LastName",
    houseOwner: false,
    likeStudying: true,
  },
  string: "[im a string] a {not a object} or array",
});
let string = '{"name":"name","age":25,"numbers":[1,2.5,-3,-4.5,-999.32,331.211,99],"isMarried":false,"numberOfChild":null,"pets":["John","Snow"],"moreInfo":{"lastName":"LastName","houseOwner":false,"likeStudying":true},"string":"[im a string] a {not a object} or array"}'
console.log(string);
const tokens = JSONtokenization(string);
console.log(tokens);
