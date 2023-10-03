"use client";
import React, { useState, useEffect } from "react";
import ProductsList from "@components/product/ProductsList";
import { productType } from "@types";
import { getProductsByGender } from "@util/api";

const page = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<productType[]>([]);
    const loadMore = () => {
        setPage((prev) => prev + 1);
    };
    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getProductsByGender("men", page);
            if (page === 1) {
                setProducts(data);
            }
            if (page > 1 && page <= 7) {
                setProducts((prev) => [...prev, ...data]);
            }
            setLoading(false);
        })();
    }, [page]);
    return (
        <section className='page'>
            <ProductsList products={products} title="Men" loading={loading} />
            {products.length > 0 && <button
                type="button"
                className="button"
                onClick={loadMore}
                disabled={page >= 7}
            >
                Show more
            </button>}
        </section>
    );
};

export default page;
