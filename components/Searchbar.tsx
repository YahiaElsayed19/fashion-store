import React from "react";
import { RiSearchLine } from "react-icons/ri";
const Searchbar = () => {
    return (
        <form className="flex flex-col items-center justify-center relative w-full">
            <input
                type="text"
                placeholder="search"
                className="input"
            />
            <button type="submit" title="search" className="absolute top-[50%] translate-y-[-50%] right-3 p-2" onClick={(e) => { e.preventDefault() }}>
                {" "}
                <RiSearchLine className=" text-black w-5 h-5 sm:w-6 sm:h-6 cursor-pointer dark:text-white" />
            </button>
        </form>
    );
};

export default Searchbar;
