export const navLinks: { title: string, url: string }[] = [
    {
        title: "Trending",
        url: "/trending",
    },
    {
        title: "New",
        url: "/new",
    },
    {
        title: "Hot",
        url: "/hot",
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
        queryFunction: getProductsByType,
    },
    {
        title: "new",
        queryFunction: getProductsByType,
    },
    {
        title: "hot",
        queryFunction: getProductsByType,
    },
    {
        title: "men",
        queryFunction: getProductsByGender,
    },
    {
        title: "women",
        queryFunction: getProductsByGender,
    },
    {
        title: "top",
        queryFunction: getProductsByCategory,
    },
    {
        title: "trousers",
        queryFunction: getProductsByCategory,
    },
    {
        title: "skirt",
        queryFunction: getProductsByCategory,
    },
    {
        title: "dress",
        queryFunction: getProductsByCategory,
    },

]