const { HashTable } = require("../HashTable");

let hashTable;
beforeEach(() => {
  hashTable = new HashTable();
  hashTable.insert("a", "valueA");
  hashTable.insert("b", "valueA");
  hashTable.insert("b", "valueB");
  hashTable.insert("b", "valueC");
  hashTable.insert("b", "valueD");
  hashTable.insert("b", "valueE");
  hashTable.insert("b", "valueF");
});

describe("Testing key with no collision", () => {
  test("Expect to return false and no delete if match key but not the value", () => {
    expect(hashTable.get("a")).toBe("valueA");
    expect(hashTable.deleteByKeyValue("b", "valueZ")).toBe(false);
    expect(hashTable.get("a")).toBe("valueA");
  });

  test("Expect to return true if a key-value is deleted", () => {
    expect(hashTable.get("a")).toBe("valueA");
    expect(hashTable.deleteByKeyValue("a", "valueA")).toBe(true);
    expect(hashTable.get("a")).toBe(undefined);
  });

  test("Expect false if try to delete key that is not in the hash table", () => {
    expect(hashTable.deleteByKeyValue("c", "valueA")).toBe(false);
  });
});

describe("Testing keys with collision", () => {
  const collisionData = [
    "valueA",
    "valueB",
    "valueC",
    "valueD",
    "valueE",
    "valueF",
  ];
  test("Expect to return false and no delete if match key but not the value", () => {
    expect(hashTable.get("b")).toEqual(collisionData);
    expect(hashTable.deleteByKeyValue("b", "valueZ")).toBe(false);
    expect(hashTable.get("b")).toEqual(collisionData);
  });

  test("Expect to return true if a key-value is deleted", () => {
    expect(hashTable.get("b")).toEqual(collisionData);

    expect(hashTable.deleteByKeyValue("b", "valueA")).toBe(true);
    expect(hashTable.get("b")).toEqual([
      "valueB",
      "valueC",
      "valueD",
      "valueE",
      "valueF",
    ]);

    expect(hashTable.deleteByKeyValue("b", "valueD")).toBe(true);
    expect(hashTable.get("b")).toEqual([
      "valueB",
      "valueC",
      "valueE",
      "valueF",
    ]);

    expect(hashTable.deleteByKeyValue("b", "valueF")).toBe(true);
    expect(hashTable.get("b")).toEqual(["valueB", "valueC", "valueE"]);

    expect(hashTable.deleteByKeyValue("b", "valueE")).toBe(true);
    expect(hashTable.get("b")).toEqual(["valueB", "valueC"]);

    expect(hashTable.deleteByKeyValue("b", "valueB")).toBe(true);
    expect(hashTable.get("b")).toEqual("valueC");

    expect(hashTable.deleteByKeyValue("b", "valueB")).toBe(false);

    expect(hashTable.deleteByKeyValue("b", "valueC")).toBe(true);
    expect(hashTable.get("b")).toEqual(undefined);

    expect(hashTable.deleteByKeyValue("b", "valueC")).toBe(false);

    hashTable.insert("b", "valueE");
    expect(hashTable.get("b")).toEqual("valueE");
    hashTable.insert("b", "valueF");
    expect(hashTable.get("b")).toEqual(["valueE", "valueF"]);
  });

  test("Expect false if try to delete key that is not in the hash table", () => {
    expect(hashTable.deleteByKeyValue("c", "valueA")).toBe(false);
  });
});
