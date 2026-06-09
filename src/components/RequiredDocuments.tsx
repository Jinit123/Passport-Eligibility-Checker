import {
    Home,
    CalendarDays,
    ShieldCheck,
    AlertTriangle
}
from "lucide-react";

export default function RequiredDocuments() {

    const addressProofs = [

        "Aadhaar Card",
        "Electricity Bill",
        "Water Bill",
        "Telephone Bill",
        "Gas Connection Proof",
        "Election Photo ID Card",
        "Rent Agreement",
        "Bank Passbook",
        "Employer Certificate",
        "Spouse Passport Copy",
        "Parent Passport Copy (Minors)"

    ];

    const dobProofs = [

        "Birth Certificate",
        "School Leaving Certificate",
        "Matriculation Certificate",
        "PAN Card",
        "Driving License",
        "Election Photo ID Card",
        "Government Service Record",
        "LIC Policy Bond"

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
                    Passport Requirements
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
                    Required Documents
                    For Fresh Passport
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
                    Before applying for a fresh passport,
                    applicants must provide valid proof
                    of address and proof of date of birth
                    documents for verification.
                </p>

            </div>

            {/* Main Cards */}

            <div
                className="
                    mt-16
                    grid
                    lg:grid-cols-2
                    gap-8
                "
            >

                {/* Address Proof */}

                <div
                    className="
                        bg-white
                        rounded-3xl
                        border
                        border-slate-200
                        shadow-sm
                        p-8
                    "
                >

                    <div className="flex items-center gap-4">

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
                            <Home size={28} />
                        </div>

                        <div>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                Proof Of Present Address
                            </h3>

                            <p
                                className="
                                    text-slate-500
                                "
                            >
                                Accepted address proof documents
                            </p>

                        </div>

                    </div>

                    <div
                        className="
                            mt-8
                            grid
                            sm:grid-cols-2
                            gap-4
                        "
                    >

                        {addressProofs.map(
                            (
                                item,
                                index
                            ) => (

                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        bg-slate-50
                                        p-4
                                    "
                                >

                                    <ShieldCheck
                                        size={18}
                                        className="
                                            text-green-600
                                        "
                                    />

                                    <span>
                                        {item}
                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>

                {/* DOB Proof */}

                <div
                    className="
                        bg-white
                        rounded-3xl
                        border
                        border-slate-200
                        shadow-sm
                        p-8
                    "
                >

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-orange-50
                                flex
                                items-center
                                justify-center
                                text-orange-600
                            "
                        >
                            <CalendarDays
                                size={28}
                            />
                        </div>

                        <div>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                Proof Of Date Of Birth
                            </h3>

                            <p
                                className="
                                    text-slate-500
                                "
                            >
                                Accepted date of birth documents
                            </p>

                        </div>

                    </div>

                    <div
                        className="
                            mt-8
                            grid
                            sm:grid-cols-2
                            gap-4
                        "
                    >

                        {dobProofs.map(
                            (
                                item,
                                index
                            ) => (

                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        bg-slate-50
                                        p-4
                                    "
                                >

                                    <ShieldCheck
                                        size={18}
                                        className="
                                            text-green-600
                                        "
                                    />

                                    <span>
                                        {item}
                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>

            </div>

            {/* Special Notice */}

            <div
                className="
                    mt-10
                    rounded-3xl
                    border
                    border-amber-200
                    bg-amber-50
                    p-8
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <AlertTriangle
                        className="
                            text-amber-600
                        "
                    />

                    <h3
                        className="
                            text-xl
                            font-bold
                            text-amber-700
                        "
                    >
                        Important Notice
                    </h3>

                </div>

                <p
                    className="
                        mt-4
                        text-amber-700
                        leading-7
                    "
                >
                    Applicants born on or after
                    1 October 2023 are generally
                    required to provide a Birth
                    Certificate issued by the
                    competent authority as proof
                    of date of birth.
                </p>

            </div>

            {/* Passport Tip */}

            <div
                className="
                    mt-8
                    rounded-3xl
                    border
                    border-green-200
                    bg-green-50
                    p-8
                "
            >

                <h3
                    className="
                        text-xl
                        font-bold
                        text-green-700
                    "
                >
                    Passport Eligibility Tip
                </h3>

                <p
                    className="
                        mt-4
                        text-green-700
                        leading-7
                    "
                >
                    Before applying for a passport,
                    ensure that your Aadhaar Card,
                    PAN Card and other supporting
                    documents contain matching
                    names, dates of birth and
                    identity information. Any
                    mismatch may lead to delays
                    during verification.
                </p>

            </div>

        </section>

    );

}