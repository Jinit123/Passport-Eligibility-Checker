export function parsePANPDF(
    text: string
) {

    const result = {

        name: "",

        fatherName: "",

        dob: "",

        panNumber: ""

    };

    // -------------------
    // Normalize Text
    // -------------------

    const cleanText =
        text
            .replace(/\s+/g, " ")
            .trim();

    // -------------------
    // Remove Footer
    // -------------------

    const usefulText =
        cleanText.split(
            "Electronically"
        )[0];

    // -------------------
    // PAN Number
    // -------------------

    const panMatch =
        usefulText.match(
            /[A-Z]{5}[0-9]{4}[A-Z]/
        );

    if (panMatch) {

        result.panNumber =
            panMatch[0];

    }

    // -------------------
    // DOB
    // -------------------

    const dobMatch =
        usefulText.match(
            /\d{2}\/\d{2}\/\d{4}/
        );

    if (dobMatch) {

        result.dob =
            dobMatch[0];

    }

    // -------------------
    // Name
    // -------------------

    const nameMatch =
        usefulText.match(
            /(?:Male|Female)\s+([A-Z\s]+?)\s+[A-Z]{5}[0-9]{4}[A-Z]/
        );

    if (nameMatch) {

        result.name =
            nameMatch[1]
                .trim();

    }

    // -------------------
    // Father Name
    // -------------------

    if (result.name) {

        const remainingText =
            usefulText.substring(

                usefulText.lastIndexOf(
                    result.name
                ) +

                result.name.length

            );

        const fatherMatch =
            remainingText.match(
                /([A-Z\s]{10,})/
            );

        if (fatherMatch) {

            let fatherName =
                fatherMatch[1]
                    .trim();

            // Duplicate Remove

            const words =
                fatherName.split(
                    " "
                );

            const half =
                Math.floor(
                    words.length / 2
                );

            const firstHalf =
                words
                    .slice(0, half)
                    .join(" ");

            const secondHalf =
                words
                    .slice(half)
                    .join(" ");

            if (

                firstHalf &&
                firstHalf ===
                secondHalf

            ) {

                fatherName =
                    firstHalf;

            }

            result.fatherName =
                fatherName;

        }

    }

    console.log(
        "PAN PDF PARSER:",
        result
    );

    return result;

}