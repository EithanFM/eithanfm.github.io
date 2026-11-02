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
      href: "/projects/microsoft-msft-valuation/",
      description:
        "Built a 3-stage DCF in Excel (WACC, sensitivity analysis, comps) and delivered a formal SELL recommendation with a $134.57 target price.",
      note: "Academic project, not investment advice.",
    },
    {
      title: "CME Group Derivatives Trading Challenge",
      dates: "Aug 2025",
      href: "/projects/cme-derivatives-trading-challenge/",
      description:
        "Designed and ran a trend-following futures strategy; the Russell 2000 (RTY) trade returned +3.49% ROI.",
    },
    {
      title: "Strategy Consultant, Hult live client project",
      dates: "Jun 2026",
      href: "/projects/nonprofit-growth-strategy/",
      description:
        "Developed growth strategy ideas for a nonprofit and presented them to its senior leaders.",
    },
    {
      title: "Operations Consultant, Hult live client project",
      dates: "Mar to Apr 2026",
      href: "/projects/materials-startup-operations/",
      description:
        "Helped build an operations KPI dashboard and analyze production bottlenecks for an advanced-materials startup.",
    },
    {
      title: "Korn Ferry, Client Case Competition",
      dates: "Apr 2026",
      href: "/projects/korn-ferry-case-competition/",
      description:
        "Built the 3-phase implementation roadmap for an AI client-intelligence platform and presented the business impact case.",
    },
    {
      title: "Salesforce Fall Hack-a-thon (Agentforce track)",
      dates: "Oct 2026",
      href: "/projects/salesforce-hackathon-agentforce/",
      description:
        "Built and tested a working AI agent with Agentforce Builder in one evening; 1st place in the Agentforce Build Challenge Kahoot.",
    },
    {
      title: "Hult Prize, Ohuatl",
      dates: "Sep 2025 to Feb 2026",
      href: "/projects/hult-prize-ohuatl/",
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
      href: "/projects/amazon-amzn-financial-analysis/",
    },
    {
      title: "The Refining Chokepoint, U.S. AI Supply Chain Vulnerability",
      dates: "Jun 2026 (report dated Jun 16, 2026)",
      href: "/projects/global-crises-ai-minerals/",
    },
  ],
  skills:
    "Excel financial modeling (DCF, WACC, sensitivity, comps) · Python (basic) · SQL (basic) · PowerPoint · Canva",
  certificateGroups: [
    {
      heading: "Forage",
      items: [
        {
          title: "What's it like to run your own business? Job Simulation",
          issuer: "Chartered Accountants ANZ (Forage)",
          date: "Nov 2025",
          file: "forage-caanz-own-business.pdf",
        },
        {
          title: "Financial Analyst Job Simulation",
          issuer: "Forage",
          date: "Sep 2025",
          file: "forage-ny-jobs-financial-analyst.pdf",
        },
        {
          title: "Global Markets Sales and Trading Analyst Job Simulation",
          issuer: "Bank of America (Forage)",
          date: "Apr 2025",
          file: "forage-bofa-sales-trading.pdf",
        },
      ],
    },
    {
      heading: "DataCamp",
      items: [
        {
          title: "Statistics Fundamentals in Python (Track)",
          issuer: "DataCamp",
          date: "Nov 2025",
          file: "datacamp-official-statistics-fundamentals-track.pdf",
        },
        {
          title: "Intermediate Regression with statsmodels in Python",
          issuer: "DataCamp",
          date: "Nov 2025",
          file: "datacamp-official-intermediate-regression.pdf",
        },
        {
          title: "Introduction to Regression with statsmodels in Python",
          issuer: "DataCamp",
          date: "Nov 2025",
          file: "datacamp-official-intro-regression.pdf",
        },
        {
          title: "Hypothesis Testing in Python",
          issuer: "DataCamp",
          date: "Oct 2025",
          file: "datacamp-official-hypothesis-testing.pdf",
        },
        {
          title: "Sampling in Python",
          issuer: "DataCamp",
          date: "Oct 2025",
          file: "datacamp-official-sampling.pdf",
        },
        {
          title: "Introduction to Statistics in Python",
          issuer: "DataCamp",
          date: "Oct 2025",
          file: "datacamp-official-intro-statistics.pdf",
        },
      ],
    },
    {
      heading: "Coursera",
      items: [
        {
          title: "Sustainable Digital Innovation",
          issuer: "28DIGITAL",
          date: "Jun 2026",
          file: "coursera-sustainable-digital-innovation.pdf",
        },
        {
          title: "Emotional Intelligence: Cultivating Immensely Human Interactions",
          issuer: "University of Michigan",
          date: "Apr 2026",
          file: "coursera-emotional-intelligence.pdf",
        },
        {
          title: "Foundations of Digital Marketing and E-commerce",
          issuer: "Google",
          date: "Oct 2025",
          file: "coursera-digital-marketing-ecommerce.pdf",
        },
        {
          title: "Making Sense of the News: News Literacy Lessons for Digital Citizens",
          issuer: "The University of Hong Kong and The State University of New York",
          date: "Sep 2025",
          file: "coursera-news-literacy.pdf",
        },
        {
          title: "Basic Statistics",
          issuer: "University of Amsterdam",
          date: "Sep 2025",
          file: "coursera-basic-statistics.pdf",
        },
        {
          title: "Business Writing",
          issuer: "University of Colorado Boulder",
          date: "Feb 2025",
          file: "coursera-business-writing.pdf",
        },
        {
          title: "Introduction to Academic Writing",
          issuer: "O.P. Jindal Global University",
          date: "Dec 2024",
          file: "coursera-academic-writing.pdf",
        },
      ],
    },
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/eithan-flores/",
    email: "eflores1@student.hult.edu",
  },
};

export const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certificates", label: "Certificates" },
  { href: "/#contact", label: "Contact" },
] as const;
