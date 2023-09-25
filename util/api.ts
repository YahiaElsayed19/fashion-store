import axios from "axios";
const currentUrl = window.location.origin;
const API = axios.create({
    baseURL: `${currentUrl}/api/`,
});

export const getProductsByType = (type: string, page?: number) => {
    return API.get(`types/${type}`, { params: { page: page } })
}

export const getProductsByCategory = (category: string, page?: number) => {
    return API.get(`categories/${category}`, { params: { page: page } })
}

export const getProductsByGender = (gender: string, page?: number) => {
    return API.get(`products/${gender}`, { params: { page: page } })
}