const { HashTable } = require("../../HashTable");
let hashTable;
beforeEach(() => {
  hashTable = new HashTable();
});
test("Expect key to be deleted from hash table and return true", () => {
  const key1 = "a";
  const key2 = "b";
  const value = "value";
  hashTable.insert(key1, value);
  hashTable.insert(key2, value);
  hashTable.insert(key2, value);
  expect(hashTable.deleteByKey(key1)).toBe(true);
  expect(hashTable.get(key1)).toBe(undefined);

  expect(hashTable.deleteByKey(key2)).toBe(true);
  expect(hashTable.get(key2)).toBe(undefined);
});

test("Expect to return false if try to delete a not present key", () => {
  const notPresentKey = "a";
  expect(hashTable.deleteByKey(notPresentKey)).toBe(false);
});
