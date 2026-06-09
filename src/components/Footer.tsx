export default function Footer() {

    return (

        <footer
            className="
                mt-24
                rounded-4xl
                bg-gradient-to-b
                from-slate-950
                via-slate-900
                to-black
                text-white
                overflow-hidden
                relative
            "
        >

            {/* Background Glow */}

            <div
                className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                "
            />

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-20
                    relative
                    z-10
                "
            >

                {/* CTA Section */}

                <div
                    className="
                        text-center
                        pb-16
                        border-b
                        border-slate-800
                    "
                >

                    <h2
                        className="
                            text-4xl
                            md:text-5xl
                            font-bold
                            tracking-tight
                        "
                    >
                        Ready To Verify
                        Your Documents?
                    </h2>

                    <p
                        className="
                            mt-5
                            text-slate-400
                            max-w-2xl
                            mx-auto
                            text-lg
                        "
                    >
                        Check Aadhaar and PAN
                        document consistency before
                        applying for your passport.
                        Fast, secure and privacy focused.
                    </p>

                    <a
                        href="#upload"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            mt-8
                            px-8
                            py-4
                            rounded-2xl
                            bg-blue-600
                            hover:bg-blue-700
                            font-semibold
                            transition-all
                            duration-300
                            shadow-xl
                        "
                    >
                        Start Verification
                    </a>

                </div>

                {/* Trust Badges */}

                <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-4
                        mt-10
                    "
                >

                    <span
                        className="
                            px-5
                            py-2
                            rounded-full
                            bg-slate-800
                            border
                            border-slate-700
                            text-sm
                        "
                    >
                         Privacy First
                    </span>

                    <span
                        className="
                            px-5
                            py-2
                            rounded-full
                            bg-slate-800
                            border
                            border-slate-700
                            text-sm
                        "
                    >
                         OCR Powered
                    </span>

                    <span
                        className="
                            px-5
                            py-2
                            rounded-full
                            bg-slate-800
                            border
                            border-slate-700
                            text-sm
                        "
                    >
                         Secure Verification
                    </span>

                    <span
                        className="
                            px-5
                            py-2
                            rounded-full
                            bg-slate-800
                            border
                            border-slate-700
                            text-sm
                        "
                    >
                         Local Processing
                    </span>

                </div>

                {/* Main Footer */}

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-12
                        mt-16
                    "
                >

                    {/* Brand */}

                    <div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                bg-gradient-to-r
                                from-blue-400
                                to-cyan-400
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Passport Eligibility
                            Checker
                        </h2>

                        <span
                            className="
                                inline-block
                                mt-4
                                px-3
                                py-1
                                rounded-full
                                bg-blue-500/20
                                text-blue-300
                                text-xs
                            "
                        >
                            OCR Powered Verification
                        </span>

                        <p
                            className="
                                mt-5
                                text-slate-400
                                leading-7
                            "
                        >
                            Verify Aadhaar and PAN
                            document consistency before
                            passport application using
                            advanced OCR technology.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                            "
                        >
                            Quick Links
                        </h3>

                        <ul
                            className="
                                mt-5
                                space-y-3
                                text-slate-400
                            "
                        >

                            <li>
                                <a
                                    href="/"
                                    className="
                                        hover:text-blue-400
                                        transition
                                    "
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="
                                        hover:text-blue-400
                                        transition
                                    "
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="
                                        hover:text-blue-400
                                        transition
                                    "
                                >
                                    Contact Us
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Legal */}

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                            "
                        >
                            Legal
                        </h3>

                        <ul
                            className="
                                mt-5
                                space-y-3
                                text-slate-400
                            "
                        >

                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="
                                        hover:text-blue-400
                                        transition
                                    "
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/dmca"
                                    className="
                                        hover:text-blue-400
                                        transition
                                    "
                                >
                                    DMCA Policy
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Features */}

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                            "
                        >
                            Features
                        </h3>

                        <ul
                            className="
                                mt-5
                                space-y-3
                                text-slate-400
                            "
                        >

                            <li>
                                OCR Extraction
                            </li>

                            <li>
                                Aadhaar Verification
                            </li>

                            <li>
                                PAN Verification
                            </li>

                            <li>
                                Identity Matching
                            </li>

                            <li>
                                Secure Processing
                            </li>

                        </ul>

                    </div>

                </div>

                {/* Divider */}

                <div
                    className="
                        my-10
                        h-px
                        bg-slate-800
                    "
                />

                {/* Bottom */}

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        justify-between
                        items-center
                        gap-4
                    "
                >

                    <p
                        className="
                            text-slate-500
                            text-sm
                        "
                    >
                        © 2026 Passport Eligibility Checker.
                        All Rights Reserved.
                    </p>

                    <p
                        className="
                            text-slate-500
                            text-sm
                            text-center
                            max-w-3xl
                        "
                    >
                        This tool is not affiliated with
                        Passport Seva, Government of India,
                        UIDAI or the Income Tax Department.
                        Verification results are provided
                        for informational purposes only.
                    </p>

                </div>

            </div>

        </footer>

    );

}