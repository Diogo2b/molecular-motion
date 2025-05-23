import sharp from "sharp";
import fs from "fs";
import path from "path";
import { globby } from "globby";

const inputDirs = ["./public/assets/", "./public/assets/backgrounds/"];
const outputBase = "./public/assets";

const run = async () => {
  for (const dir of inputDirs) {
    const files = await globby("*.webp", { cwd: dir });

    for (const file of files) {
      const inputPath = path.join(dir, file);
      const filename = path.basename(file, ".webp");
      const outputDir = path.join(outputBase);

      // Escolher a largura com base no nome do ficheiro
      let width = 500;
      if (filename.includes("portrait")) width = 300;
      else if (filename.includes("at-work")) width = 800;

      const outputName = `${filename}-${width}w.webp`;
      const outputPath = path.join(outputDir, outputName);

      try {
        const buffer = await sharp(inputPath)
          .resize({ width })
          .webp({ quality: 60 })
          .toBuffer();

        await fs.promises.writeFile(outputPath, buffer);
        console.log(`✅ ${file} → ${outputName}`);
      } catch (err) {
        console.error(`❌ Erro ao otimizar ${file}:`, err.message);
      }
    }
  }

  console.log("\n🎉 Todas as imagens foram redimensionadas automaticamente.");
};

run();
