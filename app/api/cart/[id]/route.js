import Cart from "@models/cart"
import { connectToDB } from "@util/database"

export const POST = async (req, { params }) => {
    const addedProduct = await req.json();
    try {
        await connectToDB()
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
        return new Response(JSON.stringify(cart), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}