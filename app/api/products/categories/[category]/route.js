import Product from "@models/product"
import { connectToDB } from "@util/database"
const itemsPerPage = 20;

export const GET = async (req, { params }) => {
    const url = new URL(req.url)
    let page = url.searchParams.get('page') || 1
    let startIndex = (page - 1) * itemsPerPage
    try {
        await connectToDB()
        const products = await Product.find({ category: params.category }).skip(startIndex).limit(itemsPerPage)
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

// top 9 pages
// trousers 8 pages
// dress 5 pages
// skirt 2 pages