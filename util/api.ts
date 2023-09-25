import axios from "axios";
const API = axios.create({
    baseURL: "http://localhost:3000/api/",
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