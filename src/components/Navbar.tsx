import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] =
        useState(false);

    return (

        <nav
            className="
                sticky
                top-0
                z-50
                bg-white/90
                backdrop-blur-md
                border-b
                border-slate-200
                shadow-sm
            "
        >

            {/* Navbar Row */}

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    py-4
                    flex
                    items-center
                    justify-between
                "
            >

                {/* Logo */}

                <a
                    href="/"
                    className="
                        font-bold
                        text-slate-900
                    "
                >

                    <span
                        className="
                            hidden
                            sm:block
                            text-xl
                            lg:text-2xl
                        "
                    >
                        Passport Eligibility Checker
                    </span>

                    <span
                        className="
                            sm:hidden
                            text-lg
                        "
                    >
                        Passport Checker
                    </span>

                </a>

                {/* Desktop Menu */}

                <div
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-8
                    "
                >

                    <a
                        href="/"
                        className="
                            text-slate-600
                            hover:text-blue-600
                            transition
                        "
                    >
                        Home
                    </a>

                    <a
                        href="/about"
                        className="
                            text-slate-600
                            hover:text-blue-600
                            transition
                        "
                    >
                        About Us
                    </a>

                    <a
                        href="/contact"
                        className="
                            text-slate-600
                            hover:text-blue-600
                            transition
                        "
                    >
                        Contact
                    </a>

                    <a
                        href="/privacy-policy"
                        className="
                            text-slate-600
                            hover:text-blue-600
                            transition
                        "
                    >
                        Privacy Policy
                    </a>

                    <a
                        href="/dmca"
                        className="
                            text-slate-600
                            hover:text-blue-600
                            transition
                        "
                    >
                        DMCA
                    </a>

                </div>

                {/* Desktop CTA */}

                <a
                    href="#upload"
                    className="
                        hidden
                        md:block
                        px-5
                        py-2
                        rounded-xl
                        bg-blue-600
                        text-white
                        font-medium
                        hover:bg-blue-700
                        transition
                    "
                >
                    Get Started
                </a>

                {/* Mobile Menu Button */}

                <button
                    onClick={() =>
                        setIsOpen(!isOpen)
                    }
                    className="
                        md:hidden
                        p-2
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                    "
                >

                    {
                        isOpen

                            ? <X size={22} />

                            : <Menu size={22} />
                    }

                </button>

            </div>

            {/* Mobile Menu */}

            {
                isOpen && (

                    <div
                        className="
                            md:hidden
                            border-t
                            border-slate-200
                            bg-white
                            shadow-lg
                        "
                    >

                        <div
                            className="
                                px-6
                                py-6
                                flex
                                flex-col
                                gap-3
                            "
                        >

                            <a
                                href="/"
                                className="
                                    py-3
                                    px-4
                                    rounded-xl
                                    hover:bg-slate-100
                                    transition
                                "
                            >
                                Home
                            </a>

                            <a
                                href="/about"
                                className="
                                    py-3
                                    px-4
                                    rounded-xl
                                    hover:bg-slate-100
                                    transition
                                "
                            >
                                About Us
                            </a>

                            <a
                                href="/contact"
                                className="
                                    py-3
                                    px-4
                                    rounded-xl
                                    hover:bg-slate-100
                                    transition
                                "
                            >
                                Contact
                            </a>

                            <a
                                href="/privacy-policy"
                                className="
                                    py-3
                                    px-4
                                    rounded-xl
                                    hover:bg-slate-100
                                    transition
                                "
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="/dmca"
                                className="
                                    py-3
                                    px-4
                                    rounded-xl
                                    hover:bg-slate-100
                                    transition
                                "
                            >
                                DMCA
                            </a>

                            <a
                                href="#upload"
                                className="
                                    mt-2
                                    w-full
                                    text-center
                                    bg-blue-600
                                    text-white
                                    py-3
                                    rounded-xl
                                    font-medium
                                    hover:bg-blue-700
                                    transition
                                "
                            >
                                Get Started
                            </a>

                        </div>

                    </div>

                )
            }

        </nav>

    );

}