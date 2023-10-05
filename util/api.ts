import axios from "axios";
const API = axios.create({
    baseURL: `/api/`,
});

export const getProducts = (page?: number) => {
    return API.get(`products`, { params: { page: page } });
};

export const getProduct = (productId: string, authorization?: string | null) => {
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

export const getCart = (authorization?: string | null) => {
    return API.get(
        `cart`,
        {
            headers: { Authorization: authorization },
        }
    );
};

export const addToCart = (productId: string, authorization?: string | null) => {
    return API.post(
        `cart`,
        {},
        {
            headers: { Authorization: authorization },
            params: { "product-id": productId },
        }
    );
};

export const removeFromCart = (productId: string, authorization?: string | null) => {
    return API.patch(
        `cart`,
        {},
        {
            headers: { Authorization: authorization },
            params: { "product-id": productId },
        }
    );
};

export const removeCart = (authorization?: string | null) => {
    return API.delete(
        `cart`,
        {
            headers: { Authorization: authorization },
        }
    );
};

export const getWishlist = (authorization?: string | null) => {
    return API.get(
        `wishlist`,
        {
            headers: { Authorization: authorization },
        }
    );
};

export const addToWishlist = (productId: string, authorization?: string | null) => {
    return API.post(
        `wishlist`,
        {},
        {
            headers: { Authorization: authorization },
            params: { "product-id": productId },
        }
    );
};

export const removeFromWishlist = (productId: string, authorization?: string | null) => {
    return API.patch(
        `wishlist`,
        {},
        {
            headers: { Authorization: authorization },
            params: { "product-id": productId },
        }
    );
};

export const removeWishlist = (authorization?: string | null) => {
    return API.delete(
        `wishlist`,
        {
            headers: { Authorization: authorization },
        }
    );
};

export const searchProducts = (search: string) => {
    return API.get(`search`, { params: { search: search } });
};
