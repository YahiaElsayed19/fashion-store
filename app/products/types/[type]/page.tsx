"use client";
import React, { useState, useEffect } from "react";
import ProductsList from "@components/product/ProductsList";
import { productType } from "@types";
import { getProductsByType } from "@util/api";
const lastPage: any = {
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
            if (page > 1 && page <= lastPage[type]) {
                setProducts((prev) => [...prev, ...data]);
            }
            setLoading(false);
        })();
    }, [page]);
    return (
        <section className='page'>
            <ProductsList products={products} title={type} loading={loading} />
            {products.length > 0 && <button
                type="button"
                className="button"
                onClick={loadMore}
                disabled={page >= lastPage[type]}
            >
                Show more
            </button>}
        </section>
    );
};

export default page;
