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
});
