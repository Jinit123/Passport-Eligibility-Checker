interface Props {

    result: {

        nameMatch: boolean;

        dobMatch: boolean;

        score: number;

    };

}

export default function ComparisonCard({

    result

}: Props) {

    return (

        <div className="
            mt-10
            max-w-4xl
            mx-auto
            bg-white
            rounded-3xl
            shadow-2xl
            overflow-hidden
            border
        ">

            {/* Header */}

            <div className="
                bg-gradient-to-r
                from-green-600
                to-emerald-500
                text-white
                p-6
            ">

                <h2 className="
                    text-3xl
                    font-bold
                ">
                    Document Verification
                </h2>

                <p className="opacity-90">
                    Aadhaar & PAN Analysis
                </p>

            </div>

            {/* Score */}

            <div className="
                text-center
                py-10
            ">

                <div className="
                    text-7xl
                    font-bold
                    text-green-600
                ">
                    {result.score}%
                </div>

                <p className="
                    text-gray-500
                    mt-2
                ">
                    Overall Match Score
                </p>

            </div>

            {/* Checks */}

            <div className="
                px-8
                pb-8
                space-y-5
            ">

                <div className="
                    flex
                    justify-between
                    items-center
                    p-5
                    rounded-xl
                    bg-gray-50
                ">

                    <span className="
                        text-lg
                        font-medium
                    ">
                        👤 Name Match
                    </span>

                    <span className={

                        result.nameMatch

                            ? "text-green-600 font-bold"

                            : "text-red-600 font-bold"

                    }>
                        {
                            result.nameMatch
                                ? "MATCHED"
                                : "MISMATCH"
                        }
                    </span>

                </div>

                <div className="
                    flex
                    justify-between
                    items-center
                    p-5
                    rounded-xl
                    bg-gray-50
                ">

                    <span className="
                        text-lg
                        font-medium
                    ">
                        📅 DOB Match
                    </span>

                    <span className={

                        result.dobMatch

                            ? "text-green-600 font-bold"

                            : "text-red-600 font-bold"

                    }>
                        {
                            result.dobMatch
                                ? "MATCHED"
                                : "MISMATCH"
                        }
                    </span>

                </div>

            </div>

            {/* Footer */}

            <div className="
                border-t
                p-6
                text-center
            ">

                <div className={

                    result.score === 100

                        ? "text-green-600"

                        : "text-orange-600"

                }>

                    <span className="
                        text-2xl
                        font-bold
                    ">

                        {
                            result.score === 100
                                ? "✅ VERIFIED"
                                : "⚠ REVIEW REQUIRED"
                        }

                    </span>

                </div>

            </div>

        </div>

    );

}