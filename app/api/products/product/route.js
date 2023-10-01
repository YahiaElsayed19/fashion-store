import Cart from "@models/cart";
import Product from "@models/product";
import Wishlist from "@models/wishlist";
import { connectToDB } from "@util/database";
export const GET = async (req) => {
    const url = new URL(req.url);
    let userId = url.searchParams.get("user-id");
    let productId = url.searchParams.get("product-id");
    try {
        await connectToDB();
        const product = await Product.findOne({ _id: productId });
        const cart = await Cart.findOne({ owner: userId });
        const wishlist = await Wishlist.findOne({ owner: userId });
        if (userId) {
            const customizedProduct = {
                ...product.toObject(),
                inCart:
                    cart.cartItems.find(
                        (cartItem) => cartItem._id.toString() === product._id.toString()
                    ) !== undefined,
                inWishlist:
                    wishlist.wishlistItems.find(
                        (wishlistItem) =>
                            wishlistItem._id.toString() === product._id.toString()
                    ) !== undefined,
            };
            return new Response(JSON.stringify(customizedProduct), { status: 200 });
        } else {
            return new Response(JSON.stringify(product), { status: 200 });
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
