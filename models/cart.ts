import { Schema, model, models } from "mongoose";
import { productSchema } from "./product";
const cartSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: [true]
    },
    cartItems: [productSchema],
}
)
const Cart = models.Cart || model("Cart", cartSchema)
export default Cart