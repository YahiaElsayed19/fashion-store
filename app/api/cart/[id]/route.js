import Cart from "@models/cart"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        let cart = await Cart.findOne({ owner: params.id })
        if (!cart) {
            let newCart = await Cart.create({
                owner: params.id,
                cartItems: []
            })
            return new Response(JSON.stringify(newCart), { status: 200 })
        }
        return new Response(JSON.stringify(cart), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

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
                cartItems: [{ ...product._doc, count: 1 }]
            })
        }
        if (cart) {
            const productIndex = cart.cartItems.findIndex((item) => item._id.toString() === product._id.toString());
            if (productIndex !== -1) {
                const existedProduct = cart.cartItems[productIndex]
                cart.cartItems[productIndex] = { ...existedProduct._doc, count: existedProduct._doc.count + 1 }
                await cart.save()
            } else {
                cart.cartItems.push({ ...product._doc, count: 1 })
                await cart.save()
            }
        }
        return new Response(JSON.stringify({ msg: "Successfully added to cart!", success: true }), { status: 200 })
    } catch (error) {
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
            const existedProduct = cart.cartItems[productIndex]
            if (existedProduct.count > 1) {
                existedProduct.count -= 1
                cart.cartItems[productIndex] = existedProduct
                cart.save()
            } else {
                cart.cartItems.splice(productIndex, 1)
                cart.save()
            }
            return new Response(JSON.stringify({ msg: "Successfully deleted from cart!", success: true }), { status: 200 })
        } else {
            return new Response("Product was not found in cart!", { status: 404 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB()
        await Cart.findOneAndRemove({ owner: params.id })
        return new Response(JSON.stringify({ msg: "Successfully deleted cart!", success: true }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}