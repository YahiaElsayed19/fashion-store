"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getProduct } from "@util/api";
import { addToCart } from "@util/api";
import { productType } from "@types";
import { useSession } from "next-auth/react";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import SingleProductPlaceholder from "@components/placeholder/SingleProductPlaceholder";
const page = () => {
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean | null>();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<productType>();
    const productId = useSearchParams().get("product-id") || "";
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

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getProduct(productId);
            setProduct(data);
            setLoading(false);
        })();
    }, []);

    return (
        <section className="min-h-screen bg-gray-200 dark:bg-dark-container">
            <div className="container p-4 mx-auto flex flex-col-reverse lg:flex-row lg:justify-center gap-4">
                {loading ? (
                    <SingleProductPlaceholder />
                ) : (
                    <>
                    <div className="px-4 mx-auto w-full lg:w-[400px] bg-white dark:bg-black lg:sticky lg:top-[144px] lg:left-0 h-fit">
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
                
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                        {product?.images.map((image) => (
                            <Image
                                key={image}
                                src={image}
                                width={408}
                                height={612}
                                quality={100}
                                alt={product.title}
                                className="w-full max-lg:odd:last-of-type:col-span-2"
                            />
                        ))}
                    </div>
                </div>
                </>
                )}
            </div>
        </section>
    );
};

export default page;
