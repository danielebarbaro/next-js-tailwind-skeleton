import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useTheme} from "next-themes";
import {
    BsArrowRight,
    BsLightbulb,
    BsLightbulbOffFill,
} from "react-icons/bs";

export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className=" bg-gray-50 dark:bg-gray-800 max-w-6xl mx-auto px-4 py-6">
            <div className="flex md:flex-row justify-between items-center px-3">
                <div className="flex flex-col">
                    <Link href="/">
                        <a>
                            Hello!
                        </a>
                    </Link>
                </div>

                <div className="space-x-4 flex flex-row items-center">
                    <p className="text-sm font-light">
                        Turn <span className="font-bold">{theme === "dark" ? 'ON' : 'OFF'}</span> the light
                        <BsArrowRight className="animate-ping inline-block font-bold m-3"/>
                    </p>
                    <button
                        aria-label="Dark Mode"
                        type="button"
                        className="w-10 h-10 p-3 rounded focus:outline-none"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted && (
                            <>
                                {theme === "dark" ? (
                                    <BsLightbulbOffFill fill="currentColor"
                                                        stroke="currentColor"
                                                        className="w-4 h-4 text-green-500 "/>
                                ) : (
                                    <BsLightbulb fill="currentColor"
                                                 stroke="currentColor"
                                                 className="w-4 h-4 text-yellow-400 "/>
                                )}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}