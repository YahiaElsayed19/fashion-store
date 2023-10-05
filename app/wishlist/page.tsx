"use client";
import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { getWishlist, removeWishlist } from "@util/api";
import ProductsList from "@components/product/ProductsList";
import { productType } from "@types";
import { Triangle } from 'react-loader-spinner'
import ClearButton from "@components/ClearButton";
const page = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const session = await getSession();
      try {
        const { data } = await getWishlist(session?.user.id);
        setProducts(data);
      } catch (error) { }
      setLoading(false);
    })();
  }, []);
  const clearWishlistHandler = async () => {
    await removeWishlist(session?.user.id);
    setProducts([]);
  };
  return (
    <section className="page">
      {!loading && <ProductsList products={products} title="Wishlist" placeholderCount={5} />}
      {loading && <Triangle
        height="80"
        width="80"
        color="#2196f3"
      />}
      {products.length > 0 && (
        <ClearButton clearHandler={clearWishlistHandler} />
      )}
    </section>
  );
};

export default page;
