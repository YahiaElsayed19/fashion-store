import axios from "axios";
const API = axios.create({
    baseURL: `api/`,
});

export const getProducts = (page?: number) => {
    return API.get(`products`, { params: { page: page } })
}
export const getProductsByType = (type: string, page?: number) => {
    return API.get(`types/${type}`, { params: { page: page } })
}

export const getProductsByCategory = (category: string, page?: number) => {
    return API.get(`categories/${category}`, { params: { page: page } })
}

export const getProductsByGender = (gender: string, page?: number) => {
    return API.get(`products/${gender}`, { params: { page: page } })
}

export const addToCart = (userId: string, productId: string) => {
    return API.post(`cart/${userId}`, {}, { params: { 'product-id': productId } })
}

export const searchProducts = (search: string) => {
    return API.get(`search`, { params: { search: search } })
}