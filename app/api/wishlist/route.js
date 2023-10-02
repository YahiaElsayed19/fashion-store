import User from "@models/user"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const GET = async (req) => {
    let userId = req.headers.get('Authorization')
    try {
        await connectToDB()
        let user = await User.findOne({ _id: userId })
        let wishlist = user.wishlist
        return new Response(JSON.stringify(wishlist), { status: 200 })
    }
    catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const POST = async (req) => {
    const url = new URL(req.url)
    let userId = req.headers.get('Authorization')
    let productId = url.searchParams.get('product-id')

    try {
        await connectToDB()
        let product = await Product.findOne({ _id: productId })
        let user = await User.findOne({ _id: userId })
        let wishlist = user.wishlist
        const productIndex = wishlist.findIndex((item) => item._id.toString() === product._id.toString());
        if (productIndex === -1) {
            wishlist.push(product)
            await user.save()
        }
        return new Response(JSON.stringify({ msg: "Successfully added to wishlist!", success: true }), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const PATCH = async (req) => {
    const url = new URL(req.url)
    let userId = req.headers.get('Authorization')
    let productId = url.searchParams.get('product-id')

    try {
        await connectToDB()
        let product = await Product.findOne({ _id: productId })
        let user = await User.findOne({ _id: userId })
        let wishlist = user.wishlist
        const productIndex = wishlist.findIndex((item) => item._id.toString() === product._id.toString());
        if (productIndex !== -1) {
            wishlist.splice(productIndex, 1)
            user.save()
            return new Response(JSON.stringify({ msg: "Successfully deleted from wishlist!", success: true }), { status: 200 })
        } else {
            return new Response("Product was not found in wishlist!", { status: 404 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const DELETE = async (req) => {
    let userId = req.headers.get('Authorization')
    try {
        await connectToDB()
        let user = await User.findOne({ _id: userId })
        user.wishlist = []
        await user.save()
        return new Response(JSON.stringify({ msg: "Successfully deleted wishlist!", success: true }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}