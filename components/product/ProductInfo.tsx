"use client";
import React from "react";
import Link from "next/link";
import { productType } from "@types";
import CartButton from "./CartButton";
import WishlistButton from "./WishlistButton";
import { useSession } from "next-auth/react";
const ProductInfo = ({ product }: { product?: productType }) => {
    const { data: session } = useSession()
    return (
        <div className="px-4 mx-auto w-full lg:w-[400px] bg-white dark:bg-black lg:sticky lg:top-[144px] lg:left-0 h-fit relative">
            <div className="text-right text-black dark:text-white py-3 pb-5 border-b border-gray-200 dark:border-dark-container ">
                <p className="text-primary font-bold text-lg mb-4">{product?.title}</p>
                <p className="font-medium leading-7">{product?.desc}</p>
            </div>
            <div className="text-right text-black dark:text-white pt-4 pb-5 border-b border-gray-200 dark:border-dark-container">
                <p className="text-sm">price cash</p>
                <p className="text-right text-primary mt-5">{product?.price} EGP</p>
            </div>
            <div className="flex justify-end gap-2 py-3 border-b border-gray-200 dark:border-dark-container">
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
            <div className="flex justify-end pt-1 pb-5 gap-2 text-white">
                {session?.user && (
                    <WishlistButton inWishlist={product?.inWishlist} />
                )}
                <CartButton productId={product?._id} buttonStyles="bg-black text-white dark:bg-white dark:text-black" iconStyles="left-12" />
            </div>
        </div>
    );
};

export default ProductInfo;
