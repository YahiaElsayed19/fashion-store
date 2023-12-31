"use client";
import React, { useState, useEffect } from "react";
import ProductsList from "@components/product/ProductsList";
import { productType } from "@types";
import { getProductsByCategory } from "@util/api";
const lastPage: {
    top: number,
    trousers: number,
    dress: number,
    skirt: number,
} = {
    top: 9,
    trousers: 8,
    dress: 5,
    skirt: 2,
};
const page = ({ params }: { params: { category: string } }) => {
    const category = params.category;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<productType[]>([]);
    const loadMore = () => {
        setPage((prev) => prev + 1);
    };
    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getProductsByCategory(category, page);
            if (page === 1) {
                setProducts(data);
            }
            if (page > 1 && page <= lastPage[category as keyof typeof lastPage]) {
                setProducts((prev) => [...prev, ...data]);
            }
            setLoading(false);
        })();
    }, [page]);
    return (
        <section className='page'>
            <ProductsList products={products} title={category} loading={loading} />
            {products.length > 0 && <button
                aria-label="show more"
                type="button"
                className="button"
                onClick={loadMore}
                disabled={page >= lastPage[category as keyof typeof lastPage]}
            >
                Show more
            </button>}
        </section>
    );
};

export default page;
