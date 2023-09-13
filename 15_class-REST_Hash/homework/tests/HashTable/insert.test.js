const { HashTable } = require("../../HashTable");

let hashTable = new HashTable();
beforeEach(() => {
  hashTable = new HashTable();
});

test("Expect all key-values with no collisions to be insert in the table.", () => {
  for (let i = 0; i < 10; i++) {
    const key = String(i);
    const value = i * i;
    expect(hashTable.insert(key, value)).toBe(true);
  }

  for (let i = 0; i < 10; i++) {
    const key = String(i);
    const value = i * i;
    expect(hashTable.get(key)).toBe(value);
  }
});

test("Expect all key-values with collision to be added", () => {
  const key = "b";
  const valuesInKey = [];
  for (let i = 0; i < 10; i++) {
    const value = i * i;
    valuesInKey.push(value);
    expect(hashTable.insert(key, value)).toBe(true);
  }

  expect(hashTable.get(key)).toEqual(valuesInKey);
});
