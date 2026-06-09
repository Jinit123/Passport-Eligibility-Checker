import { motion } from "framer-motion";

interface Props {
    progress: number;
}

export default function OCRScanningCard({
    progress
}: Props) {

    return (

        <motion.div
            initial={{
                opacity: 0,
                scale: 0.9
            }}
            animate={{
                opacity: 1,
                scale: 1
            }}
            className="max-w-lg mx-auto mt-8"
        >

            <div className="bg-white rounded-3xl shadow-2xl border p-8">

                <div className="text-center">

                    <motion.div
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear"
                        }}
                        className="text-5xl"
                    >
                        🔍
                    </motion.div>

                    <h2 className="mt-4 text-2xl font-bold">
                        Scanning Document
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Extracting information from your document
                    </p>

                </div>

                {/* Progress */}

                <div className="mt-8">

                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

                        <motion.div
                            className="h-full bg-gradient-to-r from-orange-500 to-green-500"
                            initial={{
                                width: 0
                            }}
                            animate={{
                                width: `${progress}%`
                            }}
                        />

                    </div>

                    <p className="mt-2 text-center font-semibold">
                        {progress}%
                    </p>

                </div>

                {/* Steps */}

                <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-2">

                        <span>
                            {progress > 20 ? "✅" : "⏳"}
                        </span>

                        <span>
                            Detecting Document
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <span>
                            {progress > 50 ? "✅" : "⏳"}
                        </span>

                        <span>
                            Running OCR
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <span>
                            {progress > 80 ? "✅" : "⏳"}
                        </span>

                        <span>
                            Extracting Fields
                        </span>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}