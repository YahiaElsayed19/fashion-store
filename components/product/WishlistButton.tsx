"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addToWishlist, removeFromWishlist } from "@util/api";

const WishlistButton = ({ inWishlist }: { inWishlist?: boolean }) => {
    const productId = useSearchParams().get("product-id");
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(inWishlist);
    const addToWishlistHandler = async () => {
        setSubmitting(true);
        try {
            //@ts-ignore
            await addToWishlist(session?.user.id, productId);
            setIsInWishlist(true);
        } catch (error) { }
        setSubmitting(false);
    };
    const removeFromWishlistHandler = async () => {
        setSubmitting(true);
        try {
            //@ts-ignore
            await removeFromWishlist(session?.user.id, productId);
            setIsInWishlist(false);
        } catch (error) {
            console.log(error);
        }
        setSubmitting(false);
    };

    return (
        <div className="absolute top-2 left-2">
            {isInWishlist ? (
                <button
                    aria-label="wishlist button"
                    name="wishlist button"
                    type="button"
                    className="wishlist-button text-red-600"
                    onClick={removeFromWishlistHandler}
                    disabled={submitting}
                >
                    <AiFillHeart className="w-8 h-8" />{""}
                </button>
            ) : (
                <button
                    aria-label="wishlist button"
                    name="wishlist button"
                    type="button"
                    className="wishlist-button text-black dark:text-white"
                    onClick={addToWishlistHandler}
                    disabled={submitting}
                >
                    <AiOutlineHeart className="w-8 h-8 " />{""}
                </button>
            )}
        </div>
    );
};

export default WishlistButton;
