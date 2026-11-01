import portrait from "../assets/eithan-flores.jpg";

const headline =
  "Finance & Management student at Hult International Business School (Boston campus, Cambridge, MA), building skills in valuation, markets and strategy consulting.";

export const site = {
  name: "Eithan Flores",
  url: "https://eithanfm.github.io",
  title: "Eithan Flores",
  description:
    "Finance & Management student at Hult International Business School in Cambridge, MA, building skills in valuation, markets and strategy consulting.",
  ogImage: "/og.png",
  headline,
  photo: {
    src: portrait,
    alt: "Portrait of Eithan Flores",
  },
  about: [
    "I'm a BBA student at Hult International Business School (Boston campus, Cambridge, MA), concentrating in Finance and Management (expected May 2028). Originally from Córdoba, Mexico, I work in English, Spanish and French.",
    "My work so far sits where finance meets strategy: I've built a DCF valuation of Microsoft, traded futures in the CME Group Derivatives Trading Challenge, and worked on live client projects for a nonprofit, an advanced-materials startup and a Korn Ferry case competition. I'm especially interested in using data and AI to make better business decisions, and I plan to continue into a Master in Business Analytics.",
  ],
  cv: {
    label: "Download CV",
  },
  projects: [
    {
      title: "Microsoft (MSFT) Equity Research & Valuation",
      dates: "Sep to Dec 2025",
      description:
        "Built a 3-stage DCF in Excel (WACC, sensitivity analysis, comps) and delivered a formal SELL recommendation with a $134.57 target price.",
      note: "Academic project, not investment advice.",
    },
    {
      title: "CME Group Derivatives Trading Challenge",
      dates: "Aug 2025",
      description:
        "Designed and ran a trend-following futures strategy; the Russell 2000 (RTY) trade returned +3.49% ROI.",
    },
    {
      title: "Strategy Consultant, Hult live client project",
      dates: "Jun 2026",
      description:
        "Developed growth strategy ideas for a nonprofit and presented them to its senior leaders.",
    },
    {
      title: "Operations Consultant, Hult live client project",
      dates: "Mar to Apr 2026",
      description:
        "Helped build an operations KPI dashboard and analyze production bottlenecks for an advanced-materials startup.",
    },
    {
      title: "Korn Ferry, Client Case Competition",
      dates: "Apr 2026",
      description:
        "Built the 3-phase implementation roadmap for an AI client-intelligence platform and presented the business impact case.",
    },
    {
      title: "Salesforce Fall Hack-a-thon (Agentforce track)",
      dates: "Oct 2026",
      description:
        "Built and tested a working AI agent with Agentforce Builder in one evening; 1st place in the Agentforce Build Challenge Kahoot.",
    },
    {
      title: "Hult Prize, Ohuatl",
      dates: "Sep 2025 to Feb 2026",
      description:
        "Co-developed a circular-fashion solution to textile waste (UN SDGs 12 & 13), validated with market research in Mexico.",
    },
    {
      title: "Cohort Captain, Hult Student Association",
      dates: "Sep 2024 to May 2025",
      description: "Main link between 40+ first-year students and faculty; ran 8 team-building sessions.",
    },
    {
      title: "Amazon (AMZN) Financial Analysis 2020 to 2025",
      dates: "Feb to Apr 2025",
      description: "Analyzed 6 years of SEC filings and presented growth trends.",
    },
  ],
  skills:
    "Excel financial modeling (DCF, WACC, sensitivity, comps) · Python (basic) · SQL (basic) · PowerPoint · Canva",
  certificationGroups: [
    {
      heading: "Forage job simulations",
      items: [
        "Bank of America, Global Markets Sales & Trading Job Simulation · Apr 2025",
        "New York Jobs CEO Council, Financial Analyst Job Simulation · Sep 2025",
        "Chartered Accountants ANZ, \"What's it like to run your own business?\" · Nov 2025",
        "Forage, Excel Skills for Business · Apr 2025",
      ],
    },
    {
      heading: "DataCamp (Python, statistics)",
      items: [
        "Statistics Fundamentals in Python (skill track) · Nov 2025",
        "Introduction to Statistics in Python · Oct 2025",
        "Sampling in Python · Oct 2025",
        "Hypothesis Testing in Python · Oct 2025",
        "Introduction to Regression with statsmodels in Python · Nov 2025",
        "Intermediate Regression with statsmodels in Python · Nov 2025",
      ],
    },
    {
      heading: "Coursera",
      items: [
        "Basic Statistics, University of Amsterdam · Sep 2025",
        "Business Writing, University of Colorado Boulder · Feb 2025",
        "Introduction to Academic Writing",
      ],
    },
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/eithan-flores/",
    email: "eflores1@student.hult.edu",
  },
};

export const navigation = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;
