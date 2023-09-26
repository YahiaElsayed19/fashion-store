import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col py-[120px] bg-gray-50 dark:bg-dark-container bg_image relative">
            <div className="absolute top-0 left-0 h-full w-full bg-black z-20 opacity-50"></div>
            <div className="container max-w-5xl gap-4 px-[15px] mx-auto z-30">
                <div className="flex flex-col gap-3 items-center sm:items-start text-center sm:text-left text-white p-5 mx-auto">
                    <p className="text-md sm:text-lg font-semibold">Best online shop ever.</p>
                    <h1 className="text-primary text-3xl sm:text-5xl max-w-md font-extrabold ">Experience fashion like never before.</h1>
                    <button
                        type="button"
                        className="button "
                    >
                        Shop now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
