import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, e as renderSlot, g as renderComponent } from '../astro_BhnhR_Wp.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './__C1Ob1_7y.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404_nJR9KWHm.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro();
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "C:/Users/dioog/molecular-motion/src/components/PortfolioPreview.astro", void 0);

const $$Astro$1 = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "C:/Users/dioog/molecular-motion/src/components/Grid.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Full Stack</h2> <p data-astro-cid-ab4ihpzs>
Avec une expertise approfondie à la fois en frontend et en backend, je
      crée des solutions complètes et intégrées qui répondent à tous les besoins
      d'un projet web.
</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Innovateur Créatif</h2> <p data-astro-cid-ab4ihpzs>
Reconnu pour ma capacité à innover et à diriger des projets complexes, je
      recherche toujours les meilleures pratiques et technologies émergentes.
</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Orienté Stratégie</h2> <p data-astro-cid-ab4ihpzs>
Une planification minutieuse et une vision stratégique sont essentielles
      pour chaque projet que j'entreprends, garantissant que tous les objectifs
      soient atteints de manière efficace et efficiente.
</p> </div> </section> `;
}, "C:/Users/dioog/molecular-motion/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Ol\xE1, je m'appelle Diogo ", "tagline": "Passionn\xE9 par le d\xE9veloppement web, je cr\xE9e des solutions innovantes, \xE0 Bastia en Corse.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Développeur Web` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "codepen-logo", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Passionné de Technologie` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Innovateur` })} </div> ` })} <img alt="Diogo Ferreira avec des lunettes rondes et une chemise bleue à pois, souriant légèrement dans un bureau éclairé par la lumière naturelle" width="480" height="620" src="/assets/portrait.jpg" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Mes Réalisations</h3> <p data-astro-cid-j7pv25f6>
Découvrez ci-dessous quelques-uns de mes projets phares réalisés
            pour des clients au cours des dernières années.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Voir tout
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Compétences Techniques</h3> <p data-astro-cid-j7pv25f6>
Voici un aperçu des technologies et compétences que j'utilise pour
            créer des solutions innovantes et efficaces.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${[
    {
      tech: "CSS (Sass, TailwindCSS, etc)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      tech: "PHP (Symfony, Laravel, etc)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      tech: "JavaScript (React.js, Next.js, etc)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      tech: "SQL (MySQL, PostgreSQL, etc)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      tech: "Git (GitHub, GitLab, etc)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      tech: "Symfony",
      logo: "https://img.icons8.com/?size=100&id=78295&format=png&color=000000"
    },
    {
      tech: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      tech: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      tech: "Astro.js",
      logo: "https://img.icons8.com/?size=100&id=kXuRhjMIeKhk&format=png&color=000000"
    },
    {
      tech: "Sass",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
    },
    {
      tech: "Less",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg"
    },
    {
      tech: "Elementor",
      logo: "https://img.icons8.com/?size=100&id=BnOyV43gP7fZ&format=png&color=000000"
    }
  ].map((item) => renderTemplate`<li class="mention-card" data-astro-cid-j7pv25f6> <img${addAttribute(item.logo, "src")}${addAttribute(item.tech, "alt")} class="tech-logo" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${item.tech}</p> </li>`)}` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "C:/Users/dioog/molecular-motion/src/pages/index.astro", void 0);

const $$file = "C:/Users/dioog/molecular-motion/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
