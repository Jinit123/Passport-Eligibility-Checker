import {
    Upload,
    ScanText,
    ShieldCheck,
    Icon
}
    from "lucide-react";

export default function HowItWorks() {

    const steps = [

        {
            icon: Upload,
            step: "STEP 1",
            title: "Upload Documents",
            description:
                "Upload Aadhaar and PAN documents in PDF, JPG or PNG format."
        },

        {
            icon: ScanText,
            step: "STEP 2",
            title: "OCR Processing",
            description:
                "Extract names, DOB, document numbers and important details automatically."
        },

        {
            icon: ShieldCheck,
            step: "STEP 3",
            title: "Verify & Compare",
            description:
                "Compare extracted information and generate a verification score."
        }

    ];

    return (

        <section className="py-24">

            {/* Heading */}

            <div className="text-center">

                <span
                    className="
                        text-blue-600
                        font-semibold
                        uppercase
                        tracking-widest
                    "
                >
                    How It Works
                </span>

                <h2
                    className="
                        mt-4
                        text-3xl
sm:text-4xl
lg:text-5xl
                        font-bold
                        text-slate-900
                    "
                >
                    Verify Documents
                    In 3 Simple Steps
                </h2>

                <p
                    className="
                        mt-5
                        text-lg
                        text-slate-600
                        max-w-2xl
                        mx-auto
                    "
                >
                    Upload your documents,
                    extract information using OCR
                    and verify consistency instantly.
                </p>

            </div>

            {/* Cards */}

            <div
                className="
                    mt-20
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-8
                "
            >

                {steps.map(
                    (
                        step,
                        index
                    ) => {

                        const StepIcon =
                            step.icon;

                        return (

                            <div
                                key={index}
                                className="
                    bg-white
                    rounded-3xl
                    p-8
                    border
                    border-slate-200
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                "
                            >

                                <div
                                    className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                        text-blue-600
                    "
                                >

                                    <StepIcon
                                        size={32}
                                        strokeWidth={2}
                                    />

                                </div>

                                <div
                                    className="
                        mt-6
                        text-sm
                        font-semibold
                        text-blue-600
                        tracking-wider
                    "
                                >
                                    {step.step}
                                </div>

                                <h3
                                    className="
                        mt-3
                        text-2xl
                        font-bold
                        text-slate-900
                    "
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className="
                        mt-4
                        text-slate-600
                        leading-relaxed
                    "
                                >
                                    {step.description}
                                </p>

                            </div>

                        );

                    }
                )}

            </div>

        </section>

    );

}