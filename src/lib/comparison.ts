export function normalizeText(
    text: string
) {

    return text
        .toUpperCase()
        .replace(/\s+/g, " ")
        .trim();

}

// export function compareDocuments(

//     aadhaar: any,

//     pan: any

// ) {

//     const result = {

//         nameMatch: false,

//         dobMatch: false,

//         score: 0

//     };

//     // Name Compare

//     result.nameMatch =

//         normalizeText(
//             aadhaar.name
//         ) ===

//         normalizeText(
//             pan.name
//         );

//     // DOB Compare

//     result.dobMatch =

//         aadhaar.dob ===
//         pan.dob;

//     // Score

//     let score = 0;

//     if (result.nameMatch)
//         score += 50;

//     if (result.dobMatch)
//         score += 50;

//     result.score =
//         score;

//     return result;

// }

export function compareDocuments(
    aadhaar: any,
    pan: any
) {

    const normalize = (
        value: string
    ) =>
        value
            ?.toLowerCase()
            .trim()
            .replace(/\s+/g, " ");

    const nameMatch =
        normalize(
            aadhaar.name
        ) ===
        normalize(
            pan.name
        );

    const dobMatch =
        aadhaar.dob ===
        pan.dob;

    let score = 35;

    if (
        nameMatch &&
        dobMatch
    ) {

        score = 94;

    }

    else if (
        nameMatch
    ) {

        score = 72;

    }

    else if (
        dobMatch
    ) {

        score = 65;

    }

    else {

        score = 35;

    }

    return {

        nameMatch,

        dobMatch,

        score

    };

}