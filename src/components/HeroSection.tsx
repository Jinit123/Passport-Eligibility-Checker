export default function HeroSection() {

    return (

        <section
            className="
                relative
                overflow-hidden
                py-16
sm:py-20
lg:py-28
                text-center
                bg-gradient-to-b
                from-stone-50
                via-white
                to-slate-100
                rounded-[40px]
                mb-12
            "
        >

            <div
                className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                   h-[300px]
w-[300px]
sm:h-[400px]
sm:w-[400px]
lg:h-[500px]
lg:w-[500px]
                    rounded-full
                    bg-blue-200/30
                    blur-3xl
                    pointer-events-none
                "
            />

            <div
                className="
                   max-w-5xl
mx-auto
px-4
sm:px-6
                    relative
                    z-10
                "
            >

                <span
                    className="
                        inline-flex
                        items-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        text-xs
sm:text-sm
                        font-medium
                        text-slate-600
                    "
                >
                    🔒 Secure Document Verification
                </span>

                <h1
                    className="
    mt-8
    text-4xl
    sm:text-5xl
    lg:text-6xl
    leading-tight
    font-extrabold
    tracking-tight
    text-slate-900
"
                >
                    Check Passport Eligibilty Within 30 Seconds
                </h1>

                <p
                    className="
                        mt-6
                        text-base
sm:text-lg
lg:text-xl
                        text-slate-600
                        max-w-2xl
                        mx-auto
                    "
                >
                    Extract, compare and validate
                    government documents using OCR
                    technology directly on your device.
                </p>

                <a
                    href="#upload"
                    className="
        inline-flex
        items-center
        justify-center
        mt-8
        px-6
py-3
sm:px-8
sm:py-4
        rounded-xl
        bg-blue-600
        text-white
        font-semibold
        shadow-lg
        hover:bg-blue-700
        transition
    "
                >
                    Check Document Now
                </a>
            </div>

        </section>

    );

}