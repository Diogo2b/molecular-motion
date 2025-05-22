import imagemin from "imagemin";
import webp from "imagemin-webp";
import { globby } from "globby";

const run = async () => {
  const files = await globby(["public/assets/backgrounds/*.{jpg,png}"]);

  await imagemin(files, {
    destination: "public/assets/backgrounds",
    plugins: [
      webp({
        quality: 75,
      }),
    ],
  });

  console.log("✅ Imagens convertidas para WebP");
};

run();
