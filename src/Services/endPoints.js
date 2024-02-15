const API_URL = "https://fakestoreapi.com"

export const endPoints = {
    products: {
        getAllProducts: `${API_URL}/products`,
        getSingleProduct: (id) => `${API_URL}/products/${id}`,
        getLimitProducts: (limit, sort) => `${API_URL}/products?limit=${limit}&sort=${sort}`,
        getAllCategories: `${API_URL}/products/categories`,
        getProductsCategory: (category) => `${API_URL}/products/category/${category}`
    }
}