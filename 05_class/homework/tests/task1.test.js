const calculateDiscountedPrice = require("../task1/calculateDiscountedPrice");
const calculateTotalPrice = require("../task1/calculateTotalPrice");

describe("calculateDiscountedPrice function tests", () => {
  test("Expect error with negative price product", () => {
    const productsPrice = [2, 4, -6, 8];
    const discount = 50;

    expect(() => calculateDiscountedPrice(productsPrice, discount)).toThrow(
      "Cannot operate with negative numbers."
    );
  });

  test("Expect error product price product is NaN", () => {
    const productsPrice = [2, 4, "Hi", 8];
    const discount = 50;

    expect(() => calculateDiscountedPrice(productsPrice, discount)).toThrow(
      "Cannot operate over this element."
    );
  });

  test("Expect error if discount > 100", () => {
    const productsPrice = [2, 4, 8, 8];
    const discount = 101;

    expect(() => calculateDiscountedPrice(productsPrice, discount)).toThrow(
      "Discount must be in range of 0 - 100"
    );
  });

  

  test("Expect [2, 4, 6, 8] with 50% descount to be [1, 2, 3, 4]", () => {
    const productsPrice = [2, 4, 6, 8];
    const expectedProductPrice = [1, 2, 3, 4];
    const discount = 50;
    const discountedProductsPrice = calculateDiscountedPrice(
      productsPrice,
      discount
    );
    expect(discountedProductsPrice).toEqual(expectedProductPrice);
  });

  test("Expect [2] with 90% descount to be [0.2]", () => {
    const productsPrice = [2];
    const expectedProductPrice = [0.2];
    const discount = 90;
    const discountedProductsPrice = calculateDiscountedPrice(
      productsPrice,
      discount
    );
    expect(discountedProductsPrice).toEqual(expectedProductPrice);
  });

  test("Expect [100, 200] with 70% descount to be [30, 60]", () => {
    const productsPrice = [100, 200];
    const expectedProductPrice = [30, 60];
    const discount = 70;
    const discountedProductsPrice = calculateDiscountedPrice(
      productsPrice,
      discount
    );
    expect(discountedProductsPrice).toEqual(expectedProductPrice);
  });

  test("Expect [1, 2, 3, 4] to not be modified", () => {
    const productsPrice = [1, 2, 3, 4];
    const discount = 70;
    const discountedProductsPrice = calculateDiscountedPrice(
      productsPrice,
      discount
    );
    expect(productsPrice).toEqual([1, 2, 3, 4]);
  });
});

describe("calculateTotalPrice function tests", () => {
  test("Expect total price of [1, 2, 3] to be 6", () => {
    const priceOfProducts = [1, 2, 3];
    const totalPrice = 6;
    expect(calculateTotalPrice(priceOfProducts)).toBe(totalPrice);
  });

  test("Expect total price of [99] to be 99", () => {
    const priceOfProducts = [99];
    const totalPrice = 99;
    expect(calculateTotalPrice(priceOfProducts)).toBe(totalPrice);
  });

  test("Expect price [1, 2, 3] to not change after calling the function", () => {
    const priceOfProducts = [1, 2, 3];
    const totalPrice = 6;
    expect(calculateTotalPrice(priceOfProducts)).toBe(totalPrice);
    expect(priceOfProducts).toEqual([1, 2, 3]);
  });
});
