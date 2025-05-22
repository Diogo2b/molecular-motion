// generate-critical.js
const penthouse = require("penthouse");
const fs = require("fs");

// 1️⃣ URL do seu preview
const URL = "http://localhost:4321";
// 2️⃣ Nome exato do CSS gerado pelo Astro
const INPUT_CSS = "dist/_astro/about.B-ATDIEY.css";
// 3️⃣ Onde salvar o Critical CSS
const OUTPUT_CSS = "src/styles/critical.css";

penthouse({
  url: URL,
  css: INPUT_CSS,
  width: 412,
  height: 915,
})
  .then((criticalCss) => {
    fs.writeFileSync(OUTPUT_CSS, criticalCss);
    console.log("✔ Critical CSS gerado em", OUTPUT_CSS);
  })
  .catch((err) => {
    console.error("❌ Erro ao gerar Critical CSS:", err);
  });
