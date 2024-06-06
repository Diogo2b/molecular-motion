import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_BhnhR_Wp.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$ContactCTA } from './__C1Ob1_7y.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404_nJR9KWHm.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index_Bi9GWXSj.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mon travail | Diogo Ferreira", "description": "Learn about Diogo Ferreira's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes Projets", "tagline": "Consultez mes projets ci-dessous pour avoir une id\xE9e de mon exp\xE9rience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "C:/Users/dioog/molecular-motion/src/pages/work.astro", void 0);

const $$file = "C:/Users/dioog/molecular-motion/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
