import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
    "/pdf.worker.min.js";

export async function extractPDFText(
    file: File,
    password?: string
) {

    const buffer =
        await file.arrayBuffer();

    const pdf =
        await pdfjsLib.getDocument({
            data: buffer,
            password
        }).promise;

    let fullText = "";

    for (
        let pageNum = 1;
        pageNum <= pdf.numPages;
        pageNum++
    ) {

        const page =
            await pdf.getPage(pageNum);

        const textContent =
            await page.getTextContent();

        const pageText =
            textContent.items
                .map(
                    (item: any) =>
                        item.str
                )
                .join(" ");

        fullText +=
            pageText + "\n";
    }

    return fullText;
}