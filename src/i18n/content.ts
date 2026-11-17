import { site } from "../data/site";
import { getUi, type Locale } from "./ui";

const MARK = "[ES PENDIENTE]";

function mark(value: string) {
  return `${MARK} ${value}`;
}

export function getSite(locale: Locale) {
  if (locale === "en") return site;

  return {
    ...site,
    headline: mark(site.headline),
    description: mark(site.description),
    about: site.about.map(mark),
    skills: mark(site.skills),
    photo: {
      ...site.photo,
      alt: mark(site.photo.alt),
    },
    cv: {
      label: mark(site.cv.label),
    },
    projects: site.projects.map((project) => ({
      ...project,
      title: mark(project.title),
      dates: mark(project.dates),
      description: "description" in project && project.description ? mark(project.description) : undefined,
      note: "note" in project && project.note ? mark(project.note) : undefined,
      href: "href" in project && project.href ? `/es${project.href}` : undefined,
    })),
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
