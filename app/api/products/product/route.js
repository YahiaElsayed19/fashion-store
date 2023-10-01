import User from "@models/user";
import Product from "@models/product";
import { connectToDB } from "@util/database";
export const GET = async (req) => {
    const url = new URL(req.url);
    let userId = url.searchParams.get("user-id");
    let productId = url.searchParams.get("product-id");
    try {
        await connectToDB();
        const user = await User.findOne({ _id: userId });
        const product = await Product.findOne({ _id: productId });
        if (user) {
            let cart = user.cart
            let wishlist = user.wishlist
            const customizedProduct = {
                ...product.toObject(),
                inCart:
                    cart.find(
                        (cartItem) => cartItem._id.toString() === product._id.toString()
                    ) !== undefined,
                inWishlist:
                    wishlist.find(
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
