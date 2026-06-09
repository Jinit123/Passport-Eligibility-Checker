export async function preprocessImage(
    file: File
): Promise<HTMLCanvasElement> {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
            const canvas =
                document.createElement("canvas");

            const ctx =
                canvas.getContext("2d");

            if (!ctx) return;

            canvas.width =
                img.width * 2;

            canvas.height =
                img.height * 2;

            ctx.filter =
                "grayscale(100%) contrast(200%) brightness(110%)";

            ctx.drawImage(
                img,
                0,
                0,
                canvas.width,
                canvas.height
            );

            resolve(canvas);
        };

        img.src =
            URL.createObjectURL(file);
    });
}