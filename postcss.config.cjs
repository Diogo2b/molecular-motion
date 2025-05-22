const purgecss = require("@fullhuman/postcss-purgecss").default;

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./src/**/*.astro",
        "./src/**/*.js",
        "./src/**/*.ts",
        "./src/**/*.html",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [
        // Astro CID dinamicamente gerados
        /^data-astro-cid-/,

        // Classes utilitárias de layout
        /^stack$/,
        /^backgrounds$/,
        /^wrapper$/,
        /^gap-/,
        /^icon$/,
        /^socials$/,
        /^theme-toggle$/,
        /^menu-/,
        /^nav-/,
        /^link$/,
        /^active$/,

        // Dark mode (tema)
        /^theme-dark$/,
        /^bg-noise$/,

        // Tailwind-like responsive prefixes (se usares)
        /^sm:/,
        /^md:/,
        /^lg:/,
        /^xl:/,
      ],
    }),
  ],
};
