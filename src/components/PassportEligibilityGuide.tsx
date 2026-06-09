import {
ShieldCheck,
FileText,
BadgeCheck,
AlertCircle,
Lock,
ScanSearch
}
from "lucide-react";

export default function PassportEligibilityGuide() {


const sections = [

    {
        icon: ShieldCheck,
        title:
            "What Is Passport Eligibility Verification?",
        content:
            "Passport eligibility verification is the process of reviewing supporting documents to ensure that an applicant's identity details are accurate and consistent. During passport processing, information such as name, date of birth and address may be verified against submitted documents. Inconsistent information can result in delays or additional verification requests."
    },

    {
        icon: FileText,
        title:
            "Required Documents For Passport Applications",
        content:
            "Applicants generally need documents that establish identity, address and date of birth. Common examples include Aadhaar Card, PAN Card, Birth Certificate, Driving License, Election Photo Identity Card, Bank Passbook and utility bills. The exact requirements may vary depending on the applicant category and applicable passport rules."
    },

    {
        icon: BadgeCheck,
        title:
            "Why Aadhaar And PAN Consistency Matters",
        content:
            "Aadhaar and PAN cards are frequently used as supporting identity documents. Differences in names, dates of birth or other personal information can lead to verification issues. Checking consistency before submitting an application helps applicants identify and correct discrepancies early."
    },

    {
        icon: AlertCircle,
        title:
            "Common Reasons For Passport Delays",
        content:
            "Passport applications may experience delays due to incorrect personal information, document mismatches, incomplete applications, address verification issues or missing supporting documents. Verifying documents beforehand can help reduce avoidable processing delays."
    },

    {
        icon: ScanSearch,
        title:
            "Benefits Of OCR Based Verification",
        content:
            "OCR technology enables automatic extraction of information from uploaded documents. This helps identify mismatches faster, reduces manual review effort and provides applicants with a quick overview of their document consistency before application submission."
    },

    {
        icon: Lock,
        title:
            "Privacy And Security",
        content:
            "Document privacy is important when working with identity records. This tool processes information locally within the browser whenever possible. Documents are not intended to be permanently stored, helping users review their records while maintaining control over their personal information."
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
                Passport Guide
            </span>

            <h2
                className="
                    mt-4
                    text-5xl
                    font-bold
                    text-slate-900
                "
            >
                Complete Passport
                Eligibility Guide
            </h2>

            <p
                className="
                    mt-5
                    text-lg
                    text-slate-600
                    max-w-4xl
                    mx-auto
                "
            >
                Learn how passport eligibility
                verification works, which documents
                are commonly required and why
                document consistency is important
                before submitting an application.
            </p>

        </div>

        {/* Cards */}

        <div
            className="
                mt-20
                grid
                lg:grid-cols-2
                gap-8
            "
        >

            {sections.map(
                (
                    section,
                    index
                ) => {

                    const Icon =
                        section.icon;

                    return (

                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-3xl
                                border
                                border-slate-200
                                p-8
                                shadow-sm
                                hover:shadow-lg
                                transition
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
                                    text-2xl
                                    font-bold
                                    text-slate-900
                                "
                            >
                                {section.title}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-slate-600
                                    leading-8
                                "
                            >
                                {section.content}
                            </p>

                        </div>

                    );

                }
            )}

        </div>

        {/* SEO Content */}

        <div
            className="
                mt-16
                bg-white
                border
                rounded-3xl
                p-10
                shadow-sm
            "
        >

            <h3
                className="
                    text-3xl
                    font-bold
                    text-slate-900
                "
            >
                Understanding Passport
                Eligibility Requirements
            </h3>

            <div
                className="
                    mt-6
                    space-y-6
                    text-slate-600
                    leading-8
                "
            >

                <p>
                    Passport eligibility depends on
                    the accuracy and consistency of
                    the information provided during
                    the application process. Identity
                    documents such as Aadhaar Card,
                    PAN Card and date of birth
                    documents play an important role
                    in establishing an applicant's
                    identity.
                </p>

                <p>
                    Before applying, applicants should
                    carefully review all supporting
                    documents and ensure that names,
                    dates of birth and addresses are
                    consistent across records.
                    Differences in personal information
                    may result in additional
                    verification requirements or
                    processing delays.
                </p>

                <p>
                    Using an eligibility checker allows
                    applicants to review document
                    consistency before beginning the
                    passport application process. OCR
                    based verification helps extract
                    information automatically and can
                    highlight potential issues that
                    should be reviewed manually.
                </p>

                <p>
                    While automated verification tools
                    can assist with document review,
                    applicants should always refer to
                    the latest official passport
                    guidelines and requirements issued
                    by the relevant authorities.
                </p>

            </div>

        </div>

    </section>

);


}
