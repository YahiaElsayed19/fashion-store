"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { addToCart } from "@util/api";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { productType } from '@types';
const ProductInfo = ({ product }: { product?: productType }) => {
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean | null>();
    const addToCartHandler = async () => {
        setSubmitting(true);
        try {
            //@ts-ignore
            await addToCart(session?.user.id, productId);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
        }
        setTimeout(() => {
            setSuccess(null);
        }, 5000);
        setSubmitting(false);
    };

    return (
        <div className="px-4 mx-auto w-full lg:w-[400px] bg-white dark:bg-black lg:sticky lg:top-[144px] lg:left-0 h-fit relative">
            <div className="text-right text-black dark:text-white py-3 pb-5 border-b border-gray-200 dark:border-dark-container ">
                <p className="text-primary font-bold text-lg mb-4">
                    {product?.title}
                </p>
                <p className="font-medium leading-7">{product?.desc}</p>
            </div>
            <div className="text-right text-black dark:text-white pt-4 pb-5 border-b border-gray-200 dark:border-dark-container">
                <p className="text-sm">price cash</p>
                <p className="text-right text-primary mt-5">
                    {product?.price} EGP
                </p>
            </div>
            <div className="flex justify-end gap-2 py-5 border-b border-gray-200 dark:border-dark-container">
                <Link
                    href={`/products/categories/${product?.category}`}
                    className="tag"
                >
                    {product?.category}
                </Link>
                <Link href={`/products/types/${product?.type}`} className="tag">
                    {product?.type}
                </Link>
                <Link href={`/products/${product?.gender}`} className="tag">
                    {product?.gender}
                </Link>
            </div>
            <div className="py-5">
                <button
                    className="w-full text-white dark:text-black dark:bg-white bg-black py-2 px-3 hover:text-white hover:bg-primary duration-300 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                    onClick={addToCartHandler}
                    disabled={submitting}
                >
                    + add to cart
                </button>
                {success === true && (
                    <BsCartCheckFill className="text-green-400 absolute top-3 left-2 w-7 h-7" />
                )}
                {success === false && (
                    <IoMdCloseCircle className="text-red-600 absolute top-3 left-2 w-7 h-7" />
                )}
            </div>
        </div>
    )
}

export default ProductInfo