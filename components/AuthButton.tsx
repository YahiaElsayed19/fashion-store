import React from 'react'
import { useEffect, useState } from "react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

const AuthButton = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState<any>(null);
    useEffect(() => {
        const getProvidersFn = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        getProvidersFn();
    }, []);

    return (
        <div>
            {session?.user ? (
                <button
                    className="auth-button"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider: any) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="auth-button"
                            >
                                Sign in
                            </button>
                        ))}
                </>
            )}
        </div>)
}

export default AuthButton