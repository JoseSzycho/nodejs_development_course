const calculateDiscountedPrice = require("../task1/calculateDiscountedPrice");

describe("Calculate Discounted Price function tests", () => {
  test("Expect [2, 4, 6, 8] with 50% descount to be [1, 2, 3, 4]", () => {
    const productsPrice = [2, 4, 6, 8];
    const expectedProductPrice = [1, 2, 3, 4];
    const discount = 50;
    const discountedProductsPrice = calculateDiscountedPrice(
      productsPrice,
      discount
    );
    console.log(discountedProductsPrice);
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
});

