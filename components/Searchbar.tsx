import React, { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";
const Searchbar = ({ closeMenuHandler }: { closeMenuHandler?: () => void }) => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const searchHandler = (e: FormEvent) => {
        e.preventDefault();
        if (searchRef.current) {
            if (searchRef.current.value === "") {
                router.push(`/`);
            } else {
                router.push(`/search?search=${searchRef.current.value}`);
            }
        }
        if (closeMenuHandler) closeMenuHandler();
    };
    return (
        <form className="flex flex-col items-center justify-center relative w-full">
            <input
                type="text"
                placeholder="search"
                className="input"
                ref={searchRef}
            />
            <button
                aria-label="search button"
                type="submit"
                title="search"
                className="absolute top-[50%] translate-y-[-50%] right-3 p-2"
                onClick={searchHandler}
            >
                <RiSearchLine className=" text-black w-5 h-5 sm:w-6 sm:h-6 cursor-pointer dark:text-white" />
            </button>
        </form>
    );
};

export default Searchbar;
