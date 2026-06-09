export function parseAadhaarPDF(
    text: string
) {

    const result = {
        name: "",
        localName: "",
        dob: "",
        aadhaarNumber: "",
        address: ""
    };

    // ------------------
    // Aadhaar Number
    // ------------------

    const aadhaarMatch =
        text.match(
            /\d{4}\s\d{4}\s\d{4}/
        );

    if (aadhaarMatch) {

        result.aadhaarNumber =
            aadhaarMatch[0]
                .replace(/\s/g, "");

    }

    // ------------------
    // DOB
    // ------------------

    const dobMatch =
        text.match(
            /DOB\s*[:\-]?\s*(\d{2}\/\d{2}\/\d{4})/i
        );

    if (dobMatch) {

        result.dob =
            dobMatch[1];

    }

    // ------------------
    // Name
    // ------------------

    const nameMatch =
        text.match(
            /([A-Z][a-z]+\s+[A-Z][a-z]+)\s+S\s*\/\s*O/i
        );

    if (nameMatch) {

        result.name =
            nameMatch[1]
                .replace(/\s+/g, " ")
                .trim();

    }
    // ------------------
    // Address
    // ------------------

    // ------------------
    // Address
    // ------------------

    const addressMatch =
        text.match(
            /Address\s*:\s*(.*?)\s*VID/i
        );

    if (addressMatch) {

        result.address =
            addressMatch[1]
                .replace(/\s+/g, " ")
                .trim()

                .replace(
                    /^(S|D|W|C)\s*\/\s*O\s*:\s*[^,]+,\s*/i,
                    ""
                )

                .replace(
                    /\d{4}\s\d{4}\s\d{4}\s*$/,
                    ""
                )

                .trim();

    }

    if (result.address) {

        const pinMatch =
            result.address.match(
                /^(.*?\d{6})/
            );

        if (pinMatch) {

            result.address =
                pinMatch[1];

        }

    }

    console.log(
        "AADHAAR PDF PARSER:",
        result
    );

    return result;
}