interface Props {

    files: File[];

    passwords:
    Record<string, string>;

    setPasswords:
    React.Dispatch<
        React.SetStateAction<
            Record<string, string>
        >
    >;

    onClose: () => void;

    onContinue: () => void;

}

export default function PDFPasswordModal({

    files,

    passwords,

    setPasswords,

    onClose,

    onContinue

}: Props) {

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/40
                backdrop-blur-sm
                flex
                items-center
                justify-center
                z-50
                p-4
            "
        >

            <div
                className="
                    w-full
                    max-w-2xl
                    bg-white
                    rounded-3xl
                    shadow-2xl
                    p-8
                "
            >

                {/* Header */}

                <div className="text-center">

                    <div
                        className="
                            w-20
                            h-20
                            mx-auto
                            rounded-3xl
                            bg-amber-50
                            flex
                            items-center
                            justify-center
                            text-4xl
                        "
                    >
                        🔒
                    </div>

                    <h2
                        className="
                            mt-5
                            text-3xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Password Protected PDFs
                    </h2>

                    <p
                        className="
                            mt-3
                            text-slate-600
                        "
                    >
                        Some uploaded PDFs are
                        encrypted. Enter passwords
                        to continue verification.
                    </p>

                </div>

                {/* Files */}

                <div
                    className="
                        mt-8
                        space-y-4
                    "
                >

                    {files.map(
                        file => (

                            <div
                                key={
                                    file.name
                                }
                                className="
                                    border
                                    border-slate-200
                                    rounded-2xl
                                    p-5
                                "
                            >

                                <div
                                    className="
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    📄 {file.name}
                                </div>

                                <input
                                    type="password"
                                    placeholder="
                                    Enter PDF Password
                                    "
                                    value={
                                        passwords[
                                        file.name
                                        ] || ""
                                    }
                                    onChange={
                                        e =>

                                            setPasswords(
                                                prev => ({

                                                    ...prev,

                                                    [file.name]:
                                                        e.target.value

                                                })
                                            )
                                    }
                                    className="
                                        mt-3
                                        w-full
                                        border
                                        border-slate-300
                                        rounded-xl
                                        px-4
                                        py-3
                                        outline-none
                                        focus:ring-2
                                        focus:ring-blue-500
                                    "
                                />

                            </div>

                        )
                    )}

                </div>

                {/* Trust */}

                <div
                    className="
                        mt-6
                        bg-green-50
                        border
                        border-green-200
                        rounded-2xl
                        p-4
                        text-sm
                        text-green-700
                    "
                >
                    ✓ Passwords are used only
                    for local processing.

                    <br />

                    ✓ Files never leave your
                    device.
                </div>

                {/* Actions */}

                <div
                    className="
                        mt-8
                        flex
                        justify-end
                        gap-4
                    "
                >

                    <button
                        onClick={
                            onClose
                        }
                        className="
                            px-6
                            py-3
                            rounded-xl
                            border
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={
                            onContinue
                        }
                        className="
                            px-8
                            py-3
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            text-white
                            font-semibold
                        "
                    >
                        Continue Verification
                    </button>

                </div>

            </div>

        </div>

    );

}