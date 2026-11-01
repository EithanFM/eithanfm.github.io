const rawFiles = import.meta.glob<string>("../content/projects/*.md", {
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
  "materials-startup-operations": "Operations Consultant, Hult",
  "microsoft-msft-valuation": "Microsoft (MSFT) Equity Research & Valuation",
  "nonprofit-growth-strategy": "Strategy Consultant, Hult",
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

function parseProject(slug: string, raw: string): ProjectPage {
  const normalized = raw.replace(/\r\n/g, "\n").replace(/\n$/, "");
  const lines = normalized.split("\n");
  let title = "";
  let dates = "";
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
      continue;
    }
    if (line === "") {
      flushParagraph();
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph();

  const context = sections.find((section) => section.heading === "Context");
  if (!context || context.paragraphs.length === 0) {
    throw new Error(`Missing Context for ${slug}`);
  }
  const sentence = firstSentence(context.paragraphs[0]);
  const description = metaDescription(sentence);
  const shortTitle = documentTitles[slug];
  if (!shortTitle) throw new Error(`Missing document title for ${slug}`);
  const documentTitle = `${shortTitle}${TITLE_SUFFIX}`;

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

  if (documentTitle.length > 60) {
    throw new Error(`Title too long (${documentTitle.length}) for ${slug}: ${documentTitle}`);
  }
  if (description.length > 160 || !sentence.startsWith(description)) {
    throw new Error(`Description invalid for ${slug}`);
  }
  const renderedText = [title, dates, documentTitle, description, ...sections.flatMap((section) => [section.heading, ...section.paragraphs])].join("\n");
  if (/[—–]|&mdash;|&ndash;|&#8212;|&#8211;/.test(renderedText)) {
    throw new Error(`Dash found in ${slug}`);
  }

  return {
    slug,
    href: `/projects/${slug}/`,
    title,
    dates,
    documentTitle,
    description,
    sections,
  };
}

export const projects: ProjectPage[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    return parseProject(slug, raw);
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));
