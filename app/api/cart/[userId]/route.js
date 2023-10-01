import User from "@models/user"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        let user = await User.findOne({ _id: params.userId })
        let cart = user.cart
        return new Response(JSON.stringify(cart), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const POST = async (req, { params }) => {
    const url = new URL(req.url)
    let productId = url.searchParams.get('product-id')

    try {
        await connectToDB()
        let product = await Product.findOne({ _id: productId })
        let user = await User.findOne({ _id: params.userId })
        let cart = user.cart
        const productIndex = cart.findIndex((item) => item._id.toString() === product._id.toString());
        if (productIndex !== -1) {
            const existedProduct = cart[productIndex]
            cart[productIndex] = { ...existedProduct, count: existedProduct.count + 1 }
            await user.save()
        } else {
            cart.push({ ...product._doc, count: 1 })
            await user.save()
        }
        return new Response(JSON.stringify({ msg: "Successfully added to cart!", success: true }), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const PATCH = async (req, { params }) => {
    const url = new URL(req.url)
    let productId = url.searchParams.get('product-id')

    try {
        await connectToDB()
        let product = await Product.findOne({ _id: productId })
        let user = await User.findOne({ _id: params.userId })
        let cart = user.cart
        const productIndex = cart.findIndex((item) => item._id.toString() === product._id.toString());
        if (productIndex !== -1) {
            const existedProduct = cart[productIndex]
            if (existedProduct.count > 1) {
                existedProduct.count -= 1
                cart[productIndex] = existedProduct
                user.save()
            } else {
                cart.splice(productIndex, 1)
                user.save()
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
        const user = await User.findOne({ _id: params.userId })
        user.cart = []
        await user.save()
        return new Response(JSON.stringify({ msg: "Successfully deleted cart!", success: true }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}