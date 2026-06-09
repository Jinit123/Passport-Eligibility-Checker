export async function extractPhoto(
    file: File
): Promise<string> {

    return new Promise((resolve) => {

        const img = new Image();

        img.onload = () => {

            const canvas =
                document.createElement("canvas");

            const ctx =
                canvas.getContext("2d");

            if (!ctx) {
                resolve("");
                return;
            }

            /*
             * Aadhaar Front Side
             *
             * Photo generally:
             * Left side
             * Middle area
             */

            const cropX =
                img.width * 0.03;

            const cropY =
                img.height * 0.10;

            const cropWidth =
                img.width * 0.28;

            const cropHeight =
                img.height * 0.20;

            canvas.width =
                cropWidth;

            canvas.height =
                cropHeight;

            ctx.drawImage(
                img,
                cropX,
                cropY,
                cropWidth,
                cropHeight,
                0,
                0,
                cropWidth,
                cropHeight
            );

            const croppedPhoto =
                canvas.toDataURL("image/png");

            resolve(croppedPhoto);
        };

        img.src =
            URL.createObjectURL(file);
    });
}