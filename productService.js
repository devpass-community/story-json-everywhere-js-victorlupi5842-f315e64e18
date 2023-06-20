async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    // Add your solution here!
    try {
        const response = await fetch(apiUrl); // Realiza a chamada para a API
        const product = await response.json(); // Converte a resposta em JSON
    
        return product; // Retorna o objeto do produto
      } catch (error) {
        console.error('Erro ao obter o produto:', error);
        throw error; // Lança o erro para ser tratado no código que chamou a função
      }

    
}

module.exports = getProduct;
