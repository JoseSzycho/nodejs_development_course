const { HashTable } = require("../../HashTable");

let hashTable = new HashTable();

beforeEach(() => {
  hashTable = new HashTable();
});

test("Expect to get all key-values with no collisions", () => {
  for (let i = 0; i < 10; i++) {
    const key = String(i);
    const value = i * i;
    hashTable.insert(key, value);
  }

  for (let i = 0; i < 10; i++) {
    const key = String(i);
    const value = i * i;
    expect(hashTable.get(key)).toBe(value);
  }
});

test("Expect to get all key-values with collision", () => {
  const collisionKey1 = "b";
  const collisionKey2 = "a";
  const valuesInKey1 = [1, 2, 3, 4, 5];
  const valuesInKey2 = [6, 7, 8, 9, 10];

  valuesInKey1.forEach((el) => {
    hashTable.insert(collisionKey1, el);
  });

  valuesInKey2.forEach((el) => {
    hashTable.insert(collisionKey2, el);
  });

  expect(hashTable.get(collisionKey1)).toEqual(valuesInKey1);
  expect(hashTable.get(collisionKey2)).toEqual(valuesInKey2);
});
