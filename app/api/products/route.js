import Product from "@models/product"
import { connectToDB } from "@util/database"

export const GET = async (req) => {
    try {
        await connectToDB()
        const products = await Product.find({})
        console.log(products);
        console.log(products.length);
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}