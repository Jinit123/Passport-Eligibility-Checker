import {
    Lock,
    CloudOff,
    Trash2,
    ShieldCheck,
    AlertTriangle
}
from "lucide-react";

export default function SecurityAndPrivacy() {

    const features = [

        {
            icon: Lock,
            title: "Local Processing",
            description:
                "All OCR and document verification processes are performed locally within your browser whenever possible."
        },

        {
            icon: CloudOff,
            title: "No Cloud Upload",
            description:
                "Your uploaded documents are not intended to be transmitted to external storage services during verification."
        },

        {
            icon: Trash2,
            title: "No Data Storage",
            description:
                "Files are processed only for verification purposes and are not permanently stored."
        },

        {
            icon: ShieldCheck,
            title: "Privacy First",
            description:
                "You remain in control of your personal information throughout the verification process."
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
                    Security & Privacy
                </span>

                <h2
                    className="
                        mt-4
                        text-5xl
                        font-bold
                        text-slate-900
                    "
                >
                    Built With Privacy
                    And Security In Mind
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
                    Passport and identity documents
                    contain sensitive information.
                    Security and privacy remain
                    important considerations during
                    document verification.
                </p>

            </div>

            {/* Security Cards */}

            <div
                className="
                    mt-16
                    grid
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
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
                                    bg-white
                                    border
                                    border-slate-200
                                    rounded-3xl
                                    p-8
                                    shadow-sm
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                "
                            >

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-blue-50
                                        flex
                                        items-center
                                        justify-center
                                        text-blue-600
                                    "
                                >

                                    <Icon
                                        size={28}
                                    />

                                </div>

                                <h3
                                    className="
                                        mt-6
                                        text-xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        text-slate-600
                                        leading-7
                                    "
                                >
                                    {feature.description}
                                </p>

                            </div>

                        );

                    }
                )}

            </div>

            {/* Disclaimer */}

            <div
                className="
                    mt-16
                    rounded-3xl
                    border
                    border-amber-200
                    bg-amber-50
                    p-10
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-amber-100
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <AlertTriangle
                            className="
                                text-amber-600
                            "
                            size={28}
                        />

                    </div>

                    <div>

                        <h3
                            className="
                                text-2xl
                                font-bold
                                text-amber-700
                            "
                        >
                            Important Disclaimer
                        </h3>

                        <p
                            className="
                                text-amber-600
                            "
                        >
                            Please read before relying
                            on verification results.
                        </p>

                    </div>

                </div>

                <div
                    className="
                        mt-6
                        space-y-4
                        text-amber-700
                        leading-8
                    "
                >

                    <p>
                        This tool is an independent
                        document verification utility
                        created for informational and
                        educational purposes.
                    </p>

                    <p>
                        It is not affiliated with,
                        endorsed by or connected to
                        Passport Seva, Government of
                        India, UIDAI, Income Tax
                        Department or any government
                        authority.
                    </p>

                    <p>
                        Verification reports generated
                        by this tool should not be
                        considered official approval,
                        rejection or legal advice.
                    </p>

                    <p>
                        Applicants should always refer
                        to official government sources
                        for the latest passport
                        requirements and application
                        guidelines.
                    </p>

                </div>

            </div>

        </section>

    );

}