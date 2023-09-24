import Wishlist from "@models/wishlist"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        let wishlist = await Wishlist.findOne({ owner: params.userId })
        if (!wishlist) {
            let newWishlist = await Wishlist.create({
                owner: params.userId,
                wishlistItems: []
            })
            return new Response(JSON.stringify(newWishlist), { status: 200 })
        }
        return new Response(JSON.stringify(wishlist), { status: 200 })
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
        let wishlist = await Wishlist.findOne({ owner: params.userId })
        if (!wishlist) {
            await Wishlist.create({
                owner: params.userId,
                wishlistItems: [product]
            })
        }
        if (wishlist) {
            const productIndex = wishlist.wishlistItems.findIndex((item) => item._id.toString() === product._id.toString());
            if (productIndex === -1) {
                wishlist.wishlistItems.push(product)
                await wishlist.save()
            }
        }
        return new Response(JSON.stringify({ msg: "Successfully added to wishlist!", success: true }), { status: 200 })
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
        let wishlist = await Wishlist.findOne({ owner: params.userId })
        const productIndex = wishlist.wishlistItems.findIndex((item) => item._id.toString() === product._id.toString());
        if (productIndex !== -1) {
            wishlist.wishlistItems.splice(productIndex, 1)
            wishlist.save()
            return new Response(JSON.stringify({ msg: "Successfully deleted from wishlist!", success: true }), { status: 200 })
        } else {
            return new Response("Product was not found in wishlist!", { status: 404 })
        }
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB()
        await Wishlist.findOneAndRemove({ owner: params.userId })
        return new Response(JSON.stringify({ msg: "Successfully deleted wishlist!", success: true }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}