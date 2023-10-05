"use client";
import React, { useState, useEffect } from "react";
import ProductsList from "@components/product/ProductsList";
import { productType } from "@types";
import { getProductsByType } from "@util/api";
const lastPage: {
    new: number;
    trending: number;
    hot: number;
} = {
    new: 9,
    trending: 8,
    hot: 6,
};
const page = ({ params }: { params: { type: string } }) => {
    const type = params.type;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<productType[]>([]);
    const loadMore = () => {
        setPage((prev) => prev + 1);
    };
    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getProductsByType(type, page);
            if (page === 1) {
                setProducts(data);
            }
            if (page > 1 && page <= lastPage[type as keyof typeof lastPage]) {
                setProducts((prev) => [...prev, ...data]);
            }
            setLoading(false);
        })();
    }, [page]);
    return (
        <section className='page'>
            <ProductsList products={products} title={type} loading={loading} />
            {products.length > 0 && <button
                aria-label="show more"
                type="button"
                className="button"
                onClick={loadMore}
                disabled={page >= lastPage[type as keyof typeof lastPage]}
            >
                Show more
            </button>}
        </section>
    );
};

export default page;
