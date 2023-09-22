import { Schema, model, models } from "mongoose";
import { productSchema } from "./product";
const wishlistSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: [true]
    },
    wishlistItems: [productSchema],
}
)
const Wishlist = models.Wishlist || model("Wishlist", wishlistSchema)
export default Wishlist