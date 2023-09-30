"use client";
import React, { useEffect, useState } from "react";
import { getProduct } from "@util/api";
import { useSearchParams } from "next/navigation";
import { productType } from "@types";
import Link from "next/link";
import { addToCart } from "@util/api";
import { useSession } from "next-auth/react";

const page = () => {
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean | null>();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<productType>();
    const productId = useSearchParams().get("product-id") || "";
    const addToCartHandler = async () => {
        setSubmitting(true);
        try {
            //@ts-ignore
            await addToCart(session?.user.id, productId);
            setSuccess(true)
        } catch (error) {
            setSuccess(false)
        }
        setTimeout(() => {
            setSuccess(null);
        }, 2000);
        setSubmitting(false);
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getProduct(productId);
            setProduct(data);
            setLoading(false);
        })();
    }, []);

    return (
        <section className="min-h-screen bg-gray-200 dark:bg-dark-container ">
            <div className="container p-4 mx-auto flex flex-row justify-center ">
                <div className="px-4 mx-auto w-[400px] bg-white dark:bg-black sticky top-0 left-0 rounded-xl">
                    <div className="text-right text-black dark:text-white py-3 pb-5 border-b border-gray-200 dark:border-dark-container ">
                        <p className="text-primary font-bold text-lg mb-4">
                            {product?.title}
                        </p>
                        <p className="font-medium leading-7">{product?.desc}</p>
                    </div>
                    <div className="text-right text-black dark:text-white pt-4 pb-5 border-b border-gray-200 dark:border-dark-container">
                        <p className="text-sm">price cash</p>
                        <p className="text-right text-primary mt-5">{product?.price} EGP</p>
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
                            className="w-full text-white bg-primary py-2 px-3 hover:bg-secondry duration-300 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                            onClick={addToCartHandler}
                            disabled={submitting}
                        >
                            + add to cart
                        </button>
                        {success === true && <p className="msg-toast left-2 bg-green-400">Successed</p>}
                        {success === false && <p className="msg-toast left-2 bg-red-600">Failed</p>}
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>
        </section>
    );
};

export default page;
