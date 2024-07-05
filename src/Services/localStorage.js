function getProductsCart() {
    const productsCart = localStorage.getItem('productsCart');
    return JSON.parse(productsCart || '[]');
}

function addProductCart(product) {
    const productsCart = getProductsCart();
    if (productsCart.find(item => item.id === product.id)) return false;
    product.countUnity = 1;
    productsCart.push(product);
    localStorage.setItem('productsCart', JSON.stringify(productsCart));;
}

function validateProductInCart(product) {
    const productsCart = getProductsCart();
    return productsCart.find(item => item.id === product.id);
}

function deleteProductInCart(product) {
    const productsCart = getProductsCart();
    const newProductsCart = productsCart.filter(item => item.id !== product.id);
    localStorage.setItem('productsCart', JSON.stringify(newProductsCart));
}

function updateCartInCart(product, data) {
    const productsCart = getProductsCart();
    product.countUnity = data;
    productsCart.push(product);
    localStorage.setItem('productsCart', JSON.stringify(productsCart));
    return productsCart;
}

export { getProductsCart, addProductCart, validateProductInCart, deleteProductInCart, updateCartInCart }