import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
    const { data: session } = useSession();
    const provider = {
        id: "google",
        name: "Google",
    };
    return (
        <div>
            {session?.user ? (
                <button type="button" className="auth-button" onClick={() => signOut()}>
                    Sign out
                </button>
            ) : (
                <>
                    <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="auth-button"
                    >
                        Sign in
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthButton;
