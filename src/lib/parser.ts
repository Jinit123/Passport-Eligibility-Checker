// export function extractDOB(
//     text: string
// ) {
//     const patterns = [
//         /\d{2}\/\d{2}\/\d{4}/,
//         /\d{2}-\d{2}-\d{4}/,
//     ];

//     for (const pattern of patterns) {
//         const match =
//             text.match(pattern);

//         if (match) {
//             return match[0];
//         }
//     }

//     return "";
// }

export function extractDOB(
    text: string
) {

    const match =
        text.match(
            /DOB\s*[:\-]?\s*(\d{2}\/\d{2}\/\d{4})/i
        );

    if (match) {

        return match[1];

    }

    return "Not Found";
}

// export function extractName(text: string) {
//     const lines = text
//         .split("\n")
//         .map(line => line.trim())
//         .filter(Boolean);

//     // Aadhaar specific logic
//     const authorityIndex = lines.findIndex(line =>
//         line.includes(
//             "Unique Identification Authority of India"
//         )
//     );

//     if (authorityIndex !== -1) {
//         for (
//             let i = authorityIndex + 1;
//             i < lines.length;
//             i++
//         ) {
//             const line = lines[i];

//             // Skip unwanted lines
//             if (
//                 line.length < 3 ||
//                 line.includes("Enrolment") ||
//                 line.includes("Aadhaar") ||
//                 line.includes("DOB") ||
//                 line.includes("Government") ||
//                 line.includes("Authority") ||
//                 line.includes("To") ||
//                 line.includes("C/O")
//             ) {
//                 continue;
//             }

//             // Name pattern
//             if (/^[A-Za-z ]+$/.test(line)) {
//                 return line;
//             }
//         }
//     }

//     return "";
// }

export function extractName(
    text: string
) {

    const lines =
        text
            .split("\n")
            .map(line =>
                line.trim()
            );

    for (
        let i = 0;
        i < lines.length;
        i++
    ) {

        const line =
            lines[i];

        if (
            /^[A-Z][a-z]+\s[A-Z][a-z]+$/
                .test(line)
        ) {

            return line;
        }

    }

    return "Not Found";
}

// export function extractAddress(
//     text: string
// ) {
//     const lines = text
//         .split("\n")
//         .map(line => line.trim())
//         .filter(Boolean);

//     const addressLines: string[] = [];

//     const startIndex = lines.findIndex(
//         line =>
//             line.includes("C/O") ||
//             line.includes("S/O") ||
//             line.includes("D/O")
//     );

//     if (startIndex === -1) {
//         return "";
//     }

//     for (
//         let i = startIndex;
//         i < lines.length;
//         i++
//     ) {
//         const line = lines[i];

//         if (
//             line.includes("Your Aadhaar") ||
//             line.includes("Aadhaar No")
//         ) {
//             break;
//         }

//         addressLines.push(line);
//     }

//     return addressLines.join(", ");
// }

export function parseAadhaarAddress(
    text: string
) {
    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    const addressLines: string[] = [];

    const validPrefixes = [
        "C/O",
        "S/O",
        "D/O",
        "W/O",
        "VTC",
        "PO",
        "Sub District",
        "District",
        "State",
        "PIN",
        "Address"
    ];

    const stopKeywords = [
        "Your Aadhaar",
        "Aadhaar No",
        "UIDAI",
        "Government",
        "DOB",
        "Male",
        "Female",
        "Mobile"
    ];

    let collecting = false;

    for (const line of lines) {

        if (
            validPrefixes.some(prefix =>
                line.startsWith(prefix)
            )
        ) {
            collecting = true;
        }

        if (!collecting) {
            continue;
        }

        if (
            stopKeywords.some(keyword =>
                line.includes(keyword)
            )
        ) {
            break;
        }

        const cleaned = line
            .replace(/[^\w\s,:#/-]/g, "")
            .trim();

        if (cleaned.length < 3) {
            continue;
        }

        addressLines.push(cleaned);
    }

    return addressLines.join("\n");
}

export function extractAddress(
    text: string
) {
    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    const startKeywords = [
        "C/O",
        "S/O",
        "D/O",
        "W/O",
        "Address"
    ];

    const stopKeywords = [
        "Your Aadhaar",
        "Aadhaar No",
        "Mobile",
        "DOB",
        "Government",
        "UIDAI"
    ];

    const startIndex =
        lines.findIndex(line =>
            startKeywords.some(keyword =>
                line.includes(keyword)
            )
        );

    if (startIndex === -1) {
        return "";
    }

    const addressLines: string[] = [];

    for (
        let i = startIndex;
        i < lines.length;
        i++
    ) {
        const line = lines[i];

        const shouldStop =
            stopKeywords.some(keyword =>
                line.includes(keyword)
            );

        if (shouldStop) {
            break;
        }

        addressLines.push(cleanAddressLine(line));
    }

    return addressLines.join("\n");
}

function cleanAddressLine(
    line: string
) {
    return line
        .replace(/[^\w\s,:#/-]/g, "")
        .trim();
}

export function extractHindiName(
    text: string
) {
    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    for (const line of lines) {

        const hasHindi =
            /[\u0900-\u097F]/.test(line);

        const invalidWords = [
            "भारत सरकार",
            "आधार",
            "आपका आधार",
            "मेरा आधार",
            "जन्म",
            "पुरुष"
        ];

        if (
            hasHindi &&
            !invalidWords.some(word =>
                line.includes(word)
            ) &&
            line.length < 30
        ) {
            return line;
        }
    }

    return "";
}

export function extractAadhaarNumber(
    text: string
) {
    const match = text.match(
        /\b(?:\d{4}\s?\d{4}\s?\d{4})\b/
    );

    return match ? match[0] : "";
}