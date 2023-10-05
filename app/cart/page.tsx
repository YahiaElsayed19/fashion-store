"use client";
import React, { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { productType } from "@types";
import { getCart, removeCart } from "@util/api";
import ClearButton from "@components/ClearButton";
import { Triangle } from "react-loader-spinner";
import CartCard from "@components/CartCard";

const page = () => {
    const { data: session } = useSession();
    const [products, setProducts] = useState<productType[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const session = await getSession();
            try {
                //@ts-ignore
                const { data } = await getCart(session?.user.id);
                setProducts(data);
                let totalPrice = 0
                data.map((product: productType) => totalPrice += (parseFloat(product.price.toString().replace(",", "")) * (product.count || 1)))
                setTotalPrice(totalPrice)
            } catch (error) { }
            setLoading(false);
        })();
    }, []);
    const clearCartHandler = async () => {
        //@ts-ignore
        await removeCart(session?.user.id);
        setProducts([]);
    };
    const removeProduct = (productId: string) => {
        setProducts((prev) => prev.filter((product) => product._id !== productId))
    }
    const updataTotalPrice = (amount: number) => {
        setTotalPrice((prev) => prev + amount)
    }
    return (
        <section className="page">
            <div className="container max-w-5xl flex flex-col items-center px-4 mx-auto">
                {!loading && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {products.map((product) => (
                                <CartCard key={product._id} product={product} removeProduct={removeProduct} updateTotalPrice={updataTotalPrice} />
                            ))}
                        </div>
                        {products.length > 0 && (
                            <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full py-5">
                                <p className="text-2xl font-bold text-black dark:text-white">Total Price: <span className="text-primary">{totalPrice}</span> EGP</p>
                                <div className="flex gap-5 items-center justify-center">
                                    <ClearButton clearHandler={clearCartHandler} />
                                    <button aria-label="checkout" type="button" className="button">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
                {!loading && products.length === 0 && <p className="text-black dark:text-white bg-gray-200 dark:bg-dark-container text-center p-5 rounded-lg">Your cart is empty!<br/> Start add some products</p>}
            </div>
            {loading && <Triangle height="80" width="80" color="#2196f3" />}
        </section>
    );
};

export default page;
