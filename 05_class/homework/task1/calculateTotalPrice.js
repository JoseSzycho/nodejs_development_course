const calculateTotalPrice = (priceOfProducts) => {
    const totalPrice = priceOfProducts.reduce((sum, el) => sum + el, 0);
    return totalPrice;
};

module.exports = calculateTotalPrice;