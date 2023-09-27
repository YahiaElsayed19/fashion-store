"use client";
import React, { useState } from "react";
import Image from "next/image";
import { productCardType } from "@types";
import { addToCart } from "@util/api";
import { useSession } from "next-auth/react";

const ProductCard: React.FC<productCardType> = ({
    id,
    title,
    imageSrc,
    price,
}) => {
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean | null>();
    const addToCartHandler = async () => {
        setSubmitting(true);
        try {
            //@ts-ignore
            await addToCart(session?.user.id, id);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
        }
        setTimeout(() => {
            setSuccess(null);
        }, 2000);
        setSubmitting(false);
    };

    return (
        <div className="text-center relative flex flex-col items-center">
            <Image
                src={imageSrc}
                width={180}
                height={270}
                alt={title}
                className="rounded-2xl"
            />
            <p className="text-black dark:text-white text-md font-bold mt-2 w-[150px] truncate">
                {title}
            </p>
            <p className="text-primary text-sm">{price} EGP</p>
            <button
                disabled={submitting}
                className="bg-white text-black dark:bg-black dark:text-white font-medium mt-5 py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={addToCartHandler}
            >
                + add to cart
            </button>
            {success === true && <p className="msg-toast bg-green-400">Successed</p>}
            {success === false && <p className="msg-toast bg-red-600 ">Failed</p>}
        </div>
    );
};

export default ProductCard;