const {
  deleteNonConfigurable,
} = require("../tasks/task2/deleteNonConfigurable");

describe("product object tests", () => {
  test("Expect product price and quantity to be non-enumerable and non-writable", () => {
    const { product } = require("../tasks/task2/product");

    const productPriceDescriptor =
      Object.getOwnPropertyDescriptors(product).price;
    const productQuantityDescriptor =
      Object.getOwnPropertyDescriptors(product).quantity;

    expect(productPriceDescriptor.enumerable).toBe(false);
    expect(productPriceDescriptor.writable).toBe(false);
    expect(productQuantityDescriptor.enumerable).toBe(false);
    expect(productQuantityDescriptor.writable).toBe(false);
  });
});

describe("getTotalPrice function test", () => {
  test("Expect total price to be 5000", () => {
    const { getTotalPrice } = require("../tasks/task2/getTotalPrice");
    const { product } = require("../tasks/task2/product");
    expect(getTotalPrice(product)).toBe(5000);
  });

  test("Expect error for negative price", () => {
    const { getTotalPrice } = require("../tasks/task2/getTotalPrice");
    const product = {
      price: -4,
      quantity: 49,
    };
    expect(() => getTotalPrice(product)).toThrow(
      `price must be a valid number.`
    );
  });

  test("Expect error for NaN quantity", () => {
    const { getTotalPrice } = require("../tasks/task2/getTotalPrice");
    const product = {
      price: 53,
      quantity: NaN,
    };
    expect(() => getTotalPrice(product)).toThrow(
      `quantity must be a valid number.`
    );
  });

  test("Expect error for string price", () => {
    const { getTotalPrice } = require("../tasks/task2/getTotalPrice");
    const product = {
      price: "53",
      quantity: 28,
    };
    expect(() => getTotalPrice(product)).toThrow(
      `price must be a valid number.`
    );
  });
});

describe("deleteNonConfigurable function test", () => {
  const person = {
    firstName: "Mikaela",
    lastName: "Hnatiuk",
    age: 19,
  };

  test("Expect valid property to be deleted", () => {
    deleteNonConfigurable(person, "age");
    expect(person).toEqual({
      lastName: "Hnatiuk",
      firstName: "Mikaela",
    });
  });

  test("Expect error from deleting a non-confiruable propterty", () => {
    Object.defineProperty(person, "firstName", {
      configurable: false,
    });
    expect(() => deleteNonConfigurable(person, "firstName")).toThrow(
      "Cannot delete non-configurable property."
    );
  });

  test("Expecto error if triying to delete a not existent property.", () => {
    
    expect(() => deleteNonConfigurable(person, "surname")).toThrow(
      "Object do no not contains property surname."
    );
  });
});
