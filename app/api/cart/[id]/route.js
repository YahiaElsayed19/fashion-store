import Cart from "@models/cart"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const POST = async (req, { params }) => {
    const url = new URL(req.url)
    let id = url.searchParams.get('id')

    try {
        await connectToDB()
        let product = await Product.findOne({ _id: id })
        let cart = await Cart.findOne({ owner: params.id })
        if (!cart) {
            await Cart.create({
                owner: params.id,
                cartItems: [product]
            })
        }
        if (cart) {
            cart.cartItems.push(product)
            await cart.save()
        }
        return new Response(JSON.stringify({ msg: "Successfully added to cart!", success: true }), { status: 200 })
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

export const PATCH = async (req, { params }) => {
    const url = new URL(req.url)
    let id = url.searchParams.get('id')

    try {
        await connectToDB()
        let product = await Product.findOne({ _id: id })
        let cart = await Cart.findOne({ owner: params.id })
        const productIndex = cart.cartItems.findIndex((item) => item._id.toString() === product._id.toString());
        if (productIndex !== -1) {
            cart.cartItems.splice(productIndex, 1)
            cart.save()
            return new Response(JSON.stringify({ msg: "Successfully deleted from cart!", success: true }), { status: 200 })
        } else {
            return new Response("Product was not found in cart!", { status: 404 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}
