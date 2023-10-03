"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { addToCart } from "@util/api";
const CartButton = () => {
    const [success, setSuccess] = useState<boolean | null>();
    const [showMsg, setShowMsg] = useState<boolean | null>(false);
    const productId = useSearchParams().get("product-id")
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
                type="button"
                disabled={submitting}
                className="w-full bg-black text-white dark:bg-white dark:text-black font-medium mt-5 py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={addToCartHandler}
            >
                + add to cart
            </button>
            {success === true && <BsCartCheckFill className="text-green-400 absolute top-2 left-12 w-7 h-7" />}
            {success === false && <IoMdCloseCircle className="text-red-600 absolute top-2 left-12 w-7 h-7 " />}
            {showMsg && <p className="text-black dark:text-white bg-white dark:bg-black p-2 absolute bottom-20 left-[50%] translate-x-[-50%] border border-primary">You need to sign in first</p>}
        </>

    )
}

export default CartButton