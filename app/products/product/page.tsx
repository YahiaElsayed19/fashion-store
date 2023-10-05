"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProduct } from "@util/api";
import { productType } from "@types";
import { getSession } from "next-auth/react";
import SingleProductPlaceholder from "@components/placeholder/SingleProductPlaceholder";
import ProductInfo from "@components/product/ProductInfo";
import ProductImages from "@components/product/ProductImages";
const page = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<productType>();
    const productId = useSearchParams().get("product-id") || "";
    useEffect(() => {
        (async () => {
            setLoading(true);
            const session = await getSession()
            const { data } = await getProduct(productId, session?.user.id);
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
                        <ProductInfo product={product} />
                        <ProductImages images={product?.images} />
                    </>
                )}
            </div>
        </section>
    );
};

export default page;
