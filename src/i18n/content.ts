import { site } from "../data/site";
import { esSite } from "./es-site";
import { getUi, type Locale } from "./ui";

function projectSlug(project: (typeof site.projects)[number]) {
  if ("href" in project && project.href) {
    const parts = project.href.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? "";
  }
  return "cohort-captain";
}

export function getSite(locale: Locale) {
  if (locale === "en") return site;

  return {
    ...site,
    name: esSite.name,
    title: esSite.title,
    headline: esSite.headline,
    description: esSite.description,
    about: [...esSite.about],
    skills: esSite.skills,
    photo: {
      ...site.photo,
      alt: esSite.photoAlt,
    },
    cv: {
      label: esSite.cvLabel,
    },
    projects: site.projects.map((project) => {
      const slug = projectSlug(project);
      const copy = esSite.projects[slug as keyof typeof esSite.projects];
      if (!copy) throw new Error(`Missing Spanish project copy: ${slug}`);
      const translated = { ...project, ...copy };
      if ("href" in project && project.href) {
        return { ...translated, href: `/es${project.href}` };
      }
      return translated;
    }),
  };
}

export function getNavigation(locale: Locale) {
  const ui = getUi(locale);
  const prefix = locale === "es" ? "/es" : "";
  return [
    { href: `${prefix}/#about`, label: ui.about },
    { href: `${prefix}/#projects`, label: ui.projects },
    { href: `${prefix}/#skills`, label: ui.skills },
    { href: `${prefix}/#certificates`, label: ui.certificates },
    { href: `${prefix}/#contact`, label: ui.contact },
  ];
}
