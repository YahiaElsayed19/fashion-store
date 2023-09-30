export const navLinks: { title: string, url: string }[] = [
    {
        title: "Trending",
        url: "/products/types/trending",
    },
    {
        title: "New",
        url: "/products/types/new",
    },
    {
        title: "Hot",
        url: "/products/types/hot",
    },
    {
        title: "Wishlist",
        url: "/wishlist",
    },
    {
        title: "Cart",
        url: "/cart",
    },
]
import { getProductsByCategory, getProductsByGender, getProductsByType } from '@util/api'

export const END_POINTS = [
    {
        title: "trending",
        url: "/products/types/trending",
        queryFunction: getProductsByType,
    },
    {
        title: "new",
        url: "/products/types/new",
        queryFunction: getProductsByType,
    },
    {
        title: "hot",
        url: "/products/types/hot",
        queryFunction: getProductsByType,
    },
    {
        title: "men",
        url: "/products/men",
        queryFunction: getProductsByGender,
    },
    {
        title: "women",
        url: "/products/women",
        queryFunction: getProductsByGender,
    },
    {
        title: "top",
        url: "/products/categories/top",
        queryFunction: getProductsByCategory,
    },
    {
        title: "trousers",
        url: "/products/categories/trousers",
        queryFunction: getProductsByCategory,
    },
    {
        title: "skirt",
        url: "/products/categories/skirt",
        queryFunction: getProductsByCategory,
    },
    {
        title: "dress",
        url: "/products/categories/dress",
        queryFunction: getProductsByCategory,
    },

]

export const categoriesLinks: { title: string, url: string }[] = [
    {
        title: "Top",
        url: "/products/categories/top",
    },
    {
        title: "Trousers",
        url: "/products/categories/trousers",
    },
    {
        title: "Dress",
        url: "/products/categories/dress",
    },
    {
        title: "Skirt",
        url: "/products/categories/skirt",
    },
]
export const typesLinks: { title: string, url: string }[] = [
    {
        title: "Trending",
        url: "/products/types/trending",
    },
    {
        title: "New",
        url: "/products/types/new",
    },
    {
        title: "Hot",
        url: "/products/types/hot",
    },
]