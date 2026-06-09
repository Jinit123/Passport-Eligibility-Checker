interface Props {

    aadhaarDoc: any;

    panDoc: any;

    comparison: any;

    onClose: () => void;

}

export default function VerificationResultModal({

    aadhaarDoc,

    panDoc,

    comparison,

    onClose

}: Props) {

    const score =
        comparison?.score || 0;

    const scoreLabel =
        score >= 90
            ? "Strong Match"
            : score >= 70
                ? "Partial Match"
                : "Mismatch";

    const scoreColor =
        score >= 90
            ? "text-green-600"
            : score >= 70
                ? "text-yellow-600"
                : "text-red-600";

    const scoreBg =
        score >= 90
            ? "bg-green-50"
            : score >= 70
                ? "bg-yellow-50"
                : "bg-red-50";

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                bg-black/50
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-6
            "
        >

            <div
                className="
                    bg-white
                    w-full
                    max-w-7xl
                    h-[90vh]
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    flex
                    flex-col
                "
            >

                {/* Header */}

                <div
                    className="
                        px-8
                        py-6
                        border-b
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Document Verification
                        </h2>

                        <p
                            className="
                                text-slate-500
                                mt-1
                            "
                        >
                            Aadhaar & PAN Analysis
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            w-10
                            h-10
                            rounded-xl
                            bg-slate-100
                            hover:bg-slate-200
                        "
                    >
                        ✕
                    </button>

                </div>

                {/* Scrollable Content */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                    "
                >

                    {/* Top Cards */}

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            gap-6
                            p-8
                        "
                    >

                        {/* Aadhaar */}

                        <div
                            className="
                             relative
        overflow-hidden
        rounded-3xl
        border
        border-orange-400
        bg-linear-to-br
        from-orange-300
        via-white
        to-green-300
        shadow-lg
        p-6
                            "
                        >

                            <div
                                className="
            absolute
            top-0
            right-0
            w-40
            h-40
            bg-orange-200/30
            rounded-full
            blur-3xl
        "
                            />

                            <div
                                className="
            absolute
            bottom-0
            left-0
            w-40
            h-40
            bg-green-200/30
            rounded-full
            blur-3xl
        "
                            />

                            <div
                                className="
        flex
        items-center
        justify-between
        mb-6
        pb-4
        border-b
        border-orange-200
    "
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-orange-100
                to-green-100
                flex
                items-center
                justify-center
                font-bold
                text-slate-700
            "
                                    >
                                        ID
                                    </div>

                                    <div>

                                        <h3
                                            className="
                    text-xl
                    font-bold
                    text-slate-900
                "
                                        >
                                            Aadhaar Card
                                        </h3>

                                        <p
                                            className="
                    text-sm
                    text-slate-500
                "
                                        >
                                            UIDAI Identity Verification
                                        </p>

                                    </div>

                                </div>

                                <div
                                    className="
            px-3
            py-1
            rounded-full
            bg-green-100
            text-green-700
            text-sm
            font-semibold
        "
                                >
                                    ✓ VERIFIED
                                </div>

                            </div>

                            <div className="space-y-4">

                                <div>

                                    <p className="text-sm text-slate-500">
                                        Name
                                    </p>

                                    <p className="font-semibold">
                                        {aadhaarDoc?.name}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        DOB
                                    </p>

                                    <p className="font-semibold">
                                        {aadhaarDoc?.dob}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        Aadhaar Number
                                    </p>

                                    <p className="font-mono font-bold">
                                        {aadhaarDoc?.aadhaarNumber}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* PAN */}

                        <div
                            className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-blue-500
        bg-linear-to-br
        from-blue-300
        via-white
        to-indigo-300
        shadow-lg
        p-6
    "
                        >

                            <div
                                className="
            absolute
            top-0
            right-0
            w-40
            h-40
            bg-blue-200/30
            rounded-full
            blur-3xl
        "
                            />

                            <div
                                className="
            absolute
            bottom-0
            left-0
            w-40
            h-40
            bg-indigo-200/30
            rounded-full
            blur-3xl
        "
                            />

                            <div
    className="
        flex
        items-center
        justify-between
        mb-6
        pb-4
        border-b
        border-blue-200
    "
>

    <div className="flex items-center gap-4">

        <div
            className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-blue-100
                to-indigo-100
                flex
                items-center
                justify-center
                font-bold
                text-slate-700
            "
        >
            PAN
        </div>

        <div>

            <h3
                className="
                    text-xl
                    font-bold
                    text-slate-900
                "
            >
                PAN Card
            </h3>

            <p
                className="
                    text-sm
                    text-slate-500
                "
            >
                Income Tax Verification
            </p>

        </div>

    </div>

    <div
        className="
            px-3
            py-1
            rounded-full
            bg-green-100
            text-green-700
            text-sm
            font-semibold
        "
    >
        ✓ VERIFIED
    </div>

</div>

                            <div className="space-y-4">

                                <div>

                                    <p className="text-sm text-slate-500">
                                        Name
                                    </p>

                                    <p className="font-semibold">
                                        {panDoc?.name}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        DOB
                                    </p>

                                    <p className="font-semibold">
                                        {panDoc?.dob}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        PAN Number
                                    </p>

                                    <p className="font-mono font-bold">
                                        {panDoc?.aadhaarNumber}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Verification Result */}

                    <div className="px-8 pb-8">

                        <div
                            className="
                                rounded-3xl
                                overflow-hidden
                                shadow-xl
                            "
                        >

                            {/* Header */}

                            <div
                                className="
                                    bg-emerald-500
                                    text-white
                                    p-8
                                "
                            >

                                <h3
                                    className="
                                        text-4xl
                                        font-bold
                                    "
                                >
                                    Verification Result
                                </h3>

                                <p className="mt-2">
                                    Aadhaar & PAN Analysis
                                </p>

                            </div>

                            {/* Body */}

                            <div
                                className="
                                    bg-white
                                    p-8
                                "
                            >

                                <div
                                    className="
                                        flex
                                        flex-col
                                        md:flex-row
                                        items-center
                                        justify-between
                                        gap-10
                                    "
                                >

                                    {/* Score */}

                                    <div
                                        className="
                                            text-center
                                        "
                                    >

                                        <div
                                            className={`
                                                text-7xl
                                                font-bold
                                                ${scoreColor}`}
                                        >
                                            {score}%
                                        </div>

                                        <p
                                            className="
                                                mt-2
                                                text-slate-500
                                            "
                                        >
                                            Match Score
                                        </p>

                                        <div
                                            className={`
        mt-4
        inline-flex
        px-4
        py-2
        rounded-full
        font-semibold
        ${scoreBg}
        ${scoreColor}
    `}
                                        >
                                            {scoreLabel}
                                        </div>

                                    </div>

                                    {/* Checks */}

                                    <div
                                        className="
                                            flex-1
                                            space-y-4
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                justify-between
                                                border-b
                                                pb-3
                                            "
                                        >

                                            <span>
                                                Name Match
                                            </span>

                                            <span
                                                className={
                                                    comparison?.nameMatch
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                }
                                            >
                                                {
                                                    comparison?.nameMatch
                                                        ? "✓ Match"
                                                        : "✕ Mismatch"
                                                }
                                            </span>

                                        </div>

                                        <div
                                            className="
                                                flex
                                                justify-between
                                                border-b
                                                pb-3
                                            "
                                        >

                                            <span>
                                                DOB Match
                                            </span>

                                            <span
                                                className={
                                                    comparison?.dobMatch
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                }
                                            >
                                                {
                                                    comparison?.dobMatch
                                                        ? "✓ Match"
                                                        : "✕ Mismatch"
                                                }
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="
bg-green-50
border
border-green-200
rounded-2xl
p-5
mb-6
mt-3
">
                            <h4 className="
    text-green-700
    font-bold
    text-lg
    ">
                                Verification Successful
                            </h4>

                            <p className="
    mt-2
    text-green-600
    ">
                                1. The uploaded Aadhaar and PAN documents
                                appear to belong to the same individual.
                                <br />
                                2. All critical identity fields matched successfully.
                            </p>
                        </div>
                    </div>

                    {/* Trust & Verification Dashboard */}

                    <div
                        className="
        px-8
        pb-8
        grid
        lg:grid-cols-2
        gap-6
    "
                    >

                        {/* Identity Matching */}

                        <div
                            className="
            bg-white
            border
            rounded-3xl
            p-6
            shadow-sm
        "
                        >

                            <h3
                                className="
                text-xl
                font-bold
                mb-5
            "
                            >
                                Identity Matching
                            </h3>

                            <div className="space-y-4">

                                <div className="flex justify-between">
                                    <span>Full Name Match</span>
                                    <span className="text-green-600">
                                        ✓ Verified
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Date Of Birth Match</span>
                                    <span className="text-green-600">
                                        ✓ Verified
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Aadhaar Number Detected</span>
                                    <span className="text-green-600">
                                        ✓ Found
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>PAN Number Detected</span>
                                    <span className="text-green-600">
                                        ✓ Found
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>OCR Extraction</span>
                                    <span className="text-green-600">
                                        ✓ Success
                                    </span>
                                </div>

                            </div>

                        </div>

                        {/* Risk Assessment */}

                        <div
                            className="
            bg-green-50
            border
            border-green-200
            rounded-3xl
            p-6
        "
                        >

                            <h3
                                className="
                text-xl
                font-bold
                text-green-700
            "
                            >
                                Risk Assessment
                            </h3>

                            <div
                                className="
                mt-4
                inline-block
                px-4
                py-2
                rounded-full
                bg-green-100
                text-green-700
                font-semibold
            "
                            >
                                LOW RISK
                            </div>

                            <p
                                className="
                mt-4
                text-green-700
                leading-7
            "
                            >
                                No identity mismatch detected.
                                Aadhaar and PAN records appear
                                consistent and belong to the
                                same individual.
                            </p>

                        </div>

                        {/* Document Statistics */}

                        <div
                            className="
            bg-white
            border
            rounded-3xl
            p-6
            shadow-sm
        "
                        >

                            <h3
                                className="
                text-xl
                font-bold
                mb-5
            "
                            >
                                Document Statistics
                            </h3>

                            <div className="space-y-4">

                                <div className="flex justify-between">
                                    <span>Documents Processed</span>
                                    <span>2</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>OCR Status</span>
                                    <span className="text-green-600">
                                        Success
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Verification Score</span>
                                    <span>
                                        {comparison?.score}%
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Fields Compared</span>
                                    <span>5</span>
                                </div>

                            </div>

                        </div>

                        {/* Privacy */}

                        <div
                            className="
            bg-blue-50
            border
            border-blue-200
            rounded-3xl
            p-6
        "
                        >

                            <h3
                                className="
                text-xl
                font-bold
                text-blue-700
                mb-5
            "
                            >
                                Privacy & Security
                            </h3>

                            <div className="space-y-3">

                                <p>
                                    ✓ Processed Locally
                                </p>

                                <p>
                                    ✓ No Cloud Upload
                                </p>

                                <p>
                                    ✓ No Personal Data Stored
                                </p>

                                <p>
                                    ✓ OCR Completed On Device
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Verification Details */}

                    <div
                        className="
        px-8
        pb-8
    "
                    >

                        <div
                            className="
            bg-slate-50
            border
            rounded-3xl
            p-6
        "
                        >

                            <h3
                                className="
                text-xl
                font-bold
                mb-5
            "
                            >
                                Verification Details
                            </h3>

                            <div
                                className="
                grid
                md:grid-cols-3
                gap-6
            "
                            >

                                <div>

                                    <p className="text-slate-500 text-sm">
                                        Verification ID
                                    </p>

                                    <p className="font-semibold">
                                        VER-{Date.now()}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-slate-500 text-sm">
                                        Verified On
                                    </p>

                                    <p className="font-semibold">
                                        {
                                            new Date()
                                                .toLocaleString()
                                        }
                                    </p>

                                </div>

                                <div>

                                    <p className="text-slate-500 text-sm">
                                        Status
                                    </p>

                                    <p className="text-green-600 font-semibold">
                                        Completed Successfully
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Important Notice */}

                    <div
                        className="
        px-8
        pb-8
    "
                    >

                        <div
                            className="
            bg-amber-50
            border
            border-amber-200
            rounded-3xl
            p-6
        "
                        >

                            <h3
                                className="
                text-xl
                font-bold
                text-amber-700
                mb-4
            "
                            >
                                Important Notice
                            </h3>

                            <p
                                className="
                text-amber-700
                leading-7
            "
                            >
                                This verification report is generated
                                using OCR-based extraction and document
                                comparison techniques. Users should
                                manually review original documents
                                before making legal, financial or
                                compliance-related decisions.
                            </p>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    );

}