"use client"
import React, { useState, useEffect } from 'react'
import { useSession, getSession } from 'next-auth/react';
import { productType } from '@types';
import { getCart, removeCart } from '@util/api';
import ClearButton from '@components/ClearButton';
const page = () => {
    const { data: session } = useSession();
    const [products, setProducts] = useState<productType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const session = await getSession();
            try {
                //@ts-ignore
                const { data } = await getCart(session?.user.id);
                setProducts(data);
            } catch (error) { }
            setLoading(false);
        })();
    }, []);
    const clearCartHandler = async () => {
        //@ts-ignore
        await removeCart(session?.user.id);
        setProducts([]);
    };
    return (
        <section className='page'>
            <ClearButton clearHandler={clearCartHandler} />
        </section>
    )
}

export default page