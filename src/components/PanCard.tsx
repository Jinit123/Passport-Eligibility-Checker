interface Props {

    documentType: string;

    name: string;

    dob: string;

    panNumber: string;

    fatherName: string;

}

export default function PanCard({

    documentType,
    name,
    dob,
    panNumber,
    fatherName

}: Props) {

    return (

        <div className="
            max-w-4xl
            mx-auto
            rounded-2xl
            overflow-hidden
            bg-white
            shadow-xl
            border
        ">

            <div className="
                bg-blue-900
                text-white
                p-5
            ">

                <h2 className="text-2xl font-bold">
                    INCOME TAX DEPARTMENT
                </h2>

                <p>
                    Permanent Account Number Card
                </p>

            </div>

            <div className="p-6 space-y-5">

                <div>

                    <p className="text-gray-500">
                        Name
                    </p>

                    <p className="font-bold text-2xl">
                        {name}
                    </p>

                </div>

                <div>

                    <p className="text-gray-500">
                        Father's Name
                    </p>

                    <p className="font-bold">
                        {fatherName}
                    </p>

                </div>

                <div>

                    <p className="text-gray-500">
                        DOB
                    </p>

                    <p className="font-bold">
                        {dob}
                    </p>

                </div>

                <div>

                    <p className="text-gray-500">
                        PAN Number
                    </p>

                    <p className="
                        text-3xl
                        font-mono
                        font-bold
                    ">
                        {panNumber}
                    </p>

                </div>

            </div>

        </div>

    );

}