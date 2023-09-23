import Cart from "@models/cart"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const POST = async (req, { params }) => {
    const url = new URL(req.url)
    let id = url.searchParams.get('id')

    try {
        await connectToDB()
        let addedProduct = await Product.findOne({ _id: id })
        let cart = await Cart.findOne({ owner: params.id })
        if (!cart) {
            await Cart.create({
                owner: params.id,
                cartItems: [addedProduct]
            })
        }
        if (cart) {
            cart.cartItems.push(addedProduct)
            await cart.save()
        }
        return new Response("Successfully added!", { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        let cart = await Cart.findOne({ owner: params.id })
        if (!cart) {
            await cart.create({
                owner: params.id,
                cartItems: []
            })
        }
        return new Response(JSON.stringify(cart), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}