export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: "methodology" | "data" | "news";
}

export const POSTS: Post[] = [
  {
    slug: "introducing-ami",
    title: "Introducing the Academic Misconduct Index",
    date: "2026-04-26",
    category: "news",
    excerpt: "The AMI is an independent index measuring the prevalence of academic cheating and the quality of institutional responses across 28 countries — the first of its kind.",
    content: `
The Academic Misconduct Index (AMI) launches today as the first systematic attempt to measure academic cheating prevalence and institutional response quality across 28 countries simultaneously.

## Why this index exists

Academic misconduct — contract cheating, AI-generated submissions, plagiarism, exam impersonation, collusion, and data fabrication — costs universities, employers, and society in ways that are poorly quantified. Degree credentials lose value when they cannot be trusted. Research findings built on fabricated data mislead subsequent scientists. Professionals enter employment having gained qualifications through fraud.

Despite the scale of the problem, no systematic cross-country index existed. The Corruption Perceptions Index (CPI), published annually by Transparency International since 1995, demonstrated that a well-constructed index can shift policy, generate media attention, and create accountability pressure even without legal enforcement power. The AMI applies the same principle to academic integrity.

## What version 1.3 measures

The AMI scores 28 countries on two axes:

- **Prevalence Score (P):** estimated rate of academic misconduct, built from six dimensions
- **Response Quality Score (R):** how robustly institutions detect, investigate, and deter misconduct

The six dimensions are: contract cheating (D1), AI-generated submissions (D2), exam impersonation (D3), plagiarism (D4), collusion (D5), and data fabrication (D6).

## Key findings from version 1.3

China scores highest on the Prevalence axis (P=100), anchoring the maximum. The UK and Australia score highest on the Response axis (R=88), reflecting their legislative frameworks banning essay mills and mandatory disclosure requirements.

The United States presents an interesting profile: P=52.5, R=51.2, placing it in Q2 ("Aware and fighting it") — the only major Anglophone country in this quadrant, reflecting high prevalence combined with growing institutional response.

Sweden's appearance in Q3 ("Crisis zone") at P=53 may surprise — it is driven by Google Trends data showing unusually high search interest in AI submission tools relative to the country's student population, not by reported misconduct cases.

## What comes next

Version 2.0 will add expert perception surveys — modelled on the CPI's eventual addition of expert panels — once this index has an established audience from which credible respondents can be drawn. Coverage will expand beyond 28 countries. Data quality flags will improve as more live institutional disclosure data becomes available.

The methodology document, full dataset, and source code are all available for download and reuse under CC BY 4.0.
    `.trim(),
  },
  {
    slug: "v13-data-sources",
    title: "Version 1.3 data sources explained",
    date: "2026-04-26",
    category: "methodology",
    excerpt: "A plain-English explanation of where the AMI data comes from — Retraction Watch, Google Trends, FOI disclosures, and the ICAI McCabe surveys.",
    content: `
Version 1.3 of the AMI uses five categories of data source across six misconduct dimensions. Here is a plain-English explanation of each.

## Retraction Watch (D6 — data fabrication)

The [Retraction Watch database](https://gitlab.com/crossref/retraction-watch-data), now hosted publicly on GitLab via Crossref, contains 69,911 retraction records as of April 2026. We filtered these to 5,390 records where the retraction reason indicated misconduct (fabrication, falsification, fraud, or manipulation of images), then normalised by each country's publication volume using the OpenAlex API.

This gives us a retractions-per-10,000-publications rate per country — a measure that accounts for research output size rather than penalising high-output countries for having more absolute retractions.

## Google Trends (D1, D2)

We run two sets of Google Trends queries. The first uses generic contract cheating terms ("buy essay online", "essay writing service"). The second uses specific essay mill brand names ("ukessays", "edubirdie", "papersowl") which are more precise signals of demand.

Both are pulled at country resolution across a 4-year timeframe (2022–2026) and normalised so the top country scores 100.

## FOI-derived AI misconduct rates (D2)

The Guardian published a Freedom of Information investigation in June 2025 showing nearly 7,000 UK university students were formally caught using AI tools in 2023–24 — 5.1 per 1,000 students. Times Higher Education published similar FOI data for Russell Group universities.

We use the confirmed case rate, apply a detection ratio correction (Scarfe et al. 2024 found 94% of AI submissions went undetected at the University of Reading), and derive an estimated true rate.

## ICAI / McCabe survey data (D4, D5)

Donald McCabe's surveys, conducted between 2002–2015 across 70,000+ students, remain the gold standard for self-reported plagiarism and collusion rates. The International Center for Academic Integrity (ICAI) has published country-level breakdowns. We use these for 20 countries on plagiarism and 15 countries on collusion, replacing regional extrapolation with actual survey data where it exists.

## Literature-derived estimates

For dimensions and countries where no live data exists, we use country-adjusted estimates grounded in the peer-reviewed literature. Regional multipliers are applied to global base rates, with country-specific overrides where national studies exist (e.g. Bretag 2018 for Australia, Curtis et al. 2021 for the UK, Eret & Ok 2014 for Turkey).
    `.trim(),
  },
];
