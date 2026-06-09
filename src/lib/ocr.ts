import Tesseract from "tesseract.js";
import { preprocessImage } from "./imagePreprocessor";
import { extractPDFText } from "./pdfToExtractor";

export async function runOCR(
    file: File,
    onProgress: (
        value: number
    ) => void,
    password?:string
) {

    if (
        file.type ===
        "application/pdf"
    ) {

        console.log(
            "PDF TEXT EXTRACTION"
        );

        return await extractPDFText(
            file,
            password
        );

    }

    const canvas =
        await preprocessImage(
            file
        );

    const result =
        await Tesseract.recognize(
            canvas,
            "eng+hin",
            {
                logger: (
                    m
                ) => {

                    if (
                        m.status ===
                        "recognizing text"
                    ) {

                        onProgress(
                            Math.round(
                                m.progress *
                                100
                            )
                        );

                    }

                }
            }
        );

    return result.data.text;
}