import Product from "@models/product"
import { connectToDB } from "@util/database"

export const GET = async (req) => {
    const url = new URL(req.url)
    let id = url.searchParams.get('id')
    try {
        await connectToDB()
        const product = await Product.findOne({ _id: id })
        return new Response(JSON.stringify(product), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}