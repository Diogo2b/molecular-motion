import sharp from "sharp";
import fs from "fs";
import path from "path";
import { globby } from "globby";

const inputDirs = ["./public/assets/", "./public/assets/backgrounds/"];

const outputBase = "./public/assets/optimized";

const widthMap = {
  "portrait.webp": 300,
  default: 500,
};

const run = async () => {
  for (const dir of inputDirs) {
    const files = await globby("*.webp", { cwd: dir });

    for (const file of files) {
      const inputPath = path.join(dir, file);
      const relativeSubdir = path.relative("./public/assets", dir);
      const outputDir = path.join(outputBase, relativeSubdir);
      const outputPath = path.join(outputDir, file);

      const width = widthMap[file] || widthMap["default"];

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      try {
        const buffer = await sharp(inputPath)
          .resize({ width })
          .webp({ quality: 60 })
          .toBuffer();

        await fs.promises.writeFile(outputPath, buffer);
        console.log(`✅ ${file} otimizado → ${outputPath}`);
      } catch (err) {
        console.error(`❌ Erro ao otimizar ${file}:`, err.message);
      }
    }
  }

  console.log(
    "\n📂 As imagens otimizadas foram guardadas em: public/assets/optimized"
  );
  console.log(
    "✂️  Vai ao Explorador do Windows e corta/cola para os respetivos diretórios de origem com o detalhe de pasta por exemplo 'backgrounds/optimized'"
  );
  console.log("💡 Depois faz o build e push normalmente.");
};

run();
