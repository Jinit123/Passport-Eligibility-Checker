import { useState } from "react";
import UploadZone from "./UploadZone";
import OCRProgress from "./OCRProgress";
import DocumentCard from "./DocumentCard";
// import { extractPhoto } from "../lib/photoExtractor";
import { detectDocumentType } from "../lib/documentDetector";
import { motion } from "framer-motion";
import { extractDOB, extractName, extractAadhaarNumber, extractHindiName, extractAddress, parseAadhaarAddress } from "../lib/parser";
import OCRScanningCard from "./OCRScannigCard";
import { runOCR } from "../lib/ocr";
import { parsePANPDF } from "../lib/parsers/panPdfParser";
import { parseAadhaarPDF } from "../lib/parsers/aadharPdfParser";
import PDFPasswordModal from "./PDFPasswordModal";
import PanCard from "./PanCard";
import { compareDocuments } from "../lib/comparison";
import ComparisonCard
    from "./ComparisonCard";
import { h1 } from "framer-motion/client";
import VerificationResultModal from "./VerficationResultModal";

export default function App() {
    const [files, setFiles] =
        useState<File[]>([]);

    const [progress, setProgress] =
        useState(0);

    const [ocrText, setOcrText] =
        useState("");

    const [showPasswordModal,
        setShowPasswordModal] =
        useState(false);

    const [pdfPasswords,
        setPdfPasswords] =
        useState<
            Record<string, string>
        >({});

    const [
        showVerificationModal,
        setShowVerificationModal
    ] = useState(false);

    const [showCard, setShowCard] =
        useState(false);

    const [ocrCompleted, setOcrCompleted] =
        useState(false);

    const [documents, setDocuments] =
        useState<any[]>([]);

    const [
        comparisonResult,
        setComparisonResult
    ] = useState<any>(null);

    const handleFiles = (
        selectedFiles: File[]
    ) => {

        setFiles(prev => [
            ...prev,
            ...selectedFiles
        ]);

        setShowCard(false);

        setOcrCompleted(false);

        setDocuments([]);

        setProgress(0);
    };

    const processDocuments = async () => {

        console.log("Button Clicked....");

        if (!files.length)
            return;

        setShowCard(false);
        setOcrCompleted(false);

        const extractedDocs = [];

        for (const file of files) {

            console.log("PDF Detect:", file);

            // For PDF File Handle

            const text =
                await runOCR(
                    file,
                    setProgress,
                    pdfPasswords[file.name]
                );

            console.log(
                "RAW TEXT:",
                text
            );

            // PDF
            if (
                file.type ===
                "application/pdf"
            ) {

                const documentType =
                    detectDocumentType(text);

                console.log(
                    "PDF DOCUMENT TYPE:",
                    documentType
                );

                // Aadhaar PDF

                if (
                    documentType ===
                    "Aadhaar Card"
                ) {

                    const pdfData =
                        parseAadhaarPDF(text);

                    extractedDocs.push({

                        documentType,

                        name:
                            pdfData.name,

                        hindiName:
                            pdfData.localName,

                        dob:
                            pdfData.dob,

                        address:
                            pdfData.address,

                        aadhaarNumber:
                            pdfData.aadhaarNumber

                    });

                }

                // PAN PDF

                else if (
                    documentType ===
                    "PAN Card"
                ) {

                    const panData =
                        parsePANPDF(text);

                    extractedDocs.push({

                        documentType,

                        name:
                            panData.name,

                        hindiName:
                            "",

                        dob:
                            panData.dob,

                        address:
                            panData.fatherName,

                        aadhaarNumber:
                            panData.panNumber

                    });

                }

                continue;
            }

            // Image OCR
            const documentType =
                detectDocumentType(text);

            const name =
                extractName(text);

            const hindiName =
                extractHindiName(text);

            const dob =
                extractDOB(text);

            const address =
                parseAadhaarAddress(text);

            const aadhaarNumber =
                extractAadhaarNumber(text);

            extractedDocs.push({
                documentType,
                name,
                hindiName,
                dob,
                address,
                aadhaarNumber
            });

            console.log({
                documentType,
                name,
                dob,
                aadhaarNumber
            });
        }

        // ======================
        // Compare Aadhaar & PAN
        // ======================

        const aadhaarDoc =
            extractedDocs.find(
                doc =>
                    doc.documentType ===
                    "Aadhaar Card"
            );

        const panDoc =
            extractedDocs.find(
                doc =>
                    doc.documentType ===
                    "PAN Card"
            );

        if (
            aadhaarDoc &&
            panDoc
        ) {

            const comparison =
                compareDocuments(
                    aadhaarDoc,
                    panDoc
                );

            console.log(
                "COMPARISON:",
                comparison
            );

            setComparisonResult(comparison);

            setShowVerificationModal(
                true
            );

        }

        // ======================

        setDocuments(extractedDocs);

        setOcrCompleted(true);

        setProgress(100);

        setDocuments(extractedDocs);

        setOcrCompleted(true);

        setProgress(100);
    };

    return (
        <div>

            <UploadZone
                onFilesSelect={handleFiles}
            />

            {progress > 0 &&
                progress < 100 && (

                    <OCRScanningCard
                        progress={progress}
                    />

                )}

            {files.length > 0 && (

                <div className="mt-10">

                    {/* Heading */}

                    <div className="flex items-center gap-3 mb-5">

                        <div
                            className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    text-blue-600
                "
                        >
                            📂
                        </div>

                        <div>

                            <h3
                                className="
                        text-xl
                        font-bold
                        text-slate-900
                    "
                            >
                                Selected Documents
                            </h3>

                            <p
                                className="
                        text-sm
                        text-slate-500
                    "
                            >
                                Ready for verification
                            </p>

                        </div>

                    </div>

                    {/* Files */}

                    <div className="space-y-4">

                        {files.map((file) => (

                            <div
                                key={file.name}
                                className="
                        bg-white
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        shadow-sm
                        hover:shadow-lg
                        transition
                        duration-300
                    "
                            >

                                <div
                                    className="
                            flex
                            items-center
                            justify-between
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
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-blue-50
                                    flex
                                    items-center
                                    justify-center
                                    text-xl
                                "
                                        >
                                            📄
                                        </div>

                                        <div>

                                            <div
                                                className="
                                        font-semibold
                                        text-slate-900
                                    "
                                            >
                                                {file.name}
                                            </div>

                                            <div
                                                className="
                                        text-sm
                                        text-slate-500
                                    "
                                            >
                                                {(
                                                    file.size /
                                                    1024
                                                ).toFixed(0)}
                                                KB
                                            </div>

                                        </div>

                                    </div>

                                    <span
                                        className="
                                px-3
                                py-1
                                rounded-full
                                bg-green-50
                                text-green-600
                                text-sm
                                font-medium
                            "
                                    >
                                        Ready
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Compare Button */}

                    <div className="mt-8 text-center">

                        <button
                            onClick={() => {

                                const pdfFiles =
                                    files.filter(
                                        file =>
                                            file.type ===
                                            "application/pdf"
                                    );

                                if (
                                    pdfFiles.length
                                ) {

                                    setShowPasswordModal(
                                        true
                                    );

                                    return;

                                }

                                processDocuments();

                            }}
                            className="
                    px-10
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    font-semibold
                    shadow-lg
                    hover:shadow-xl
                    hover:scale-105
                    transition-all
                    duration-300
                "
                        >
                            Compare Documents
                        </button>

                    </div>

                </div>

            )}

            {ocrCompleted && (

                <div className="mt-10">

                    {!showCard ? (

                        <div
                            onClick={() =>
                                setShowCard(true)
                            }
                            className="
        max-w-xl
        mx-auto
        cursor-pointer
        group
    "
                        >

                            <div
                                className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-white
            border
            border-slate-200
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-1
        "
                            >

                                {/* Glow */}

                                <div
                                    className="
                absolute
                -top-20
                left-1/2
                -translate-x-1/2
                w-72
                h-72
                bg-blue-100
                rounded-full
                blur-3xl
                opacity-50
            "
                                />

                                <div className="relative z-10 p-10">

                                    {/* Success Badge */}

                                    <div
                                        className="
                    w-20
                    h-20
                    mx-auto
                    rounded-3xl
                    bg-green-50
                    flex
                    items-center
                    justify-center
                    text-4xl
                "
                                    >
                                        ✅
                                    </div>

                                    <h2
                                        className="
                    mt-6
                    text-4xl
                    font-bold
                    text-slate-900
                    text-center
                "
                                    >
                                        Verification Complete
                                    </h2>

                                    <p
                                        className="
                    mt-3
                    text-center
                    text-slate-600
                "
                                    >
                                        Your documents have been
                                        processed successfully.
                                    </p>

                                    {/* Stats */}

                                    <div
                                        className="
                    mt-8
                    grid
                    grid-cols-3
                    gap-4
                "
                                    >

                                        <div
                                            className="
                        bg-slate-50
                        rounded-2xl
                        p-4
                        text-center
                    "
                                        >
                                            <div
                                                className="
                            text-green-600
                            font-bold
                            text-xl
                        "
                                            >
                                                ✓
                                            </div>

                                            <div
                                                className="
                            mt-2
                            text-sm
                            text-slate-600
                        "
                                            >
                                                Name
                                            </div>
                                        </div>

                                        <div
                                            className="
                        bg-slate-50
                        rounded-2xl
                        p-4
                        text-center
                    "
                                        >
                                            <div
                                                className="
                            text-green-600
                            font-bold
                            text-xl
                        "
                                            >
                                                ✓
                                            </div>

                                            <div
                                                className="
                            mt-2
                            text-sm
                            text-slate-600
                        "
                                            >
                                                DOB
                                            </div>
                                        </div>

                                        <div
                                            className="
                        bg-slate-50
                        rounded-2xl
                        p-4
                        text-center
                    "
                                        >
                                            <div
                                                className="
                            text-green-600
                            font-bold
                            text-xl
                        "
                                            >
                                                ✓
                                            </div>

                                            <div
                                                className="
                            mt-2
                            text-sm
                            text-slate-600
                        "
                                            >
                                                Address
                                            </div>
                                        </div>

                                    </div>

                                    {/* CTA */}

                                    <button
                                        className="
                    mt-8
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    font-semibold
                    shadow-lg
                    group-hover:shadow-xl
                    transition
                "
                                    >
                                        View Verification Results →
                                    </button>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <div className="
                space-y-8
            ">

                            {
                                showVerificationModal &&

                                comparisonResult &&

                                (
                                    <VerificationResultModal

                                        aadhaarDoc={
                                            documents.find(
                                                d =>
                                                    d.documentType ===
                                                    "Aadhaar Card"
                                            )
                                        }

                                        panDoc={
                                            documents.find(
                                                d =>
                                                    d.documentType ===
                                                    "PAN Card"
                                            )
                                        }

                                        comparison={
                                            comparisonResult
                                        }

                                        onClose={() =>
                                            setShowVerificationModal(
                                                false
                                            )
                                        }

                                    />
                                )
                            }

                        </div>

                    )}

                </div>

            )}

            {
                showPasswordModal && (

                    <PDFPasswordModal
                        files={
                            files.filter(
                                file =>
                                    file.type ===
                                    "application/pdf"
                            )
                        }
                        passwords={
                            pdfPasswords
                        }
                        setPasswords={
                            setPdfPasswords
                        }
                        onContinue={() => {

                            setShowPasswordModal(
                                false
                            );

                            processDocuments();

                        }}
                    />

                )
            }

        </div>
    );
} 