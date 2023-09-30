"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "@util/api";
import ProductsList from "./ProductsList";
import { productType } from "@types";
import { Triangle } from "react-loader-spinner";
const AllProducts = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<productType[]>([]);
    const loadMore = () => {
        setPage((prev) => prev + 1);
    };
    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await getProducts(page);
            if (page === 1) {
                setProducts(data);
            }
            if (page > 1 && page <= 22) {
                setProducts((prev) => [...prev, ...data]);
            }
            setLoading(false);
        })();
    }, [page]);
    return (
        <section className="bg-white dark:bg-black flex flex-col items-center py-[50px]">
            <ProductsList products={products} title="All" loading={loading}/>
            {products.length > 0 && <button
                type="button"
                className="button"
                onClick={loadMore}
                disabled={page >= 22}
            >
                Show more
            </button>
            }
        </section>
    );
};

export default AllProducts;
