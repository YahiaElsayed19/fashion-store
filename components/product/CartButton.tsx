"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { addToCart } from "@util/api";
const CartButton = ({ productId, buttonStyles, iconStyles }: { productId?: string, buttonStyles?: string, iconStyles?: string }) => {
    const [success, setSuccess] = useState<boolean | null>();
    const [showMsg, setShowMsg] = useState<boolean | null>(false);
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const addToCartHandler = async () => {
        if (session?.user) {
            setSubmitting(true);
            try {
                //@ts-ignore
                await addToCart(session?.user.id, productId);
                setSuccess(true)
            } catch (error) {
                setSuccess(false)
            }
            setSubmitting(false);
            setTimeout(() => {
                setSuccess(null)
            }, 3000)
        } else {
            setShowMsg(true)
            setTimeout(() => {
                setShowMsg(null)
            }, 5000)
        }

    };
    return (
        <>
            <button
                name="cart button"
                type="button"
                disabled={submitting}
                className={` cart-button ${buttonStyles}`}
                onClick={addToCartHandler}
            >
                + add to cart
            </button>
            {success === true && <BsCartCheckFill className={`text-green-400 absolute top-2 ${iconStyles} w-7 h-7`} />}
            {success === false && <IoMdCloseCircle className={`text-red-600 absolute top-2 ${iconStyles}  w-7 h-7 `} />}
            {showMsg && <p className="text-black dark:text-white bg-white dark:bg-black text-xs font-semibold p-2 absolute bottom-20 left-[50%] translate-x-[-50%] border border-primary">You need to sign in first</p>}
        </>
    )
}

export default CartButton