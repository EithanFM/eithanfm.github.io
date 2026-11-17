const englishFiles = import.meta.glob<string>("../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const spanishFiles = import.meta.glob<string>("../content/es/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const TITLE_SUFFIX = " | Eithan Flores";

const documentTitles: Record<string, string> = {
  "amazon-amzn-financial-analysis": "Amazon (AMZN) Financial Analysis",
  "cme-derivatives-trading-challenge": "CME Group Derivatives Trading Challenge",
  "global-crises-ai-minerals": "The Refining Chokepoint",
  "hult-prize-ohuatl": "Hult Prize, Ohuatl",
  "korn-ferry-case-competition": "Korn Ferry Client Case Competition",
  "materials-startup-operations": "AeroShield Class Project, Hult",
  "microsoft-msft-valuation": "MSFT Equity Research and Valuation",
  "nonprofit-growth-strategy": "Strategy Consultant, The Possible Zone",
  "salesforce-hackathon-agentforce": "Salesforce Agentforce Hack-a-thon",
};

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
};

export type ProjectPage = {
  slug: string;
  href: string;
  title: string;
  dates: string;
  documentTitle: string;
  description: string;
  sections: ProjectSection[];
};

function firstSentence(paragraph: string) {
  const match = paragraph.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : paragraph;
}

function metaDescription(sentence: string) {
  if (sentence.length <= 160) return sentence;
  const slice = sentence.slice(0, 160);
  const boundary = slice.lastIndexOf(" ");
  return slice.slice(0, boundary).trimEnd();
}

function parseProject(slug: string, raw: string, locale: "en" | "es"): ProjectPage {
  const normalized = raw.replace(/\r\n/g, "\n").replace(/\n$/, "");
  const lines = normalized.split("\n");
  let title = "";
  let dates = "";
  let documentTitleOverride = "";
  const sections: ProjectSection[] = [];
  let current: ProjectSection | null = null;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (!current || paragraph.length === 0) {
      paragraph = [];
      return;
    }
    current.paragraphs.push(paragraph.join("\n"));
    paragraph = [];
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushParagraph();
      current = { heading: line.slice(3), paragraphs: [] };
      sections.push(current);
      continue;
    }
    if (!current) {
      if (line.startsWith("Title: ")) title = line.slice("Title: ".length);
      else if (line.startsWith("Dates: ")) dates = line.slice("Dates: ".length);
      else if (line.startsWith("Document title: ")) documentTitleOverride = line.slice("Document title: ".length);
      continue;
    }
    if (line === "") {
      flushParagraph();
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph();

  const context = sections.find(
    (section) => section.heading === "Context" || section.heading === "Contexto",
  );
  if (!context || context.paragraphs.length === 0) {
    throw new Error(`Missing Context for ${slug}`);
  }
  const sentence = firstSentence(context.paragraphs[0]);
  const description = metaDescription(sentence);
  const shortTitle = documentTitles[slug];
  if (!shortTitle) throw new Error(`Missing document title for ${slug}`);
  const englishTitle = `${shortTitle}${TITLE_SUFFIX}`;
  if (locale === "es" && !documentTitleOverride) {
    throw new Error(`Missing Spanish document title for ${slug}`);
  }
  const documentTitle = documentTitleOverride || englishTitle;
  const escapedTitleLength = documentTitle.replaceAll("&", "&amp;").length;

  const sourceSections = [...normalized.matchAll(/(?:^|\n)## ([^\n]+)\n([\s\S]*?)(?=\n## |$)/g)];
  if (sourceSections.length !== sections.length) {
    throw new Error(`Section count mismatch for ${slug}`);
  }
  sourceSections.forEach((match, index) => {
    const heading = match[1];
    const body = match[2].replace(/^\n/, "").replace(/\n$/, "");
    const rendered = sections[index].paragraphs.join("\n\n");
    if (heading !== sections[index].heading || body !== rendered) {
      throw new Error(`Body text mismatch for ${slug} / ${heading}`);
    }
  });

  if (locale === "en" && escapedTitleLength > 60) {
    throw new Error(`Title too long (${escapedTitleLength}) for ${slug}: ${documentTitle}`);
  }
  if (locale === "en" && (description.length > 160 || !sentence.startsWith(description))) {
    throw new Error(`Description invalid for ${slug}`);
  }
  const renderedText = [title, dates, documentTitle, description, ...sections.flatMap((section) => [section.heading, ...section.paragraphs])].join("\n");
  if (/\u2014|\u2013|&mdash;|&ndash;|&#8212;|&#8211;/.test(renderedText)) {
    throw new Error(`Dash found in ${slug}`);
  }

  return {
    slug,
    href: locale === "es" ? `/es/projects/${slug}/` : `/projects/${slug}/`,
    title,
    dates,
    documentTitle,
    description,
    sections,
  };
}

function loadProjects(files: Record<string, string>, locale: "en" | "es") {
  return Object.entries(files)
    .map(([path, raw]) => {
      const slug = path.split("/").pop()!.replace(/\.md$/, "");
      return parseProject(slug, raw, locale);
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getProjects(locale: "en" | "es") {
  return locale === "es" ? spanishProjects : englishProjects;
}

const englishProjects = loadProjects(englishFiles, "en");
const spanishProjects = loadProjects(spanishFiles, "es");

export const projects = englishProjects;
