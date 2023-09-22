import Wishlist from "@models/wishlist"
import { connectToDB } from "@util/database"

export const POST = async (req, { params }) => {
    const addedProduct = await req.json();
    try {
        await connectToDB()
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