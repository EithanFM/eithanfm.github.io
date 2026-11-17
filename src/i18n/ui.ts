export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export type UiCopy = {
  skipToContent: string;
  sectionsLabel: string;
  languageLabel: string;
  english: string;
  spanish: string;
  about: string;
  projects: string;
  skills: string;
  certificates: string;
  contact: string;
  downloadCv: string;
  backToTop: string;
  backToProjects: string;
  download: string;
  seeAll: string;
  showFewer: string;
  email: string;
  linkedin: string;
};

const MARK = "[ES PENDIENTE]";

const english: UiCopy = {
  skipToContent: "Skip to content",
  sectionsLabel: "Sections",
  languageLabel: "Language",
  english: "English",
  spanish: "Spanish",
  about: "About",
  projects: "Projects",
  skills: "Skills",
  certificates: "Certificates",
  contact: "Contact",
  downloadCv: "Download CV",
  backToTop: "Back to top",
  backToProjects: "Back to projects",
  download: "Download",
  seeAll: "See all",
  showFewer: "Show fewer",
  email: "Email",
  linkedin: "LinkedIn",
};

const keepInEnglish = new Set<keyof UiCopy>(["linkedin"]);

function spanishUi(): UiCopy {
  return Object.fromEntries(
    Object.entries(english).map(([key, value]) => [
      key,
      keepInEnglish.has(key as keyof UiCopy) ? value : `${MARK} ${value}`,
    ]),
  ) as UiCopy;
}

const copy: Record<Locale, UiCopy> = {
  en: english,
  es: spanishUi(),
};

export function getUi(locale: Locale) {
  return copy[locale];
}

export function localeHome(locale: Locale) {
  return locale === "es" ? "/es/" : "/";
}

export function localePath(locale: Locale, pathname: string) {
  const bare = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  const normalized = bare.startsWith("/") ? bare : `/${bare}`;
  if (locale === "en") return normalized;
  return normalized === "/" ? "/es/" : `/es${normalized}`;
}
