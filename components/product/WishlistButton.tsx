"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addToWishlist, removeFromWishlist } from "@util/api";

const WishlistButton = ({ inWishlist }: { inWishlist?: boolean }) => {
    const productId = useSearchParams().get("product-id");
    const { data: session } = useSession();
    const [submittingWishlist, setSubmittingWishlist] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(inWishlist);
    const addToWishlistHandler = async () => {
        setSubmittingWishlist(true);
        try {
            //@ts-ignore
            await addToWishlist(session?.user.id, productId);
            setIsInWishlist(true);
        } catch (error) { }
        setSubmittingWishlist(false);
    };
    const removeFromWishlistHandler = async () => {
        setSubmittingWishlist(true);
        try {
            //@ts-ignore
            await removeFromWishlist(session?.user.id, productId);
            setIsInWishlist(false);
        } catch (error) {
            console.log(error);
        }
        setSubmittingWishlist(false);
    };

    return (
        <div className="absolute top-2 left-2">
            {isInWishlist ? (
                <button
                    type="button"
                    className="wishlist-btn text-red-600"
                    onClick={removeFromWishlistHandler}
                    disabled={submittingWishlist}
                >
                    <AiFillHeart className="w-8 h-8" />{""}
                </button>
            ) : (
                <button
                    type="button"
                    className="wishlist-btn"
                    onClick={addToWishlistHandler}
                    disabled={submittingWishlist}
                >
                    <AiOutlineHeart className="w-8 h-8 " />{""}
                </button>
            )}
        </div>
    );
};

export default WishlistButton;
