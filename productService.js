async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    try {
        const response = await fetch(apiUrl);
        const items = await response.json();
    
        return items;
      } catch (error) {
      }
}

module.exports = getProduct;
