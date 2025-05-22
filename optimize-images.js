import sharp from "sharp";
import fs from "fs";
import path from "path";

const images = [
  { file: "portrait.webp", width: 300 },
  { file: "upalmentu.webp", width: 500 },
  { file: "va2.webp", width: 500 },
  { file: "esthetica2b.webp", width: 500 },
  { file: "ampc.webp", width: 500 },
];

const inputDir = "./public/assets/";
const outputDir = "./public/assets/";

images.forEach(async ({ file, width }) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(
    outputDir,
    file.replace(".webp", "-optimized.webp")
  );

  if (fs.existsSync(inputPath)) {
    await sharp(inputPath)
      .resize({ width })
      .webp({ quality: 60 })
      .toFile(outputPath + ".tmp");

    console.log(`✅ ${file} optimisé à ${width}px de large`);
  } else {
    console.warn(`❌ Fichier non trouvé : ${file}`);
  }
});
