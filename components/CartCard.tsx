"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { productType } from "@types";
import { addToCart, removeFromCart } from "@util/api";
const CartCard = ({ product, removeProduct, updateTotalPrice }: { product: productType, removeProduct: (productId: string) => void, updateTotalPrice: (amount: number) => void }) => {
    const { data: session } = useSession();
    const [price, setPrice] = useState(
        parseFloat(product.price.toString().replace(",", ""))
    );
    const [count, setCount] = useState(product.count || 1);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const addToCartHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setSubmitting(true)
        try {
            //@ts-ignore
            await addToCart(session?.user.id, product._id);
            setCount((prev) => prev + 1);
            updateTotalPrice(price)
        } catch (error) {
        }
        setSubmitting(false)
    };
    const removeFromCartHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setSubmitting(true)
        try {
            //@ts-ignore
            await removeFromCart(session?.user.id, product._id);
            if (count > 1) {
                setCount((prev) => prev - 1);
            } else {
                removeProduct(product._id)
            }
            updateTotalPrice(-price)
        } catch (error) {

        }
        setSubmitting(false)
    };
    return (
        <Link
            href={`/products/product?product-id=${product._id}`}
            className="flex gap-3 bg-gray-200 dark:bg-dark-container pl-3 lg:min-w-[492px]"
        >
            <div className="flex flex-col justify-between items-end flex-1 text-right py-3">
                <h1 className="text-primary font-bold text-lg py-3">{product.title}</h1>
                <div className="py-3">
                    <p> Price per piece</p>
                    <p className="text-primary">{price} EGP</p>
                </div>
                <div className="py-3">
                    <p>Total price</p>
                    <p className="text-primary">{price * (count || 1)} EGP</p>
                </div>
                <div className="w-full flex justify-center items-center gap-2 py-3 ">
                    <button
                        aria-label="plus"
                        type="button"
                        className="cart-button bg-white dark:bg-black"
                        onClick={removeFromCartHandler}
                        disabled={submitting}
                    >
                        -
                    </button>
                    <p className="text-primary font-semibold text-2xl">{count}</p>
                    <button
                        aria-label="plus"
                        type="button"
                        className="cart-button bg-white dark:bg-black"
                        onClick={addToCartHandler}
                        disabled={submitting}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={234}
                    height={351}
                    className="w-full h-full"
                    priority={true}
                />
            </div>
        </Link>
    );
};

export default CartCard;
