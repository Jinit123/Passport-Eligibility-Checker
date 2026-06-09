import { useState } from "react";
import {
    ChevronDown,
    HelpCircle
} from "lucide-react";

export default function FAQ() {

    const [openIndex, setOpenIndex] =
        useState<number | null>(0);

    const faqs = [

        {
            question:
                "What are the documents required for a passport?",
            answer:
                "For most passport applications in India, applicants typically need proof of identity, proof of address, proof of date of birth, and supporting documents such as Aadhaar Card, PAN Card, Voter ID, Driving License, Birth Certificate, or other accepted government-issued documents."
        },

        {
            question:
                "Which documents are needed to apply for a passport?",
            answer:
                "Applicants generally require identity proof, address proof, and date of birth proof. Commonly accepted documents include Aadhaar Card, PAN Card, Birth Certificate, Voter ID, Driving License, and Bank Passbook, depending on the application category."
        },

        {
            question:
                "What documents do I need for a passport?",
            answer:
                "The required documents vary based on age and application type. Most applicants need identity proof, address proof, and date of birth proof. This tool helps verify whether your Aadhaar and PAN details are consistent before application."
        },

        {
            question:
                "Is Aadhaar and PAN card enough for passport?",
            answer:
                "Aadhaar and PAN are commonly used supporting documents, but additional documents may be required depending on your situation. Passport authorities may request address proof, birth proof, or other supporting documents."
        },

        {
            question:
                "Can I get a passport in 3 days in India?",
            answer:
                "Tatkaal passport services may significantly reduce processing time, but approval timelines depend on document verification, police verification requirements, and Passport Seva processing."
        },

        {
            question:
                "How many documents are needed for a passport?",
            answer:
                "There is no fixed number. Applicants usually need sufficient documents to establish identity, address, and date of birth. The exact requirements depend on the passport category and applicant profile."
        },

        {
            question:
                "Which document is required for a first time passport?",
            answer:
                "First-time applicants generally need proof of identity, proof of address, and proof of date of birth. Aadhaar Card, Birth Certificate, PAN Card, and other government-issued documents are commonly accepted."
        },

        {
            question:
                "Is a bank passbook accepted for a passport?",
            answer:
                "In certain situations, a bank passbook may be accepted as address proof if it meets current Passport Seva requirements. Applicants should always verify the latest official guidelines."
        },

        {
            question:
                "What documents for a first passport?",
            answer:
                "First passport applications typically require identity proof, address proof, date of birth proof, and supporting documents depending on the applicant's age and category."
        },

        {
            question:
                "Which birth document is required for passport?",
            answer:
                "A Birth Certificate issued by a competent authority is commonly accepted as proof of date of birth. Other documents may also be accepted under applicable passport rules."
        },

        {
            question:
                "What disqualifies you from getting a passport?",
            answer:
                "Passport applications may face rejection or delay if submitted information is inaccurate, documents are inconsistent, mandatory verification requirements are not satisfied, or legal restrictions apply."
        }

    ];

    return (

        <section
            className="
                py-24
            "
        >

            <div className="text-center">

                <span
                    className="
                        text-blue-600
                        font-semibold
                        uppercase
                        tracking-widest
                    "
                >
                    FAQ
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
                    Frequently Asked
                    Questions
                </h2>

                <p
                    className="
                        mt-5
                        text-slate-600
                        max-w-3xl
                        mx-auto
                    "
                >
                    Common questions about
                    passport eligibility,
                    document verification,
                    Aadhaar, PAN and passport
                    application requirements.
                </p>

            </div>

            <div
                className="
                    mt-16
                    w-full
                    max-w-6xl
                    mx-auto
                    space-y-5
                "
            >

                {faqs.map(
                    (
                        faq,
                        index
                    ) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                border
                                border-slate-200
                                rounded-2xl
                                overflow-hidden
                                shadow-sm
                            "
                        >

                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index
                                            ? null
                                            : index
                                    )
                                }
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    px-8 py-7
                                    text-left
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <HelpCircle
                                        className="
                                            text-blue-600
                                        "
                                        size={22}
                                    />

                                    <span
                                        className="
                                            font-semibold
                                            text-slate-900
                                        "
                                    >
                                        {
                                            faq.question
                                        }
                                    </span>

                                </div>

                                <ChevronDown
                                    className={`
                                        transition-transform
                                        duration-300
                                        ${
                                            openIndex === index
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />

                            </button>

                            {openIndex ===
                                index && (

                                <div
                                    className="
                                        px-8
                                        pb-7
                                        text-slate-600
                                        leading-7
                                    "
                                >
                                    {
                                        faq.answer
                                    }
                                </div>

                            )}

                        </div>

                    )
                )}

            </div>

        </section>

    );

}