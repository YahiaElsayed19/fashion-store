import Wishlist from "@models/wishlist"
import Product from "@models/product"
import { connectToDB } from "@util/database"

export const POST = async (req, { params }) => {
    const url = new URL(req.url)
    let id = url.searchParams.get('id')

    try {
        await connectToDB()
        let addedProduct = await Product.findOne({ _id: id })
        let wishlist = await Wishlist.findOne({ owner: params.id })
        if (!wishlist) {
            await Wishlist.create({
                owner: params.id,
                wishlistItems: [addedProduct]
            })
        }
        if (wishlist) {
            wishlist.wishlistItems.push(addedProduct)
            await wishlist.save()
        }
        return new Response("Successfully added!", { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export const GET = async (req, { params }) => {
    try {
        await connectToDB()
        let wishlist = await Wishlist.findOne({ owner: params.id })
        if (!wishlist) {
            await Wishlist.create({
                owner: params.id,
                wishlistItems: []
            })
        }
        return new Response(JSON.stringify(wishlist), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 })
    }
}