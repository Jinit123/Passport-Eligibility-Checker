import { motion } from "framer-motion";

interface Props {
    documentType: string;
    name: string;
    hindiName: string;
    dob: string;
    address: string;
    aadhaarNumber: string;
    photo: string
}

export default function DocumentCard({
    documentType,
    name,
    hindiName,
    dob,
    address,
    aadhaarNumber,
    photo
}: Props) {

    console.log("PHOTO PROP:", photo);

    const maskedAadhaar =
        aadhaarNumber
            ? `XXXX XXXX ${aadhaarNumber.slice(-4)}`
            : "Not Found";


    return (
        <motion.div
            initial={{
                rotateY: 180,
                opacity: 0,
                scale: 0.8
            }}
            animate={{
                rotateY: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.8
            }}>

            <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-200">

                {/* Top Tricolor */}

                <div className="h-2 bg-orange-500"></div>

                <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-orange-50 via-white to-green-50">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center text-3xl">
                            🇮🇳
                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-gray-900">
                                भारत सरकार
                            </h2>

                            <p className="text-gray-600">
                                Government of India
                            </p>

                        </div>

                    </div>

                    <div className="text-right">

                        <p className="text-xs uppercase tracking-wider text-gray-500">
                            Document Type
                        </p>

                        <p className="font-semibold text-blue-600">
                            {documentType}
                        </p>

                    </div>

                </div>

                {/* Main Content */}

                <div className="p-8">

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Name */}

                        <div className="rounded-2xl border bg-gray-50 p-5">

                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                Name / नाम
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900">
                                {name || "Not Found"}
                            </h3>

                            <p className="text-lg text-gray-700 mt-1">
                                {hindiName || "Not Found"}
                            </p>

                        </div>

                        {/* DOB */}

                        <div className="rounded-2xl border bg-gray-50 p-5">

                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                Date of Birth
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900">
                                {dob || "Not Found"}
                            </h3>

                        </div>

                        {/* Aadhaar */}

                        <div className="md:col-span-2 rounded-2xl border bg-blue-50 p-5">

                            <p className="text-xs uppercase tracking-wide text-blue-600 mb-2">
                                Aadhaar Number
                            </p>

                            <h3 className="font-mono text-3xl font-bold tracking-widest text-blue-900">
                                {maskedAadhaar}
                            </h3>

                        </div>

                    </div>

                    {/* Address */}

                    <div className="mt-6 rounded-2xl border bg-gray-50 p-5">

                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                            Address / पता
                        </p>

                        <p className="whitespace-pre-line text-gray-800 leading-7">
                            {address || "Not Found"}
                        </p>

                    </div>

                </div>

                {/* Footer */}

                <div className="border-t bg-gray-50 px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">

                    <p className="text-sm font-medium text-red-600">
                        OCR Preview Only
                    </p>

                    <p className="text-xs text-gray-500">
                        Your documents never leave your device
                    </p>

                </div>

                <div className="h-2 bg-green-600"></div>

            </div>

        </motion.div>
    );
}