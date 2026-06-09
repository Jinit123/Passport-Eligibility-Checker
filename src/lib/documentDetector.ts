export function detectDocumentType(
    text: string
) {

    const lower =
        text.toLowerCase();

    // Aadhaar

    if (

        lower.includes(
            "aadhaar"
        ) ||

        lower.includes(
            "vid"
        ) ||

        /\d{4}\s\d{4}\s\d{4}/
            .test(text)

    ) {

        return "Aadhaar Card";

    }

    // PAN

    if (

        lower.includes(
            "permanent account number"
        ) ||

        lower.includes(
            "epan"
        ) ||

        /[A-Z]{5}[0-9]{4}[A-Z]/
            .test(text)

    ) {

        return "PAN Card";

    }

    // Driving Licence

    if (
        lower.includes(
            "driving licence"
        ) ||
        lower.includes(
            "driving license"
        )
    ) {

        return "Driving License";

    }

    // Voter

    if (
        lower.includes(
            "election commission"
        )
    ) {

        return "Voter ID";

    }

    return "Unknown";
}