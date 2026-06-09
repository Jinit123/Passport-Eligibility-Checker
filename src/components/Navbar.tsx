import { Menu } from "lucide-react";

export default function Navbar() {

    return (

        <nav
            className="
                sticky
                top-0
                z-50
                bg-white/80
                backdrop-blur-md
                border-b
                border-slate-200
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
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
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                >
                    Passport Eligibility Checker
                </a>

                {/* Menu */}

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

                {/* CTA */}

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

            </div>

        </nav>

    );

}