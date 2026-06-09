import {
    ShieldCheck,
    FileCheck,
    ScanSearch,
    Lock,
    BadgeCheck,
    FileText
}
from "lucide-react";

export default function Features() {

    const features = [

        {
            icon: ShieldCheck,
            title: "Passport Eligibility Check",
            description:
                "Verify whether your supporting documents meet basic passport application requirements."
        },

        {
            icon: FileCheck,
            title: "Document Consistency",
            description:
                "Compare Aadhaar and PAN details to identify mismatches before application submission."
        },

        {
            icon: ScanSearch,
            title: "OCR Verification",
            description:
                "Automatically extract names, dates of birth and document numbers using OCR technology."
        },

        {
            icon: Lock,
            title: "Password Protected PDFs",
            description:
                "Supports encrypted PDF documents with secure password handling."
        },

        {
            icon: BadgeCheck,
            title: "Verification Report",
            description:
                "Generate a detailed verification summary with risk assessment and match score."
        },

        {
            icon: FileText,
            title: "Privacy First",
            description:
                "All processing happens locally on your device. Your documents never leave your browser."
        }

    ];

    return (

        <section
            className="
                py-16
sm:py-20
lg:py-24
            "
        >

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
                    Features
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
                    Why Use Passport
                    Eligibility Checker?
                </h2>

                <p
                    className="
                        mt-5
                        text-lg
                        text-slate-600
                        max-w-3xl
                        mx-auto
                    "
                >
                    Verify passport supporting
                    documents, detect mismatches
                    and generate verification reports
                    before applying.
                </p>

            </div>

            {/* Cards */}

            <div
                className="
                    mt-20
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                "
            >

                {features.map(
                    (
                        feature,
                        index
                    ) => {

                        const Icon =
                            feature.icon;

                        return (

                            <div
                                key={index}
                                className="
                                    group
                                    bg-white
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    p-6
sm:p-8
                                    shadow-sm
                                    hover:shadow-xl
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
                                        group-hover:scale-110
                                        transition
                                    "
                                >

                                    <Icon
                                        size={30}
                                    />

                                </div>

                                <h3
                                    className="
                                        mt-6
                                        text-xl
sm:text-2xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {
                                        feature.title
                                    }
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        text-slate-600
                                        leading-relaxed
                                    "
                                >
                                    {
                                        feature.description
                                    }
                                </p>

                            </div>

                        );

                    }
                )}

            </div>

        </section>

    );

}