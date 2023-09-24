import Product from "@models/product"
import { connectToDB } from "@util/database"
const itemsPerPage = 10;

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

// top 17 pages
// trousers 15 pages
// dress 10 pages
// skirt 3 pages