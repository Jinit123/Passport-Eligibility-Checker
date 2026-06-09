import { motion } from "framer-motion";

interface Props {
  progress: number;
}

export default function OCRScanningCard({
  progress
}: Props) {

  const getCurrentStep = () => {

    if (progress < 30)
      return "Detecting Document";

    if (progress < 70)
      return "Running OCR Engine";

    return "Extracting Fields";
  };

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      className="max-w-2xl mx-auto mt-10"
    >

      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Scanner Laser */}

        <motion.div
          animate={{
            top: [
              "10%",
              "85%",
              "10%"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear"
          }}
          className="
        absolute
        left-0
        right-0
        h-1
        bg-green-500
        shadow-[0_0_20px_#22c55e]
        z-20
    "
        />

        {/* Animated Glow */}

        <motion.div
          animate={{
            x: [
              "-100%",
              "200%"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent"
        />

        <div className="p-8 relative z-10">

          {/* Icon */}

          <div className="flex justify-center">

            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
              className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl"
            >
              🔍
            </motion.div>

          </div>

          <div className="mt-6 flex justify-center">

            <div className="relative w-56 h-72 rounded-2xl border bg-gray-50 overflow-hidden">

              <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-8xl">

                📄

              </div>

            </div>

          </div>

          {/* Title */}

          <div className="text-center mt-5">

            <h2 className="text-3xl font-bold">
              AI OCR Engine
            </h2>

            <p className="text-gray-500 mt-2">
              Scanning Aadhaar Card
            </p>

          </div>

          {/* Percentage */}

          <div className="text-center mt-8">

            <div className="text-5xl font-bold text-blue-600">
              {progress}%
            </div>

            <p className="text-gray-500 mt-2">
              {getCurrentStep()}
            </p>

          </div>

          {/* Progress Bar */}

          <div className="mt-8">

            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">

              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-green-500"
                animate={{
                  width: `${progress}%`
                }}
              />

            </div>

          </div>

          {/* Steps */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

            <div className="rounded-xl border p-4 text-center">

              <div className="text-2xl">
                {progress > 20
                  ? "✅"
                  : "⏳"}
              </div>

              <p className="mt-2 text-sm">
                Document Detection
              </p>

            </div>

            <div className="rounded-xl border p-4 text-center">

              <div className="text-2xl">
                {progress > 50
                  ? "✅"
                  : "⏳"}
              </div>

              <p className="mt-2 text-sm">
                OCR Processing
              </p>

            </div>

            <div className="rounded-xl border p-4 text-center">

              <div className="text-2xl">
                {progress > 80
                  ? "✅"
                  : "⏳"}
              </div>

              <p className="mt-2 text-sm">
                Field Extraction
              </p>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-8 text-center">

            <p className="text-sm text-gray-500">
              Your documents never leave your device
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}