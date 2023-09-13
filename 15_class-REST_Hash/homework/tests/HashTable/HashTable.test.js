const { HashTable } = require("../../HashTable");

describe("General test that includes all methods.", () => {
  test("Expect to pass all tests", () => {
    const hashTable = new HashTable();

    hashTable.insert("a", "aa");
    hashTable.insert("b", "bb");
    hashTable.insert("c", "cc");
    hashTable.insert("d", "da");
    hashTable.insert("d", "db");
    hashTable.insert("d", "dc");

    hashTable.deleteByKey("a");
    hashTable.deleteByKeyValue("d", "db");

    expect(hashTable.get("a")).toBe(undefined);
    expect(hashTable.get("c")).toBe("cc");
    expect(hashTable.get("d")).toEqual(["da", "dc"]);

    hashTable.insert("d", "dd");
    hashTable.insert("d", "de");
    hashTable.deleteByKeyValue("d", "de");
    hashTable.insert("d", "df");

    expect(hashTable.get("d")).toEqual(["da", "dc", "dd", "df"]);
  });
});
