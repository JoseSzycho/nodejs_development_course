const readline = require("readline");
class Navigation {
  static async menu1() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Please enter something: ", (userInput) => {
      console.log(`You entered: ${userInput}`);
      rl.close();
    });
  }

  static async menu2() {
    const r2 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    r2.question("Please enter something: ", (userInput) => {
      console.log(`You entered: ${userInput}`);
      r2.close();
    });
  }
}

module.exports = { Navigation };
