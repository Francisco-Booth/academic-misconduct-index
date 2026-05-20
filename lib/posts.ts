export type PostCategory = "methodology" | "data" | "news" | "country_profile" | "guide" | "seo";

export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  content: string;
  category: PostCategory;
  tags: string[];
  faqSchema?: { question: string; answer: string }[];
  tldr: string;
}

export const POSTS: Post[] = [
  {
    slug: "which-country-worst-academic-cheating",
    title: "Which Country Has the Worst Academic Cheating Problem?",
    seoTitle: "Which Country Has the Worst Academic Cheating Problem? | AMI 2026",
    metaDescription: "China scores 99.98 on the Academic Misconduct Index Prevalence axis — the highest of 39 countries. See the full ranking and what drives each country's score.",
    date: "2026-05-20",
    category: "seo",
    tags: ["academic cheating", "contract cheating", "plagiarism", "rankings", "China", "Colombia", "Argentina"],
    tldr: "China scores highest on the AMI Prevalence axis at 99.98, followed by Colombia (77.4), Argentina (74.6), and Greece (74.0). These scores reflect estimated misconduct rates across six dimensions including contract cheating, AI submissions, and data fabrication.",
    excerpt: "China scores 99.98 on the Academic Misconduct Index Prevalence axis — the highest of 39 countries scored in 2026. Here is the full ranking and what drives each country's position.",
    faqSchema: [
      {
        question: "Which country has the worst academic cheating problem?",
        answer: "According to the Academic Misconduct Index (AMI) 2026, China scores highest on the Prevalence axis at 99.98 out of 100, followed by Colombia (77.4), Argentina (74.6), and Greece (74.0). These scores reflect estimated rates of contract cheating, AI submissions, plagiarism, and data fabrication across 39 countries."
      },
      {
        question: "Which country has the best academic integrity record?",
        answer: "Canada scores lowest on the AMI Prevalence axis at 4.90, indicating the lowest estimated misconduct rate among the 39 countries scored. Australia (7.43) and the United Kingdom (11.41) also score very low, and both have the highest Response Quality scores — meaning they combine low prevalence with strong institutional responses."
      },
      {
        question: "How is academic cheating measured across countries?",
        answer: "The Academic Misconduct Index uses six dimensions: contract cheating (D1), AI-generated submissions (D2), exam impersonation (D3), plagiarism (D4), collusion (D5), and data fabrication (D6). Each dimension draws on live data sources including Google Trends, the Retraction Watch database, Freedom of Information disclosures, and published survey data from the International Center for Academic Integrity."
      },
      {
        question: "Is the academic cheating problem getting worse?",
        answer: "Data fabrication in research has grown measurably — the Retraction Watch database now contains 69,911 retraction records, with 5,390 linked to misconduct. AI-generated submissions (D2) represent an entirely new misconduct category that did not exist before 2022. Most other forms of misconduct appear stable or slightly declining in countries with strong enforcement."
      }
    ],
    content: `
## TL;DR

China scores highest on the AMI Prevalence axis at 99.98, followed by Colombia (77.4), Argentina (74.6), and Greece (74.0). Canada (4.90), Australia (7.43), and the United Kingdom (11.41) score lowest.

## The full ranking

The Academic Misconduct Index (AMI) scores 39 countries across six dimensions of academic misconduct. The Prevalence Score (P-Score) runs from 5 to 95 within the current country set — a score of 5 means the lowest estimated prevalence among the countries scored, not zero misconduct.

Here are the top ten highest-scoring countries on the Prevalence axis:

1. **China** — P-Score: 99.98
2. **Colombia** — P-Score: 77.4
3. **Argentina** — P-Score: 74.6
4. **Greece** — P-Score: 74.0
5. **Egypt** — P-Score: 64.6
6. **Pakistan** — P-Score: 59.1
7. **Norway** — P-Score: 57.2
8. **Iran** — P-Score: 57.0
9. **Thailand** — P-Score: 55.7
10. **Saudi Arabia** — P-Score: 54.0

## Why China scores highest

China's score is driven by three factors. First, it has the highest data fabrication rate in the dataset — the Retraction Watch database shows China accounts for a disproportionate share of misconduct-linked retractions relative to its publication volume. Second, Google Trends signals for contract cheating keywords are high. Third, the domestic paper mill industry is well-documented in the peer-reviewed literature, with Fang et al. (2012) identifying systematic fabrication in Chinese research.

## Why Colombia and Argentina score so high

Both countries show very high Google Trends signals for essay mill and AI submission keywords. The Retraction Watch data for Latin America also indicates elevated misconduct rates relative to publication volume. Neither country has specific legislation targeting contract cheating or mandatory institutional disclosure requirements, which keeps the Response Quality score low — placing both firmly in Q3 (Crisis zone).

## The countries with the lowest scores

Canada, Australia, and the United Kingdom have the lowest Prevalence scores and the highest Response Quality scores simultaneously. All three have legislated bans on essay mill services, near-universal deployment of plagiarism detection tools, and mandatory disclosure requirements. This combination of low apparent prevalence and strong response places them in Q1 (Best in class).

## The Norway anomaly

Norway appears at number seven, which surprises many observers. Norway has strong academic integrity frameworks including the NESH guidelines and robust research ethics infrastructure. The elevated score is partially driven by high Google Trends volume for AI submission-related keywords among Norwegian researchers and educators discussing these topics — reflecting academic debate rather than student behaviour. The AMI methodology notes document this limitation explicitly.

## What the scores mean for students and employers

A high Prevalence score indicates a country where academic credentials carry higher statistical risk of having been obtained through misconduct. Employers verifying qualifications from high-scoring countries should apply additional scrutiny. Students choosing between institutions in different countries may use the index as one factor in assessing the value of qualifications from those systems.

## Methodology note

All scores represent estimates based on available data as of May 2026. The P-Score is rescaled within the current 39-country set, meaning scores will shift as coverage expands. See the [full methodology](/methodology) for details on data sources, dimension weights, and the enforcement-detection correction.
    `.trim(),
  },

  {
    slug: "australia-academic-integrity-best-in-class",
    title: "Why Australia Scores Best on Academic Integrity — And What Other Countries Can Learn",
    seoTitle: "Why Australia Scores Best on Academic Integrity 2026 | AMI Data",
    metaDescription: "Australia scores P=7.43 and R=88.8 on the Academic Misconduct Index — the strongest response quality of any country. Here is what Australia did and what others can learn.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Australia", "academic integrity", "essay mill ban", "TEQSA", "best practice"],
    tldr: "Australia scores P=7.43 and R=88.8 on the AMI — the joint highest Response Quality score of any country. The key factors are the 2020 essay mill ban, TEQSA enforcement, mandatory disclosure, and near-universal plagiarism detection.",
    excerpt: "Australia achieves the joint highest Response Quality score on the Academic Misconduct Index at R=88.8, alongside a very low Prevalence score of P=7.43. Here is what Australia did differently and what other countries can replicate.",
    faqSchema: [
      {
        question: "Why does Australia score so well on academic integrity?",
        answer: "Australia banned essay mill services under the Education Services for Overseas Students (ESOS) framework and the Tertiary Education Quality and Standards Agency (TEQSA) Act in 2020 — one of only three countries globally to legislate against contract cheating. TEQSA also maintains a public list of known contract cheating services and requires institutions to report misconduct statistics."
      },
      {
        question: "Is academic cheating illegal in Australia?",
        answer: "Yes. Australia's Student Services and Amenities Fee Amendment (Prohibited Cheating Services) Act 2020 makes it illegal to provide, advertise, or use contract cheating services. Penalties include fines of up to AUD 100,000 for companies and AUD 20,000 for individuals."
      },
      {
        question: "What is TEQSA and what does it do for academic integrity?",
        answer: "TEQSA is the Tertiary Education Quality and Standards Agency, Australia's higher education regulator. It registers and accredits providers, publishes a list of known contract cheating websites, and requires institutions to report academic misconduct data. TEQSA's public contract cheating site list contains over 2,300 known services."
      }
    ],
    content: `
## TL;DR

Australia scores P=7.43 (second lowest in the 39-country set) and R=88.8 (joint highest). The key factors: legislated essay mill ban (2020), TEQSA enforcement, mandatory disclosure requirements, and near-universal plagiarism detection tool deployment.

## Australia's AMI scores at a glance

- **Prevalence Score:** 7.43 (2nd lowest of 39 countries)
- **Response Quality:** 88.8 (joint highest with Canada trailing at 60.0)
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (5/6 dimensions from live data sources)

## What Australia did

### Legislation

In 2020, Australia became one of the first countries in the world to specifically criminalise contract cheating services. The amendment to the ESOS Act made it illegal to provide, advertise, or use services designed to produce academic work for submission. Maximum penalties are AUD 100,000 for companies.

This matters because legislation creates deterrence on both the supply and demand side. Essay mill companies that previously operated openly in Australia either shut down, relocated, or stopped serving Australian students.

### TEQSA enforcement

The Tertiary Education Quality and Standards Agency maintains a public list of over 2,300 known contract cheating websites and shares this list with institutions. TEQSA also investigates providers that fail to maintain academic integrity standards, creating institutional accountability beyond individual student misconduct.

### Mandatory disclosure

Australian institutions are required to report academic misconduct data, creating transparency and allowing benchmarking. This disclosure requirement is one of the highest-weighted components of Australia's R-Score.

### Detection tool adoption

Turnitin and similar plagiarism detection tools are deployed at essentially every Australian institution. AI detection capabilities have been added since 2023. The combination of detection technology and legislative deterrence creates a hostile environment for misconduct.

## What other countries can replicate

### The legislation model

Ireland (R=78.8) implemented similar legislation in 2019 — the Qualifications and Quality Assurance (Education and Training) (Amendment) Act — and is the only other country to have done so before Australia. The United Kingdom followed in 2022. All three Q1 countries with R-Scores above 70 have some form of essay mill legislation.

The lesson is clear: legislation alone is not sufficient, but its absence correlates strongly with higher Prevalence scores.

### The public site list model

TEQSA's public list of contract cheating websites is unusually transparent. Most countries' regulatory bodies maintain no equivalent. Making this list public serves two purposes: it enables institution-level blocking, and it signals to students that authorities are actively monitoring.

### The disclosure requirement

Mandatory institutional reporting of misconduct statistics forces universities to count, categorise, and report what they find — creating internal pressure to both detect more and reduce prevalence. Countries like France, Italy, and Spain, which have no such requirements, score significantly lower on the Disclosure component of the R-Score.

## The limits of Australia's approach

Australia's response quality is strong but its Prevalence score is not zero. Essay mills operating in other jurisdictions are difficult to shut down. Students can access services from providers based in countries where contract cheating is not illegal. The data shows that legislation reduces but does not eliminate the problem.

The AMI also notes that countries with strong detection systems will report more misconduct because they find more — this is addressed by the enforcement-detection correction in the methodology.

## Implications for the AMI

Australia's Q1 position reflects a genuine policy achievement. The combination of specific legislation, regulatory enforcement, public transparency, and universal detection tools represents a replicable model. Countries currently in Q3 or Q4 with resources to reform should look at the Australian framework as the most evidence-based template available.

See the [full methodology](/methodology) and [download the dataset](/ami_country_scores_20260514.csv) to explore Australia's dimension-level scores.
    `.trim(),
  },

  {
    slug: "what-is-contract-cheating",
    title: "What Is Contract Cheating? Definition, Examples, and Global Data",
    seoTitle: "What Is Contract Cheating? Definition, Examples and Data 2026",
    metaDescription: "Contract cheating is when a student pays someone else to complete their academic work. Here is the definition, how it works, which countries have banned it, and what the data shows.",
    date: "2026-05-20",
    category: "guide",
    tags: ["contract cheating", "essay mills", "academic integrity", "definition", "guide"],
    tldr: "Contract cheating is when a student submits work completed by someone else for payment. It is estimated to affect 5–16% of students globally. Only Australia, UK, and Ireland have specific laws against it.",
    excerpt: "Contract cheating — paying someone to complete academic work and submitting it as your own — is estimated to affect millions of students worldwide. Here is what it is, how it works, and what the data shows about its global prevalence.",
    faqSchema: [
      {
        question: "What is contract cheating?",
        answer: "Contract cheating is when a student pays a third party — typically an essay mill company or freelance writer — to complete academic work (essays, dissertations, assignments, exams) and then submits that work as their own. It is considered a serious form of academic misconduct because the student receives a qualification they did not earn."
      },
      {
        question: "Is contract cheating illegal?",
        answer: "In most countries, contract cheating is not specifically illegal, though it violates university regulations. Australia (2020), Ireland (2019), and the United Kingdom (2022) are the only countries to have passed specific laws criminalising essay mill services. In other countries, providing or using such services may constitute fraud under general law but is rarely prosecuted."
      },
      {
        question: "How common is contract cheating?",
        answer: "Studies estimate between 5% and 16% of students have used contract cheating services at least once. Newton's 2018 systematic review of 65 studies (n=54,514) found an average self-reported rate of 7.3%. The Academic Misconduct Index estimates country-level rates ranging from under 30% to over 60% of students based on multiple data sources."
      },
      {
        question: "How do universities detect contract cheating?",
        answer: "Detection is difficult because essay mill work is original — it does not appear in plagiarism databases. Detection methods include stylometric analysis (comparing writing style with known samples), viva voce examinations, inconsistencies between assignment quality and other work, and intelligence from essay mill companies under legal pressure."
      },
      {
        question: "What are essay mills?",
        answer: "Essay mills are companies that produce academic work to order. They typically offer essays, dissertations, lab reports, and exam answers across all subjects and academic levels. Major essay mill brands include EduBirdie, EssayShark, PapersOwl, and GradeMiners, though hundreds of services exist globally."
      }
    ],
    content: `
## TL;DR

Contract cheating is submitting work completed by a paid third party as your own. It affects an estimated 7–16% of students globally. Only Australia, Ireland, and the UK have specific laws against it. The Academic Misconduct Index estimates it is most prevalent in China, Colombia, Argentina, and Greece.

## Definition

Contract cheating is a form of academic misconduct in which a student arranges for a third party — usually a commercial essay mill service or freelance writer — to produce academic work, which the student then submits for assessment as if it were their own.

The term was introduced by Clarke and Lancaster in 2006 to distinguish this from traditional plagiarism (copying existing work) because contract cheating produces original content that cannot be detected by conventional plagiarism detection software.

## How it works

The typical process:

1. A student visits an essay mill website and uploads their assignment brief
2. They receive a price quote based on subject, length, and deadline
3. Payment is made (typically via credit card or cryptocurrency)
4. A writer — often a graduate student or academic in a lower-income country — completes the work
5. The student submits the work with their name on it

Prices typically range from £50 to £500 for undergraduate work, rising to several thousand pounds for doctoral dissertations.

## How widespread is it?

Newton's 2018 systematic review of 65 studies covering 54,514 students found an average self-reported rate of 7.3% for contract cheating specifically. More recent studies suggest rates may have increased since the availability of AI writing tools — though the boundary between AI assistance and contract cheating has become blurred.

The Academic Misconduct Index D1 scores for 2026 suggest country-level estimates ranging from approximately 27% (Norway) to 60%+ (China, Pakistan, Russia) of students having used contract cheating services at some point in their academic career.

## Which countries have banned it?

Only three countries have passed specific legislation:

- **Ireland** — Qualifications and Quality Assurance Act amendment (2019)
- **Australia** — Education Services for Overseas Students amendment (2020)
- **United Kingdom** — Higher Education (Freedom of Speech) Act provisions (2022)

In these countries, operating an essay mill service is a criminal offence. Australia's penalties reach AUD 100,000 for companies. The legislation targets the supply side — making it illegal to provide the service — rather than targeting students directly.

## The major essay mill brands

Research by Thomas Lancaster (Coventry University) and Robert Clarke has identified hundreds of active essay mill services. The highest-traffic brands globally include EduBirdie, EssayShark, PapersOwl, GradeMiners, UK Essays, and MyAssignmentHelp.

These companies operate in legal grey zones in most countries, often registering in jurisdictions with permissive commercial law while serving students globally.

## Why detection is hard

Traditional plagiarism detection (Turnitin, iThenticate) works by comparing submitted text against a database of existing content. Contract cheating produces original text — it has never been submitted before — so it passes these checks.

Detection methods that do work include:

- **Stylometric analysis** — comparing the writing style, vocabulary, and sentence patterns of the suspicious work against other authenticated samples from the same student
- **Oral examination** — asking students to defend their work verbally
- **Metadata analysis** — examining document properties for evidence of third-party authorship
- **Intelligence** — essay mill companies operating under legal pressure have provided student lists to regulators

## What the AMI measures

The AMI's D1 dimension (Contract Cheating) draws on three data sources: Google Trends search volume for contract cheating and essay mill keywords, essay mill brand name search data, and an essay mill market presence score based on 22 known high-traffic services and their documented primary target markets.

These are combined with country-adjusted literature estimates to produce a D1 score for all 39 countries. D1 carries a weight of 19.5% in the overall P-Score calculation — the highest weight of any dimension, reflecting its estimated prevalence and the severity of harm to credential integrity.

## Further reading

- [AMI Methodology](/methodology)
- [Which country has the worst academic cheating problem?](/blog/which-country-worst-academic-cheating)
- [What is an essay mill?](/blog/what-is-an-essay-mill)
    `.trim(),
  },

  {
    slug: "china-academic-misconduct-profile",
    title: "China: Academic Misconduct Index Country Profile",
    seoTitle: "China Academic Misconduct Profile 2026 | AMI Score 99.98",
    metaDescription: "China scores 99.98 on the AMI Prevalence axis — the highest of 39 countries. Driven by paper mills, high retraction rates, and documented dissertation fraud. Full profile and data.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["China", "academic misconduct", "paper mills", "plagiarism", "data fabrication", "country profile"],
    tldr: "China scores P=99.98, R=23.8, Q3 (Crisis zone). The highest Prevalence score of any country. Driven by a documented paper mill industry, the highest data fabrication rate in the dataset, and limited institutional transparency.",
    excerpt: "China scores P=99.98 on the Academic Misconduct Index Prevalence axis — the highest of 39 countries. This profile explains what drives the score, what the data shows, and what China's institutional response looks like.",
    faqSchema: [
      {
        question: "What is China's academic misconduct score?",
        answer: "China scores 99.98 on the Academic Misconduct Index Prevalence axis (P-Score) as of May 2026 — the highest of 39 countries scored. Its Response Quality score is 23.8, placing it in Q3 (Crisis zone): high estimated prevalence combined with a weak institutional response."
      },
      {
        question: "How bad is academic cheating in China?",
        answer: "China has the highest estimated academic misconduct prevalence in the AMI dataset. Key indicators include: a very high data fabrication rate in the Retraction Watch database, a documented domestic paper mill industry, high Google Trends signals for contract cheating and AI submission keywords, and limited mandatory institutional disclosure."
      },
      {
        question: "Does China have laws against academic misconduct?",
        answer: "China has some legislative provisions — the Higher Education Law and regulations on academic misconduct — but no specific law against essay mill services equivalent to those in Australia, Ireland, or the UK. The Antiplagiat detection system exists but enforcement and institutional tolerance remain low according to the research literature."
      }
    ],
    content: `
## TL;DR

China: P=99.98, R=23.8, Q3. Highest Prevalence score of 39 countries. Driven by the world's largest documented paper mill industry, the highest data fabrication signal in the Retraction Watch database, and limited institutional transparency.

## AMI scores at a glance

- **Prevalence Score (P):** 99.98 — highest of 39 countries
- **Response Quality (R):** 23.8
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score | Source |
|---|---|---|
| D1 Contract cheating | 67 | Google Trends + literature |
| D2 AI submissions | 68 | FOI/survey data |
| D3 Exam impersonation | 20 | Literature |
| D4 Plagiarism | 73 | ICAI survey data |
| D5 Collusion | 62 | ICAI survey data |
| D6 Data fabrication | 100 | Retraction Watch live |

## What drives China's score

### Paper mill industry

China has the most documented domestic paper mill industry of any country in the AMI dataset. Fang, Steen, and Casadevall (2012) found that misconduct accounts for a majority of retracted scientific publications, with China disproportionately represented. The industry operates at scale — producing journal articles, dissertations, and coursework assignments for payment.

### Data fabrication (D6 = 100)

China's D6 score of 100 reflects the highest data fabrication signal in the Retraction Watch database relative to publication volume. China is the world's largest producer of academic papers and also has a disproportionately high rate of misconduct-linked retractions. Liang et al. (2024) found that 6.3–17.5% of Chinese academic papers contain detectable AI-generated content.

### Plagiarism (D4 = 73)

Multiple studies document high self-reported plagiarism rates among Chinese students. Liu (2005, n=8,500) and Gu & Brooks (2008) both found rates significantly above the international average. Cultural factors including academic pressure and differing attitudes toward intellectual property have been identified as contributing factors in the research literature.

### Response quality

China's R-Score of 23.8 reflects limited institutional response. The country has deployed the Antiplagiat detection system at research universities, which accounts for the detection tools sub-score. However, legislation is weak (no essay mill ban), institutional disclosure is minimal, and penalties are inconsistently applied. The research literature consistently documents high institutional tolerance for misconduct.

## What China's government has done

The Ministry of Education issued guidance on academic misconduct in 2018 and has required plagiarism checking for doctoral dissertations. However, enforcement relies on institutional self-regulation, and the financial incentives driving the paper mill industry remain largely unchallenged.

## What this means for users of Chinese credentials

Employers and graduate admissions offices receiving credentials from Chinese institutions face a higher statistical risk of misconduct than from any other country in the dataset. This does not mean individual credentials are fraudulent — the vast majority of Chinese graduates are legitimate. It means the base rate of misconduct is the highest in the dataset and appropriate verification is warranted.

## Sources

- Fang, Steen & Casadevall (2012), PNAS: Misconduct accounts for majority of retracted scientific publications
- Liang et al. (2024), Nature: AI content in Chinese academic papers
- Liu (2005): Plagiarism self-report study, n=8,500 Chinese students
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "uk-academic-integrity-profile",
    title: "United Kingdom: Academic Misconduct Index Country Profile",
    seoTitle: "UK Academic Integrity Profile 2026 | AMI Score R=87.5",
    metaDescription: "The UK scores R=87.5 on the AMI Response Quality axis — joint second highest of 39 countries. Essay mill ban, Guardian FOI data, and near-universal detection. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["United Kingdom", "UK", "academic integrity", "essay mill ban", "Guardian FOI", "country profile"],
    tldr: "UK scores P=11.41, R=87.5, Q1 (Best in class). Joint second highest Response Quality score. Key factors: 2022 essay mill ban, Guardian FOI data showing 5.1/1000 confirmed AI cases, near-universal Turnitin adoption.",
    excerpt: "The United Kingdom scores P=11.41 and R=87.5 on the Academic Misconduct Index — one of the strongest response quality scores of any country. Here is what drives the UK's position and what the data shows.",
    faqSchema: [
      {
        question: "What is the UK's academic misconduct score?",
        answer: "The United Kingdom scores P=11.41 (Prevalence) and R=87.5 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q1 (Best in class) — among the countries with the lowest estimated prevalence and strongest institutional responses."
      },
      {
        question: "Is buying an essay illegal in the UK?",
        answer: "Yes. The UK made it illegal to provide essay mill services under provisions of the Higher Education (Freedom of Speech) Act 2022. It is now a criminal offence to advertise or provide services designed to produce academic work for submission by students."
      },
      {
        question: "How many UK students were caught using AI for assignments?",
        answer: "A Freedom of Information investigation by The Guardian (June 2025) found nearly 7,000 UK university students were formally caught using AI tools without disclosure in 2023–24, equivalent to 5.1 per 1,000 students. Scarfe et al. (2024) at the University of Reading estimated that approximately 94% of AI submissions go undetected, suggesting the true rate is substantially higher."
      }
    ],
    content: `
## TL;DR

UK: P=11.41, R=87.5, Q1. One of the strongest Response Quality scores globally. The 2022 essay mill ban, Guardian FOI data revealing AI misconduct scale, near-universal Turnitin adoption, and mandatory disclosure all contribute to both the high R-Score and the relatively low Prevalence score.

## AMI scores at a glance

- **Prevalence Score (P):** 11.41 — 36th of 39 (very low)
- **Response Quality (R):** 87.5 — 2nd highest of 39 countries
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (5/6 dimensions from live data)

### Dimension breakdown

| Dimension | Score | Source |
|---|---|---|
| D1 Contract cheating | 33 | Google Trends + literature |
| D2 AI submissions | 44 | Guardian FOI 2025 |
| D3 Exam impersonation | 9 | Literature |
| D4 Plagiarism | 44 | ICAI/Curtis et al. 2021 |
| D5 Collusion | 58 | ICAI/Curtis et al. 2021 |
| D6 Data fabrication | 18 | Retraction Watch live |

### R-Score components

| Component | Score |
|---|---|
| Legislation | 100 |
| Detection tools | 90 |
| Disclosure | 85 |
| Penalties | 75 |

## What drives the UK's position

### The 2022 essay mill ban

The Higher Education (Freedom of Speech) Act 2022 included provisions making it a criminal offence to provide essay mill services to UK students. This follows Ireland (2019) and Australia (2020) in making the UK one of only three countries globally to have legislated against contract cheating. The legislation scores 100 on the AMI legislation component.

### The Guardian FOI investigation

In June 2025, The Guardian published a Freedom of Information investigation revealing that nearly 7,000 UK students were formally caught using AI tools without disclosure in 2023–24 — 5.1 per 1,000 students. This is the most detailed national AI misconduct dataset available for any country in the AMI, and it directly informs the UK's D2 (AI submissions) score.

The detection ratio matters here. Scarfe et al. (2024) at the University of Reading conducted controlled experiments finding that approximately 94% of AI submissions went undetected. If 5.1 per 1,000 students are caught and 94% are not caught, the true rate is closer to 85 per 1,000 — or approximately 8.5% of students.

### Detection tool adoption

Turnitin is deployed at essentially every UK university. AI detection capabilities were added from 2023. The UK scores 90 on the AMI Detection Tools component — the highest of any country in the dataset.

### Disclosure

UK universities are required to report misconduct statistics, and several publish detailed annual reports. This transparency is unusual globally — most countries have no equivalent requirement.

## The AI challenge

The UK's D2 score of 44 reflects the FOI-confirmed AI misconduct rate, adjusted for estimated under-detection. This is higher than expected given the UK's strong enforcement — but consistent with the reporting paradox identified in the AMI methodology. Strong detection produces more confirmed cases, which raises the apparent prevalence signal even as actual misconduct may be lower than in countries that detect nothing.

## Comparison with similar countries

The UK's profile is most similar to Australia (P=7.43, R=88.8) and Ireland (P=12.21, R=78.8). All three have essay mill legislation, mandatory disclosure, and high detection tool adoption. The UK's slightly higher Prevalence score compared to Australia reflects the larger absolute scale of the UK higher education system and slightly higher AI detection volumes.

## Sources

- The Guardian FOI investigation, June 2025
- Curtis et al. (2021), Studies in Higher Education
- Scarfe et al. (2024), University of Reading
- Retraction Watch Database, Crossref/GitLab (2026)
- JISC Academic Integrity Survey 2022

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "academic-plagiarism-statistics-by-country-2026",
    title: "Academic Plagiarism Statistics by Country 2026",
    seoTitle: "Academic Plagiarism Statistics by Country 2026 | AMI Data",
    metaDescription: "Academic plagiarism rates vary from 26% in Norway to 73% in China. Here are the 2026 plagiarism statistics for 39 countries based on ICAI survey data and AMI analysis.",
    date: "2026-05-20",
    category: "data",
    tags: ["plagiarism statistics", "plagiarism by country", "academic data", "ICAI", "McCabe survey"],
    tldr: "Plagiarism self-report rates range from 26% (Norway) to 73% (China) across 39 countries. The ICAI/McCabe survey data covering 70,000+ students provides country-level data for 26 countries. The D4 dimension of the AMI scores all 39.",
    excerpt: "Plagiarism self-report rates range from 26% in Norway to 73% in China according to the AMI D4 (Plagiarism) dimension data. Here are the full statistics for 39 countries and what drives the differences.",
    faqSchema: [
      {
        question: "What percentage of students plagiarise?",
        answer: "Plagiarism rates vary significantly by country. According to AMI D4 data based on ICAI/McCabe surveys: the US rate is 36%, the UK rate is 35%, Australia is 38%, China is 73%, India is 70%, and Pakistan is 72%. The global average across the 39 AMI countries is approximately 47%."
      },
      {
        question: "Which country has the highest plagiarism rate?",
        answer: "China has the highest estimated plagiarism rate in the AMI dataset at D4=73, followed by Pakistan (72), India (70), and Egypt (68). These scores are based on ICAI/McCabe survey data where available, supplemented by literature-derived estimates."
      },
      {
        question: "Which country has the lowest plagiarism rate?",
        answer: "Norway has the lowest estimated plagiarism rate in the AMI dataset at D4=26 (32 for New Zealand, 32 for Canada). These scores reflect both lower self-reported rates in the academic literature and strong institutional frameworks that deter plagiarism."
      },
      {
        question: "How is plagiarism measured across countries?",
        answer: "The AMI D4 dimension draws primarily on ICAI/McCabe country-level survey data where available (26 countries), supplemented by regional estimates from Pupovac & Fanelli (2015) meta-analysis and country-specific studies for the remaining countries."
      }
    ],
    content: `
## TL;DR

Plagiarism self-report rates range from 26% (Norway) to 73% (China) across the 39 countries in the AMI dataset. The D4 dimension data, sourced primarily from ICAI/McCabe surveys covering 70,000+ students, provides the most comprehensive cross-country plagiarism dataset available.

## The data

The AMI D4 (Plagiarism) dimension scores all 39 countries. Scores represent estimated percentages of students who have engaged in plagiarism (paraphrasing without attribution, submitting others' work, or copying without citation) at least once during their academic career.

### Highest plagiarism rates (D4 score)

| Country | D4 Score | Primary source |
|---|---|---|
| China | 73 | Liu 2005 (n=8,500); Gu & Brooks 2008 |
| Pakistan | 72 | Mahmood 2009; Bashir & Bala 2018 |
| India | 70 | Ramzan et al. 2012; UGC surveys |
| Egypt | 68 | Literature-derived |
| Vietnam | 62 | MOET surveys |
| Malaysia | 62 | Wan Zah et al. 2005 |
| Iran | 65 | Literature-derived |
| Indonesia | 64 | DIKTI integrity reports |
| Kenya | 62 | CUE integrity reports |
| Nigeria | 64 | Ehrich et al. 2016 |

### Lowest plagiarism rates (D4 score)

| Country | D4 Score | Primary source |
|---|---|---|
| Norway | 26 | Chirumamilla & Sindre 2020 |
| Netherlands | 35 | Glendinning 2014; SURF data |
| Canada | 40 | McCabe Canada subset; ICAI |
| New Zealand | 40 | McCabe NZ subset; ICAI |
| United Kingdom | 44 | Curtis et al. 2021 (n=6,200) |
| United States | 45 | McCabe 2002–2015 (n=63,700) |
| Australia | 48 | Bretag et al. 2019 (n=14,086) |
| Ireland | 44 | QEF Ireland 2024 |
| Germany | 48 | Sattler et al. 2013 (n=2,143) |
| Sweden | 38 | Chalmers/KTH survey 2023 |

## What drives plagiarism rates

### Cultural factors

Research consistently identifies several cultural correlates of higher plagiarism rates: competitive academic pressure that values grades over learning, weaker traditions of individual authorship attribution, and differing concepts of intellectual property.

### Institutional deterrence

Countries with mandatory plagiarism detection (Turnitin or equivalent) show lower rates in subsequent surveys — though causality is difficult to establish because detection tool adoption tends to occur in response to known problems.

### Economic factors

Students in lower-income countries who are paying significant proportions of family income for education face stronger incentives to succeed by any means. The correlation between GDP per capita and D4 scores across the AMI dataset is substantial though not perfectly linear.

### Language barriers

International students studying in a second language show higher plagiarism rates in several studies — partly due to genuinely insufficient paraphrasing skill rather than intent to deceive. This complicates interpretation of national statistics in countries with large international student populations.

## Methodology note

The AMI D4 scores use ICAI/McCabe survey data for 26 countries (marked "ICAI survey" in the source column above). For the remaining 13 countries, scores are derived from regional multipliers applied to the international base rate from Pupovac & Fanelli (2015), with country-specific overrides where national studies exist.

D4 carries a weight of 17.1% in the overall AMI P-Score calculation.

## Comparison with AI-generated submissions

The plagiarism dimension (D4) should be read alongside the AI submissions dimension (D2). AI-generated text does not constitute plagiarism in the traditional sense — it is original content — but it represents an emerging form of the same underlying behaviour: submitting work one did not produce. Several countries show high D2 and lower D4 as AI submission replaces traditional plagiarism as the preferred misconduct method.

[View the full methodology](/methodology) | [Download the dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-an-essay-mill",
    title: "What Is an Essay Mill? How They Work and Which Countries They Target",
    seoTitle: "What Is an Essay Mill? How They Work and Global Impact 2026",
    metaDescription: "Essay mills are companies that produce academic work for students to submit as their own. Here is how they work, which brands are biggest, and which countries they target most.",
    date: "2026-05-20",
    category: "guide",
    tags: ["essay mill", "contract cheating", "academic fraud", "EduBirdie", "guide"],
    tldr: "Essay mills are commercial services that produce essays, dissertations, and assignments for students to submit as their own. The industry generates hundreds of millions of dollars annually. Only Australia, Ireland, and the UK have banned them.",
    excerpt: "Essay mills are commercial companies that produce academic work to order for students to submit as their own. Here is how they operate, which brands dominate the market, which countries they target, and what the data shows about their impact.",
    faqSchema: [
      {
        question: "What is an essay mill?",
        answer: "An essay mill is a commercial service that produces academic work — essays, dissertations, lab reports, assignments — for students to submit as their own. They employ writers (often academics or graduate students) who produce original work to a student's specification. The resulting work passes plagiarism detection because it has never been submitted before."
      },
      {
        question: "Are essay mills legal?",
        answer: "Essay mills are illegal in Australia (2020), Ireland (2019), and the United Kingdom (2022), where operating one is a criminal offence. In most other countries they operate legally as a business, though using their services violates university regulations and may constitute fraud under general law."
      },
      {
        question: "How much do essay mills charge?",
        answer: "Prices typically range from £50–£150 for undergraduate essays, £200–£500 for dissertations, and several thousand pounds for doctoral theses. Rush orders, complex subjects, and higher academic levels all command premium prices. Some services charge per page (typically £15–£40/page for standard turnaround)."
      },
      {
        question: "Which essay mill websites are most popular?",
        answer: "The highest-traffic essay mill brands globally include EduBirdie, EssayShark, PapersOwl, GradeMiners, UK Essays, MyAssignmentHelp, and SpeedyPaper. These services operate globally and target students in English-speaking countries primarily, though many now offer multilingual services."
      }
    ],
    content: `
## TL;DR

Essay mills are commercial services producing academic work for students. The biggest brands include EduBirdie, EssayShark, PapersOwl, and GradeMiners. They are illegal in Australia, Ireland, and the UK. The AMI estimates that between 27% and 60% of students in different countries have used such services.

## How essay mills work

The business model is straightforward:

1. A student visits an essay mill website
2. They upload their assignment brief, specifying subject, word count, academic level, and deadline
3. The service provides a price quote
4. Payment is made (credit card, PayPal, or cryptocurrency)
5. A writer — typically a graduate student, academic, or subject specialist — produces original work
6. The completed work is delivered, often with unlimited revisions
7. The student submits it under their own name

The work is genuinely original — it does not appear in any plagiarism database. This is what makes essay mills fundamentally different from, and more difficult to detect than, traditional plagiarism.

## The major brands

Lancaster's research has identified over 900 active essay mill websites. The highest-traffic brands globally include:

- **EduBirdie** — primarily targets US, UK, Canadian, and Australian students
- **EssayShark** — global English-language market
- **PapersOwl** — US and Canadian market
- **GradeMiners** — global English-language
- **UK Essays** — UK, Ireland, and Commonwealth markets
- **MyAssignmentHelp** — Australian and South Asian markets
- **SpeedyPaper** — US market

Most operate from jurisdictions where essay mill services are not illegal, while serving students globally.

## Which countries they target

The AMI essay mill presence score is based on 22 known essay mill sites and their documented primary target markets. Countries with the highest essay mill market presence scores:

- **UK, Australia, Canada, Ireland** — Anglophone markets with high disposable income
- **US** — largest absolute market by student population
- **India, Pakistan** — large English-language student populations
- **Malaysia, Singapore** — English-medium HE systems with high international student populations

## The economics

While precise revenue figures are unavailable (most essay mills are private companies), estimates based on site traffic and price points suggest the global industry generates several hundred million dollars annually. The supply side is driven by academics in lower-income countries earning significant supplemental income by writing assignments.

## Why detection is difficult

Essay mill work passes conventional plagiarism detection because it is original text. Detection methods that do work include:

- **Stylometric analysis** — comparing linguistic patterns against authenticated student work
- **Oral examination** — asking students to explain their work verbally
- **Metadata forensics** — examining document creation properties
- **Intelligence from operators** — under legal pressure, some services have cooperated with authorities

The detection rate is estimated at under 1% of cases — meaning the vast majority of essay mill use goes undetected and unpunished.

## What the AMI data shows

The AMI D1 (Contract Cheating) dimension combines Google Trends data for generic contract cheating keywords, brand-name search data for specific essay mill companies, and the essay mill presence score. D1 is the highest-weighted dimension in the AMI at 19.5% of the P-Score.

Countries with the highest D1 scores: China, Pakistan, Russia, Egypt, Nigeria, Colombia, Argentina.

Countries with the lowest D1 scores: Australia, Ireland, New Zealand, Canada — all of which have specific legislation banning essay mill services.

[View the full methodology](/methodology) | [Download the dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "russia-academic-misconduct-profile",
    title: "Russia: Academic Misconduct Index Country Profile",
    seoTitle: "Russia Academic Misconduct Profile 2026 | AMI Dissernet Data",
    metaDescription: "Russia scores P=37.5, R=16.8 on the AMI. The Dissernet project has exposed over 10,000 plagiarised dissertations. Full profile of Russia's academic integrity crisis.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Russia", "Dissernet", "plagiarism", "dissertation mills", "academic misconduct", "country profile"],
    tldr: "Russia scores P=37.5, R=16.8, Q4. The Dissernet project has exposed over 10,000 plagiarised Russian doctoral dissertations. The R-Score is very low — limited disclosure, weak enforcement, and documented institutional tolerance.",
    excerpt: "Russia scores P=37.5 and R=16.8 on the Academic Misconduct Index, placing it in Q4 (Probably not looking). The Dissernet project has exposed over 10,000 plagiarised doctoral dissertations. This profile explains Russia's scores and what the data shows.",
    faqSchema: [
      {
        question: "What is Russia's academic misconduct score?",
        answer: "Russia scores P=37.5 (Prevalence) and R=16.8 (Response Quality) on the Academic Misconduct Index 2026. It is in Q4 (Probably not looking) — meaning low apparent prevalence likely reflects under-detection rather than genuine low misconduct rates."
      },
      {
        question: "What is Dissernet and what did it find about Russia?",
        answer: "Dissernet is an independent Russian volunteer organisation that systematically analysed doctoral dissertations for plagiarism using automated comparison tools. By 2024, it had identified over 10,000 plagiarised dissertations, including work by senior politicians and officials. The project demonstrated systematic doctoral fraud across Russian universities."
      },
      {
        question: "Does Russia have plagiarism detection?",
        answer: "Yes — the Antiplagiat.ru system is widely deployed at Russian universities and is mandatory for checking doctoral dissertations. However, the AMI methodology notes that high tolerance for detected plagiarism means the detection system has limited effect on actual misconduct rates."
      }
    ],
    content: `
## TL;DR

Russia: P=37.5, R=16.8, Q4. The Dissernet project exposed 10,000+ plagiarised dissertations. Antiplagiat detection is deployed but institutional tolerance remains high. Limited disclosure and weak enforcement keep the R-Score very low.

## AMI scores at a glance

- **Prevalence Score (P):** 37.5 — 26th of 39 countries
- **Response Quality (R):** 16.8 — among the lowest quartile
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 18 |
| D4 Plagiarism | 72 |
| D5 Collusion | 62 |
| D6 Data fabrication | 78 |

## The Dissernet project

Dissernet is a volunteer organisation founded in 2013 that applies automated plagiarism detection to Russian doctoral dissertations. By systematically comparing dissertations against each other and against other sources, it has identified over 10,000 cases of significant plagiarism — including doctoral theses by ministers, governors, and members of parliament.

The scale of the problem documented by Dissernet is exceptional. In a 2024 study published in Springer's Science and Engineering Ethics, Abalkina found that a sample of 2,405 Russian doctoral dissertations from 2007–2015 showed plagiarism incidence exceeding 19%. High-quality research by Dissernet found that in some disciplines, the majority of dissertations contained significant copied content.

## Dissertation mills

Russia has a well-documented dissertation mill industry. Companies openly advertised doctoral thesis writing services for years — some operating websites with pricing menus. The industry served politicians, academics, and professionals seeking credentials without doing the research. Despite Dissernet's work, thousands of identified plagiarists have faced no consequences.

## Why Russia is in Q4 not Q3

Russia's Prevalence score of 37.5 places it below the Q3 threshold. This is primarily driven by the Retraction Watch data: while Russia has elevated fabrication rates, they are lower than some other Q3 countries relative to publication volume. The Q4 placement reflects the AMI's assessment that low apparent prevalence in Russia reflects under-detection — hence "Probably not looking" rather than "Crisis zone."

## The response quality crisis

Russia's R-Score of 16.8 is one of the lowest in the dataset. The breakdown:
- Legislation: 12 (federal requirements exist but are weak)
- Detection tools: 35 (Antiplagiat deployed but tolerance is high)
- Disclosure: 8 (minimal public reporting)
- Penalties: 12 (thousands of identified plagiarists face no consequences)

The core problem is not lack of detection — Antiplagiat exists and Dissernet has done extensive detection work. The problem is institutional and political unwillingness to act on what is found.

## Sources

- Abalkina, A. (2024). Second Handbook of Academic Integrity, Springer
- Dissernet project findings (2013–2024)
- Retraction Watch Database, Crossref/GitLab (2026)

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "chatgpt-academic-cheating-data",
    title: "ChatGPT and Academic Cheating: What the Data Actually Shows",
    seoTitle: "ChatGPT and Academic Cheating 2026: What the Data Shows | AMI",
    metaDescription: "Guardian FOI data shows 7,000 UK students caught using AI in 2023-24. Stanford found 9-16% of students use AI for essays. Here is what the global data actually shows about ChatGPT cheating.",
    date: "2026-05-20",
    category: "data",
    tags: ["ChatGPT", "AI cheating", "AI submissions", "academic misconduct", "Turnitin", "FOI data"],
    tldr: "Guardian FOI (2025): 7,000 UK students caught using AI in 2023-24 = 5.1/1,000. Stanford (2023): 9-16% of students admit submitting AI content. Scarfe et al. (2024): 94% of AI submissions go undetected. The AMI D2 dimension covers all 39 countries.",
    excerpt: "The Guardian's Freedom of Information investigation found nearly 7,000 UK students caught using AI without disclosure in 2023-24. Stanford found 9-16% admit it. Here is what the complete global data shows about ChatGPT and academic misconduct.",
    faqSchema: [
      {
        question: "How many students use ChatGPT to cheat?",
        answer: "A 2023 Stanford survey found 9-16% of students at surveyed institutions admitted submitting AI-generated content as their own work. The Guardian's 2025 FOI investigation found 5.1 per 1,000 UK students were formally caught — with Scarfe et al. (2024) estimating 94% of cases go undetected, implying a true rate of approximately 85 per 1,000."
      },
      {
        question: "Does Turnitin detect ChatGPT?",
        answer: "Turnitin added AI detection capability in 2023 with claimed accuracy of 98% for AI-generated text. However, Scarfe et al. (2024) found that in controlled experiments, approximately 94% of AI submissions went undetected. Detection accuracy varies significantly with writing style, editing, and hybrid human-AI content."
      },
      {
        question: "Which countries have the most AI cheating?",
        answer: "The AMI D2 (AI submissions) dimension scores all 39 countries. The highest scores are China (68), Iran (100 — driven by high Trends signal), and the UK (44 — based on FOI-confirmed cases). The UK score is higher than some lower-income countries not because more students cheat, but because the UK has better detection and disclosure."
      },
      {
        question: "Is using ChatGPT for assignments cheating?",
        answer: "This depends on the specific policy of each institution and the nature of the use. Most universities now have explicit AI policies. Using AI to generate text and submitting it without disclosure is considered misconduct at virtually all institutions. Using AI as a research or editing tool, with appropriate disclosure, is permitted or even encouraged at many."
      }
    ],
    content: `
## TL;DR

Guardian FOI 2025: 7,000 UK students caught with AI = 5.1/1,000. Stanford 2023: 9–16% self-admit. Scarfe et al. 2024: 94% of AI submissions go undetected. AMI D2 scores 39 countries — China (68) and Iran (100) highest, Australia (44) and Canada (44) lower.

## The confirmed case data

### United Kingdom (Guardian FOI, June 2025)

The most detailed national dataset comes from The Guardian's Freedom of Information investigation. Requests to UK universities revealed:

- **6,971 formally confirmed AI misconduct cases** in 2023–24
- **5.1 cases per 1,000 students** — the highest confirmed rate for any country with comprehensive data
- Cases concentrated in business, law, and social science departments
- Significant variation between institutions

### United States (Stanford Survey, 2023)

A Stanford University survey across multiple institutions found:
- **9–16% of students self-reported** submitting AI-generated content as their own work
- Rates varied significantly by subject area
- Business and social science students reported higher rates than STEM

### The detection problem (Scarfe et al., 2024)

Researchers at the University of Reading conducted controlled experiments submitting AI-generated work through standard university assessment processes. They found:
- **Approximately 94% of AI submissions went undetected**
- AI detection tools showed significant false positive and false negative rates
- Turnitin's AI detection was more effective than manual review but still missed substantial proportions

If 5.1 per 1,000 UK students are caught and 94% go undetected, the implied true rate is approximately 85 per 1,000 — or about 8.5% of students. This is consistent with the Stanford self-report findings.

## The global picture

The AMI D2 (AI submissions) dimension scores all 39 countries based on available data. Sources include FOI disclosures, published survey data, and country-adjusted literature estimates.

### Countries with highest D2 scores (estimated AI misconduct)

| Country | D2 Score | Primary source |
|---|---|---|
| Iran | 100 | High Trends signal (internet restrictions make VPN-based ChatGPT use common) |
| Colombia | 100 | High Trends signal |
| Greece | 100 | High Trends signal |
| China | 68 | Liang et al. 2024; survey data |
| India | 62 | QS survey 2024 |
| UK | 44 | Guardian FOI 2025 (confirmed cases + detection ratio) |

### Countries with lowest D2 scores

| Country | D2 Score |
|---|---|
| Norway | 31 |
| Sweden | 31 |
| New Zealand | 31 |
| Japan | 28 |
| Ireland | 31 |

## Why high D2 in Iran and Colombia?

The very high D2 Trends signals for Iran and Colombia reflect high search volume for AI submission keywords relative to their student populations. In Iran, internet restrictions mean students use VPNs to access ChatGPT — creating a pattern of intensive, purposeful use that likely correlates with academic use. In Colombia and other Latin American countries, rapid ChatGPT adoption combined with limited institutional AI policies creates conditions for high use.

## University policy responses

The AMI D2 data is partly a measure of institutional response as well as student behaviour. Countries with clearer policies, better detection, and stronger disclosure frameworks will appear to have higher confirmed misconduct rates even if actual rates are similar to countries that look the other way.

This is addressed in the AMI methodology by the enforcement-detection correction, which adjusts P-Scores for countries with strong detection infrastructure.

## What this means going forward

D2 is the newest and fastest-evolving dimension in the AMI. The evidence base is less than three years old and estimates will be revised with each annual update. The combination of improving AI detection tools, evolving institutional policies, and changing student behaviour makes this the most uncertain dimension in the dataset.

[View the full methodology](/methodology) | [Download the dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "introducing-academic-misconduct-index",
    title: "Introducing the Academic Misconduct Index",
    seoTitle: "Introducing the Academic Misconduct Index (AMI) 2026",
    metaDescription: "The Academic Misconduct Index is the first systematic cross-country index measuring academic cheating prevalence and institutional response quality. Here is what it is and why it was built.",
    date: "2026-04-26",
    category: "news",
    tags: ["AMI", "launch", "academic integrity", "index", "methodology", "Francisco Booth"],
    tldr: "The AMI is the first systematic cross-country index measuring academic misconduct prevalence and institutional response across 39 countries. Modelled on the Corruption Perceptions Index. Published openly under CC BY 4.0.",
    excerpt: "The Academic Misconduct Index launches today as the first systematic attempt to measure academic cheating prevalence and institutional response quality across multiple countries simultaneously. Here is what it is, how it works, and why it was built.",
    faqSchema: [
      {
        question: "What is the Academic Misconduct Index?",
        answer: "The Academic Misconduct Index (AMI) is an independent annual index measuring the estimated prevalence of academic cheating and the quality of institutional responses across 39 countries. Created by independent researcher Francisco Booth and first published in April 2026, it is modelled on the methodology of Transparency International's Corruption Perceptions Index."
      },
      {
        question: "Who created the Academic Misconduct Index?",
        answer: "The Academic Misconduct Index was created by Francisco Booth, an independent researcher, and first published in April 2026. The full methodology, dataset, and source code are available openly at academicmisconductindex.com under a Creative Commons Attribution 4.0 licence."
      },
      {
        question: "How is the AMI different from other academic integrity measures?",
        answer: "Before the AMI, no systematic cross-country index of academic misconduct existed. Existing data was fragmented, nationally siloed, and often suppressed by institutions. The AMI aggregates multiple open data sources (Retraction Watch, Google Trends, FOI disclosures, ICAI survey data) into a single transparent, annually updatable framework covering 39 countries."
      }
    ],
    content: `
## TL;DR

The AMI is the first cross-country index measuring academic misconduct prevalence and institutional response. It covers 39 countries, uses six dimensions, and draws on five live data sources. Modelled on the Corruption Perceptions Index. Published openly under CC BY 4.0.

## Why this index exists

Academic misconduct — contract cheating, AI-generated submissions, plagiarism, exam impersonation, collusion, and data fabrication — costs universities, employers, and society in ways that are poorly quantified. Degree credentials lose value when they cannot be trusted. Research findings built on fabricated data mislead subsequent scientists. Professionals enter employment having gained qualifications through fraud.

Despite the scale of the problem, no systematic cross-country index existed before the AMI. Existing data was fragmented across national studies, institutional reports, and individual research papers. No framework allowed comparison across countries or tracking of change over time.

## The CPI parallel

The AMI is structurally modelled on Transparency International's Corruption Perceptions Index (CPI), first published in 1995. The first CPI aggregated existing business risk assessments and governance surveys rather than commissioning new data — a pragmatic approach that allowed rapid deployment before more sophisticated data collection was possible. The AMI version 1.x follows exactly this approach.

The CPI demonstrated that a well-constructed index can shift policy, generate media attention, and create accountability pressure even without legal enforcement power. A country appearing near the bottom of the CPI rankings faces reputational and diplomatic consequences that create incentives to improve. The AMI aims to create equivalent accountability pressure in the higher education sector.

## What version 1.5 measures

The AMI scores 39 countries on two axes:

**Prevalence Score (P):** Estimated rate of academic misconduct, built from six dimensions weighted by prevalence and severity.

**Response Quality Score (R):** How robustly institutions detect, investigate, and deter misconduct, built from legislation, detection tools, disclosure, and penalties.

Countries are assigned to one of four quadrants: Q1 (Best in class), Q2 (Aware and fighting it), Q3 (Crisis zone), Q4 (Probably not looking).

## Key findings from version 1.5

China scores highest on Prevalence (P=99.98), reflecting the world's largest paper mill industry and the highest data fabrication rate in the Retraction Watch database. Australia and the United Kingdom score highest on Response Quality (R=88.8 and 87.5 respectively). The Q2 quadrant is currently empty — no country simultaneously shows high prevalence and a strong response, which is itself a significant finding.

## What comes next

Version 2.0 will add expert perception surveys — modelled on the CPI's eventual addition of expert panels — once the index has an established audience. Coverage will expand beyond 39 countries. Country-level subject vulnerability scores are planned for a later version.

The methodology document, full dataset, and source code are available at academicmisconductindex.com under CC BY 4.0.

**Cite as:** Booth, F. (2026). Academic Misconduct Index, Version 1.5. academicmisconductindex.com
    `.trim(),
  },
];
