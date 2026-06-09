import { useRef } from "react";
import { UploadCloud } from "lucide-react";

interface Props {
    onFilesSelect?: (
        files: File[]
    ) => void;
}

export default function UploadZone({
    onFilesSelect
}: Props) {

    const inputRef =
        useRef<HTMLInputElement>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const files =
            e.target.files;

        if (!files) return;

        onFilesSelect?.(
            Array.from(files)
        );

    };

    return (

        <section
            id="upload"
            className="
                py-20
            "
        >

            <div
                className="
                    max-w-8xl
                    mx-auto
                "
            >

                <div
                    className="
                        bg-white
                        border
                        border-slate-200
                        rounded-[32px]
                        shadow-xl
                        p-12
                        text-center
                        hover:shadow-2xl
                        transition-all
                        duration-300
                    "
                >

                    {/* Icon */}

                    <div
                        className="
                            w-20
                            h-20
                            mx-auto
                            rounded-3xl
                            bg-blue-50
                            flex
                            items-center
                            justify-center
                            text-blue-600
                        "
                    >

                        <UploadCloud
                            size={40}
                            strokeWidth={2}
                        />

                    </div>

                    {/* Heading */}

                    <h2
                        className="
                            mt-8
                            text-4xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Upload Documents
                    </h2>

                    <p
                        className="
                            mt-4
                            text-lg
                            text-slate-600
                            max-w-xl
                            mx-auto
                        "
                    >
                        Upload your Aadhaar and PAN
                        documents in PDF, JPG or PNG
                        format for verification.
                    </p>

                    {/* Button */}

                    <button
                        onClick={() =>
                            inputRef.current?.click()
                        }
                        className="
                            mt-8
                            px-8
                            py-4
                            rounded-2xl
                            bg-blue-600
                            text-white
                            font-semibold
                            shadow-lg
                            hover:bg-blue-700
                            hover:scale-105
                            transition-all
                            duration-300
                        "
                    >
                        Choose Files
                    </button>

                    {/* Supported */}

                    <div
                        className="
                            mt-6
                            text-sm
                            text-slate-500
                        "
                    >
                        Supports PDF, JPG and PNG
                    </div>

                    {/* Hidden Input */}

                    <input
                        ref={inputRef}
                        hidden
                        multiple
                        type="file"
                        accept="
                            .jpg,
                            .jpeg,
                            .png,
                            .pdf
                        "
                        onChange={
                            handleChange
                        }
                    />

                </div>

            </div>

        </section>

    );

}