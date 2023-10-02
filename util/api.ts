import axios from "axios";
const API = axios.create({
    baseURL: `/api/`,
});

export const getProducts = (page?: number) => {
    return API.get(`products`, { params: { page: page } });
};

export const getProduct = (productId?: string, authorization?: string) => {
    return API.get(`products/product?product-id=${productId}`, {
        headers: { Authorization: authorization },
    });
};

export const getProductsByType = (type: string, page?: number) => {
    return API.get(`products/types/${type}`, { params: { page: page } });
};

export const getProductsByCategory = (category: string, page?: number) => {
    return API.get(`products/categories/${category}`, { params: { page: page } });
};

export const getProductsByGender = (gender: string, page?: number) => {
    return API.get(`products/${gender}`, { params: { page: page } });
};

export const addToCart = (authorization: string, productId: string) => {
    return API.post(
        `cart`,
        {},
        {
            headers: { Authorization: authorization },
            params: { "product-id": productId },
        }
    );
};
export const addToWishlist = (authorization: string, productId: string) => {
    return API.post(
        `wishlist`,
        {},
        {
            headers: { Authorization: authorization },
            params: { "product-id": productId },
        }
    );
};

export const searchProducts = (search: string) => {
    return API.get(`search`, { params: { search: search } });
};
