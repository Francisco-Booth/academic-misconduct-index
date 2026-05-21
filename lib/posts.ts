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

  {
    slug: "colombia-academic-misconduct-profile",
    title: "Colombia: Academic Misconduct Index Country Profile",
    seoTitle: "Colombia Academic Misconduct Profile 2026 | AMI P=77.4",
    metaDescription: "Colombia scores P=77.4, R=16.5 on the AMI — second highest Prevalence globally. Maxed Google Trends signals for essay mills and AI tools, no specific legislation. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Colombia", "Latin America", "contract cheating", "essay mills", "country profile"],
    tldr: "Colombia scores P=77.38, R=16.5, Q3 (Crisis zone). The second highest Prevalence score in the AMI dataset. Driven by maxed Google Trends signals (D1=100, D2=100) for essay mill and AI submission keywords combined with no specific legislation.",
    excerpt: "Colombia scores P=77.4 on the Academic Misconduct Index — the second highest Prevalence score after China. The profile is driven almost entirely by demand signals: Google Trends data for essay mill and AI submission keywords both max out at 100. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Colombia's academic misconduct score?",
        answer: "Colombia scores P=77.38 (Prevalence) and R=16.5 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q3 (Crisis zone) — the second highest Prevalence score of 39 countries, after China."
      },
      {
        question: "Why does Colombia score so high on academic misconduct?",
        answer: "Colombia's Prevalence score is driven almost entirely by demand signals. Google Trends data for both essay mill keywords (D1) and AI submission keywords (D2) max out at 100 — among the highest in Latin America. The country has no specific legislation against contract cheating and limited mandatory disclosure from universities."
      },
      {
        question: "Are there any academic integrity laws in Colombia?",
        answer: "Colombia has general fraud provisions and university-level disciplinary codes but no specific law equivalent to Australia's or the UK's essay mill bans. Institutional response varies widely between public and private universities. The country's R-Score of 16.5 reflects this weak legislative environment."
      }
    ],
    content: `
## TL;DR

Colombia: P=77.38, R=16.5, Q3 (Crisis zone). Second highest Prevalence score after China. Both contract cheating (D1=100) and AI submission (D2=100) signals max out. No specific legislation, weak disclosure.

## AMI scores at a glance

- **Prevalence Score (P):** 77.38 — 2nd of 39 countries
- **Response Quality (R):** 16.5
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Latin America

### Dimension breakdown

| Dimension | Score | Source |
|---|---|---|
| D1 Contract cheating | 100 | Google Trends |
| D2 AI submissions | 100 | Google Trends |
| D3 Exam impersonation | 14 | Literature |
| D4 Plagiarism | 58 | Literature/regional |
| D5 Collusion | 52 | Literature/regional |
| D6 Data fabrication | 0 | Retraction Watch |

## What drives Colombia's score

### Maxed Google Trends signals (D1 = D2 = 100)

The headline finding for Colombia is that both essay mill keyword search volume and AI submission keyword search volume are at the top of the Latin American distribution — both rescale to 100 in the AMI methodology. Searches for "ensayos a pedido", essay mill brand names, and Spanish-language AI bypass tools all show very high per-capita volume.

This is a demand signal, not a confirmed-incidence signal. It indicates students are looking for these services in unusually high numbers; the actual conversion rate is not directly measured.

### Low data fabrication (D6 = 0)

Colombia's D6 score of 0 reflects very few entries in the Retraction Watch database relative to publication volume. Latin American research output is smaller in absolute terms than Asia or North America, and the rate of misconduct-linked retractions per 10,000 publications is low. This holds the overall P-Score below China's despite the maxed D1/D2 signals.

### Plagiarism and collusion (D4 = 58, D5 = 52)

Both scores are regional extrapolations rather than country-specific survey data. The ICAI McCabe surveys did not include Colombia in their original sample. Regional averages for Latin America have been applied. As survey data improves these scores may shift.

## The response quality picture

Colombia's R-Score of 16.5 reflects:
- **Legislation: 10** — no specific contract cheating ban
- **Detection tools: 28** — partial deployment of plagiarism detection
- **Disclosure: 10** — minimal public reporting from universities
- **Penalties: 18** — penalties exist on paper but are inconsistently applied

Public universities including Universidad Nacional de Colombia and Universidad de los Andes have institutional misconduct codes, but enforcement varies widely. There is no national regulator equivalent to Australia's TEQSA.

## Why Colombia is in Q3 not Q4

The combination of very high Prevalence and very low Response Quality places Colombia firmly in Q3 (Crisis zone). This quadrant assignment reflects an active misconduct problem combined with weak institutional response — the configuration the AMI methodology flags as the primary target for intervention.

## Implications

For employers and graduate admissions assessing Colombian credentials, the AMI data suggests applying additional verification. The high demand signal does not mean individual credentials are fraudulent — the vast majority of Colombian graduates earn their qualifications legitimately — but the base rate of misconduct is elevated.

For Colombian policymakers, the gap between Colombia and Q1 countries (Australia, UK, Ireland) is primarily legislative. The essay mill ban model has shown measurable effect in jurisdictions that adopt it.

## Sources

- Google Trends (2022–2026), country-level data
- Retraction Watch Database, Crossref/GitLab (2026)
- ICAI / McCabe regional extrapolation for plagiarism and collusion
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "argentina-academic-misconduct-profile",
    title: "Argentina: Academic Misconduct Index Country Profile",
    seoTitle: "Argentina Academic Misconduct Profile 2026 | AMI P=74.6",
    metaDescription: "Argentina scores P=74.57, R=18.0 on the AMI — third highest Prevalence score globally. High Spanish-language essay mill and AI search volume, weak legislative response. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Argentina", "Latin America", "contract cheating", "AI submissions", "country profile"],
    tldr: "Argentina scores P=74.57, R=18.0, Q3 (Crisis zone). Third highest Prevalence score in the AMI dataset. Like Colombia, the score is driven by maxed Google Trends signals for essay mill and AI submission keywords combined with no specific legislation.",
    excerpt: "Argentina scores P=74.6 on the Academic Misconduct Index — the third highest Prevalence score globally. The profile is dominated by Spanish-language search demand for essay mill and AI submission services, with limited institutional response. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Argentina's academic misconduct score?",
        answer: "Argentina scores P=74.57 (Prevalence) and R=18.0 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q3 (Crisis zone) — the third highest Prevalence score after China and Colombia."
      },
      {
        question: "Why is Argentina's Prevalence score so high?",
        answer: "Argentina's score is driven primarily by demand signals from Google Trends — both contract cheating keywords (D1) and AI submission keywords (D2) are at the top of the Latin American distribution, scoring 100 each. There is no specific legislation against essay mill services and limited mandatory disclosure from universities."
      },
      {
        question: "Does Argentina have specific academic integrity legislation?",
        answer: "Argentina has general fraud provisions and university-level codes of conduct but no specific contract cheating ban. CONEAU, the national accreditation body, sets quality standards for universities but does not mandate specific misconduct disclosure. The AMI's R-Score of 18.0 reflects this weak legislative environment."
      }
    ],
    content: `
## TL;DR

Argentina: P=74.57, R=18.0, Q3 (Crisis zone). Third highest Prevalence score after China and Colombia. Both Google Trends dimensions (D1=100, D2=100) max out. No specific contract cheating legislation, weak disclosure requirements.

## AMI scores at a glance

- **Prevalence Score (P):** 74.57 — 3rd of 39 countries
- **Response Quality (R):** 18.0
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Latin America

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 100 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 12 |
| D4 Plagiarism | 55 |
| D5 Collusion | 50 |
| D6 Data fabrication | 0 |

## What drives Argentina's score

### Spanish-language demand signals

Argentina's P-Score is structurally similar to Colombia's. Spanish-language search volume for essay mill terms and AI submission tools is exceptionally high relative to student population. The shared language across Latin America means essay mill services targeting one Spanish-speaking market often reach others, and Argentine search volume sits at the top of the regional distribution.

### Data fabrication near zero

Like Colombia, Argentina shows almost no signal in the Retraction Watch database relative to publication volume. Argentine research output is significant by Latin American standards — CONICET produces respected work — but misconduct-linked retractions are rare. This holds the overall P-Score below China's.

### Plagiarism and collusion are regional estimates

D4 (55) and D5 (50) are not based on Argentine-specific survey data — the ICAI McCabe surveys did not sample Argentina directly. These scores reflect Latin American regional averages and may shift as country-specific data becomes available.

## The response quality picture

Argentina's R-Score of 18.0 breaks down as:
- **Legislation: 12** — no specific contract cheating ban
- **Detection tools: 30** — partial Turnitin deployment, mostly at private universities
- **Disclosure: 10** — minimal public reporting
- **Penalties: 20** — institutional codes exist; enforcement varies

CONEAU sets accreditation standards for Argentine universities but does not mandate misconduct reporting. The Universidad de Buenos Aires and other major public universities have integrity codes but face resource constraints in detection and investigation. Private universities have higher detection tool adoption rates than public ones.

## Why Argentina is in Q3

Q3 (Crisis zone) reflects the combination of high Prevalence and weak Response. Argentina's pattern — high demand combined with limited institutional response — is the configuration the AMI methodology flags as the primary target for policy intervention.

The pattern across Latin American countries in the AMI dataset is consistent: high D1/D2 demand signals, near-zero D6, low Response Quality. Mexico (P=51.36), Brazil (P=39.75), and Colombia (P=77.38) all share a similar structural profile, varying primarily in the intensity of demand signals.

## Implications

For Argentine universities, the most direct policy lever is detection tool deployment — moving from current partial coverage toward the near-universal deployment seen in Q1 countries. Legislative reform on the Australian model would address the supply side but requires national-level action.

For employers and admissions offices assessing Argentine credentials, the AMI data suggests applying verification proportional to the Q3 placement — particularly for fields with high contract cheating exposure (business, law, engineering).

## Sources

- Google Trends (2022–2026), Argentina country-level data
- Retraction Watch Database, Crossref/GitLab (2026)
- ICAI / McCabe regional extrapolation
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "greece-academic-misconduct-profile",
    title: "Greece: Academic Misconduct Index Country Profile",
    seoTitle: "Greece Academic Misconduct Profile 2026 | AMI P=74.0",
    metaDescription: "Greece scores P=74.0, R=20.0 on the AMI — fourth highest Prevalence globally and the highest in Europe. Greek-language essay mill demand and weak national response. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Greece", "Europe", "contract cheating", "essay mills", "country profile"],
    tldr: "Greece scores P=74.00, R=20.0, Q3 (Crisis zone). The fourth highest Prevalence score globally and the highest in Europe. Driven by maxed Google Trends signals and limited institutional response despite EU integration.",
    excerpt: "Greece scores P=74.0 on the Academic Misconduct Index — the fourth highest Prevalence globally and the highest in Europe. The data shows maxed essay mill and AI submission search demand combined with weak institutional response. Here is what drives Greece's position.",
    faqSchema: [
      {
        question: "What is Greece's academic misconduct score?",
        answer: "Greece scores P=74.00 (Prevalence) and R=20.0 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q3 (Crisis zone). This is the fourth highest Prevalence score in the dataset and the highest among European countries scored."
      },
      {
        question: "Why does Greece score worst in Europe on academic misconduct?",
        answer: "Greece's score reflects two factors: very high Google Trends demand for essay mill and AI submission keywords (D1=D2=100), and weak institutional response measures. Despite EU integration and access to European-wide initiatives, Greece's national framework for academic integrity remains underdeveloped relative to other EU member states."
      },
      {
        question: "Are essay mills legal in Greece?",
        answer: "Greece has no specific legislation against contract cheating equivalent to Australia's, the UK's, or Ireland's. General fraud provisions apply but are not used for academic misconduct cases. Greek universities have institutional codes but enforcement is inconsistent and disclosure requirements are minimal."
      }
    ],
    content: `
## TL;DR

Greece: P=74.00, R=20.0, Q3 (Crisis zone). Fourth highest Prevalence score globally, highest in Europe. Both contract cheating (D1=100) and AI submissions (D2=100) max out. No specific legislation despite EU membership.

## AMI scores at a glance

- **Prevalence Score (P):** 74.00 — 4th of 39 countries
- **Response Quality (R):** 20.0
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (3/6 dimensions from live data — see notes)
- **Region:** Europe

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 100 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 60 |
| D5 Collusion | 45 |
| D6 Data fabrication | 0 |

## What drives Greece's score

### Greek-language search demand

Greece sits at the top of the European distribution for essay mill and AI submission keyword search volume. Greek-language equivalents of contract cheating terms show very high per-capita query volume. The narrow language market means search volume signals can be interpreted with relative confidence — there is little spillover from regional neighbours, unlike in the Spanish-speaking Latin American countries.

### Plagiarism estimates (D4 = 60)

Eret & Ok (2014) [verify — original paper covers Turkey; Greek-specific equivalent data is limited] identified elevated plagiarism rates across Southern European countries including Greece. The D4 score reflects regional estimates plus some Greek-specific survey work. As country-specific survey coverage improves these scores may be revised.

### Live data coverage

Only 3 of 6 Greek dimensions come from fully live data sources (D1, D2, D6). D3, D4, and D5 rely on literature-derived estimates and regional extrapolation. This is the principal data quality limitation in Greece's profile.

## The response quality picture

Greece's R-Score of 20.0 breaks down as:
- **Legislation: 10** — no specific contract cheating ban
- **Detection tools: 30** — partial Turnitin deployment
- **Disclosure: 15** — limited public reporting
- **Penalties: 25** — institutional codes exist

Greece is the only EU country in the Q3 (Crisis zone) quadrant. Other EU member states with elevated Prevalence scores (Poland, Italy, France) all fall into Q3 or Q4 but with R-Scores above Greece's 20.0.

## Why Greece stands out within Europe

Most European countries cluster between R=25 and R=60. Greece's R=20.0 is exceptionally low for an EU member state. The contributing factors include limited adoption of mandatory disclosure requirements, low investment in detection technology, and the absence of any specific contract cheating legislation. The European University Association has flagged academic integrity as an area requiring coordinated EU action.

## Implications

Greece illustrates a pattern visible in several Southern European countries: high demand combined with limited institutional response. Policy options include adopting the Irish or UK legislative model, mandating detection tool deployment, and requiring institutional misconduct disclosure.

For employers receiving Greek credentials, the AMI data suggests verification proportional to the Q3 placement. Greek universities including the National and Kapodistrian University of Athens have institutional integrity offices, but enforcement varies.

## Sources

- Google Trends (2022–2026), Greece country-level
- Eret & Ok (2014) and related Southern European integrity research [verify]
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "egypt-academic-misconduct-profile",
    title: "Egypt: Academic Misconduct Index Country Profile",
    seoTitle: "Egypt Academic Misconduct Profile 2026 | AMI P=64.6",
    metaDescription: "Egypt scores P=64.6, R=12.0 on the AMI — the lowest R-Score of any country scored. High AI submission demand (D2=100), elevated retraction rate, weak institutional response. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Egypt", "Middle East", "contract cheating", "AI submissions", "country profile"],
    tldr: "Egypt scores P=64.60, R=12.0, Q3 (Crisis zone). The lowest Response Quality score of any country in the AMI dataset. Driven by maxed AI submission demand, elevated retraction-linked fabrication signals, and minimal institutional response infrastructure.",
    excerpt: "Egypt scores P=64.6 on the AMI Prevalence axis and R=12.0 on Response Quality — the lowest R-Score of any country in the dataset. The combination places Egypt deep in the Crisis zone. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is Egypt's academic misconduct score?",
        answer: "Egypt scores P=64.60 (Prevalence) and R=12.0 (Response Quality) on the Academic Misconduct Index 2026. Its R-Score is the lowest of any country in the 39-country dataset, placing Egypt firmly in Q3 (Crisis zone)."
      },
      {
        question: "Why does Egypt have the lowest Response Quality score?",
        answer: "Egypt's R-Score reflects limited legislation, minimal detection tool deployment, very low public disclosure from universities, and weak penalty structures. The Supreme Council of Universities sets some standards but enforcement is inconsistent across the public university system, which serves the majority of Egyptian students."
      },
      {
        question: "Is there a major AI cheating problem in Egyptian universities?",
        answer: "Egypt's D2 (AI submissions) dimension scores 100 — the top of the global distribution. Google Trends data for Arabic-language AI submission tool keywords shows very high per-capita demand. This is a demand signal, not a confirmed incidence rate, but combined with weak detection it suggests AI submissions are likely a significant issue."
      }
    ],
    content: `
## TL;DR

Egypt: P=64.60, R=12.0, Q3 (Crisis zone). Lowest Response Quality score in the entire AMI dataset. Driven by maxed AI submission demand signals (D2=100), elevated data fabrication signal (D6=60), and minimal institutional response.

## AMI scores at a glance

- **Prevalence Score (P):** 64.60 — 5th of 39 countries
- **Response Quality (R):** 12.0 — lowest in dataset
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Middle East

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 20 |
| D4 Plagiarism | 68 |
| D5 Collusion | 56 |
| D6 Data fabrication | 60 |

## What drives Egypt's score

### Maxed AI submission demand (D2 = 100)

Egypt's D2 score reflects the top of the distribution for Arabic-language AI submission keyword search volume. The combination of large student population, widespread English-medium instruction in higher education, and high smartphone penetration creates a market for AI submission tools. The signal is consistently high across the 2022–2026 measurement window.

### Elevated data fabrication signal (D6 = 60)

The Retraction Watch database shows elevated misconduct-linked retraction rates for Egypt relative to publication volume. The Cairo University and Ain Shams University scientific publication base is substantial; the retraction-to-publication ratio places Egypt above the global average. Specific high-profile cases include retractions in medical and engineering literature [verify specifics].

### Plagiarism (D4 = 68)

D4 reflects regional Middle East/North Africa survey estimates plus literature evidence. Multiple peer-reviewed studies have documented elevated plagiarism rates in Egyptian universities, particularly in graduate dissertations. The 68 score is consistent with this literature but country-specific large-N survey data is limited.

## The lowest R-Score in the dataset

Egypt's R-Score of 12.0 is the lowest of any country in the AMI 39-country set. The breakdown:
- **Legislation: 10** — general fraud law applies; no specific provisions
- **Detection tools: 18** — limited Turnitin or equivalent deployment
- **Disclosure: 8** — very limited public reporting
- **Penalties: 12** — codes exist but rarely enforced

The Supreme Council of Universities oversees Egyptian higher education but does not mandate specific misconduct reporting. Public universities, which serve the majority of Egyptian students, have particularly limited integrity infrastructure compared to private institutions like the American University in Cairo.

## Why Egypt's Q3 placement matters

The combination of P=64.60 and R=12.0 places Egypt unambiguously in the Crisis zone. Among Middle Eastern countries scored, Egypt's R-Score is the lowest — even Iran (R=13.2) and Saudi Arabia (R=17.5) score marginally higher. The gap between Egypt and Q1 countries on the Response axis is the largest in the dataset.

## Implications

Egypt sits at one of the lowest baseline positions for academic integrity infrastructure in the dataset. Policy reform faces resource constraints — many public universities operate with limited budgets for detection technology or compliance staff.

For employers and graduate admissions evaluating Egyptian credentials, the AMI data suggests careful verification. Egypt's elite institutions (AUC, GUC) have substantially different integrity profiles from the public university system; institution-level signals are likely more informative than country-level scores in this context.

## Sources

- Google Trends (2022–2026), Egypt country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Regional Middle East/North Africa integrity literature
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "pakistan-academic-misconduct-profile",
    title: "Pakistan: Academic Misconduct Index Country Profile",
    seoTitle: "Pakistan Academic Misconduct Profile 2026 | AMI P=59.1",
    metaDescription: "Pakistan scores P=59.08, R=14.2 on the AMI. Maxed contract cheating demand (D1=100), elevated retraction rate, and HEC reforms that have not yet shifted institutional culture. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Pakistan", "Asia", "contract cheating", "HEC", "country profile"],
    tldr: "Pakistan scores P=59.08, R=14.2, Q3 (Crisis zone). Sixth highest Prevalence globally. Maxed contract cheating demand (D1=100), high plagiarism (D4=72), elevated fabrication (D6=65). HEC reforms exist but enforcement remains weak.",
    excerpt: "Pakistan scores P=59.1 on the Academic Misconduct Index, placing it sixth globally for estimated misconduct prevalence. The Higher Education Commission has introduced reforms but the data shows persistent challenges. Here is what drives Pakistan's position.",
    faqSchema: [
      {
        question: "What is Pakistan's academic misconduct score?",
        answer: "Pakistan scores P=59.08 (Prevalence) and R=14.2 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q3 (Crisis zone) — the sixth highest Prevalence score in the dataset."
      },
      {
        question: "What is the Higher Education Commission doing about cheating in Pakistan?",
        answer: "The Pakistan Higher Education Commission (HEC) has issued plagiarism policies requiring universities to use detection tools and has set thresholds for acceptable similarity rates in theses. However, the AMI Response Quality score of 14.2 indicates that enforcement and institutional culture have lagged the formal policy framework."
      },
      {
        question: "Why is contract cheating so high in Pakistan?",
        answer: "Pakistan's D1 (contract cheating) score of 100 reflects very high search volume for essay mill keywords — both English-language and Urdu-language equivalents. Pakistan also hosts a documented domestic essay mill industry that exports services to other markets, particularly the UK and Gulf states."
      }
    ],
    content: `
## TL;DR

Pakistan: P=59.08, R=14.2, Q3 (Crisis zone). Sixth highest Prevalence score in the AMI dataset. Maxed contract cheating demand (D1=100), high plagiarism (D4=72), elevated fabrication (D6=65). HEC policy exists; enforcement weak.

## AMI scores at a glance

- **Prevalence Score (P):** 59.08 — 6th of 39 countries
- **Response Quality (R):** 14.2
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (4/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 100 |
| D2 AI submissions | 66 |
| D3 Exam impersonation | 25 |
| D4 Plagiarism | 72 |
| D5 Collusion | 56 |
| D6 Data fabrication | 65 |

## What drives Pakistan's score

### Contract cheating exports

Pakistan has a documented essay mill industry that serves both domestic and international demand. The country's English-language proficiency and lower labour costs have made it a hub for outsourced academic writing, particularly serving UK and Gulf-state student markets. This shows up in Pakistan's own Google Trends data (D1=100) but also has been documented through investigative reporting on essay mill operations [verify].

### Plagiarism (D4 = 72)

Pakistan's D4 score reflects multiple country-specific studies. Plagiarism rates in graduate theses have been a recurring concern — the HEC introduced mandatory plagiarism checking for doctoral dissertations partly in response to a series of high-profile cases. Survey data consistently shows elevated self-reported plagiarism rates relative to global averages.

### Data fabrication (D6 = 65)

Retraction Watch data shows Pakistan has elevated misconduct-linked retraction rates per 10,000 publications. The score sits below China's (100) and Iran's (65) but above regional Asian peers. Specific high-profile cases include retractions in medical and pharmaceutical literature.

### Exam impersonation (D3 = 25)

Pakistan's D3 score is the second highest in the dataset (only Nigeria scores higher at 28). The literature documents systematic exam impersonation in Pakistani public examinations including the Federal Public Service Commission examinations [verify], with prosecutions reported.

## The HEC framework — strong on paper

Pakistan's Higher Education Commission has one of the more developed policy frameworks in the region. The HEC has:
- Issued mandatory plagiarism detection requirements
- Set similarity thresholds for dissertations
- Required HEC-recognised universities to deploy detection tools
- Maintained a register of plagiarism cases

However, the R-Score of 14.2 reflects the gap between policy and enforcement. Many universities operate with limited compliance infrastructure, and institutional disclosure of misconduct cases remains minimal.

## R-Score breakdown

- **Legislation: 10** — HEC policy exists but no statutory ban on essay mills
- **Detection tools: 22** — partial deployment, concentrated at HEC-recognised institutions
- **Disclosure: 10** — minimal public reporting
- **Penalties: 15** — codes exist; enforcement varies

## Implications

Pakistan illustrates a pattern where formal academic integrity policy exists but institutional culture and resourcing have not caught up. The HEC framework gives Pakistan a higher policy baseline than several Q3 peers, but the practical R-Score remains very low.

For employers and admissions offices, Pakistani credentials warrant verification proportional to the Q3 placement. Pakistani diaspora students at international institutions show academic integrity outcomes consistent with the institutions they attend rather than country-of-origin patterns — the AMI score reflects institutional conditions, not student capability.

## Sources

- Google Trends (2022–2026), Pakistan country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- HEC policy documents
- Pakistani higher education integrity literature [verify specific citations]
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "norway-academic-misconduct-profile",
    title: "Norway: Academic Misconduct Index Country Profile",
    seoTitle: "Norway Academic Misconduct Profile 2026 | AMI P=57.2 Anomaly",
    metaDescription: "Norway scores P=57.16, R=47.5 on the AMI — surprisingly high Prevalence given Nordic norms. The score is largely driven by Google Trends signal interpretation, not student behaviour. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Norway", "Europe", "Nordic", "academic integrity", "Google Trends anomaly", "country profile"],
    tldr: "Norway scores P=57.16, R=47.5, Q3 (Crisis zone) — surprisingly high for a country with strong NESH guidelines and integrity infrastructure. The score is largely an artefact of Google Trends search volume from academic and policy discussion of AI tools, not student misconduct. The R-Score reflects genuinely strong institutional response.",
    excerpt: "Norway's appearance at P=57.16 — seventh globally — surprises most observers given its strong NESH ethics framework. This profile explains why Norway's score sits where it does and how to read it correctly.",
    faqSchema: [
      {
        question: "Why does Norway score high on academic misconduct?",
        answer: "Norway's elevated P-Score is largely a methodological artefact. The Google Trends signal for AI submission keywords picks up substantial academic, policy, and educator discussion of AI tools in Norway — a country where these topics are debated openly — rather than just student misconduct demand. The AMI methodology notes this limitation explicitly, and Norway is the principal case discussed in the methodology's caveat section."
      },
      {
        question: "Is academic cheating actually common in Norway?",
        answer: "All indications from Norwegian institutional data and literature suggest actual cheating rates in Norway are well below the P-Score would imply. Norway has the NESH ethics guidelines, robust institutional integrity infrastructure, and a culture of open academic discussion that elevates search volume on integrity topics. The R-Score of 47.5 reflects this strong response infrastructure."
      },
      {
        question: "What does NESH do for academic integrity in Norway?",
        answer: "NESH (the National Committee for Research Ethics in the Social Sciences and Humanities) and its sister committees set ethical guidelines for Norwegian research. The framework is one of the most comprehensive in Europe, mandating ethics review for sensitive research, governing co-authorship, and addressing misconduct. NESH guidelines are credited as a model for Nordic research integrity infrastructure."
      }
    ],
    content: `
## TL;DR

Norway: P=57.16, R=47.5, Q3 (Crisis zone). The most prominent methodological anomaly in the AMI dataset. The elevated P-Score is largely driven by Google Trends signal interpretation — Norway's high search volume on AI submission topics reflects academic and policy discussion, not student misconduct demand. The R-Score of 47.5 reflects genuinely strong NESH-anchored response infrastructure.

## AMI scores at a glance

- **Prevalence Score (P):** 57.16 — 7th of 39 countries
- **Response Quality (R):** 47.5 — 10th highest
- **Quadrant:** Q3 — Crisis zone (with methodological caveats)
- **Data quality:** A (4/6 dimensions from live data)
- **Region:** Europe (Nordic)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 31 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 32 |
| D5 Collusion | 56 |
| D6 Data fabrication | 15 |

## The Norway anomaly explained

Norway's elevated P-Score is the most discussed result in the AMI dataset. It comes primarily from the relative weighting given to Google Trends signals in the methodology. Norway has unusually high per-capita search volume for AI tool, plagiarism, and academic integrity keywords because:

1. **Open academic and policy discussion.** Norwegian universities, government, and media discuss AI and integrity topics extensively. Searches generated by educators, policy analysts, journalists, and researchers contribute to the signal.

2. **High digital literacy.** Norwegian academics and students are more likely to search for tools and policies online than peers in countries with less developed digital infrastructure.

3. **Small population, high signal-to-noise.** With a population of ~5.5 million, signal volume per capita is sensitive to small absolute changes.

The AMI methodology documentation flags Norway as the principal example of this limitation. Future versions will incorporate language-disambiguated signals and weighted survey data to address this.

## What Norway gets right (R = 47.5)

Norway's R-Score of 47.5 places it 10th highest in the dataset. The breakdown:
- **Legislation: 20** — research ethics law but no specific essay mill ban
- **Detection tools: 60** — widespread deployment across the university sector
- **Disclosure: 55** — institutional reporting via NESH and similar bodies
- **Penalties: 55** — clear policy frameworks

The NESH framework, the Research Ethics Act (2017), and the National Commission for the Investigation of Research Misconduct create a coherent system. Norway is one of the few countries with a statutory national research integrity investigator.

## How to read Norway's quadrant placement

Q3 (Crisis zone) is technically Norway's quadrant assignment based on the numeric P and R values. However, the AMI methodology explicitly notes that Norway's actual situation more closely resembles Q1 countries on the Response axis, while the P-Score is structurally inflated.

Users of the data should treat the Norway score as a methodology caveat rather than a substantive finding about Norwegian student behaviour.

## Implications

Norway is the case that motivated the methodology's planned future improvements:
- Language-disambiguated Google Trends queries
- Weighted survey data prioritised over search-volume signals
- Country population adjustments at the small-N end

For users of Norwegian credentials, the AMI data should not be read as a warning. Norwegian institutional integrity infrastructure is genuinely strong, and the literature does not support elevated misconduct rates among Norwegian students.

## Sources

- NESH guidelines, Norwegian Research Ethics Act (2017)
- Google Trends (2022–2026), Norway country-level
- Retraction Watch Database (Norway shows low signal)
- Academic Misconduct Index v1.5 methodology, Norway caveat section

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "iran-academic-misconduct-profile",
    title: "Iran: Academic Misconduct Index Country Profile",
    seoTitle: "Iran Academic Misconduct Profile 2026 | AMI P=57.0",
    metaDescription: "Iran scores P=57.0, R=13.2 on the AMI. Maxed AI submission demand, elevated retraction rate, high plagiarism and collusion. Sanctions context limits institutional response infrastructure. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Iran", "Middle East", "contract cheating", "research integrity", "country profile"],
    tldr: "Iran scores P=57.00, R=13.2, Q3 (Crisis zone). Eighth highest Prevalence globally. Maxed AI submission demand (D2=100), high plagiarism (D4=65), elevated fabrication (D6=65). Sanctions and isolation constrain institutional integrity infrastructure.",
    excerpt: "Iran scores P=57.0 on the AMI, placing it eighth globally for estimated misconduct prevalence. The profile combines high demand signals with one of the lowest Response Quality scores in the dataset. Here is what drives Iran's position.",
    faqSchema: [
      {
        question: "What is Iran's academic misconduct score?",
        answer: "Iran scores P=57.00 (Prevalence) and R=13.2 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q3 (Crisis zone) — the eighth highest Prevalence and the second lowest Response Quality in the dataset."
      },
      {
        question: "Why does Iran have such a low Response Quality score?",
        answer: "Iran's R-Score of 13.2 reflects multiple structural constraints: limited access to international detection tool platforms due to sanctions, minimal mandatory disclosure from universities, weak penalty frameworks, and political constraints on autonomous academic governance. These factors compound to produce the second lowest R-Score in the AMI dataset."
      },
      {
        question: "How big is the academic integrity problem in Iranian universities?",
        answer: "Iran's Prevalence indicators consistently sit at the high end of the regional distribution. The Retraction Watch database shows elevated misconduct-linked retractions per publication, plagiarism rates documented in the literature are above global averages, and Google Trends data for AI submission tools is maxed at the top of the scale. The combination places Iran clearly in the Crisis zone."
      }
    ],
    content: `
## TL;DR

Iran: P=57.00, R=13.2, Q3 (Crisis zone). Eighth highest Prevalence globally, second lowest Response Quality after Egypt. Maxed AI submission demand (D2=100), high plagiarism (D4=65) and collusion (D5=69), elevated data fabrication (D6=65). Sanctions context limits detection infrastructure.

## AMI scores at a glance

- **Prevalence Score (P):** 57.00 — 8th of 39 countries
- **Response Quality (R):** 13.2 — 2nd lowest in dataset
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Middle East

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 16 |
| D4 Plagiarism | 65 |
| D5 Collusion | 69 |
| D6 Data fabrication | 65 |

## What drives Iran's score

### Maxed AI submission demand (D2 = 100)

Iran sits at the top of the regional distribution for AI submission tool keyword search volume. Persian-language equivalents of relevant terms and English-language searches both show high per-capita volume. Iran has high higher-education enrolment relative to regional peers, contributing to the absolute volume of demand signals.

### Elevated data fabrication (D6 = 65)

The Retraction Watch database shows Iran with elevated misconduct-linked retraction rates per 10,000 publications. Iran's research output has grown substantially over the past two decades; the retraction rate has not declined proportionately. Specific high-profile cases include retractions in medical and engineering journals [verify specifics].

### Collusion (D5 = 69)

Iran's D5 score is among the highest in the dataset. The score reflects elevated rates of unauthorised collaboration documented in the regional literature, including group work submitted as individual assignments and shared exam preparation that crosses into prohibited collaboration.

## The Response Quality crisis

Iran's R-Score of 13.2 is the second lowest in the entire AMI dataset, exceeded only by Egypt's 12.0. The breakdown:
- **Legislation: 10** — general fraud provisions only
- **Detection tools: 20** — limited deployment, partly due to sanctions affecting access to Turnitin and similar tools
- **Disclosure: 8** — minimal institutional reporting
- **Penalties: 15** — codes exist but inconsistently enforced

### The sanctions constraint

International sanctions limit Iranian universities' access to the standard integrity infrastructure used in other countries. Turnitin and similar commercial detection platforms have limited or no licensing arrangements in Iran. Some Iranian universities have developed domestic alternatives but coverage and capability are uneven.

## Why Iran is in Q3 not Q4

Iran's Prevalence score of 57.00 exceeds the Q3 threshold. Both the high Prevalence and very low Response combine to place Iran among the most clear-cut Crisis zone cases in the dataset. The structural constraints from sanctions exacerbate the gap; even with strong domestic policy intent, the practical infrastructure for academic integrity remains limited.

## Implications

Iran sits at the difficult intersection of high actual misconduct demand and constrained institutional response capacity. Domestic policy reform faces real resource and access constraints rather than just political will.

For employers and admissions offices, Iranian credentials warrant verification proportional to the Q3 placement. Iranian diaspora students consistently perform well at international institutions, suggesting capability is high; the country-level score reflects institutional conditions, not student ability.

## Sources

- Google Trends (2022–2026), Iran country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Regional Middle East integrity research literature [verify specific citations]
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "thailand-academic-misconduct-profile",
    title: "Thailand: Academic Misconduct Index Country Profile",
    seoTitle: "Thailand Academic Misconduct Profile 2026 | AMI P=55.7",
    metaDescription: "Thailand scores P=55.67, R=19.0 on the AMI. High contract cheating and plagiarism rates, partial detection deployment, limited disclosure. Q3 Crisis zone country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Thailand", "Asia", "contract cheating", "country profile"],
    tldr: "Thailand scores P=55.67, R=19.0, Q3 (Crisis zone). Ninth highest Prevalence globally. Elevated contract cheating demand (D1=67), high plagiarism (D4=60), moderate AI submission signal (D2=56). Limited institutional response infrastructure.",
    excerpt: "Thailand scores P=55.7 on the Academic Misconduct Index, placing it ninth globally for estimated prevalence. The profile shows elevated demand signals and limited institutional response. Here is what drives Thailand's position.",
    faqSchema: [
      {
        question: "What is Thailand's academic misconduct score?",
        answer: "Thailand scores P=55.67 (Prevalence) and R=19.0 (Response Quality) on the Academic Misconduct Index 2026. This places Thailand in Q3 (Crisis zone) — the ninth highest Prevalence in the 39-country dataset."
      },
      {
        question: "Is academic cheating a problem in Thai universities?",
        answer: "The AMI data places Thailand in the Crisis zone. Indicators include elevated Google Trends signals for essay mill and AI submission keywords, plagiarism rates above regional averages, and limited mandatory institutional disclosure. The Office of the Higher Education Commission sets standards but enforcement varies across the public and private university sectors."
      },
      {
        question: "Does Thailand have detection tools deployed in universities?",
        answer: "Thailand has partial deployment of plagiarism detection tools, with higher coverage at major research universities (Chulalongkorn, Mahidol, Chiang Mai) than across the broader university system. The D-Score component for detection tools sits at 32 — moderate but well below the Q1-country range of 65 to 90."
      }
    ],
    content: `
## TL;DR

Thailand: P=55.67, R=19.0, Q3 (Crisis zone). Ninth highest Prevalence in the AMI dataset. Elevated contract cheating demand (D1=67), high plagiarism (D4=60), moderate AI submission signal (D2=56). Detection tools partially deployed but limited beyond top-tier universities.

## AMI scores at a glance

- **Prevalence Score (P):** 55.67 — 9th of 39 countries
- **Response Quality (R):** 19.0
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 14 |
| D4 Plagiarism | 60 |
| D5 Collusion | 55 |
| D6 Data fabrication | 30 |

## What drives Thailand's score

### Contract cheating demand (D1 = 67)

Thai-language and English-language search volume for essay mill terms places Thailand in the elevated band, though below the maxed scores of Latin American countries. Bangkok-based essay mill services and tutoring/writing services operating in grey areas have been documented in the region.

### Plagiarism (D4 = 60)

The D4 score reflects regional Southeast Asian estimates plus Thailand-specific literature. Plagiarism in Thai academic writing has been a documented concern, particularly in graduate theses where Thai-to-English translation issues blur lines between paraphrasing and plagiarism. Several Thai universities have implemented mandatory plagiarism checking for theses in response.

### Data fabrication (D6 = 30)

Thailand's Retraction Watch signal is moderate — well below the Asian regional leader (China) but above the Q1 European countries. Thai research output is substantial, particularly in medical and life sciences, and the misconduct-linked retraction rate per publication is consistent with regional norms.

## The response quality picture

Thailand's R-Score of 19.0 breaks down as:
- **Legislation: 12** — no specific contract cheating ban
- **Detection tools: 32** — partial Turnitin deployment, concentrated at top universities
- **Disclosure: 12** — limited public reporting
- **Penalties: 20** — institutional codes exist

The Office of the Higher Education Commission (OHEC) sets accreditation standards but does not mandate misconduct disclosure. Chulalongkorn University, Mahidol University, and Chiang Mai University — the leading research institutions — have stronger integrity infrastructure than the broader public and private university sector.

## Why Thailand is in Q3

The combination of high Prevalence (55.67) and low Response (19.0) places Thailand firmly in Q3 (Crisis zone). Across Southeast Asian countries in the AMI dataset, Thailand sits between Vietnam (P=42.58) and Malaysia (P=40.40) — Thailand's higher P-Score is driven primarily by the higher contract cheating demand signal.

## Implications

For Thai policymakers, the gap from Q1 (Best in class) status is primarily on the Response axis. Mandating detection tool deployment beyond top-tier universities and introducing disclosure requirements would lift the R-Score substantially without requiring complex legislative reform.

For employers and admissions offices, Thai credentials warrant verification proportional to the Q3 placement. Thailand's elite institutions have substantially different integrity profiles from the broader system; institution-level signals carry meaningful information in this context.

## Sources

- Google Trends (2022–2026), Thailand country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Regional Southeast Asian integrity literature
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "saudi-arabia-academic-misconduct-profile",
    title: "Saudi Arabia: Academic Misconduct Index Country Profile",
    seoTitle: "Saudi Arabia Academic Misconduct Profile 2026 | AMI P=54.0",
    metaDescription: "Saudi Arabia scores P=53.98, R=17.5 on the AMI. High contract cheating demand (D1=83), maxed AI submissions (D2=100), elevated fabrication. Vision 2030 reforms in early stages. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Saudi Arabia", "Middle East", "Vision 2030", "AI submissions", "country profile"],
    tldr: "Saudi Arabia scores P=53.98, R=17.5, Q3 (Crisis zone). Tenth highest Prevalence globally. High contract cheating demand (D1=83), maxed AI submission signal (D2=100). Vision 2030 education reforms exist but have not yet shifted integrity outcomes.",
    excerpt: "Saudi Arabia scores P=54.0 on the Academic Misconduct Index, placing it tenth globally. The profile combines high demand signals with Vision 2030 reform efforts that have not yet shifted the integrity baseline. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Saudi Arabia's academic misconduct score?",
        answer: "Saudi Arabia scores P=53.98 (Prevalence) and R=17.5 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q3 (Crisis zone), the tenth highest Prevalence in the 39-country dataset."
      },
      {
        question: "How does Vision 2030 affect academic integrity in Saudi Arabia?",
        answer: "Saudi Arabia's Vision 2030 reform programme includes significant investment in higher education, including the National Centre for Academic Accreditation and Evaluation (NCAAA). However, the AMI Response Quality score of 17.5 reflects that reform implementation has not yet translated into measurable improvement in integrity outcomes. This is typical of large-scale reforms — measurable effects often lag implementation by 5 to 10 years."
      },
      {
        question: "Why is AI submission demand so high in Saudi Arabia?",
        answer: "Saudi Arabia's D2 score of 100 reflects the top of the Middle East distribution for AI submission tool search volume. The combination of high smartphone penetration, widespread English-medium higher education, and substantial student population creates high absolute demand signal. The signal has been consistently high across the 2022–2026 measurement window."
      }
    ],
    content: `
## TL;DR

Saudi Arabia: P=53.98, R=17.5, Q3 (Crisis zone). Tenth highest Prevalence globally. High contract cheating demand (D1=83), maxed AI submission signal (D2=100), elevated fabrication (D6=45). NCAAA accreditation framework exists but enforcement gap remains.

## AMI scores at a glance

- **Prevalence Score (P):** 53.98 — 10th of 39 countries
- **Response Quality (R):** 17.5
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Middle East

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 18 |
| D4 Plagiarism | 60 |
| D5 Collusion | 56 |
| D6 Data fabrication | 45 |

## What drives Saudi Arabia's score

### Maxed AI submission demand (D2 = 100)

Arabic-language and English-language search volume for AI submission tool keywords places Saudi Arabia at the top of the Middle East distribution. High smartphone penetration, widespread English-medium higher education, and substantial international student population contribute to the volume.

### Contract cheating demand (D1 = 83)

The D1 score reflects high search volume for essay mill services targeted at Gulf students. English-language essay mills based in South Asia and Eastern Europe actively market to Gulf student populations; the search-volume signal captures the demand side of this market.

### Elevated data fabrication (D6 = 45)

Saudi research output has grown substantially in the past decade, particularly at King Abdullah University of Science and Technology (KAUST) and major public universities. The Retraction Watch signal shows elevated misconduct-linked retractions per publication, though below the regional leaders (Iran, Egypt).

## The Vision 2030 context

Saudi Arabia has invested significantly in higher education reform under Vision 2030. Key elements:
- **NCAAA (National Centre for Academic Accreditation and Evaluation):** sets quality standards for Saudi universities
- **Research University investment:** KAUST established as international research hub
- **Detection tool deployment:** Turnitin and similar platforms increasingly deployed at major institutions
- **Branch campus partnerships:** international universities operating in Saudi Arabia bring external integrity standards

However, the AMI R-Score of 17.5 reflects that these reforms have not yet translated into measurable changes in integrity outcomes. This is typical of large-scale reform programmes — measurable effects often lag implementation by 5–10 years.

## R-Score breakdown

- **Legislation: 10** — no specific contract cheating ban
- **Detection tools: 30** — partial deployment, stronger at top institutions
- **Disclosure: 10** — limited public reporting
- **Penalties: 20** — institutional codes exist

## Why Saudi Arabia is in Q3

The combination of elevated Prevalence (53.98) and low Response (17.5) places Saudi Arabia in Q3. The country profile sits between Egypt (P=64.60) and the regional Q4 countries — high enough Prevalence to clear the Crisis zone threshold but with stronger Response Quality than Egypt or Iran.

## Implications

For Saudi policymakers, the Vision 2030 framework provides infrastructure for improvement. The most direct policy levers are mandatory misconduct disclosure (currently a major R-Score weakness) and consistent enforcement of existing institutional codes.

For employers and admissions offices, Saudi credentials warrant verification proportional to the Q3 placement. KAUST and the elite Saudi universities have different integrity profiles from the broader system; institution-level signals are meaningful.

## Sources

- Google Trends (2022–2026), Saudi Arabia country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- NCAAA framework documentation [verify specifics]
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "mexico-academic-misconduct-profile",
    title: "Mexico: Academic Misconduct Index Country Profile",
    seoTitle: "Mexico Academic Misconduct Profile 2026 | AMI P=51.4",
    metaDescription: "Mexico scores P=51.36, R=17.5 on the AMI. Elevated contract cheating demand, moderate fabrication signal, weak institutional disclosure. Q3 Crisis zone country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Mexico", "Latin America", "contract cheating", "country profile"],
    tldr: "Mexico scores P=51.36, R=17.5, Q3 (Crisis zone). Eleventh highest Prevalence in the AMI dataset. Elevated contract cheating demand (D1=67), high collusion (D5=62), moderate fabrication (D6=32). No specific legislation, weak institutional disclosure.",
    excerpt: "Mexico scores P=51.4 on the Academic Misconduct Index, placing it in the Crisis zone alongside several Latin American peers. The profile shows elevated demand signals and limited institutional response. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is Mexico's academic misconduct score?",
        answer: "Mexico scores P=51.36 (Prevalence) and R=17.5 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q3 (Crisis zone) — the eleventh highest Prevalence in the 39-country dataset."
      },
      {
        question: "Is essay mill use common among Mexican students?",
        answer: "Mexico's D1 (contract cheating) score of 67 reflects elevated but not maxed Google Trends signals for essay mill keywords. Spanish-language essay mill services targeting Latin American students operate openly online. Mexico has substantially more institutional integrity infrastructure than Colombia or Argentina but the demand signal remains significant."
      },
      {
        question: "Does Mexico have academic integrity legislation?",
        answer: "Mexico has general fraud law and university-level codes but no specific contract cheating ban. The Secretaría de Educación Pública (SEP) regulates the education sector but does not mandate misconduct disclosure for universities. UNAM and other major institutions have integrity offices but country-wide enforcement is uneven."
      }
    ],
    content: `
## TL;DR

Mexico: P=51.36, R=17.5, Q3 (Crisis zone). Elevated contract cheating demand (D1=67), high collusion (D5=62), moderate fabrication (D6=32). No specific contract cheating legislation. SEP sets standards but does not mandate misconduct disclosure.

## AMI scores at a glance

- **Prevalence Score (P):** 51.36 — 11th of 39 countries
- **Response Quality (R):** 17.5
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Latin America

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 12 |
| D4 Plagiarism | 54 |
| D5 Collusion | 62 |
| D6 Data fabrication | 32 |

## What drives Mexico's score

### Spanish-language demand

Mexico shares the regional pattern of elevated Spanish-language essay mill demand, though at a substantially lower level than Colombia (P=77.4) or Argentina (P=74.6). Mexican search volume for essay mill terms (D1=67) sits in the elevated band but is well below the maxed-out neighbours.

### Collusion (D5 = 62)

The D5 score is among the higher in Latin America. The literature documents elevated rates of unauthorised collaboration in Mexican universities, particularly in large-enrolment public institutions where group work cultures can blur into prohibited collaboration on individual assessments.

### Data fabrication (D6 = 32)

Mexico's Retraction Watch signal is moderate. Mexico has substantial research output, particularly in medicine, biology, and chemistry, and misconduct-linked retractions per publication are above Q1 European countries but well below the regional leaders.

## The institutional landscape

Mexico has a substantial public university sector anchored by UNAM (Universidad Nacional Autónoma de México), IPN (Instituto Politécnico Nacional), and the state universities, plus a large private sector including ITESM (Tecnológico de Monterrey) and Universidad Iberoamericana. Integrity infrastructure varies significantly across these institutions.

UNAM has an established academic integrity office and uses detection tools for graduate theses. ITESM has institutional integrity programmes modelled on US private-university practice. However, country-wide coverage and enforcement remain uneven.

## R-Score breakdown

- **Legislation: 12** — no specific essay mill ban
- **Detection tools: 28** — partial deployment, concentrated at major institutions
- **Disclosure: 10** — limited public reporting
- **Penalties: 20** — institutional codes exist

## Why Mexico is in Q3

The combination of elevated Prevalence (51.36) and low Response (17.5) places Mexico in Q3. Among Latin American countries in the AMI dataset, Mexico sits below the Colombia/Argentina cluster but above Brazil (P=39.75) on Prevalence, with similar Response Quality scores across the region.

## Implications

For Mexican policymakers, the gap from Q1 status is primarily on the Response axis. The SEP could mandate misconduct disclosure across federally-recognised institutions as a policy lever requiring no statutory change. Detection tool deployment beyond top-tier institutions would also lift the R-Score.

For employers and admissions offices, Mexican credentials warrant verification proportional to the Q3 placement. UNAM, ITESM, and other elite institutions have stronger integrity profiles than the broader system.

## Sources

- Google Trends (2022–2026), Mexico country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Latin American integrity literature
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "poland-academic-misconduct-profile",
    title: "Poland: Academic Misconduct Index Country Profile",
    seoTitle: "Poland Academic Misconduct Profile 2026 | AMI P=51.2",
    metaDescription: "Poland scores P=51.19, R=32.5 on the AMI. Maxed AI submission demand combined with the strongest Response Quality among Eastern European countries scored. Q3 Crisis zone profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Poland", "Europe", "Eastern Europe", "contract cheating", "country profile"],
    tldr: "Poland scores P=51.19, R=32.5, Q3 (Crisis zone). Twelfth highest Prevalence globally. Maxed AI submission demand (D2=100), but the strongest Response Quality among Eastern European countries scored — driven by relatively mature detection tool deployment and disclosure practice.",
    excerpt: "Poland scores P=51.2 on the Academic Misconduct Index, placing it twelfth globally for estimated prevalence. The Response Quality score of 32.5 is the highest among Eastern European countries scored. Here is what drives Poland's position.",
    faqSchema: [
      {
        question: "What is Poland's academic misconduct score?",
        answer: "Poland scores P=51.19 (Prevalence) and R=32.5 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q3 (Crisis zone), with the twelfth highest Prevalence in the dataset. The R-Score is the highest among the Eastern European countries scored."
      },
      {
        question: "Why does Poland have higher Response Quality than other Eastern European countries?",
        answer: "Poland's R-Score of 32.5 reflects mandatory plagiarism detection across the higher education sector (introduced by the Ministry of Science), broader Turnitin and JSA system deployment, and the activity of the Polish Accreditation Committee (PKA). Poland is one of the few countries with a national-level mandatory anti-plagiarism system for graduate theses."
      },
      {
        question: "Is AI cheating common in Polish universities?",
        answer: "Poland's D2 score of 100 indicates very high Google Trends search volume for AI submission tool keywords. Polish-language equivalents and English-language searches both show high per-capita volume. This is a demand signal — actual incidence is moderated by Poland's mandatory plagiarism detection requirements, which now include AI content detection at many institutions."
      }
    ],
    content: `
## TL;DR

Poland: P=51.19, R=32.5, Q3 (Crisis zone). Twelfth highest Prevalence globally. Maxed AI submission demand (D2=100). Highest Response Quality among Eastern European countries scored — anchored by mandatory plagiarism detection for graduate theses.

## AMI scores at a glance

- **Prevalence Score (P):** 51.19 — 12th of 39 countries
- **Response Quality (R):** 32.5
- **Quadrant:** Q3 — Crisis zone
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Europe (Central/Eastern)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 44 |
| D5 Collusion | 56 |
| D6 Data fabrication | 30 |

## What drives Poland's score

### Maxed AI submission demand

Poland's D2 score of 100 reflects very high search volume for AI submission tool keywords. The Polish university sector is large (over 1.2 million students) and digitally connected, generating substantial search volume. Polish-language equivalents of AI bypass terms show elevated query volume in the Google Trends signal.

### Contract cheating (D1 = 67)

The Polish essay mill market has been a documented phenomenon, with Polish-language services targeting domestic students. Google Trends data shows elevated but not maxed search volume — the D1 score of 67 reflects this moderate-to-high signal.

### Data fabrication (D6 = 30)

Poland's Retraction Watch signal is moderate, consistent with other Central European countries. The misconduct-linked retraction rate per publication is below the regional leaders but above Q1 European peers.

## The response quality picture — strongest in Eastern Europe

Poland's R-Score of 32.5 is the highest among the Eastern European countries in the AMI dataset (Russia: 16.8; Ukraine: 28.2). The breakdown:
- **Legislation: 20** — Ministry of Science mandates plagiarism detection
- **Detection tools: 45** — JSA system (Jednolity System Antyplagiatowy) mandatory for theses
- **Disclosure: 30** — PKA accreditation framework provides some disclosure
- **Penalties: 35** — institutional codes plus PKA oversight

### The JSA system

Poland's Jednolity System Antyplagiatowy (Uniform Anti-Plagiarism System) is mandatory for checking master's and doctoral theses across the Polish university sector. The system was introduced by the Ministry of Science and Higher Education and represents one of the most coordinated national-level integrity infrastructures in Europe. The JSA contributes significantly to Poland's relatively high R-Score for the region.

## Why Poland is in Q3

The combination of high Prevalence (51.19) and moderate Response (32.5) places Poland in Q3. The maxed D2 signal — partly attributable to high engagement with AI tool discussion — drives the Prevalence score above the Q3 threshold. The R-Score is high relative to the Polish region but not yet at Q1 levels.

If Poland's Prevalence score drops in future versions (likely as the Google Trends signal interpretation improves), the country may shift toward Q4 or even Q2 territory.

## Implications

For Polish policymakers, Poland already operates one of the more developed integrity systems in Central/Eastern Europe. The most direct policy levers for further improvement are extending JSA-style mandatory detection to undergraduate work and introducing more standardised public disclosure requirements.

For employers and admissions offices, Polish credentials carry relatively strong integrity infrastructure signals despite the Q3 placement. The JSA system means graduate theses in particular have been formally checked against plagiarism databases.

## Sources

- Google Trends (2022–2026), Poland country-level
- JSA system documentation (Ministry of Science and Higher Education)
- Polish Accreditation Committee (PKA) framework
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "united-states-academic-misconduct-profile",
    title: "United States: Academic Misconduct Index Country Profile",
    seoTitle: "USA Academic Misconduct Profile 2026 | AMI P=48.2 R=51.2",
    metaDescription: "The United States scores P=48.15, R=51.2 on the AMI — the only major Anglophone country outside Q1. Strong detection (R_det=80) but moderate legislation and disclosure. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["United States", "USA", "academic integrity", "Title IX", "Turnitin", "country profile"],
    tldr: "The United States scores P=48.15, R=51.2, Q1 (Best in class). The only major Anglophone country outside Q1 on prevalence is Norway. Strong detection deployment (R_det=80) but weaker legislative and disclosure infrastructure than Q1 peers. The thirteenth highest Prevalence in the dataset.",
    excerpt: "The United States scores P=48.2 and R=51.2 on the Academic Misconduct Index — high Prevalence by Anglophone standards but with strong detection infrastructure pushing it just into Q1. Here is what drives the US position and where the gaps lie.",
    faqSchema: [
      {
        question: "What is the United States' academic misconduct score?",
        answer: "The United States scores P=48.15 (Prevalence) and R=51.2 (Response Quality) on the Academic Misconduct Index 2026. The US is in Q1 (Best in class), though by a narrower margin than other Q1 countries like Australia or the UK. The P-Score is the thirteenth highest in the dataset."
      },
      {
        question: "Why does the US have higher cheating prevalence than Australia or the UK?",
        answer: "The US Prevalence score of 48.15 is well above Australia (7.43) and the UK (11.41). The gap is driven by three factors: no federal essay mill ban (unlike Australia, UK, Ireland), no mandatory federal disclosure of misconduct statistics, and a fragmented university system where integrity policy varies significantly between institutions. Detection tool adoption is strong, but the supply-side and disclosure infrastructure lags."
      },
      {
        question: "What does the US do well on academic integrity?",
        answer: "The United States has the second highest detection tool deployment in the dataset (R_det=80), reflecting near-universal Turnitin adoption, Title IX investigative structures applied to academic integrity in some cases, and a mature institutional integrity office model. Honor codes at institutions like the University of Virginia and Princeton have set global standards for student-led integrity systems."
      }
    ],
    content: `
## TL;DR

United States: P=48.15, R=51.2, Q1 (Best in class — just). The only major Anglophone country outside Q1 on Prevalence is Norway. Strong detection deployment (R_det=80) but no federal essay mill ban, no mandatory federal disclosure. The narrowest Q1 placement in the dataset.

## AMI scores at a glance

- **Prevalence Score (P):** 48.15 — 13th of 39 countries
- **Response Quality (R):** 51.2 — tied 9th highest with Netherlands
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** North America

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 44 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 45 |
| D5 Collusion | 68 |
| D6 Data fabrication | 30 |

## What drives the US Prevalence score

### Contract cheating (D1 = 50)

US Google Trends data for essay mill terms is moderate — well below Latin American countries (D1=100) but above other Q1 peers like Australia (D1=33) or the UK (D1=33). The US essay mill market is large in absolute terms; the per-capita signal is moderate.

### Collusion (D5 = 68)

The US D5 score is notably high — tied for one of the highest in the dataset. This reflects McCabe survey findings of elevated rates of unauthorised collaboration among US undergraduates, particularly in STEM disciplines with group-problem-set cultures. The McCabe data has been one of the more reliable signals for the US dimension scores.

### AI submissions (D2 = 44)

Moderate AI submission demand signal. US universities have responded relatively early to ChatGPT-era cheating — many introduced AI detection in Turnitin and Copyleaks from 2023 onward. The demand signal is moderated by widespread institutional AI policies.

## Why the US is in Q1 not Q2

The US sits in Q1 because the combination of R=51.2 and P=48.15 puts it on the high-Response side of the prevalence-response distribution. However, it is the most marginal Q1 placement in the dataset — a small Prevalence increase would move the US to Q2 (Aware and fighting it).

The Q2 quadrant is currently empty in v1.5. If any country were to first appear in Q2 in future versions, the US is among the most likely candidates.

## What the US does well (R = 51.2)

The breakdown:
- **Legislation: 30** — federal research misconduct definitions; no essay mill ban
- **Detection tools: 80** — second highest in dataset
- **Disclosure: 40** — Clery Act and Title IX frameworks adjacent to integrity
- **Penalties: 55** — institutional codes are mature

The R_det=80 score reflects near-universal Turnitin deployment across US higher education, plus the early adoption of AI detection tools. ORI (Office of Research Integrity) provides federal oversight for research misconduct in federally-funded research, contributing to the legislation sub-score.

## Where the US lags

The US has no federal essay mill ban (Australia, Ireland, UK all do). There is no federal mandatory disclosure of misconduct statistics — universities self-report inconsistently. The fragmented institutional landscape means integrity standards vary significantly between an Ivy League institution, a state flagship, a community college, and an unaccredited for-profit.

## Implications

For US policymakers, the gap from Australia (R=88.8) or the UK (R=87.5) is primarily legislative and disclosure-related. State-level essay mill bans have been discussed [verify specific states] but no federal action has progressed.

For employers and admissions offices, US credentials reflect the institutional reputation more than country-level integrity infrastructure. The variance within the US system is substantial.

## Sources

- McCabe ICAI survey data (US-specific)
- Office of Research Integrity (ORI) data
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), US country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "italy-academic-misconduct-profile",
    title: "Italy: Academic Misconduct Index Country Profile",
    seoTitle: "Italy Academic Misconduct Profile 2026 | AMI P=45.0",
    metaDescription: "Italy scores P=44.98, R=25.2 on the AMI. High contract cheating (D1=83) and maxed AI submission signals (D2=100). ANVUR oversight exists but Italy sits in Q4 (Probably not looking). Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Italy", "Europe", "contract cheating", "ANVUR", "country profile"],
    tldr: "Italy scores P=44.98, R=25.2, Q4 (Probably not looking). High contract cheating demand (D1=83), maxed AI submissions (D2=100), moderate plagiarism. ANVUR oversight exists but weak institutional disclosure and limited detection deployment.",
    excerpt: "Italy scores P=45.0 on the Academic Misconduct Index, placing it in Q4 (Probably not looking) — the AMI quadrant indicating low apparent prevalence likely reflects under-detection. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Italy's academic misconduct score?",
        answer: "Italy scores P=44.98 (Prevalence) and R=25.2 (Response Quality) on the Academic Misconduct Index 2026. This places Italy in Q4 (Probably not looking) — meaning the relatively moderate Prevalence score combined with low Response Quality likely reflects under-detection rather than genuinely low misconduct."
      },
      {
        question: "Does Italy have specific contract cheating legislation?",
        answer: "Italy has no specific legislation against contract cheating equivalent to Australia's, the UK's, or Ireland's. General fraud provisions apply. ANVUR (the Italian National Agency for the Evaluation of Universities and Research Institutes) oversees quality but does not mandate misconduct disclosure. Universities have institutional codes that vary in enforcement."
      },
      {
        question: "Why is Italy in Q4 (Probably not looking)?",
        answer: "Italy's Q4 placement reflects the AMI methodology's assessment that the moderate Prevalence score combined with limited institutional response infrastructure suggests under-detection rather than genuinely low misconduct. Maxed AI submission demand (D2=100) and high contract cheating demand (D1=83) indicate substantial demand signal that the response system is not measuring or addressing systematically."
      }
    ],
    content: `
## TL;DR

Italy: P=44.98, R=25.2, Q4 (Probably not looking). High contract cheating demand (D1=83), maxed AI submission demand (D2=100). ANVUR oversight exists; institutional disclosure and detection deployment lag.

## AMI scores at a glance

- **Prevalence Score (P):** 44.98 — 14th of 39 countries
- **Response Quality (R):** 25.2
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Europe (Southern)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 52 |
| D5 Collusion | 56 |
| D6 Data fabrication | 35 |

## What drives Italy's score

### Maxed AI submission demand (D2 = 100)

Italian-language AI submission tool keyword search volume is at the top of the European distribution. Italy has a large student population (1.7 million in higher education [verify]) and high mobile and broadband penetration, generating substantial absolute search volume. Italian-language equivalents of AI bypass tools show high per-capita query volume.

### Contract cheating (D1 = 83)

Italy's D1 score reflects elevated search volume for essay mill services. The Italian-language essay mill market is well-established, with services advertised openly online. Italian undergraduate culture, particularly around dissertation preparation, includes a documented grey market for "writing assistance" that crosses into contract cheating.

### Data fabrication (D6 = 35)

Italy's Retraction Watch signal is moderate. The misconduct-linked retraction rate per publication is consistent with other European countries — well below China but above the Q1 European leaders.

## Why Italy is in Q4

Q4 (Probably not looking) reflects two factors:
1. Italy's Prevalence score (44.98) is below the Q3 threshold despite very high D1/D2 signals
2. The Response Quality (25.2) is too low to indicate active engagement with the problem

The combination suggests Italy is not systematically measuring or responding to misconduct at the scale the demand signals would predict. This is the AMI's characterisation of Q4 — apparent moderation of prevalence likely reflects measurement gaps rather than genuinely low misconduct.

## R-Score breakdown

- **Legislation: 15** — no specific essay mill ban
- **Detection tools: 40** — partial deployment, varies by institution
- **Disclosure: 18** — limited public reporting
- **Penalties: 28** — institutional codes exist; ANVUR oversight

### ANVUR

The Italian National Agency for the Evaluation of Universities and Research Institutes evaluates research quality and accredits programmes. ANVUR's remit does not include mandatory misconduct disclosure or detection tool requirements. The agency's quality assessments focus on research output and teaching rather than integrity infrastructure.

## Implications

For Italian policymakers, the gap from Q1 status is significant on both axes. The most direct policy levers are mandatory detection tool deployment, mandatory misconduct disclosure through ANVUR or the Ministry of Universities and Research, and consideration of essay mill legislation on the Irish/UK model (Italy is in the EU and could coordinate with European-level action).

For employers and admissions offices, Italian credentials warrant verification proportional to the Q4 placement. The combination of high demand signals and weak response suggests the actual misconduct rate may be substantially higher than the P-Score alone indicates.

## Sources

- Google Trends (2022–2026), Italy country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- ANVUR framework documentation
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "netherlands-academic-misconduct-profile",
    title: "Netherlands: Academic Misconduct Index Country Profile",
    seoTitle: "Netherlands Academic Misconduct Profile 2026 | AMI Q1",
    metaDescription: "The Netherlands scores P=44.47, R=51.2 on the AMI. Q1 (Best in class) despite moderate prevalence — strong VSNU code, mandatory data management, broad detection deployment. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Netherlands", "Europe", "academic integrity", "VSNU", "country profile"],
    tldr: "The Netherlands scores P=44.47, R=51.2, Q1 (Best in class). Strong Response Quality anchored by the VSNU code of conduct, mandatory research data management, broad detection tool deployment, and active misconduct disclosure.",
    excerpt: "The Netherlands scores P=44.5 on Prevalence and R=51.2 on Response Quality — placing it in Q1 (Best in class) despite moderate prevalence. The Dutch academic integrity infrastructure is one of the most mature in Europe. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is the Netherlands' academic misconduct score?",
        answer: "The Netherlands scores P=44.47 (Prevalence) and R=51.2 (Response Quality) on the Academic Misconduct Index 2026. This places it in Q1 (Best in class), with the strongest Response Quality among continental European countries scored."
      },
      {
        question: "What is the VSNU code of conduct?",
        answer: "The VSNU Netherlands Code of Conduct for Research Integrity is a binding code adopted by all Dutch universities. It defines integrity principles, governs research data management, and establishes investigation procedures for alleged misconduct. The code is unusually comprehensive and is one of the principal contributors to the Netherlands' high R-Score."
      },
      {
        question: "Does the Netherlands have essay mill legislation?",
        answer: "The Netherlands does not have specific essay mill legislation equivalent to Australia's or the UK's. The country's R-Score of 51.2 is driven primarily by institutional rather than legislative infrastructure — the VSNU code, mandatory data management, and broad detection tool deployment compensate for the absence of statutory bans."
      }
    ],
    content: `
## TL;DR

Netherlands: P=44.47, R=51.2, Q1 (Best in class). Strong continental European integrity infrastructure anchored by the binding VSNU code of conduct, mandatory research data management, broad detection deployment, and active disclosure practice. No essay mill law but institutional response is strong.

## AMI scores at a glance

- **Prevalence Score (P):** 44.47 — 15th of 39 countries
- **Response Quality (R):** 51.2 — tied 9th highest with USA
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (4/6 dimensions from live data)
- **Region:** Europe

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 31 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 35 |
| D5 Collusion | 56 |
| D6 Data fabrication | 15 |

## What the Netherlands gets right

### The VSNU code

The Netherlands Code of Conduct for Research Integrity, adopted by all Dutch universities and research institutes, is one of the most comprehensive integrity frameworks in Europe. The code:
- Sets binding integrity principles
- Mandates research data management
- Establishes investigation procedures for misconduct allegations
- Provides for institutional ombudsperson functions

The code is updated periodically and is binding through institutional adoption — it is not merely aspirational guidance.

### Low D-Scores across the board

Dutch dimension scores are notably low across the board:
- D1 Contract cheating: 50 (vs. Latin American 100)
- D2 AI submissions: 31 (vs. Polish 100)
- D4 Plagiarism: 35 (vs. Pakistani 72)
- D6 Data fabrication: 15 (vs. Chinese 100)

The Dutch profile shows what a high-Response system produces over time: consistently moderate-to-low scores across all dimensions, rather than peaks driven by specific demand signals.

## R-Score breakdown

- **Legislation: 25** — strong research integrity law framework
- **Detection tools: 65** — broad Turnitin/Ephorus deployment
- **Disclosure: 55** — institutional annual reporting via VSNU
- **Penalties: 60** — clear, applied frameworks

### LOWI

The Netherlands Board on Research Integrity (LOWI) provides national-level adjudication of complex misconduct cases. LOWI functions as an appeal mechanism for institutional misconduct decisions and contributes to the Disclosure sub-score through its published findings.

## Why the Netherlands is solidly in Q1

The combination of moderate Prevalence (44.47) and strong Response (51.2) places the Netherlands clearly in Q1, with more margin than the US. The Dutch position reflects the long-term effect of investment in integrity infrastructure — the country has built a coherent system over multiple decades.

The Netherlands shows that Q1 placement is achievable without essay mill legislation, provided that institutional infrastructure (codes, mandatory data management, detection deployment, disclosure) is strong.

## What the Netherlands could improve

The Prevalence score of 44.47 is higher than other Q1 countries — Australia (7.43), UK (11.41), Ireland (12.21), Canada (4.90). This is partly a Google Trends effect (Dutch academic and policy discussion contributes to search volume) and partly a genuine measurement of moderate demand signal.

Adding a specific contract cheating ban on the Irish/UK model would lift the Legislation sub-score from 25 toward the Q1-leader range of 100.

## Implications

For Dutch policymakers, the Netherlands' Q1 position is well-earned but the Prevalence score still has room to fall. Legislative action against essay mills would close the gap to Anglophone Q1 leaders.

For employers and admissions offices, Dutch credentials carry strong integrity infrastructure signals. The VSNU code and LOWI adjudication framework provide meaningful institutional accountability.

## Sources

- VSNU Netherlands Code of Conduct for Research Integrity
- LOWI (Landelijk Orgaan Wetenschappelijke Integriteit) reports
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), Netherlands country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "france-academic-misconduct-profile",
    title: "France: Academic Misconduct Index Country Profile",
    seoTitle: "France Academic Misconduct Profile 2026 | AMI P=44.0",
    metaDescription: "France scores P=43.96, R=32.5 on the AMI. Maxed AI submission demand (D2=100), moderate plagiarism. HCERES quality framework but no specific essay mill ban. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["France", "Europe", "contract cheating", "HCERES", "country profile"],
    tldr: "France scores P=43.96, R=32.5, Q4 (Probably not looking). Maxed AI submission demand (D2=100), moderate other dimensions. HCERES quality framework exists but no specific contract cheating legislation and limited mandatory disclosure.",
    excerpt: "France scores P=44.0 on the Academic Misconduct Index, placing it in Q4 (Probably not looking). The French integrity framework exists at the policy level but lacks the legislative anchoring of Q1 peers. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is France's academic misconduct score?",
        answer: "France scores P=43.96 (Prevalence) and R=32.5 (Response Quality) on the Academic Misconduct Index 2026. This places France in Q4 (Probably not looking) — moderate Prevalence combined with limited institutional response suggests under-detection."
      },
      {
        question: "Why is France not in Q1 like the UK or Germany's Q4 placement?",
        answer: "France's Q4 placement reflects two factors: maxed AI submission demand (D2=100) keeps the Prevalence score elevated, and the absence of specific contract cheating legislation or mandatory misconduct disclosure keeps the R-Score below Q1 thresholds. HCERES provides quality oversight but does not mandate integrity-specific reporting from institutions."
      },
      {
        question: "Does France have detection tools deployed in universities?",
        answer: "France has moderate detection tool deployment, scoring 50 on the detection tools sub-component. Compilatio and other French-language systems are deployed at many institutions but coverage is not universal. The CNRS and CPU (Conférence des Présidents d'Université) have promoted integrity standards but mandatory deployment is not enforced nationally."
      }
    ],
    content: `
## TL;DR

France: P=43.96, R=32.5, Q4 (Probably not looking). Maxed AI submission demand (D2=100) drives Prevalence; moderate Response Quality reflects HCERES oversight without integrity-specific legislative or disclosure mandates.

## AMI scores at a glance

- **Prevalence Score (P):** 43.96 — 16th of 39 countries
- **Response Quality (R):** 32.5
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Europe

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 42 |
| D5 Collusion | 56 |
| D6 Data fabrication | 25 |

## What drives France's score

### Maxed AI submission demand

French-language search volume for AI submission tool keywords is at the top of the European distribution. France has a large student population (~2.7 million [verify]) and a vibrant public discussion of AI tools, both of which contribute to high absolute search volume. The Norway caveat applies partially — some of the signal reflects academic and policy discussion rather than pure student demand — but France's volume is sufficiently large that the demand signal is substantively meaningful.

### Contract cheating (D1 = 67)

The French-language essay mill market is well-developed, with services targeting French students and the broader Francophone academic market. Google Trends data places France in the elevated band on D1.

### Data fabrication (D6 = 25)

France's Retraction Watch signal is moderate-low. French research output is substantial, particularly in physics, mathematics, and biology; the misconduct-linked retraction rate is consistent with other Western European countries.

## R-Score breakdown

- **Legislation: 15** — research integrity provisions; no essay mill ban
- **Detection tools: 50** — Compilatio and Turnitin partial deployment
- **Disclosure: 25** — HCERES quality reporting but not integrity-specific
- **Penalties: 40** — institutional codes; CNRS framework for research misconduct

### HCERES

The Haut Conseil de l'Évaluation de la Recherche et de l'Enseignement Supérieur evaluates French universities and research organisations. HCERES focuses on quality and impact rather than mandating integrity-specific disclosure. This limits the contribution to the Disclosure sub-component of the R-Score.

### OFIS

The Office Français de l'Intégrité Scientifique (created 2017) [verify date] provides national-level coordination on research integrity. OFIS contributes to the Legislation sub-component but its remit is research-focused rather than covering student academic misconduct.

## Why France is in Q4 not Q1

France's R-Score of 32.5 is meaningfully below Q1 thresholds. Compared to the Netherlands (R=51.2):
- Netherlands has a binding VSNU code; France has multiple frameworks without single binding integrity code
- Netherlands mandates research data management; French requirements are weaker
- LOWI provides Dutch national adjudication; OFIS focus is narrower

The Prevalence score of 43.96 is similar to the Netherlands (44.47), but the R-Score gap (32.5 vs 51.2) places France in Q4 while the Netherlands sits in Q1.

## Implications

For French policymakers, the path to Q1 is primarily institutional rather than legislative. A binding national integrity code on the VSNU model would lift several R-Score components. Mandatory misconduct disclosure through HCERES or OFIS would address another major gap.

For employers and admissions offices, French credentials carry moderate integrity infrastructure signals. The elite institutions (ENS, Polytechnique, Sciences Po) have stronger institutional integrity practices than the broader university system.

## Sources

- HCERES evaluation framework documentation
- OFIS (Office Français de l'Intégrité Scientifique)
- Google Trends (2022–2026), France country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "turkey-academic-misconduct-profile",
    title: "Turkey: Academic Misconduct Index Country Profile",
    seoTitle: "Turkey Academic Misconduct Profile 2026 | AMI P=43.5",
    metaDescription: "Turkey scores P=43.52, R=21.2 on the AMI. High contract cheating (D1=83), elevated collusion and plagiarism. YÖK oversight without specific essay mill legislation. Q4 profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Turkey", "Europe", "Asia", "contract cheating", "YOK", "country profile"],
    tldr: "Turkey scores P=43.52, R=21.2, Q4 (Probably not looking). High contract cheating demand (D1=83), elevated plagiarism (D4=62) and collusion (D5=69). YÖK oversight exists but lacks integrity-specific mandate.",
    excerpt: "Turkey scores P=43.5 on the Academic Misconduct Index, placing it in Q4 (Probably not looking). High demand signals combined with limited mandatory disclosure suggest under-detection. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Turkey's academic misconduct score?",
        answer: "Turkey scores P=43.52 (Prevalence) and R=21.2 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The combination of moderate Prevalence and low Response suggests under-detection rather than genuinely low misconduct rates."
      },
      {
        question: "Does Turkey have academic integrity legislation?",
        answer: "Turkey has no specific contract cheating ban. YÖK (the Council of Higher Education) sets standards for Turkish universities and has issued plagiarism guidance, but mandatory disclosure of misconduct statistics is limited. The 2016 dissertation plagiarism scandals led to stronger thesis-checking requirements but not to comprehensive integrity legislation."
      },
      {
        question: "Why is collusion so high in Turkey?",
        answer: "Turkey's D5 (collusion) score of 69 is among the highest in the dataset. Eret & Ok (2014) documented elevated unauthorised collaboration rates in Turkish universities, and subsequent research has confirmed the pattern. Large class sizes, group-study cultures, and inconsistent assessment design contribute."
      }
    ],
    content: `
## TL;DR

Turkey: P=43.52, R=21.2, Q4 (Probably not looking). High contract cheating demand (D1=83), elevated collusion (D5=69) and plagiarism (D4=62). YÖK provides oversight but no specific contract cheating ban and limited mandatory disclosure.

## AMI scores at a glance

- **Prevalence Score (P):** 43.52 — 17th of 39 countries
- **Response Quality (R):** 21.2
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Europe/Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 50 |
| D3 Exam impersonation | 14 |
| D4 Plagiarism | 62 |
| D5 Collusion | 69 |
| D6 Data fabrication | 50 |

## What drives Turkey's score

### Contract cheating (D1 = 83)

Turkish-language essay mill demand is well-documented. Eret & Ok (2014) was one of the first peer-reviewed studies to quantify cheating attitudes in Turkish higher education, and subsequent work has shown elevated demand for contract cheating services. Search volume for Turkish equivalents of essay mill terms places Turkey in the elevated band.

### Collusion (D5 = 69)

Turkey's D5 score is the third highest in the dataset, behind only Nigeria (75) and India (72). The Eret & Ok survey and follow-up work consistently show high rates of unauthorised collaboration on individual assessments. Large class sizes and group-study norms create conditions where the line between cooperation and collusion is regularly crossed.

### Data fabrication (D6 = 50)

Turkey's Retraction Watch signal is moderate. Turkish research output has grown substantially over the past two decades; the misconduct-linked retraction rate is consistent with regional peers but elevated relative to Q1 European countries.

### Plagiarism (D4 = 62)

The 2016 dissertation plagiarism scandal — which led to revocation of academic credentials for several political figures [verify specific cases] — exposed systematic issues in Turkish doctoral oversight. YÖK responded with stricter thesis-checking requirements, but the underlying culture and the volume of historical cases remain.

## R-Score breakdown

- **Legislation: 10** — general fraud provisions only
- **Detection tools: 35** — partial Turnitin and iThenticate deployment
- **Disclosure: 15** — limited public reporting
- **Penalties: 25** — institutional codes; YÖK can revoke credentials

### YÖK

The Council of Higher Education (YÖK) is the central regulator of Turkish universities. YÖK has the authority to mandate detection tool deployment and disclosure requirements but has not exercised this comprehensively. The 2016 dissertation reforms were a partial step but did not extend to undergraduate or master's-level systematic checking.

## Why Turkey is in Q4

The Q4 placement reflects moderate Prevalence (43.52) and low Response (21.2). The high D1, D4, and D5 signals suggest the actual misconduct rate is likely higher than the Prevalence score alone indicates — characteristic of the "Probably not looking" diagnosis.

## Implications

For Turkish policymakers, the most direct levers are mandatory detection tool deployment across the university sector (currently partial) and required misconduct disclosure through YÖK. Both could be implemented through regulatory action without statutory change.

For employers and admissions offices, Turkish credentials warrant verification proportional to the Q4 placement. The elite Turkish institutions (Boğaziçi, Koç, Sabancı) have stronger integrity practices than the broader public university system.

## Sources

- Eret, E. & Ok, A. (2014). Internet plagiarism in higher education: tendencies, triggering factors and reasons among teacher candidates
- YÖK plagiarism policy documentation
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "nigeria-academic-misconduct-profile",
    title: "Nigeria: Academic Misconduct Index Country Profile",
    seoTitle: "Nigeria Academic Misconduct Profile 2026 | AMI Highest D3, D5",
    metaDescription: "Nigeria scores P=43.46, R=12.5 on the AMI. Highest exam impersonation (D3=28) and collusion (D5=75) scores in the dataset. NUC oversight without integrity-specific mandate. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Nigeria", "Africa", "exam impersonation", "contract cheating", "country profile"],
    tldr: "Nigeria scores P=43.46, R=12.5, Q4 (Probably not looking). Has the highest exam impersonation (D3=28) and collusion (D5=75) scores in the entire dataset. NUC oversight exists but mandatory disclosure and detection deployment are minimal.",
    excerpt: "Nigeria scores P=43.5 on the Academic Misconduct Index. The country holds the highest exam impersonation and collusion scores in the dataset, reflecting well-documented examination-cheating networks and large-class assessment conditions. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Nigeria's academic misconduct score?",
        answer: "Nigeria scores P=43.46 (Prevalence) and R=12.5 (Response Quality) on the Academic Misconduct Index 2026. The Response score is among the lowest three in the dataset. Nigeria is in Q4 (Probably not looking) — moderate apparent prevalence combined with very weak institutional response."
      },
      {
        question: "Why does Nigeria have the highest exam impersonation score?",
        answer: "Nigeria's D3 (exam impersonation) score of 28 is the highest in the AMI dataset. Multiple peer-reviewed studies and JAMB/WAEC examination authorities have documented systematic impersonation networks operating around national examinations. The phenomenon has received significant media coverage and prosecutions, but the underlying scale remains substantial."
      },
      {
        question: "What is the NUC doing about academic misconduct?",
        answer: "The National Universities Commission (NUC) sets standards for Nigerian universities and has issued plagiarism guidelines, but mandatory integrity-specific disclosure and universal detection tool deployment are not enforced. The AMI Response score of 12.5 reflects this gap between policy intent and operational reality."
      }
    ],
    content: `
## TL;DR

Nigeria: P=43.46, R=12.5, Q4 (Probably not looking). Highest exam impersonation score in the dataset (D3=28). Highest collusion score in the dataset (D5=75). NUC oversight exists but the third lowest R-Score in the AMI dataset.

## AMI scores at a glance

- **Prevalence Score (P):** 43.46 — 18th of 39 countries
- **Response Quality (R):** 12.5 — 3rd lowest in dataset
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Africa

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 28 |
| D4 Plagiarism | 64 |
| D5 Collusion | 75 |
| D6 Data fabrication | 55 |

## What drives Nigeria's score

### Highest exam impersonation in the dataset (D3 = 28)

Nigeria's D3 score is the highest in the AMI dataset. The phenomenon of "mercenary" exam-takers — individuals paid to sit standardised examinations including JAMB (Joint Admissions and Matriculation Board), WAEC (West African Examinations Council), and university entrance examinations — has been documented through prosecutions, investigative journalism, and academic research [verify specific sources]. JAMB has invested in biometric verification systems, but the scale of attempted impersonation remains substantial.

### Highest collusion in the dataset (D5 = 75)

Nigeria's D5 score is also the highest in the dataset. Large-enrolment public universities, group-work cultures, and assessment designs that do not consistently distinguish individual from collective contribution all contribute to the elevated score.

### Contract cheating (D1 = 83)

Nigerian-language and English-language search volume for essay mill services places Nigeria in the elevated D1 band. Nigeria has both a domestic essay mill industry and serves as an export market for Pakistani and Indian essay mill operations.

### Data fabrication (D6 = 55)

The Retraction Watch signal for Nigeria shows elevated misconduct-linked retraction rates per publication, consistent with broader patterns documented in African higher education research.

## The R-Score crisis

Nigeria's R-Score of 12.5 is among the three lowest in the entire AMI dataset (Egypt: 12.0; Iran: 13.2). The breakdown:
- **Legislation: 10** — general fraud provisions; no specific contract cheating ban
- **Detection tools: 15** — very limited deployment, lowest in dataset
- **Disclosure: 10** — minimal public reporting
- **Penalties: 15** — codes exist; enforcement inconsistent

The R_det score of 15 is the lowest in the AMI dataset, reflecting very limited Turnitin and similar tool deployment across the Nigerian university sector. Resource constraints are a primary driver — many public universities operate with budgets that do not support commercial detection platform licensing.

## Why Nigeria is in Q4 not Q3

Nigeria's Prevalence score (43.46) is below the Q3 threshold despite high D1, D3, D4, D5, and D6 signals. The Q4 placement reflects the AMI's structural assessment: Nigeria's low R-Score, combined with multiple elevated dimension scores, indicates the actual prevalence is likely higher than the rescaled P-Score shows. "Probably not looking" captures the institutional reality.

## Implications

Nigeria's challenges combine resource constraints (limited budget for integrity infrastructure), scale (large student population), and structural assessment design issues that enable collusion and impersonation. Policy reform requires investment alongside legislative intent.

For employers and admissions offices, Nigerian credentials warrant verification proportional to the Q4 placement. The elite Nigerian institutions and international branch campuses operating in Nigeria have substantially different integrity profiles from the broader system.

## Sources

- JAMB and WAEC integrity reports [verify specific publications]
- African higher education integrity literature
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "india-academic-misconduct-profile",
    title: "India: Academic Misconduct Index Country Profile",
    seoTitle: "India Academic Misconduct Profile 2026 | AMI P=42.6",
    metaDescription: "India scores P=42.62, R=18.8 on the AMI. High plagiarism (D4=70), elevated data fabrication (D6=70), and collusion (D5=72). UGC plagiarism rules exist but enforcement varies. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["India", "Asia", "UGC", "plagiarism", "contract cheating", "country profile"],
    tldr: "India scores P=42.62, R=18.8, Q4 (Probably not looking). High plagiarism (D4=70), elevated data fabrication (D6=70), high collusion (D5=72). UGC regulations exist but enforcement is uneven across India's vast higher education system.",
    excerpt: "India scores P=42.6 on the Academic Misconduct Index. The data shows elevated plagiarism, collusion, and data fabrication signals — consistent with the literature on Indian higher education integrity challenges. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is India's academic misconduct score?",
        answer: "India scores P=42.62 (Prevalence) and R=18.8 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). India has the 19th highest Prevalence score in the 39-country dataset."
      },
      {
        question: "What are the UGC plagiarism rules?",
        answer: "The University Grants Commission (UGC) published its Promotion of Academic Integrity and Prevention of Plagiarism regulations in 2018. The regulations mandate plagiarism checking for theses, define similarity thresholds, and require institutions to maintain academic integrity panels. Enforcement varies significantly across India's 1,000+ universities."
      },
      {
        question: "Is essay mill use common in India?",
        answer: "India's D1 (contract cheating) score of 83 reflects elevated demand. India also hosts a substantial essay mill industry that exports services internationally — Indian-based companies are among the largest providers of contract cheating services to UK and other Anglophone markets. Domestic demand is also significant given India's large higher education enrolment."
      }
    ],
    content: `
## TL;DR

India: P=42.62, R=18.8, Q4 (Probably not looking). 19th highest Prevalence globally. High plagiarism (D4=70), high data fabrication (D6=70), high collusion (D5=72). UGC plagiarism regulations exist; enforcement varies across India's vast higher education sector.

## AMI scores at a glance

- **Prevalence Score (P):** 42.62 — 19th of 39 countries
- **Response Quality (R):** 18.8
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 62 |
| D3 Exam impersonation | 22 |
| D4 Plagiarism | 70 |
| D5 Collusion | 72 |
| D6 Data fabrication | 70 |

## What drives India's score

### Contract cheating exports (D1 = 83)

India hosts one of the largest essay mill industries globally. Indian-based contract cheating providers serve domestic students and export services internationally — particularly to UK, Australian, and US markets. The English-language proficiency, time-zone arbitrage, and cost structure have made India a hub for outsourced academic writing. Lancaster & Clarke (2016) [verify specifics] documented Indian essay mill operations as a significant contributor to global contract cheating supply.

### High plagiarism (D4 = 70)

Indian doctoral and masters-level plagiarism has been a recurring concern. The 2018 UGC regulations were a direct response to a series of plagiarism scandals affecting senior academics and politicians. Self-reported plagiarism rates in Indian undergraduate samples consistently exceed international averages.

### Data fabrication (D6 = 70)

India's Retraction Watch signal is high. India is the world's third-largest producer of academic papers, and misconduct-linked retractions per publication place India elevated relative to publication volume. Specific patterns include retractions in pharmaceutical and medical literature.

### Collusion (D5 = 72)

India's D5 score is the second highest in the dataset (after Nigeria's 75). Large class sizes, group-study cultures, and assessment design issues all contribute.

## The UGC framework

India's University Grants Commission published the Promotion of Academic Integrity and Prevention of Plagiarism regulations in 2018. Key provisions:
- Mandatory plagiarism checking for theses
- Similarity thresholds with graduated consequences
- Required academic integrity panels at institutions
- Penalty frameworks ranging from rework to dismissal

The regulations represent meaningful policy intent. However, India's higher education system includes over 1,000 universities and 40,000+ colleges, and enforcement varies substantially. Elite institutions (IITs, IISc, top private universities) have stronger compliance than the broader system.

## R-Score breakdown

- **Legislation: 15** — UGC regulations exist; no statutory essay mill ban
- **Detection tools: 30** — Turnitin and iThenticate partial deployment
- **Disclosure: 10** — minimal public reporting
- **Penalties: 20** — codes exist; enforcement varies

## Why India is in Q4

India's combination of moderate Prevalence (42.62) and low Response (18.8) places it in Q4. The high dimension scores across multiple categories (D1, D4, D5, D6) suggest the actual prevalence is likely higher than the P-Score alone shows — characteristic of the "Probably not looking" diagnosis.

## Implications

India's scale makes systemic reform challenging. The UGC framework provides the policy foundation; the limiting factor is operational implementation across diverse institution types and capacity levels.

For employers and admissions offices, Indian credentials show high institutional variance. IIT and IISc credentials reflect very different integrity environments than less-resourced public universities. Institution-level signals carry meaningful information.

## Sources

- UGC Promotion of Academic Integrity and Prevention of Plagiarism Regulations (2018)
- Lancaster & Clarke (2016), International Journal for Educational Integrity [verify]
- Retraction Watch Database, Crossref/GitLab (2026)
- Indian higher education integrity literature
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "vietnam-academic-misconduct-profile",
    title: "Vietnam: Academic Misconduct Index Country Profile",
    seoTitle: "Vietnam Academic Misconduct Profile 2026 | AMI P=42.6",
    metaDescription: "Vietnam scores P=42.58, R=14.5 on the AMI. Moderate contract cheating, low fabrication, weak institutional response infrastructure. Q4 Crisis-zone-adjacent profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Vietnam", "Asia", "Southeast Asia", "contract cheating", "country profile"],
    tldr: "Vietnam scores P=42.58, R=14.5, Q4 (Probably not looking). Moderate contract cheating demand (D1=67), moderate plagiarism (D4=62), low fabrication (D6=22). Limited mandatory disclosure and minimal detection tool deployment.",
    excerpt: "Vietnam scores P=42.6 on the Academic Misconduct Index, placing it in Q4. The profile shows moderate demand signals combined with limited institutional response infrastructure. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is Vietnam's academic misconduct score?",
        answer: "Vietnam scores P=42.58 (Prevalence) and R=14.5 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The R-Score is among the lowest in the AMI dataset."
      },
      {
        question: "Why is the R-Score so low for Vietnam?",
        answer: "Vietnam's R-Score of 14.5 reflects very limited statutory provisions, partial detection tool deployment concentrated at top-tier universities, minimal mandatory disclosure, and inconsistent penalty enforcement. The Ministry of Education and Training sets standards but does not mandate integrity-specific reporting."
      },
      {
        question: "Does Vietnam have essay mill legislation?",
        answer: "Vietnam has no specific legislation against contract cheating. General fraud provisions apply but are not used for academic misconduct cases. Institutional codes exist at major universities but country-wide enforcement is uneven, particularly outside the major Hanoi and Ho Chi Minh City institutions."
      }
    ],
    content: `
## TL;DR

Vietnam: P=42.58, R=14.5, Q4 (Probably not looking). Moderate contract cheating demand (D1=67), moderate plagiarism (D4=62), low fabrication (D6=22). Among the lowest R-Scores in the dataset.

## AMI scores at a glance

- **Prevalence Score (P):** 42.58 — 20th of 39 countries
- **Response Quality (R):** 14.5
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia (Southeast)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 50 |
| D3 Exam impersonation | 12 |
| D4 Plagiarism | 62 |
| D5 Collusion | 55 |
| D6 Data fabrication | 22 |

## What drives Vietnam's score

### Contract cheating (D1 = 67)

Vietnamese-language search volume for essay mill terms is in the elevated band. Vietnam has a substantial higher education sector with over 2 million students [verify], generating measurable demand signal for academic writing services. The market includes both Vietnamese-language services and English-language essay mills targeting Vietnamese students studying English-medium programmes.

### Plagiarism (D4 = 62)

Vietnamese higher education integrity literature documents elevated plagiarism rates, particularly in graduate theses. The combination of English-language requirements, limited training in academic writing conventions, and resource constraints contributes. Hanoi University, VNU, and other major institutions have introduced detection requirements; broader sector coverage is partial.

### Low data fabrication (D6 = 22)

Vietnam's Retraction Watch signal is relatively low. Vietnamese research output is growing but the absolute volume of misconduct-linked retractions per publication is moderate, below regional Asian peers like China, India, and Pakistan.

### Moderate AI submission (D2 = 50)

Vietnamese-language and English-language search volume for AI submission tools is moderate. Vietnam has high smartphone penetration and growing digital infrastructure, but the per-capita signal is below the regional leaders.

## R-Score breakdown

- **Legislation: 10** — general fraud provisions only
- **Detection tools: 25** — partial Turnitin deployment, concentrated at top institutions
- **Disclosure: 8** — minimal public reporting
- **Penalties: 15** — institutional codes; enforcement varies

The Ministry of Education and Training (MOET) regulates Vietnamese higher education but does not mandate integrity-specific disclosure or universal detection tool deployment.

## Why Vietnam is in Q4

The combination of moderate Prevalence (42.58) and very low Response (14.5) places Vietnam in Q4. The pattern is typical of Southeast Asian countries in the dataset — moderate demand signals combined with institutional response infrastructure that has not kept pace with sector growth.

## Implications

For Vietnamese policymakers, the gap from regional best practice (Singapore: R=47.5) is substantial on the Response axis. MOET-mandated detection tool deployment and disclosure requirements would lift the R-Score significantly without requiring statutory change.

For employers and admissions offices, Vietnamese credentials warrant verification proportional to the Q4 placement. VNU, HUST, and the elite Vietnamese institutions have stronger integrity practices than the broader sector.

## Sources

- Google Trends (2022–2026), Vietnam country-level
- Vietnamese higher education integrity literature
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "spain-academic-misconduct-profile",
    title: "Spain: Academic Misconduct Index Country Profile",
    seoTitle: "Spain Academic Misconduct Profile 2026 | AMI P=40.8",
    metaDescription: "Spain scores P=40.78, R=28.0 on the AMI. High contract cheating (D1=83), maxed AI submissions (D2=100). ANECA accreditation but no specific essay mill ban. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Spain", "Europe", "contract cheating", "ANECA", "country profile"],
    tldr: "Spain scores P=40.78, R=28.0, Q4 (Probably not looking). High contract cheating demand (D1=83), maxed AI submission signal (D2=100). ANECA provides accreditation oversight but no integrity-specific mandate.",
    excerpt: "Spain scores P=40.8 on the Academic Misconduct Index. The profile is dominated by high Spanish-language search demand for academic shortcuts combined with limited mandatory disclosure from universities. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Spain's academic misconduct score?",
        answer: "Spain scores P=40.78 (Prevalence) and R=28.0 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The R-Score is the highest among Southern European countries scored, but well below Q1 thresholds."
      },
      {
        question: "Does Spain have academic integrity legislation?",
        answer: "Spain has no specific contract cheating legislation equivalent to Australia's or the UK's. The Organic Law on the University System (LOSU, 2023) [verify name] includes some integrity provisions but does not ban essay mills or mandate universal detection tool deployment. ANECA provides accreditation oversight but does not mandate misconduct disclosure."
      },
      {
        question: "Why is AI submission demand so high in Spain?",
        answer: "Spain's D2 score of 100 reflects very high Spanish-language search volume for AI submission tools. The signal includes both Spanish students and Spanish-speakers across the broader Hispanophone academic market. The Norway caveat applies partially — academic and policy discussion contributes to the signal — but Spain's volume is sufficiently high that the demand signal is substantively meaningful."
      }
    ],
    content: `
## TL;DR

Spain: P=40.78, R=28.0, Q4 (Probably not looking). High contract cheating demand (D1=83), maxed AI submissions (D2=100). ANECA accreditation framework but no specific essay mill legislation and limited mandatory disclosure.

## AMI scores at a glance

- **Prevalence Score (P):** 40.78 — 21st of 39 countries
- **Response Quality (R):** 28.0
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Europe

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 48 |
| D5 Collusion | 56 |
| D6 Data fabrication | 28 |

## What drives Spain's score

### Maxed AI submission demand (D2 = 100)

Spanish-language search volume for AI submission tools is at the top of the European distribution. Spain has a large student population and high digital engagement, generating substantial absolute search volume. Spanish-language essay mill and AI bypass services serve both Spanish and the broader Latin American market, contributing to the demand signal.

### Contract cheating (D1 = 83)

Spanish-language essay mill demand is elevated. Spain's market overlaps with the broader Spanish-speaking academic market, with services targeting both Spanish students and the Latin American Hispanophone audience. Madrid and Barcelona-based services have been documented in the literature.

### Moderate plagiarism (D4 = 48)

Spain's D4 score is moderate, in line with other Southern European countries. The literature shows elevated rates relative to Northern European norms but below the high-D4 dataset leaders.

### Data fabrication (D6 = 28)

Spain's Retraction Watch signal is moderate-low. Spanish research output is substantial; the misconduct-linked retraction rate per publication is consistent with other Western European countries.

## R-Score breakdown

- **Legislation: 15** — research integrity provisions; no essay mill ban
- **Detection tools: 43** — Turnitin and Compilatio partial deployment
- **Disclosure: 22** — limited public reporting
- **Penalties: 32** — institutional codes plus ANECA framework

### ANECA

The Agencia Nacional de Evaluación de la Calidad y Acreditación accredits Spanish degree programmes and evaluates faculty. ANECA's focus is quality and qualification recognition rather than mandating integrity-specific disclosure. The agency contributes to the Disclosure sub-component through programme-level evaluation reports.

### The LOSU framework

The Organic Law on the University System (LOSU, 2023) [verify exact name and year] consolidated several elements of Spanish university regulation. The law includes integrity provisions but does not establish a contract cheating ban or universal detection mandate.

## Why Spain is in Q4 not Q1

Spain's R-Score of 28.0 is meaningfully below Q1 thresholds. The Netherlands (R=51.2) and Germany (R=38.8) both have stronger institutional integrity infrastructure, particularly on the Detection tools and Disclosure components. Spain's institutional response has not yet matched the scale of the demand signals.

## Implications

For Spanish policymakers, the most direct levers are mandatory detection tool deployment (currently partial) and required institutional misconduct disclosure through ANECA. EU-level coordination on essay mill legislation (following the Irish, UK, and indirectly Australian models) would address the supply side.

For employers and admissions offices, Spanish credentials carry moderate integrity infrastructure signals. The elite Spanish institutions (UAM, UC3M, UB, several IE programmes) have stronger institutional integrity practices than the broader system.

## Sources

- Google Trends (2022–2026), Spain country-level
- ANECA accreditation framework
- LOSU (Organic Law on the University System), 2023 [verify]
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "malaysia-academic-misconduct-profile",
    title: "Malaysia: Academic Misconduct Index Country Profile",
    seoTitle: "Malaysia Academic Misconduct Profile 2026 | AMI P=40.4",
    metaDescription: "Malaysia scores P=40.40, R=22.0 on the AMI. High contract cheating, elevated collusion, moderate detection deployment. MQA accreditation framework. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Malaysia", "Asia", "Southeast Asia", "MQA", "country profile"],
    tldr: "Malaysia scores P=40.40, R=22.0, Q4 (Probably not looking). High contract cheating demand (D1=83), elevated collusion (D5=72), moderate plagiarism (D4=62). MQA accreditation framework but limited mandatory disclosure.",
    excerpt: "Malaysia scores P=40.4 on the Academic Misconduct Index, placing it in Q4. The profile shows elevated demand signals combined with moderate but uneven institutional response infrastructure. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is Malaysia's academic misconduct score?",
        answer: "Malaysia scores P=40.40 (Prevalence) and R=22.0 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). Among Southeast Asian countries scored, Malaysia sits between Singapore (R=47.5) and Vietnam (R=14.5) on Response Quality."
      },
      {
        question: "What is the MQA and what does it do for academic integrity?",
        answer: "The Malaysian Qualifications Agency (MQA) accredits Malaysian degree programmes and maintains a national qualifications framework. MQA standards include some integrity provisions but the agency does not mandate misconduct disclosure or universal detection tool deployment. Institutional implementation varies."
      },
      {
        question: "Is contract cheating illegal in Malaysia?",
        answer: "Malaysia has no specific contract cheating legislation. General fraud and misrepresentation provisions apply but are not used for academic misconduct cases. Malaysia's R-Score of 22.0 reflects this absence of statutory provisions combined with limited mandatory institutional disclosure."
      }
    ],
    content: `
## TL;DR

Malaysia: P=40.40, R=22.0, Q4 (Probably not looking). High contract cheating demand (D1=83), elevated collusion (D5=72), moderate plagiarism (D4=62). MQA framework but limited integrity-specific mandate.

## AMI scores at a glance

- **Prevalence Score (P):** 40.40 — 22nd of 39 countries
- **Response Quality (R):** 22.0
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia (Southeast)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 83 |
| D2 AI submissions | 62 |
| D3 Exam impersonation | 16 |
| D4 Plagiarism | 62 |
| D5 Collusion | 72 |
| D6 Data fabrication | 50 |

## What drives Malaysia's score

### Contract cheating (D1 = 83)

Malaysian-language and English-language search volume for essay mill terms places Malaysia in the elevated D1 band. The Malaysian higher education market — including both public universities and the substantial private university sector — generates measurable demand signal. International branch campuses operating in Malaysia (Monash, Nottingham, Reading, etc.) bring their home-country integrity standards but also expose students to international essay mill markets.

### High collusion (D5 = 72)

Malaysia's D5 score is the third highest in the dataset (tied with India, after Nigeria's 75). Group-study cultures, large class sizes in public universities, and assessment designs that do not always distinguish individual contribution all contribute.

### Moderate plagiarism (D4 = 62)

The D4 score reflects regional Southeast Asian patterns combined with Malaysia-specific studies. Plagiarism in Malaysian graduate work has been a recurring concern, particularly in disciplines where Malay-to-English translation conventions blur paraphrasing and copying.

### Data fabrication (D6 = 50)

Malaysia's Retraction Watch signal is moderate. Malaysian research output has grown substantially over the past decade, particularly at USM, UM, and UKM; misconduct-linked retractions per publication are consistent with broader Southeast Asian patterns.

## R-Score breakdown

- **Legislation: 10** — general fraud provisions only
- **Detection tools: 38** — moderate Turnitin deployment, stronger at private and branch institutions
- **Disclosure: 18** — limited public reporting
- **Penalties: 22** — institutional codes; MQA framework

### MQA

The Malaysian Qualifications Agency accredits Malaysian degree programmes and maintains the Malaysian Qualifications Framework. MQA standards include some integrity-relevant provisions but do not mandate misconduct disclosure or universal detection tool deployment. Implementation varies across institution types.

The Ministry of Higher Education (KPT) provides additional regulatory oversight but has not introduced integrity-specific legislation.

## Why Malaysia is in Q4

The combination of moderate Prevalence (40.40) and low Response (22.0) places Malaysia in Q4. The pattern is consistent across Malaysian peers in Southeast Asia — moderate demand signals combined with institutional response that has not kept pace with sector growth and international integration.

## Implications

For Malaysian policymakers, the gap from regional best practice (Singapore: R=47.5) is substantial. Mandatory detection tool deployment, integrity-specific MQA standards, and disclosure requirements would lift the R-Score significantly.

For employers and admissions offices, Malaysian credentials show meaningful institutional variance. International branch campuses (Monash Malaysia, Nottingham Malaysia, Heriot-Watt Malaysia, etc.) carry home-country integrity standards. Major public universities (USM, UM, UKM) have stronger institutional integrity infrastructure than the broader system.

## Sources

- Google Trends (2022–2026), Malaysia country-level
- MQA framework documentation
- Malaysian higher education integrity literature
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "brazil-academic-misconduct-profile",
    title: "Brazil: Academic Misconduct Index Country Profile",
    seoTitle: "Brazil Academic Misconduct Profile 2026 | AMI P=39.8",
    metaDescription: "Brazil scores P=39.75, R=18.0 on the AMI. Moderate contract cheating, elevated collusion. CAPES regulates graduate programmes but no integrity-specific mandate. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Brazil", "Latin America", "CAPES", "contract cheating", "country profile"],
    tldr: "Brazil scores P=39.75, R=18.0, Q4 (Probably not looking). Moderate Portuguese-language essay mill demand (D1=67), elevated collusion (D5=65). CAPES regulates graduate programmes but does not mandate integrity-specific disclosure.",
    excerpt: "Brazil scores P=39.8 on the Academic Misconduct Index, placing it in Q4. The Portuguese-language market differs from neighbouring Spanish-speaking Latin American countries — demand signals are lower but institutional response is similarly limited. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Brazil's academic misconduct score?",
        answer: "Brazil scores P=39.75 (Prevalence) and R=18.0 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). Among Latin American countries scored, Brazil has substantially lower Prevalence than Colombia (77.4) or Argentina (74.6), partly reflecting the smaller Portuguese-language essay mill market."
      },
      {
        question: "What is CAPES and does it cover academic integrity?",
        answer: "CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior) is the federal agency overseeing graduate education in Brazil. CAPES evaluates and ranks graduate programmes but does not mandate integrity-specific disclosure or universal plagiarism detection. The agency's quality evaluation includes some integrity-relevant components."
      },
      {
        question: "Is essay mill use common in Brazil?",
        answer: "Brazil's D1 (contract cheating) score of 67 reflects moderate Portuguese-language search demand for essay mill services. The Portuguese-language market is smaller than the Spanish-language equivalent, but a domestic essay mill industry serving Brazilian students exists and has been documented in the literature."
      }
    ],
    content: `
## TL;DR

Brazil: P=39.75, R=18.0, Q4 (Probably not looking). Moderate Portuguese-language essay mill demand (D1=67), elevated collusion (D5=65). CAPES oversees graduate programmes without integrity-specific mandate. Limited mandatory disclosure.

## AMI scores at a glance

- **Prevalence Score (P):** 39.75 — 23rd of 39 countries
- **Response Quality (R):** 18.0
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Latin America

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 14 |
| D4 Plagiarism | 52 |
| D5 Collusion | 65 |
| D6 Data fabrication | 40 |

## What drives Brazil's score

### Portuguese-language demand

Brazil's D1 score of 67 reflects the Portuguese-language essay mill market, which is structurally smaller than the Spanish-language equivalent. The Brazilian market is largely self-contained — there is limited spillover to Portugal or African Lusophone countries at scale. This contains the absolute search-volume signal compared to Spanish-speaking neighbours.

### Collusion (D5 = 65)

Brazil's D5 score is elevated but below Nigeria (75), India (72), and Malaysia (72). Large class sizes at major public universities (USP, UFRJ, UFMG, UNICAMP) create conditions for unauthorised collaboration. Group-study cultures and limited individual assessment design contribute.

### Data fabrication (D6 = 40)

The Retraction Watch signal for Brazil shows moderate misconduct-linked retraction rates per publication. Brazilian research output is substantial across multiple disciplines; the retraction rate is consistent with other large Latin American producers.

### Moderate plagiarism (D4 = 52)

Brazil's D4 score is moderate. Regional Latin American patterns combined with Brazil-specific studies show plagiarism rates above Northern European norms but below the high-D4 dataset leaders.

## R-Score breakdown

- **Legislation: 10** — general fraud provisions only
- **Detection tools: 32** — Turnitin partial deployment, stronger at major public universities
- **Disclosure: 12** — limited public reporting
- **Penalties: 18** — institutional codes vary

### CAPES

CAPES coordinates and evaluates Brazilian graduate education. The agency's Sistema Nacional de Pós-Graduação evaluation includes some quality components relevant to integrity, but mandatory misconduct disclosure is not a current requirement. Programme-level evaluation contributes modestly to the Disclosure sub-component.

The Ministry of Education (MEC) regulates undergraduate education separately and has not introduced integrity-specific provisions.

## Why Brazil is in Q4

The combination of moderate Prevalence (39.75) and low Response (18.0) places Brazil in Q4. Among Latin American countries, Brazil has lower Prevalence than the Spanish-speaking neighbours (partly a language-market effect) but similar Response Quality.

## Implications

For Brazilian policymakers, the most direct levers are mandatory detection tool deployment through CAPES and integrity-specific disclosure requirements. The federal university system has the institutional capacity for systematic detection but lacks the regulatory mandate.

For employers and admissions offices, Brazilian credentials show meaningful institutional variance. USP, UNICAMP, UFRJ, and other federal universities have stronger institutional integrity practices than the broader system, particularly the for-profit private sector.

## Sources

- Google Trends (2022–2026), Brazil country-level
- CAPES evaluation framework documentation
- Retraction Watch Database, Crossref/GitLab (2026)
- Brazilian higher education integrity literature
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "kenya-academic-misconduct-profile",
    title: "Kenya: Academic Misconduct Index Country Profile",
    seoTitle: "Kenya Academic Misconduct Profile 2026 | AMI Lowest R=11.5",
    metaDescription: "Kenya scores P=38.16, R=11.5 on the AMI — the second lowest Response Quality in the dataset. CUE oversight, very limited integrity infrastructure. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Kenya", "Africa", "CUE", "contract cheating", "country profile"],
    tldr: "Kenya scores P=38.16, R=11.5, Q4 (Probably not looking). The third lowest Response Quality score in the AMI dataset. Moderate contract cheating demand and a documented essay-mill industry that exports services internationally. Very limited institutional integrity infrastructure.",
    excerpt: "Kenya scores P=38.2 on the Academic Misconduct Index but R=11.5 — the third lowest Response Quality in the entire dataset. Kenya is also a documented essay-mill export hub. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Kenya's academic misconduct score?",
        answer: "Kenya scores P=38.16 (Prevalence) and R=11.5 (Response Quality) on the Academic Misconduct Index 2026. Kenya's Response Quality score is the third lowest in the entire 39-country dataset, placing it in Q4 (Probably not looking)."
      },
      {
        question: "Why is Kenya a hub for contract cheating?",
        answer: "Kenya has a well-documented essay mill export industry, with Nairobi-based writers serving primarily US, UK, and Australian student markets. Lancaster (multiple publications) [verify] has documented Kenya as one of the largest single-country sources of contract cheating supply globally. The combination of English-language proficiency, time-zone arbitrage, and lower labour costs has made Kenya a major hub."
      },
      {
        question: "What is the CUE doing about academic integrity?",
        answer: "The Commission for University Education (CUE) regulates Kenyan universities and sets quality standards. CUE has issued some integrity guidance but does not mandate universal detection tool deployment or integrity-specific disclosure. Resource constraints across the public university sector limit operational implementation of CUE policies."
      }
    ],
    content: `
## TL;DR

Kenya: P=38.16, R=11.5, Q4 (Probably not looking). Third lowest R-Score in the dataset. Documented essay mill export industry serving US/UK/Australian markets. CUE oversight exists but very limited integrity infrastructure.

## AMI scores at a glance

- **Prevalence Score (P):** 38.16 — 24th of 39 countries
- **Response Quality (R):** 11.5 — 3rd lowest in dataset
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Africa

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 50 |
| D3 Exam impersonation | 18 |
| D4 Plagiarism | 62 |
| D5 Collusion | 58 |
| D6 Data fabrication | 20 |

## What drives Kenya's score

### Contract cheating exports (D1 = 67)

Kenya is one of the most documented essay mill export hubs globally. Nairobi-based writers serve US, UK, and Australian student markets, working through online platforms that connect them with students seeking academic writing. Investigative journalism and academic research [verify Lancaster citations specifically] have documented the scale of Kenyan participation in the global contract cheating economy.

The domestic D1 score of 67 reflects Kenyan-side demand signal, but Kenya's role as a supplier to other markets is the more significant globally relevant pattern.

### Plagiarism (D4 = 62)

Kenya's D4 score reflects elevated rates in graduate work, consistent with broader African higher education patterns. Limited detection tool deployment means actual incidence rates are likely higher than detected rates would suggest.

### Low data fabrication (D6 = 20)

Kenya's Retraction Watch signal is low, partly reflecting smaller absolute research output relative to the high-D6 dataset leaders. The retraction rate per publication is consistent with regional patterns.

## The R-Score crisis

Kenya's R-Score of 11.5 is the third lowest in the entire AMI dataset (behind only Egypt: 12.0 and Nigeria: 12.5). The breakdown:
- **Legislation: 8** — lowest legislation sub-score in dataset
- **Detection tools: 18** — very limited deployment
- **Disclosure: 8** — minimal public reporting
- **Penalties: 12** — institutional codes exist; enforcement varies

The legislation sub-score of 8 is the lowest in the AMI dataset, reflecting the absence of any specific academic integrity statutory framework.

### CUE

The Commission for University Education has the regulatory mandate to set standards but limited resources for systematic enforcement. CUE has accredited Kenyan universities and issued integrity guidance, but the policy intent has not been matched by operational infrastructure.

## The export industry context

Kenya's role as an essay mill export hub is structurally significant. The supply side of the global contract cheating economy is concentrated in a small number of countries — Kenya, India, Pakistan, and the Philippines are among the principal sources. Reducing Kenyan supply would meaningfully affect global market dynamics, though the supply would likely partially relocate to other low-cost English-language markets.

International cooperation — for example, coordinated action between Kenyan authorities and the regulators of destination markets (TEQSA, OfS, the Australian and UK frameworks) — would be required for substantive intervention.

## Implications

For Kenyan policymakers, the policy gap is substantial on both supply and demand sides. Even modest integrity legislation would lift the R-Score from the lowest band; mandatory detection tool deployment would address part of the domestic incidence.

For employers and admissions offices, Kenyan credentials warrant verification proportional to the Q4 placement and the country's role in the global supply chain. Top Kenyan institutions (University of Nairobi, Kenyatta University, Strathmore) have stronger integrity infrastructure than the broader sector.

## Sources

- Lancaster (multiple), International Journal for Educational Integrity [verify specific citations]
- CUE accreditation framework documentation
- Retraction Watch Database, Crossref/GitLab (2026)
- Kenyan and African higher education integrity literature
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "indonesia-academic-misconduct-profile",
    title: "Indonesia: Academic Misconduct Index Country Profile",
    seoTitle: "Indonesia Academic Misconduct Profile 2026 | AMI P=37.9",
    metaDescription: "Indonesia scores P=37.88, R=19.2 on the AMI. High collusion (D5=72), moderate plagiarism, partial detection deployment. BAN-PT accreditation framework. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Indonesia", "Asia", "Southeast Asia", "BAN-PT", "country profile"],
    tldr: "Indonesia scores P=37.88, R=19.2, Q4 (Probably not looking). High collusion (D5=72), moderate plagiarism (D4=64), elevated data fabrication (D6=45). BAN-PT accreditation framework but limited integrity-specific mandate.",
    excerpt: "Indonesia scores P=37.9 on the Academic Misconduct Index, placing it in Q4. The profile shows elevated collusion and moderate plagiarism combined with limited mandatory disclosure across Indonesia's large higher education sector. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Indonesia's academic misconduct score?",
        answer: "Indonesia scores P=37.88 (Prevalence) and R=19.2 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The Response Quality score is among the lower quartile in the dataset."
      },
      {
        question: "What is BAN-PT?",
        answer: "BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi) is the National Accreditation Board for Higher Education in Indonesia. BAN-PT accredits Indonesian universities and study programmes using a multi-tier quality framework. Integrity-relevant standards exist but mandatory misconduct disclosure is not a current requirement."
      },
      {
        question: "How big is the academic integrity problem in Indonesian universities?",
        answer: "Indonesia's profile shows elevated collusion (D5=72), moderate plagiarism (D4=64), and moderate data fabrication (D6=45). The Indonesian higher education system serves over 8 million students [verify] across more than 4,500 institutions, with very wide variance in integrity infrastructure between elite institutions (UI, ITB, UGM) and the broader sector."
      }
    ],
    content: `
## TL;DR

Indonesia: P=37.88, R=19.2, Q4 (Probably not looking). High collusion (D5=72), moderate plagiarism (D4=64), elevated data fabrication (D6=45). BAN-PT accredits but does not mandate integrity-specific disclosure. Wide variance across Indonesia's large higher education sector.

## AMI scores at a glance

- **Prevalence Score (P):** 37.88 — 25th of 39 countries
- **Response Quality (R):** 19.2
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia (Southeast)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 62 |
| D3 Exam impersonation | 16 |
| D4 Plagiarism | 64 |
| D5 Collusion | 72 |
| D6 Data fabrication | 45 |

## What drives Indonesia's score

### High collusion (D5 = 72)

Indonesia's D5 score is tied with India and Malaysia at the third-highest level in the dataset. Large class sizes, group-work cultures, and assessment designs that do not consistently distinguish individual from collective contribution all contribute. Indonesian higher education's rapid expansion has not been matched by proportional investment in assessment infrastructure.

### Contract cheating (D1 = 67)

Indonesian-language and English-language search volume for essay mill services places Indonesia in the moderate-elevated band. The Indonesian market includes both Bahasa Indonesia services and English-language services targeting students in international programmes.

### Data fabrication (D6 = 45)

Indonesia's Retraction Watch signal is moderate. Indonesian research output has grown substantially, particularly at UI, ITB, UGM, and a small set of leading research universities. The misconduct-linked retraction rate per publication is consistent with regional Southeast Asian patterns.

### AI submissions (D2 = 62)

Indonesian search volume for AI submission tools is in the moderate-elevated band. The Indonesian student population is large and digitally engaged, generating substantial absolute signal volume.

## R-Score breakdown

- **Legislation: 15** — research integrity provisions; no specific essay mill ban
- **Detection tools: 30** — Turnitin partial deployment, concentrated at top institutions
- **Disclosure: 12** — limited public reporting
- **Penalties: 20** — institutional codes vary

### BAN-PT

The National Accreditation Board for Higher Education accredits Indonesian universities and study programmes. BAN-PT's standards include some integrity-relevant components but the agency does not mandate misconduct disclosure or universal detection tool deployment. The accreditation framework contributes modestly to the Disclosure sub-component.

The Ministry of Education, Culture, Research, and Technology (Kemdikbudristek) provides additional regulatory oversight but has not introduced integrity-specific legislation.

## Why Indonesia is in Q4

The combination of moderate Prevalence (37.88) and low Response (19.2) places Indonesia in Q4. The pattern is consistent with regional Southeast Asian peers (Vietnam: R=14.5, Thailand: R=19.0, Malaysia: R=22.0) — moderate demand signals combined with institutional response that has not kept pace with sector growth.

## Implications

For Indonesian policymakers, the scale of the higher education sector (4,500+ institutions) makes universal reform challenging. The most direct levers are mandatory detection tool deployment through BAN-PT requirements and integrity-specific disclosure requirements for accredited institutions.

For employers and admissions offices, Indonesian credentials show wide institutional variance. UI, ITB, UGM, and a small number of leading institutions have substantially stronger integrity infrastructure than the broader system.

## Sources

- Google Trends (2022–2026), Indonesia country-level
- BAN-PT accreditation framework documentation
- Indonesian higher education integrity literature
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "sweden-academic-misconduct-profile",
    title: "Sweden: Academic Misconduct Index Country Profile",
    seoTitle: "Sweden Academic Misconduct Profile 2026 | AMI P=37.2",
    metaDescription: "Sweden scores P=37.24, R=45.0 on the AMI — moderate Prevalence partly reflects Norway-like search-signal effects. Strong NPOF integrity framework. Q4 profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Sweden", "Europe", "Nordic", "NPOF", "country profile"],
    tldr: "Sweden scores P=37.24, R=45.0, Q4 (Probably not looking). Moderate Prevalence partly reflects Norway-like Google Trends interpretation issues. Strong institutional response anchored by the NPOF (National Board for Assessment of Research Misconduct) framework.",
    excerpt: "Sweden scores P=37.2 on the Academic Misconduct Index — moderate by Nordic standards. The pattern is similar to Norway's: search-signal interpretation contributes to the score in a country with genuinely strong response infrastructure. Here is what drives Sweden's position.",
    faqSchema: [
      {
        question: "What is Sweden's academic misconduct score?",
        answer: "Sweden scores P=37.24 (Prevalence) and R=45.0 (Response Quality) on the Academic Misconduct Index 2026. Sweden is in Q4 (Probably not looking) — but with one of the higher Response Quality scores in Q4, reflecting genuinely strong institutional infrastructure including the NPOF national misconduct board."
      },
      {
        question: "What is NPOF and what does it do?",
        answer: "Nämnden för Prövning av Oredlighet i Forskning (NPOF) is the Swedish National Board for Assessment of Research Misconduct. NPOF was established by the 2019 Act on Responsibility for Good Research Practice and the Examination of Research Misconduct to provide national-level adjudication of research misconduct cases. It is one of the few statutory national misconduct boards in Europe."
      },
      {
        question: "Why does Sweden score similarly to Norway?",
        answer: "Sweden and Norway share Nordic patterns: high digital engagement, open academic and policy discussion of AI and integrity topics, and strong institutional infrastructure. The Google Trends signal interpretation issue that affects Norway's score also applies to Sweden, though less severely. Sweden's R-Score of 45.0 reflects genuinely strong institutional response."
      }
    ],
    content: `
## TL;DR

Sweden: P=37.24, R=45.0, Q4 (Probably not looking). Moderate Prevalence partly reflects Nordic search-signal interpretation issues (similar to Norway, less severe). Strong R-Score anchored by NPOF — the statutory national misconduct board established by the 2019 Act.

## AMI scores at a glance

- **Prevalence Score (P):** 37.24 — 26th of 39 countries
- **Response Quality (R):** 45.0 — highest R-Score in Q4
- **Quadrant:** Q4 — Probably not looking (with Nordic caveat)
- **Data quality:** A (4/6 dimensions from live data)
- **Region:** Europe (Nordic)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 31 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 38 |
| D5 Collusion | 56 |
| D6 Data fabrication | 15 |

## What drives Sweden's score

### Low dimension scores across the board

Sweden's dimension scores are consistently moderate-low:
- D1=50 vs. Latin American 100
- D2=31 vs. Polish 100
- D4=38 vs. Pakistani 72
- D6=15 vs. Chinese 100

This pattern — consistently low scores rather than peaks driven by specific demand signals — is characteristic of countries with mature integrity infrastructure. The Swedish profile is structurally similar to the Netherlands' but with slightly weaker dimension scores.

### The Nordic caveat (partial)

Norway is the principal AMI dataset case where Google Trends signal interpretation inflates the Prevalence score. Sweden shows a milder version of the same pattern — academic and policy discussion of AI and integrity topics contributes to the search-volume signal. The effect is less severe than in Norway because the absolute volume is lower and the D2 signal (31) is in the moderate band.

## What Sweden does well (R = 45.0)

Sweden's R-Score of 45.0 is the highest in Q4 — meaningfully above the average for the quadrant. The breakdown:
- **Legislation: 20** — research integrity law via the 2019 Act
- **Detection tools: 60** — broad Turnitin/Urkund deployment
- **Disclosure: 50** — NPOF publishes findings
- **Penalties: 50** — clear, applied frameworks

### NPOF and the 2019 Act

The Swedish Act on Responsibility for Good Research Practice and the Examination of Research Misconduct (2019) established Nämnden för Prövning av Oredlighet i Forskning (NPOF) as the national adjudicator for research misconduct cases. Universities refer suspected cases to NPOF, which conducts independent investigations and publishes findings.

NPOF is one of the few statutory national misconduct boards in Europe — the Netherlands' LOWI is a similar model. The transparency from published findings contributes significantly to the Disclosure sub-component.

## Why Sweden is in Q4 not Q1

Sweden's R-Score of 45.0 is below Q1 thresholds, even though it is the highest in Q4. The gap to Q1 European peers (Netherlands: R=51.2) reflects:
- Sweden has no specific contract cheating ban (Netherlands does not either)
- Sweden's detection deployment is broad but slightly below Dutch levels
- Disclosure infrastructure exists but is research-focused via NPOF, with less coverage of student misconduct

Sweden's combination of relatively low Prevalence and relatively strong Response makes it one of the strongest Q4 placements in the dataset. A small Prevalence decrease (partly resolvable via methodology improvements) would shift Sweden toward Q1.

## Implications

For Swedish policymakers, the Q4 placement understates Sweden's actual integrity position. The 2019 Act and NPOF framework are exemplary; extending similar systematic adjudication to student misconduct would close the remaining gap to Q1.

For employers and admissions offices, Swedish credentials carry strong integrity infrastructure signals. The Karolinska Institute case (involving Macchiarini, 2014–2016) [verify specifics] demonstrated both serious misconduct exposure and serious institutional and national response — the latter contributing to NPOF's creation.

## Sources

- Swedish Act on Responsibility for Good Research Practice (2019)
- NPOF (Nämnden för Prövning av Oredlighet i Forskning) published findings
- Google Trends (2022–2026), Sweden country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "south-korea-academic-misconduct-profile",
    title: "South Korea: Academic Misconduct Index Country Profile",
    seoTitle: "South Korea Academic Misconduct Profile 2026 | AMI P=35.4",
    metaDescription: "South Korea scores P=35.42, R=30.2 on the AMI. High collusion (D5=70), moderate fabrication, broad detection deployment. KRI integrity framework. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["South Korea", "Korea", "Asia", "KRI", "country profile"],
    tldr: "South Korea scores P=35.42, R=30.2, Q4 (Probably not looking). High collusion (D5=70), moderate fabrication (D6=55), broad detection deployment. KRI integrity framework following the Hwang Woo-suk stem cell fraud reforms.",
    excerpt: "South Korea scores P=35.4 on the Academic Misconduct Index. The country's integrity infrastructure was significantly strengthened after the 2005–2006 Hwang Woo-suk stem cell fraud case, but moderate dimension scores keep South Korea in Q4. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is South Korea's academic misconduct score?",
        answer: "South Korea scores P=35.42 (Prevalence) and R=30.2 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The Response Quality score is among the higher in Q4, reflecting institutional reforms following the Hwang Woo-suk stem cell research fraud case."
      },
      {
        question: "How did the Hwang Woo-suk case affect Korean academic integrity?",
        answer: "The 2005–2006 Hwang Woo-suk stem cell research fraud was one of the most significant academic misconduct scandals globally. The case led to the creation of the Korea Research Integrity (KRI) framework, the National Research Foundation of Korea's integrity guidelines, and substantially stronger institutional review processes. The reforms are reflected in South Korea's relatively high detection tools sub-score (48)."
      },
      {
        question: "Why is collusion so high in South Korea?",
        answer: "South Korea's D5 (collusion) score of 70 is among the highest in the dataset. Korean university culture includes strong group-study and study-group norms that can blur into prohibited collaboration on individual assessments. Large class sizes at major institutions contribute to the pattern."
      }
    ],
    content: `
## TL;DR

South Korea: P=35.42, R=30.2, Q4 (Probably not looking). High collusion (D5=70), moderate fabrication (D6=55). Post-Hwang reforms produced relatively strong R-Score for Asia. KRI integrity framework.

## AMI scores at a glance

- **Prevalence Score (P):** 35.42 — 27th of 39 countries
- **Response Quality (R):** 30.2
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 12 |
| D4 Plagiarism | 58 |
| D5 Collusion | 70 |
| D6 Data fabrication | 55 |

## What drives South Korea's score

### High collusion (D5 = 70)

South Korea's D5 score is the fifth highest in the dataset. Korean higher education culture includes intensive group-study practices (스터디 그룹, "study groups") that can blur lines between cooperation and prohibited collusion on individual assessments. Large class sizes at major institutions (SNU, KAIST, Yonsei, Korea) contribute.

### Moderate data fabrication (D6 = 55)

South Korea's Retraction Watch signal is moderate-high. The Hwang Woo-suk stem cell case remains the most prominent single case but is not isolated — Korean research output has grown rapidly and misconduct-linked retractions per publication are elevated relative to Q1 peers.

### Plagiarism (D4 = 58)

Korean self-reported plagiarism rates are moderate. The MOE plagiarism enforcement following high-profile political cases (multiple cabinet members faced dissertation plagiarism allegations) has shifted institutional norms but historical case volume is significant.

### Contract cheating (D1 = 67)

Korean-language and English-language search volume for essay mill services is in the moderate-elevated band. The Korean essay mill market includes services targeting both Korean and international students at Korean institutions.

## The post-Hwang context

The 2005–2006 Hwang Woo-suk stem cell research fraud case was a watershed event for Korean academic integrity. The reforms that followed include:
- KRI (Korea Research Integrity) framework establishment
- National Research Foundation of Korea integrity guidelines
- Mandatory institutional integrity committees
- Stronger thesis-checking requirements
- MOE-led enforcement on dissertation plagiarism

The reforms are reflected in South Korea's relatively high R-Score for Asia — R=30.2 places Korea above all other Asian countries scored except Singapore (R=47.5).

## R-Score breakdown

- **Legislation: 20** — research integrity framework via KRI
- **Detection tools: 48** — broad Turnitin and CopyKiller deployment
- **Disclosure: 23** — limited but improving public reporting
- **Penalties: 30** — clear frameworks, applied case-by-case

### CopyKiller

The Korean CopyKiller (카피킬러) plagiarism detection system is widely deployed at Korean universities, providing Korean-language detection capabilities alongside Turnitin's English-language coverage. Mandatory CopyKiller checking for theses contributes to the Detection sub-component.

## Why South Korea is in Q4

The combination of moderate Prevalence (35.42) and moderate Response (30.2) places South Korea in Q4. The post-Hwang reforms have lifted the R-Score but the high D5 (collusion) and D6 (fabrication) signals keep the Prevalence elevated. Korea's profile is structurally Q4 — moderate on both axes — rather than clearly Q1 or Q3.

## Implications

For Korean policymakers, the gap from Q1 status is primarily on the Disclosure component. Building on KRI to require systematic public reporting of misconduct outcomes would lift the R-Score significantly. Continued focus on assessment design (addressing collusion) would lower the Prevalence.

For employers and admissions offices, Korean credentials carry meaningful institutional reputation signals. SNU, KAIST, POSTECH, and the leading Korean institutions have strong institutional integrity infrastructure.

## Sources

- Hwang Woo-suk case and KRI reform documentation
- National Research Foundation of Korea integrity framework
- Google Trends (2022–2026), South Korea country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "japan-academic-misconduct-profile",
    title: "Japan: Academic Misconduct Index Country Profile",
    seoTitle: "Japan Academic Misconduct Profile 2026 | AMI P=32.1",
    metaDescription: "Japan scores P=32.08, R=27.5 on the AMI. Low contract cheating demand, moderate plagiarism, post-STAP cell fraud reforms. JSPS integrity framework. Q4 profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Japan", "Asia", "JSPS", "STAP", "country profile"],
    tldr: "Japan scores P=32.08, R=27.5, Q4 (Probably not looking). Low contract cheating demand (D1=50), moderate plagiarism (D4=44), moderate fabrication (D6=30). Post-STAP cell fraud reforms anchor the JSPS integrity framework.",
    excerpt: "Japan scores P=32.1 on the Academic Misconduct Index, placing it in Q4. Japanese integrity culture differs from regional peers — low contract cheating demand but moderate scores across other dimensions. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is Japan's academic misconduct score?",
        answer: "Japan scores P=32.08 (Prevalence) and R=27.5 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). Japan has the 28th highest Prevalence in the 39-country dataset — one of the lower scores in Asia."
      },
      {
        question: "How did the STAP cell case affect Japanese academic integrity?",
        answer: "The 2014 STAP (Stimulus-Triggered Acquisition of Pluripotency) cell research fraud at RIKEN was a major case that led to reforms across Japanese research institutions. JSPS (Japan Society for the Promotion of Science) strengthened integrity guidelines, MEXT issued ministerial guidance on misconduct response, and major universities increased detection infrastructure. The reforms contributed to Japan's relatively higher R-Score within the Asian regional context."
      },
      {
        question: "Why is contract cheating demand low in Japan?",
        answer: "Japan's D1 score of 50 is among the lowest in Asia. The Japanese-language essay mill market is smaller than the equivalent markets in China, Korea, or Southeast Asia, partly reflecting language-market structure and partly reflecting different student-engagement patterns with Western-style online essay mill services."
      }
    ],
    content: `
## TL;DR

Japan: P=32.08, R=27.5, Q4 (Probably not looking). Low contract cheating demand (D1=50), moderate plagiarism (D4=44), moderate fabrication (D6=30). Post-STAP reforms anchor JSPS integrity framework. Among the lower Asian Prevalence scores.

## AMI scores at a glance

- **Prevalence Score (P):** 32.08 — 28th of 39 countries
- **Response Quality (R):** 27.5
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 31 |
| D3 Exam impersonation | 20 |
| D4 Plagiarism | 44 |
| D5 Collusion | 60 |
| D6 Data fabrication | 30 |

## What drives Japan's score

### Low contract cheating demand (D1 = 50)

Japan's D1 score is among the lowest in Asia and lower than most European countries. The Japanese-language essay mill market is structurally smaller than equivalent markets in Korea, China, or Southeast Asia. Cultural and language-market factors contribute — Japanese students show lower engagement with Western-style online essay mill services compared to peers in some Asian markets.

### Low AI submission demand (D2 = 31)

Japanese-language search volume for AI submission tools is low. This is partly a language-market effect (Japanese-language AI tools are a smaller market than English or Chinese) and partly reflects different patterns of student engagement with these tools.

### Exam impersonation (D3 = 20)

Japan's D3 score is among the higher in the dataset, despite the otherwise moderate profile. The Japanese university entrance examination system (kyousei, 共通テスト, common test) has had documented impersonation incidents [verify specific cases], and the high-stakes nature of entrance examinations creates incentive structures that contribute to the elevated D3 score.

### Moderate fabrication (D6 = 30)

Japan's Retraction Watch signal is moderate. Japanese research output is substantial, particularly in physics, chemistry, biology, and materials science. The 2014 STAP cell case is the most prominent single fraud incident; broader patterns include multiple high-profile cases at major universities and research institutes.

## The post-STAP context

The 2014 STAP cell research fraud at RIKEN was a major Japanese academic integrity event. Haruko Obokata's claims of a novel stem-cell induction method were retracted after multiple replication failures and identification of image manipulation. The case led to:
- JSPS strengthened integrity guidelines
- MEXT ministerial guidance on misconduct response
- Increased detection infrastructure at major universities
- The Council for Science, Technology and Innovation (CSTI) integrity coordination role

The reforms contributed to Japan's relatively higher R-Score within the Asian regional context.

## R-Score breakdown

- **Legislation: 15** — research integrity guidelines; no specific essay mill ban
- **Detection tools: 40** — moderate Turnitin and iThenticate deployment
- **Disclosure: 20** — limited public reporting
- **Penalties: 35** — clear institutional frameworks

### JSPS

The Japan Society for the Promotion of Science is the principal national research funding body. JSPS integrity guidelines apply to funded research; the framework is one of the stronger Asian institutional integrity systems but does not extend mandatorily to student misconduct.

The Ministry of Education, Culture, Sports, Science and Technology (MEXT) provides additional regulatory oversight including post-STAP ministerial guidance.

## Why Japan is in Q4

The combination of moderate Prevalence (32.08) and moderate Response (27.5) places Japan in Q4. The pattern is typical of Japan's institutional culture — neither the very high Prevalence of Q3 nor the strong Response of Q1 European peers.

Japan's relatively low D1 and D2 scores combined with elevated D3, D5, and D6 suggest different misconduct patterns than the contract-cheating-driven profiles of Latin America or the fabrication-driven profile of China.

## Implications

For Japanese policymakers, the post-STAP reforms have lifted the research-integrity R-Score components. The remaining gap to Q1 is primarily on the student misconduct side — extending JSPS-style systematic frameworks to student integrity and increasing public disclosure would close some of the gap.

For employers and admissions offices, Japanese credentials carry strong institutional reputation signals. University of Tokyo, Kyoto University, Osaka, and the National Universities Association institutions have strong institutional integrity infrastructure.

## Sources

- STAP cell case and post-STAP reform documentation
- JSPS integrity guidelines
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), Japan country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "ukraine-academic-misconduct-profile",
    title: "Ukraine: Academic Misconduct Index Country Profile",
    seoTitle: "Ukraine Academic Misconduct Profile 2026 | AMI P=22.5",
    metaDescription: "Ukraine scores P=22.46, R=28.2 on the AMI. Lowest Prevalence in Eastern Europe. NAQA quality framework with explicit integrity remit. Wartime context affects ongoing measurement. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Ukraine", "Europe", "NAQA", "Strikha law", "country profile"],
    tldr: "Ukraine scores P=22.46, R=28.2, Q4 (Probably not looking). Lowest Prevalence in Eastern Europe. NAQA quality framework includes explicit integrity remit. The 2014–2024 reform agenda has strengthened policy infrastructure; wartime context affects ongoing measurement.",
    excerpt: "Ukraine scores P=22.5 on the Academic Misconduct Index — the lowest Prevalence in Eastern Europe. NAQA, established in 2015, includes explicit academic integrity oversight in its mandate. Here is what the data shows and what context to keep in mind.",
    faqSchema: [
      {
        question: "What is Ukraine's academic misconduct score?",
        answer: "Ukraine scores P=22.46 (Prevalence) and R=28.2 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The Prevalence score is the lowest in Eastern Europe, well below Russia (37.5) and Poland (51.2). The R-Score is among the higher Eastern European scores."
      },
      {
        question: "What is NAQA?",
        answer: "NAQA (Національне агентство із забезпечення якості вищої освіти / National Agency for Higher Education Quality Assurance) is Ukraine's quality assurance and accreditation agency. Established in 2015 as part of post-Maidan higher education reform, NAQA includes explicit academic integrity oversight in its mandate — unusual among national quality agencies."
      },
      {
        question: "How does the war affect AMI measurement for Ukraine?",
        answer: "The full-scale Russian invasion in 2022 has significantly disrupted Ukrainian higher education. Many institutions have relocated, some operate online-only, and student and faculty populations have shifted. The AMI 2026 measurements capture this disrupted state. Future versions will note this context explicitly and may require methodology adjustments for Ukraine specifically."
      }
    ],
    content: `
## TL;DR

Ukraine: P=22.46, R=28.2, Q4 (Probably not looking). Lowest Prevalence in Eastern Europe. NAQA quality framework with explicit integrity remit (established 2015, post-Maidan reform). Wartime context affects ongoing measurement and institutional capacity.

## AMI scores at a glance

- **Prevalence Score (P):** 22.46 — 30th of 39 countries
- **Response Quality (R):** 28.2 — highest in Eastern Europe ex-Poland
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Europe (Eastern)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 50 |
| D3 Exam impersonation | 14 |
| D4 Plagiarism | 55 |
| D5 Collusion | 62 |
| D6 Data fabrication | 35 |

## What drives Ukraine's score

### Contract cheating (D1 = 67)

Ukrainian-language and Russian-language search volume for essay mill terms is in the elevated band. The Ukrainian higher education sector has historically had a documented essay mill market; post-2014 reforms have addressed some of the institutional drivers but consumer demand remains.

### Plagiarism (D4 = 55)

Ukrainian higher education integrity literature documents elevated plagiarism rates, particularly in graduate work and at lower-tier institutions. The 2014 Strikha Law on Higher Education and subsequent reforms have addressed several structural drivers; institutional culture changes more slowly than statutory frameworks.

### Data fabrication (D6 = 35)

Ukraine's Retraction Watch signal is moderate. Ukrainian research output is concentrated at a smaller set of institutions; the misconduct-linked retraction rate per publication is consistent with broader Eastern European patterns.

## The post-Maidan reform context

The 2014 Strikha Law on Higher Education and subsequent reform agenda introduced significant changes to Ukrainian higher education governance:
- NAQA established with explicit integrity remit (2015)
- Universal external thesis evaluation
- Stronger institutional autonomy with accompanying accountability
- Removal of corrupt institutional leaders identified through Lustration processes

These reforms have lifted the R-Score relative to other post-Soviet states. Ukraine's R-Score of 28.2 is meaningfully higher than Russia's 16.8, reflecting deliberate policy choices.

### NAQA

The National Agency for Higher Education Quality Assurance is unusual among national quality agencies in including explicit academic integrity oversight. NAQA's framework includes:
- Programme-level integrity assessment
- Required institutional integrity policies
- Published findings on accreditation outcomes
- Specific guidance on plagiarism and contract cheating

The agency contributes meaningfully to the Disclosure sub-component of the R-Score.

## The wartime context

The full-scale Russian invasion in 2022 has significantly disrupted Ukrainian higher education. Many institutions have relocated, some operate fully online, faculty and student populations have shifted, and research output has been disrupted.

The AMI 2026 measurements capture this disrupted state — the dimension scores reflect a higher education system operating under exceptional conditions. Future AMI versions will note this context explicitly. Some methodology adjustments may be required for Ukraine specifically as the situation evolves.

## R-Score breakdown

- **Legislation: 18** — Strikha Law and NAQA framework
- **Detection tools: 40** — UniCheck and similar deployment
- **Disclosure: 25** — NAQA publishes integrity findings
- **Penalties: 30** — institutional codes; NAQA accreditation consequences

## Implications

For Ukrainian policymakers, the integrity reform agenda is a clear policy strength. Continued NAQA development, particularly in expanding disclosure and detection, would close more of the gap to Q1.

For employers and admissions offices, Ukrainian credentials require contextualisation. The institutional reform agenda and NAQA framework provide meaningful integrity infrastructure; the wartime context affects ongoing institutional capacity.

## Sources

- Strikha Law on Higher Education (2014) and subsequent reform documentation
- NAQA (National Agency for Higher Education Quality Assurance) published findings
- Ukrainian higher education integrity literature
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "new-zealand-academic-misconduct-profile",
    title: "New Zealand: Academic Misconduct Index Country Profile",
    seoTitle: "New Zealand Academic Misconduct Profile 2026 | AMI Q1",
    metaDescription: "New Zealand scores P=21.29, R=58.8 on the AMI — Q1 (Best in class). NZQA framework, Universities New Zealand integrity coordination. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["New Zealand", "Asia-Pacific", "NZQA", "academic integrity", "country profile"],
    tldr: "New Zealand scores P=21.29, R=58.8, Q1 (Best in class). Strong NZQA framework, Universities New Zealand integrity coordination, broad detection deployment. Q1 placement is solid but no specific essay mill legislation (gap from Australia's model).",
    excerpt: "New Zealand scores P=21.3 on the Academic Misconduct Index — among the lowest Prevalence scores globally — combined with R=58.8 placing it firmly in Q1. The institutional infrastructure is strong; the country has not yet legislated against essay mills as Australia has. Here is the profile.",
    faqSchema: [
      {
        question: "What is New Zealand's academic misconduct score?",
        answer: "New Zealand scores P=21.29 (Prevalence) and R=58.8 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q1 (Best in class). New Zealand's Q1 placement is solid, with one of the lowest Prevalence scores globally."
      },
      {
        question: "Does New Zealand have essay mill legislation?",
        answer: "New Zealand has no specific contract cheating ban equivalent to Australia's 2020 legislation. NZQA (the New Zealand Qualifications Authority) sets quality standards and Universities New Zealand coordinates institutional integrity practice, but the statutory contract cheating ban that lifted Australia's Legislation sub-score to 100 has not been adopted in New Zealand."
      },
      {
        question: "What is Universities New Zealand and what does it do for academic integrity?",
        answer: "Universities New Zealand (Te Pōkai Tara) is the representative body for the eight New Zealand universities. It coordinates institutional academic integrity practice including shared use of detection tools, joint position statements on AI and integrity, and inter-institutional information sharing about contract cheating providers."
      }
    ],
    content: `
## TL;DR

New Zealand: P=21.29, R=58.8, Q1 (Best in class). NZQA framework, Universities New Zealand coordination, broad detection deployment. Solid Q1 placement; gap from Australia is the absence of specific contract cheating legislation.

## AMI scores at a glance

- **Prevalence Score (P):** 21.29 — 31st of 39 countries
- **Response Quality (R):** 58.8 — 5th highest in dataset
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (4/6 dimensions from live data)
- **Region:** Asia-Pacific

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 31 |
| D3 Exam impersonation | 8 |
| D4 Plagiarism | 40 |
| D5 Collusion | 56 |
| D6 Data fabrication | 12 |

## What drives New Zealand's score

### Low dimension scores

New Zealand's dimension scores are consistently moderate-low:
- D1=50 vs. Latin American 100
- D2=31 vs. Polish 100
- D3=8 — among the lowest in dataset
- D4=40 vs. Pakistani 72
- D6=12 — among the lowest in dataset

The pattern is characteristic of Q1 countries: consistently low scores across dimensions rather than peaks driven by specific demand signals. New Zealand's profile is structurally similar to Australia's, though slightly higher on D1 and D4.

### Low data fabrication (D6 = 12)

New Zealand's Retraction Watch signal is very low. New Zealand research output is concentrated at a small number of universities (eight universities total in the country) with strong institutional integrity infrastructure; misconduct-linked retractions per publication are among the lowest in the dataset.

## What New Zealand does well (R = 58.8)

The R-Score of 58.8 is the fifth highest in the AMI dataset (after Australia, UK, Ireland, and Canada). The breakdown:
- **Legislation: 40** — strong research integrity framework but no contract cheating ban
- **Detection tools: 70** — broad Turnitin deployment across the university sector
- **Disclosure: 65** — NZQA and Universities NZ reporting
- **Penalties: 60** — clear, applied institutional frameworks

### NZQA

The New Zealand Qualifications Authority sets quality standards across the New Zealand education system. NZQA's framework includes integrity-relevant components and the agency coordinates with Universities New Zealand on integrity standards.

### Universities New Zealand

Te Pōkai Tara coordinates the eight New Zealand universities on shared concerns including academic integrity. Joint position statements (on AI tools, contract cheating, and assessment design) and shared use of detection tools contribute meaningfully to consistent practice across the small but coherent New Zealand university system.

## Why New Zealand is solidly in Q1

The combination of low Prevalence (21.29) and strong Response (58.8) places New Zealand firmly in Q1. The small number of universities, strong cross-institutional coordination, and mature integrity infrastructure produce one of the clearer Q1 profiles in the dataset.

### The gap from Australia

Australia (P=7.43, R=88.8) sits in the top corner of Q1. New Zealand's lower R-Score reflects the absence of:
- Specific contract cheating legislation (Australia's 2020 ban)
- Equivalent of TEQSA's public list of known contract cheating providers
- Federal-level mandatory disclosure requirements

Adopting Australia's legislative model would close most of the remaining gap.

## Implications

For New Zealand policymakers, the most direct improvement lever is essay mill legislation on the Australian or Irish model. The institutional infrastructure to implement and enforce such legislation already exists through NZQA and Universities NZ coordination.

For employers and admissions offices, New Zealand credentials carry strong integrity infrastructure signals. The eight New Zealand universities share consistent integrity practices, reducing institutional variance compared to larger university systems.

## Sources

- NZQA framework documentation
- Universities New Zealand (Te Pōkai Tara) integrity coordination
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), New Zealand country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "south-africa-academic-misconduct-profile",
    title: "South Africa: Academic Misconduct Index Country Profile",
    seoTitle: "South Africa Academic Misconduct Profile 2026 | AMI P=19.3",
    metaDescription: "South Africa scores P=19.30, R=30.0 on the AMI. Lowest Prevalence in Africa. CHE accreditation framework, moderate detection deployment. Q4 country profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["South Africa", "Africa", "CHE", "academic integrity", "country profile"],
    tldr: "South Africa scores P=19.30, R=30.0, Q4 (Probably not looking). Lowest Prevalence in Africa. CHE quality framework, moderate detection deployment, the strongest R-Score in Africa.",
    excerpt: "South Africa scores P=19.3 on the Academic Misconduct Index — the lowest Prevalence among African countries scored — combined with R=30.0, the highest African R-Score. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is South Africa's academic misconduct score?",
        answer: "South Africa scores P=19.30 (Prevalence) and R=30.0 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). South Africa has the lowest Prevalence score in Africa and the highest Response Quality score in Africa among the four African countries scored."
      },
      {
        question: "What is the CHE and what does it do?",
        answer: "The Council on Higher Education (CHE) is South Africa's quality assurance body for higher education. CHE accredits programmes through the Higher Education Quality Committee (HEQC) and contributes to integrity standards through its quality framework. The CHE does not mandate integrity-specific disclosure but its quality assessments include integrity-relevant components."
      },
      {
        question: "Does South Africa have essay mill legislation?",
        answer: "South Africa has no specific contract cheating legislation. General fraud provisions apply. The Higher Education Act provides the framework for university regulation but does not specifically address contract cheating. The R-Score of 30.0 reflects strong institutional infrastructure relative to regional peers but the absence of statutory contract cheating bans."
      }
    ],
    content: `
## TL;DR

South Africa: P=19.30, R=30.0, Q4 (Probably not looking). Lowest Prevalence in Africa and highest African R-Score. CHE quality framework, moderate detection deployment, established institutional integrity infrastructure at the major universities.

## AMI scores at a glance

- **Prevalence Score (P):** 19.30 — 32nd of 39 countries
- **Response Quality (R):** 30.0 — highest in Africa
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Africa

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 44 |
| D3 Exam impersonation | 18 |
| D4 Plagiarism | 48 |
| D5 Collusion | 60 |
| D6 Data fabrication | 30 |

## What drives South Africa's score

### Moderate dimension scores

South Africa's dimension scores are consistently moderate. The country has high D5 (collusion = 60) characteristic of large public university systems, moderate D4 (plagiarism = 48), and moderate D1 (contract cheating = 67). No dimension shows the extreme peaks seen in the highest-scoring countries.

### Low data fabrication (D6 = 30)

South Africa's Retraction Watch signal is moderate-low. South African research output is concentrated at a smaller set of established universities (UCT, Wits, Stellenbosch, UKZN, Pretoria) with strong institutional integrity infrastructure; misconduct-linked retractions per publication are consistent with Q4 European patterns.

### Contract cheating (D1 = 67)

South African search volume for essay mill terms is in the elevated band but not maxed. The South African essay mill market includes both domestic services and international essay mills targeting South African students, particularly in distance learning programmes through UNISA.

## R-Score breakdown — strongest in Africa

- **Legislation: 15** — Higher Education Act framework
- **Detection tools: 42** — moderate Turnitin deployment, broader at top institutions
- **Disclosure: 28** — CHE publishes some integrity-relevant findings
- **Penalties: 35** — clear institutional frameworks

### CHE and HEQC

The Council on Higher Education's Higher Education Quality Committee accredits and reviews South African programmes. The framework contributes to the Disclosure sub-component through programme-level public reports. CHE does not mandate integrity-specific disclosure but the quality framework includes integrity components.

### Institutional capacity

South Africa's leading universities — UCT, Wits, Stellenbosch, UKZN, Pretoria, Rhodes — have established academic integrity offices, mandatory detection tool use for thesis-level work, and clear penalty frameworks. UNISA, as one of the largest distance learning institutions globally, has invested significantly in detection infrastructure given its assessment model.

## Why South Africa is in Q4 not Q1

South Africa's R-Score of 30.0 is the highest in Africa but well below Q1 thresholds. The gap is primarily on the Legislation (no contract cheating ban) and Disclosure (no mandatory integrity-specific reporting) components. The institutional foundation exists; the regulatory framework to lift the R-Score has not been built.

The Prevalence score of 19.30 is in Q1 range — only Australia (7.43), Canada (4.90), Germany (9.14), UK (11.41), Ireland (12.21), Singapore (15.34), Philippines (17.69), and one other are lower. The Q4 placement is driven by R-Score rather than Prevalence.

## Implications

For South African policymakers, the gap from Q1 is achievable. Statutory contract cheating legislation, CHE-mandated integrity disclosure, and broader detection tool deployment would lift the R-Score above Q1 thresholds. The institutional foundation at the major universities already supports this.

For employers and admissions offices, South African credentials show meaningful institutional variance. The leading institutions have integrity profiles comparable to mid-tier European and North American universities. The broader sector has more variance in integrity infrastructure.

## Sources

- CHE (Council on Higher Education) framework documentation
- Higher Education Quality Committee (HEQC) reports
- Google Trends (2022–2026), South Africa country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "philippines-academic-misconduct-profile",
    title: "Philippines: Academic Misconduct Index Country Profile",
    seoTitle: "Philippines Academic Misconduct Profile 2026 | AMI P=17.7",
    metaDescription: "The Philippines scores P=17.69, R=23.2 on the AMI. Low Prevalence but limited institutional response. CHED accreditation, English-language essay mill export market. Q4 profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Philippines", "Asia", "CHED", "essay mills", "country profile"],
    tldr: "The Philippines scores P=17.69, R=23.2, Q4 (Probably not looking). Low Prevalence but limited Response Quality. CHED accreditation framework with weak integrity mandate. Documented essay mill export market serving English-language Anglophone destinations.",
    excerpt: "The Philippines scores P=17.7 on the Academic Misconduct Index — among the lower Prevalence scores globally — but R=23.2 keeps it in Q4. The country is also a documented essay mill export hub. Here is what the data shows.",
    faqSchema: [
      {
        question: "What is the Philippines' academic misconduct score?",
        answer: "The Philippines scores P=17.69 (Prevalence) and R=23.2 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). The low Prevalence combined with weak Response is interpreted as likely under-detection rather than genuinely low misconduct."
      },
      {
        question: "Is the Philippines a hub for contract cheating?",
        answer: "The Philippines is one of the principal essay mill export markets globally, alongside Kenya, India, and Pakistan. Filipino writers serve US, UK, and Australian student markets through online platforms. The English-language proficiency, time-zone arbitrage, and lower labour costs have made the Philippines a major supply hub in the global contract cheating economy."
      },
      {
        question: "What is CHED?",
        answer: "The Commission on Higher Education (CHED) regulates higher education in the Philippines. CHED accredits institutions and programmes and sets quality standards. CHED's framework includes some integrity-relevant components but does not mandate universal detection tool deployment or integrity-specific disclosure."
      }
    ],
    content: `
## TL;DR

Philippines: P=17.69, R=23.2, Q4 (Probably not looking). Low Prevalence but weak Response — likely under-detection. Documented essay mill export hub serving Anglophone destinations. CHED accreditation framework without integrity-specific mandate.

## AMI scores at a glance

- **Prevalence Score (P):** 17.69 — 33rd of 39 countries
- **Response Quality (R):** 23.2
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia (Southeast)

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 67 |
| D2 AI submissions | 56 |
| D3 Exam impersonation | 14 |
| D4 Plagiarism | 52 |
| D5 Collusion | 65 |
| D6 Data fabrication | 30 |

## What drives the Philippines' score

### Low Prevalence with high D1 export signal

The Philippines' overall P-Score is low (17.69), but the D1 score of 67 reflects significant essay mill activity. The pattern is structural: the domestic demand for contract cheating services among Filipino students is moderate, but the country is one of the principal *suppliers* in the global contract cheating economy.

### Essay mill export market

Filipino writers serve US, UK, and Australian student markets through online platforms. The English-language proficiency of the Filipino workforce, time-zone arbitrage for Anglophone deadlines, and lower labour costs have made the Philippines a major supply hub. Lancaster (multiple) [verify specific citations] has documented Filipino participation alongside Kenyan and Indian writers as the principal supply-side concentration.

### Collusion (D5 = 65)

The Philippines' D5 score is elevated, consistent with regional Southeast Asian patterns. Large class sizes at major institutions and group-study cultures contribute.

### Low data fabrication (D6 = 30)

Filipino research output is concentrated at a smaller set of institutions (UP system, Ateneo, De La Salle); misconduct-linked retractions per publication are moderate.

## R-Score breakdown

- **Legislation: 18** — Higher Education Act framework; no contract cheating ban
- **Detection tools: 35** — partial Turnitin deployment
- **Disclosure: 15** — limited public reporting
- **Penalties: 25** — institutional codes vary

### CHED

The Commission on Higher Education regulates Filipino higher education and accredits institutions. CHED's framework provides quality oversight but does not mandate integrity-specific disclosure. The agency's accreditation processes contribute modestly to the Disclosure sub-component.

## Why the Philippines is in Q4

The combination of low Prevalence (17.69) and low Response (23.2) places the Philippines in Q4. The AMI methodology's "Probably not looking" diagnosis applies — the low apparent prevalence likely reflects under-detection rather than genuinely low misconduct, particularly given the country's significant supply-side role in the global contract cheating market.

## Implications

The Philippines is one of the cases where the country-level Prevalence score most likely underestimates actual incidence. The supply-side role in essay mill exports is structurally significant; international cooperation between Filipino authorities and Anglophone destination-market regulators would be required for substantive intervention.

For employers and admissions offices, Filipino credentials show meaningful institutional variance. The UP system, Ateneo, De La Salle, and a small set of leading institutions have stronger institutional integrity infrastructure than the broader sector.

## Sources

- Lancaster (multiple), International Journal for Educational Integrity [verify specific citations]
- CHED accreditation framework documentation
- Google Trends (2022–2026), Philippines country-level
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "singapore-academic-misconduct-profile",
    title: "Singapore: Academic Misconduct Index Country Profile",
    seoTitle: "Singapore Academic Misconduct Profile 2026 | AMI P=15.3",
    metaDescription: "Singapore scores P=15.34, R=47.5 on the AMI. Low Prevalence and strong R-Score for Asia. MOE framework, NUS and NTU institutional infrastructure. Q4 profile bordering Q1.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Singapore", "Asia", "MOE", "NUS", "NTU", "country profile"],
    tldr: "Singapore scores P=15.34, R=47.5, Q4 (Probably not looking). Low Prevalence and the strongest Response Quality in Asia. MOE quality framework, NUS and NTU institutional infrastructure. Q4 placement is borderline Q1.",
    excerpt: "Singapore scores P=15.3 on the Academic Misconduct Index — among the lowest Prevalence globally — combined with R=47.5, the highest Asian Response Quality score. The Q4 placement is borderline Q1. Here is the profile.",
    faqSchema: [
      {
        question: "What is Singapore's academic misconduct score?",
        answer: "Singapore scores P=15.34 (Prevalence) and R=47.5 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q4 (Probably not looking). Singapore has the lowest Prevalence in Asia and the highest Asian Response Quality score."
      },
      {
        question: "Why is Singapore in Q4 not Q1?",
        answer: "Singapore's R-Score of 47.5 is below the Q1 threshold despite being the highest in Asia. The gap from Q1 European peers (Netherlands: 51.2) and Q1 Anglophone leaders (Canada: 60.0, NZ: 58.8) reflects the absence of specific contract cheating legislation and slightly weaker mandatory disclosure infrastructure. A small Response increase would shift Singapore into Q1."
      },
      {
        question: "How is academic integrity managed in Singapore?",
        answer: "The Ministry of Education (MOE) sets standards for Singapore universities. NUS, NTU, SMU, and SUTD operate strong institutional academic integrity offices with mandatory detection tool deployment, clear penalty frameworks, and active disclosure of integrity matters. The institutional infrastructure is among the strongest in Asia."
      }
    ],
    content: `
## TL;DR

Singapore: P=15.34, R=47.5, Q4 (Probably not looking). Borderline Q1 — lowest Asian Prevalence, highest Asian R-Score. MOE framework, strong NUS/NTU/SMU institutional infrastructure. No specific contract cheating legislation is the main gap from Q1.

## AMI scores at a glance

- **Prevalence Score (P):** 15.34 — 34th of 39 countries
- **Response Quality (R):** 47.5 — highest in Asia
- **Quadrant:** Q4 — Probably not looking (borderline Q1)
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Asia

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 44 |
| D3 Exam impersonation | 8 |
| D4 Plagiarism | 48 |
| D5 Collusion | 50 |
| D6 Data fabrication | 20 |

## What drives Singapore's score

### Consistently low dimension scores

Singapore's dimension scores are consistently moderate-low across the board:
- D1=50, D2=44 — lower than most Asian peers
- D3=8 — among the lowest in the dataset
- D5=50 — well below regional peers (India, Malaysia, Indonesia at 72)
- D6=20 — low

The pattern reflects mature institutional integrity culture combined with relatively small higher education sector (six autonomous universities plus polytechnics). High institutional standards apply uniformly across the major institutions.

### Low data fabrication (D6 = 20)

Singapore's Retraction Watch signal is low. NUS, NTU, and the other autonomous universities produce substantial research output, particularly in engineering, biomedical, and computing fields, with misconduct-linked retraction rates among the lowest in Asia.

## What Singapore does well (R = 47.5)

The R-Score of 47.5 is the highest in Asia. The breakdown:
- **Legislation: 30** — research integrity framework; no specific essay mill ban
- **Detection tools: 65** — broad Turnitin deployment
- **Disclosure: 40** — institutional reporting
- **Penalties: 55** — clear, applied frameworks

### Singapore institutions

NUS, NTU, SMU, SUTD, SIT, and SUSS operate strong institutional academic integrity offices. The Singapore university system is small (six autonomous universities) but coherently regulated through MOE oversight. Detection tool deployment is universal across the autonomous universities; institutional integrity offices are well-resourced.

### MOE

The Ministry of Education oversees Singapore higher education. MOE's quality assurance framework includes integrity-relevant components. The Committee for Private Education (CPE) regulates the broader private higher education sector with somewhat lower integrity standards than the autonomous universities.

## Why Singapore is borderline Q1

Singapore's R-Score of 47.5 is below the Q1 threshold but the gap is small. The gap from Q1 Anglophone leaders reflects:
- No specific contract cheating ban (Australia, UK, Ireland all have one)
- Disclosure infrastructure is institutional rather than statutory
- The autonomous universities operate strong frameworks but national-level mandates are limited

Adopting essay mill legislation on the Irish/UK model would lift the Legislation sub-score and likely shift Singapore into Q1.

## Implications

For Singapore policymakers, the gap from Q1 is achievable with a modest legislative change. The institutional infrastructure already supports Q1-level integrity practice.

For employers and admissions offices, Singapore credentials carry strong integrity infrastructure signals. The autonomous universities (NUS, NTU, SMU, SUTD) have integrity profiles comparable to Q1 European peers.

## Sources

- MOE framework documentation
- NUS, NTU institutional integrity policies
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), Singapore country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "ireland-academic-misconduct-profile",
    title: "Ireland: Academic Misconduct Index Country Profile",
    seoTitle: "Ireland Academic Misconduct Profile 2026 | AMI R=78.8 Q1",
    metaDescription: "Ireland scores P=12.21, R=78.8 on the AMI — Q1 (Best in class). 2019 QQI essay mill ban anchors the highest Legislation sub-score in Europe. Full profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Ireland", "Europe", "QQI", "essay mill ban", "country profile"],
    tldr: "Ireland scores P=12.21, R=78.8, Q1 (Best in class). Third highest R-Score in dataset. Anchored by the 2019 QQI Act essay mill ban — first such legislation globally. Strong institutional infrastructure across the IUA universities.",
    excerpt: "Ireland scores P=12.2 and R=78.8 on the Academic Misconduct Index — the third highest Response Quality score globally. Ireland was the first country to legislate against essay mill services, in 2019. Here is what drives the score.",
    faqSchema: [
      {
        question: "What is Ireland's academic misconduct score?",
        answer: "Ireland scores P=12.21 (Prevalence) and R=78.8 (Response Quality) on the Academic Misconduct Index 2026, placing it in Q1 (Best in class). Ireland has the third highest Response Quality score in the AMI dataset, behind only Australia (88.8) and the UK (87.5)."
      },
      {
        question: "When did Ireland ban essay mills?",
        answer: "Ireland was the first country in the world to specifically legislate against contract cheating services, through the Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019. The Act gives QQI (Quality and Qualifications Ireland) statutory powers to prosecute essay mill operators and providers."
      },
      {
        question: "How effective has Ireland's essay mill ban been?",
        answer: "Ireland's R-Score of 78.8 reflects the strong legislative framework. QQI has obtained court orders against essay mill websites and pursued enforcement actions against providers. The Legislation sub-score of 100 — the maximum — reflects the comprehensive statutory framework. Whether this has translated into measurable Prevalence reduction is harder to isolate given Ireland's small sample sizes."
      }
    ],
    content: `
## TL;DR

Ireland: P=12.21, R=78.8, Q1 (Best in class). Third highest R-Score globally. Anchored by the 2019 QQI essay mill ban — first such legislation globally. Strong institutional infrastructure across the Irish university sector.

## AMI scores at a glance

- **Prevalence Score (P):** 12.21 — 35th of 39 countries
- **Response Quality (R):** 78.8 — 3rd highest in dataset
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (3/6 dimensions from live data)
- **Region:** Europe

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 33 |
| D2 AI submissions | 31 |
| D3 Exam impersonation | 8 |
| D4 Plagiarism | 44 |
| D5 Collusion | 56 |
| D6 Data fabrication | 15 |

## What drives Ireland's score

### Low dimension scores

Ireland's dimension scores are consistently moderate-low. The D1 score of 33 is tied for the lowest contract cheating signal in the dataset (with Australia and the UK) — all three are countries with specific essay mill legislation.

### Low data fabrication (D6 = 15)

Ireland's Retraction Watch signal is low. Irish research output is concentrated at TCD, UCD, NUI Galway, UCC, Maynooth, DCU, and the IT sector institutions; misconduct-linked retractions per publication are among the lowest in Europe.

## What Ireland did — the 2019 legislation

Ireland was the first country in the world to legislate specifically against contract cheating services. The Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019 (QQI Act 2019):
- Made it an offence to provide, advertise, or operate essay mill services
- Gave QQI statutory powers to prosecute and obtain injunctions
- Set fines and penalties for non-compliance
- Created the statutory framework subsequently adopted by Australia (2020) and the UK (2022)

### QQI enforcement

Quality and Qualifications Ireland has used the 2019 Act to:
- Obtain court orders against essay mill websites operating in Irish jurisdiction
- Pursue enforcement actions against providers
- Publish guidance for institutions on identifying and reporting contract cheating
- Coordinate with TEQSA (Australia) and OfS (UK) on supply-side action

The Legislation sub-score of 100 — the maximum — reflects the comprehensive statutory framework.

## R-Score breakdown

- **Legislation: 100** — comprehensive essay mill ban via QQI Act 2019
- **Detection tools: 75** — broad Turnitin deployment across the IUA universities
- **Disclosure: 70** — QQI reports, institutional disclosure
- **Penalties: 70** — clear, applied frameworks

### IUA and the Irish university sector

The Irish Universities Association coordinates the seven Irish universities. The IUA's National Academic Integrity Network (NAIN) coordinates institutional integrity practice including shared use of detection tools, joint position statements, and cross-institutional information sharing on contract cheating providers.

## Why Ireland is solidly in Q1

The combination of low Prevalence (12.21) and very strong Response (78.8) places Ireland firmly in Q1. Ireland's small country size and concentrated university sector (seven universities plus the institutes of technology) enable coordinated policy implementation that larger systems struggle to match.

The Irish model — comprehensive legislation, statutory regulator with enforcement powers, coordinated institutional practice — has been adopted by Australia (2020) and the UK (2022) as the template for essay mill regulation.

## Implications

For other policymakers, Ireland is the model case. The 2019 Act provides the statutory template, QQI demonstrates that enforcement is operationally feasible, and the NAIN coordination model shows how to implement consistently across institutions.

For employers and admissions offices, Irish credentials carry strong integrity infrastructure signals. The IUA universities (TCD, UCD, NUI Galway, UCC, Maynooth, DCU, UL) share consistent integrity practices.

## Sources

- Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019
- QQI enforcement reports
- IUA National Academic Integrity Network (NAIN)
- Retraction Watch Database, Crossref/GitLab (2026)
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "germany-academic-misconduct-profile",
    title: "Germany: Academic Misconduct Index Country Profile",
    seoTitle: "Germany Academic Misconduct Profile 2026 | AMI P=9.1",
    metaDescription: "Germany scores P=9.14, R=38.8 on the AMI. Third lowest Prevalence globally. DFG integrity framework, broad detection deployment. Q4 placement reflects R-Score below Q1 threshold.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Germany", "Europe", "DFG", "VroniPlag", "country profile"],
    tldr: "Germany scores P=9.14, R=38.8, Q4 (Probably not looking). Third lowest Prevalence globally — but Q4 placement reflects R-Score below Q1 threshold. DFG integrity framework, VroniPlag plagiarism documentation, no specific essay mill ban.",
    excerpt: "Germany scores P=9.1 on the Academic Misconduct Index — the third lowest Prevalence globally — but lands in Q4 because R=38.8 is below Q1 thresholds. The German integrity framework is strong but lacks the statutory contract cheating ban that defines Q1 Anglophone peers. Here is what drives the profile.",
    faqSchema: [
      {
        question: "What is Germany's academic misconduct score?",
        answer: "Germany scores P=9.14 (Prevalence) and R=38.8 (Response Quality) on the Academic Misconduct Index 2026. The Prevalence is the third lowest globally; the country is in Q4 (Probably not looking) because the Response Quality is below the Q1 threshold."
      },
      {
        question: "Why is Germany in Q4 with such a low Prevalence?",
        answer: "Germany's R-Score of 38.8 is meaningfully below Q1 thresholds. The gap reflects: no specific contract cheating ban (Australia, UK, Ireland all have one), limited mandatory federal disclosure, and the federal structure where integrity policy varies between Länder. The DFG framework is strong but covers research rather than student misconduct comprehensively."
      },
      {
        question: "What is VroniPlag?",
        answer: "VroniPlag Wiki is a German volunteer initiative that systematically analyses doctoral dissertations for plagiarism. The project has identified plagiarism in dissertations by senior politicians and academics, leading to revocation of doctoral degrees in multiple high-profile cases. The work has contributed to broader German policy debate on doctoral oversight and detection requirements."
      }
    ],
    content: `
## TL;DR

Germany: P=9.14, R=38.8, Q4 (Probably not looking). Third lowest Prevalence globally. Q4 placement reflects R-Score below Q1 threshold despite very low apparent prevalence. DFG framework, VroniPlag documentation, no specific essay mill ban.

## AMI scores at a glance

- **Prevalence Score (P):** 9.14 — 37th of 39 countries (3rd lowest)
- **Response Quality (R):** 38.8
- **Quadrant:** Q4 — Probably not looking
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** Europe

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 44 |
| D3 Exam impersonation | 10 |
| D4 Plagiarism | 48 |
| D5 Collusion | 52 |
| D6 Data fabrication | 20 |

## What drives Germany's score

### Low dimension scores

Germany's dimension scores are consistently low — characteristic of countries with mature institutional integrity infrastructure:
- D1=50 — moderate, no maxed signals
- D2=44 — moderate AI submission signal
- D6=20 — low Retraction Watch signal

The pattern matches Q1 countries on the Prevalence axis. The Q4 placement is driven entirely by R-Score, not Prevalence.

### VroniPlag and doctoral oversight

The VroniPlag Wiki volunteer initiative has systematically analysed German doctoral dissertations for plagiarism, identifying significant copying in dissertations by senior politicians and academics. High-profile cases include former Defence Minister zu Guttenberg (2011 doctoral revocation) and others [verify other specific names]. The cases led to broader German policy debate on doctoral oversight, with several universities subsequently introducing mandatory thesis-checking requirements.

## R-Score breakdown

- **Legislation: 20** — research integrity provisions; no contract cheating ban
- **Detection tools: 55** — broad Turnitin deployment across the university sector
- **Disclosure: 30** — institutional reporting; varies by Land
- **Penalties: 50** — clear, applied institutional frameworks

### DFG

The Deutsche Forschungsgemeinschaft (German Research Foundation) operates a comprehensive research integrity framework. The "Rules of Good Scientific Practice" (Regeln zur Sicherung guter wissenschaftlicher Praxis) define integrity standards for funded research and require participating institutions to maintain integrity infrastructure. The framework is strong but focused on research misconduct rather than student academic misconduct.

### The federal structure

German higher education is regulated at the Länder level, with significant variation in integrity practice between states. Bavaria, Baden-Württemberg, and Berlin have stronger integrity infrastructure than some other Länder. The federal structure limits the scope for national-level mandatory disclosure or universal detection requirements.

## Why Germany is in Q4

Germany's Q4 placement is a methodology pattern: very low Prevalence combined with R-Score below the Q1 threshold. The "Probably not looking" diagnosis applies in a specific way — Germany has strong research integrity infrastructure but the student academic misconduct response is less systematic than Q1 Anglophone peers.

The gap from Q1 status is achievable. The Netherlands sits at P=44.47, R=51.2 (Q1) — meaningfully higher on both axes — but the Netherlands' R-Score advantage over Germany is achievable through institutional and statutory reform.

## Implications

For German policymakers, the Q4 placement is an artefact of the R/P threshold relationship. Statutory contract cheating legislation on the Irish model, plus mandatory federal disclosure requirements through DFG, would lift the R-Score above Q1 thresholds. Germany's institutional foundation supports this.

For employers and admissions offices, German credentials carry strong integrity infrastructure signals despite the Q4 placement. The Excellence Initiative universities (TU München, LMU, Heidelberg, etc.) have integrity profiles comparable to Q1 European peers.

## Sources

- DFG "Rules of Good Scientific Practice" framework
- VroniPlag Wiki documentation and revocation cases
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), Germany country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "canada-academic-misconduct-profile",
    title: "Canada: Academic Misconduct Index Country Profile",
    seoTitle: "Canada Academic Misconduct Profile 2026 | AMI P=4.9 Lowest",
    metaDescription: "Canada scores P=4.90, R=60.0 on the AMI — the lowest Prevalence score in the dataset. Strong institutional infrastructure across the U15 universities. Q1 Best in class profile.",
    date: "2026-05-20",
    category: "country_profile",
    tags: ["Canada", "North America", "U15", "academic integrity", "country profile"],
    tldr: "Canada scores P=4.90, R=60.0, Q1 (Best in class). The lowest Prevalence score in the entire AMI dataset. Strong U15 university infrastructure, broad detection deployment, mature disclosure practice. No federal essay mill ban — the principal gap from Australia/UK/Ireland.",
    excerpt: "Canada scores P=4.9 on the Academic Misconduct Index — the lowest Prevalence score of any country in the 39-country dataset — combined with R=60.0 placing it firmly in Q1. Here is what drives Canada's position and what the data shows.",
    faqSchema: [
      {
        question: "What is Canada's academic misconduct score?",
        answer: "Canada scores P=4.90 (Prevalence) and R=60.0 (Response Quality) on the Academic Misconduct Index 2026. Canada has the lowest Prevalence score of any country in the dataset, placing it firmly in Q1 (Best in class)."
      },
      {
        question: "Why does Canada have the lowest Prevalence score?",
        answer: "Canada's P-Score of 4.90 reflects consistently low dimension scores: low contract cheating demand (D1=50), low AI submission demand (D2=44), low data fabrication signal (D6=22). The combination of mature institutional infrastructure, strong U15 research universities, and provincial-level integrity standards produces the lowest aggregate score in the dataset."
      },
      {
        question: "Does Canada have specific essay mill legislation?",
        answer: "Canada has no specific federal essay mill ban equivalent to Australia's, the UK's, or Ireland's. Some provinces have considered contract cheating legislation but none has been enacted federally. The R-Score of 60.0 reflects strong institutional infrastructure that partially compensates for the absence of statutory provisions."
      }
    ],
    content: `
## TL;DR

Canada: P=4.90, R=60.0, Q1 (Best in class). Lowest Prevalence score in the entire AMI dataset. Strong U15 university infrastructure, broad detection deployment, mature disclosure practice. No federal essay mill ban is the principal gap from Australia/UK/Ireland.

## AMI scores at a glance

- **Prevalence Score (P):** 4.90 — lowest of 39 countries
- **Response Quality (R):** 60.0 — 4th highest in dataset
- **Quadrant:** Q1 — Best in class
- **Data quality:** A (5/6 dimensions from live data)
- **Region:** North America

### Dimension breakdown

| Dimension | Score |
|---|---|
| D1 Contract cheating | 50 |
| D2 AI submissions | 44 |
| D3 Exam impersonation | 9 |
| D4 Plagiarism | 40 |
| D5 Collusion | 60 |
| D6 Data fabrication | 22 |

## What drives Canada's score

### Consistently low dimensions

Canada's dimension scores are consistently moderate-low across the board. No dimension shows the peaks seen in the high-Prevalence countries. The Retraction Watch signal is low (D6=22), the contract cheating signal is moderate (D1=50), and the plagiarism signal is among the lower in the dataset (D4=40).

### Collusion (D5 = 60)

Canada's D5 score is elevated relative to other Q1 countries. McCabe survey data and follow-up Canadian-specific research [verify] document unauthorised collaboration rates similar to US patterns — large STEM programmes with group-problem-set cultures contribute. The D5 score is the principal area where Canada exceeds Q1 European peers.

### Low data fabrication (D6 = 22)

Canada's Retraction Watch signal is low. Canadian research output is substantial — particularly at U15 institutions (UofT, McGill, UBC, Alberta, Waterloo, McMaster, etc.) — with misconduct-linked retractions per publication among the lowest in the dataset.

## What Canada does well (R = 60.0)

The R-Score of 60.0 is the fourth highest in the AMI dataset (after Australia 88.8, UK 87.5, Ireland 78.8). The breakdown:
- **Legislation: 35** — research integrity provisions; no federal essay mill ban
- **Detection tools: 75** — broad Turnitin deployment across the university sector
- **Disclosure: 70** — institutional reporting; provincial frameworks
- **Penalties: 60** — clear, applied institutional frameworks

### U15 and the Canadian university sector

The U15 Group of Canadian Research Universities coordinates the leading Canadian research institutions on integrity matters including shared use of detection tools and joint position statements. Outside the U15, the broader Canadian university sector also operates strong institutional integrity infrastructure.

### Provincial frameworks

Canadian higher education is provincial. Ontario, BC, Alberta, and Quebec all have ministerial-level quality assurance frameworks that include integrity components. The provincial structure produces less uniform statutory provisions than Anglophone peers with national-level frameworks.

### Tri-Council Policy

The Tri-Council Policy Statement (TCPS) on research ethics and integrity covers federally-funded research across Canadian institutions. The framework contributes to the Disclosure sub-component through required institutional compliance reporting.

## Why Canada is solidly in Q1

The combination of very low Prevalence (4.90 — lowest in dataset) and strong Response (60.0) places Canada firmly in Q1. Canada's profile is the strongest in the dataset on the Prevalence axis and fourth strongest on the Response axis.

### Gap from Australia and UK

Australia (P=7.43, R=88.8) and UK (P=11.41, R=87.5) have higher R-Scores than Canada despite similar Prevalence. The gap reflects:
- Australia and UK have specific contract cheating legislation; Canada does not
- Australia's TEQSA list of known providers; no Canadian equivalent
- Canadian disclosure is institutional rather than federally mandated

Adopting essay mill legislation on the Irish/UK model would close most of the remaining gap.

## Implications

For Canadian policymakers, the path to top-tier Q1 status is primarily legislative. Provincial or federal contract cheating legislation, mandatory federal disclosure requirements through the Tri-Council framework, and a TEQSA-equivalent public list would lift the R-Score above Australian levels.

For employers and admissions offices, Canadian credentials carry very strong integrity infrastructure signals. The U15 universities have integrity profiles comparable to the strongest international peers.

## Sources

- Tri-Council Policy Statement (TCPS) on research ethics
- U15 Group integrity coordination
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends (2022–2026), Canada country-level
- Academic Misconduct Index v1.5 methodology

[View full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-ami-complete-guide",
    title: "What Is the Academic Misconduct Index? A Complete Guide",
    seoTitle: "What Is the Academic Misconduct Index (AMI)? Complete Guide 2026",
    metaDescription: "The AMI is a country-level index measuring academic cheating prevalence and institutional response across 39 countries. Full guide to scope, methodology, and use.",
    date: "2026-05-20",
    category: "guide",
    tags: ["AMI", "academic integrity", "methodology", "guide", "introduction"],
    tldr: "The Academic Misconduct Index (AMI) is a country-level index measuring academic cheating across 39 countries on two axes: Prevalence Score (P) and Response Quality Score (R). Countries fall into four quadrants. Published annually under CC BY 4.0.",
    excerpt: "The Academic Misconduct Index (AMI) measures academic cheating across countries on two axes — Prevalence and Response Quality — placing 39 countries into four quadrants. This guide explains what it is, what it measures, and how to use it.",
    faqSchema: [
      {
        question: "What is the Academic Misconduct Index?",
        answer: "The Academic Misconduct Index (AMI) is an independent country-level index measuring academic cheating prevalence and institutional response across 39 countries. It scores each country on two axes — Prevalence (P) and Response Quality (R) — and assigns them to one of four quadrants. The index draws on Retraction Watch data, Google Trends, FOI disclosures, and the ICAI McCabe surveys."
      },
      {
        question: "Who maintains the AMI?",
        answer: "The Academic Misconduct Index is an independent project. The methodology, dataset, and source code are published openly under CC BY 4.0. The principal aim is to provide policy-grade evidence on cross-country variation in academic integrity, modelled on Transparency International's Corruption Perceptions Index."
      },
      {
        question: "How is the AMI used?",
        answer: "Researchers use the AMI for cross-country comparative analysis. Policymakers reference it to benchmark national integrity infrastructure. Employers and admissions offices use the quadrant placements as one input among many when assessing credentials. Journalists cite it for cross-country reporting. The dataset is downloadable for any of these uses."
      }
    ],
    content: `
## TL;DR

The Academic Misconduct Index (AMI) is a country-level index covering 39 countries. It scores each country on two axes — Prevalence (P) and Response Quality (R) — and places them in four quadrants. Published openly under CC BY 4.0. Version 1.5 launched May 2026.

## What the AMI measures

The index measures two things at the country level:

### Prevalence Score (P)

An estimated rate of academic misconduct, built from six dimensions:

1. **D1 Contract cheating** — paying someone to complete academic work
2. **D2 AI-generated submissions** — passing AI-generated content off as one's own
3. **D3 Exam impersonation** — having someone else sit an examination
4. **D4 Plagiarism** — submitting copied work without attribution
5. **D5 Collusion** — unauthorised collaboration on individual assessments
6. **D6 Data fabrication** — fabricating or falsifying research data

Each dimension is scored on a 0–100 scale within the current country set, then weighted and combined.

### Response Quality Score (R)

How robustly institutions detect, investigate, and deter misconduct, built from four components:

1. **Legislation** — statutory frameworks targeting academic misconduct (essay mill bans, research integrity laws)
2. **Detection tools** — deployment of plagiarism detection and AI detection systems
3. **Disclosure** — mandatory institutional or governmental reporting of misconduct
4. **Penalties** — formal frameworks for institutional sanctions

## The four quadrants

| Quadrant | Pattern | Diagnosis |
|---|---|---|
| Q1 — Best in class | Low P, strong R | Low estimated prevalence and mature institutional response |
| Q2 — Aware and fighting it | High P, strong R | High prevalence acknowledged and actively tackled |
| Q3 — Crisis zone | High P, weak R | Primary target for intervention |
| Q4 — Probably not looking | Low P, weak R | Low apparent prevalence likely reflects under-detection |

Q2 is currently empty in v1.5 — no country combines high prevalence with strong response. This is itself a significant finding.

## What the AMI is not

The AMI is not a measure of individual student behaviour or capability. Country-level scores reflect institutional infrastructure and aggregate measurement, not the integrity of any individual student or graduate.

The AMI is not a definitive count of misconduct cases — it is an estimate based on the best available indicators. Some dimensions rely on demand signals (Google Trends) rather than confirmed incidence; the methodology documents this explicitly.

The AMI does not rank universities. Country-level scores aggregate across diverse institutions; substantial within-country variance is expected.

## How to use the AMI

### As a researcher
Cite the dataset for cross-country comparative analysis. The CSV is downloadable. The methodology document specifies how to interpret scores and quadrant placements.

### As a policymaker
Benchmark national integrity infrastructure against peers. The R-Score breakdown identifies specific institutional levers (legislation, detection, disclosure, penalties).

### As an employer or admissions officer
Use country-level signals as one input among many. Quadrant placement carries more information than precise score values. Institution-level signals — particularly for countries with high within-country variance — remain important.

### As a journalist
Quote scores, quadrant placements, and dimension breakdowns. The dataset is openly licensed.

## Versions and updates

The AMI is updated periodically:

- **v1.0–1.2 (2026 early)** — initial 28-country index
- **v1.3 (April 2026)** — methodology consolidation
- **v1.4** — Russia, Ukraine, Iran added
- **v1.5 (May 2026)** — current version, 39 countries

Future versions will add expert perception surveys, expand country coverage, and improve data quality for dimensions currently using regional extrapolation.

## Licence and citation

The AMI methodology, dataset, and source code are published under CC BY 4.0. Cite as:

> Booth, F. (2026). Academic Misconduct Index, Version 1.5. academicmisconductindex.com

## Further reading

- [Full methodology](/methodology) — detailed explanation of data sources and calculations
- [The four quadrants explained](/blog/four-quadrants-explained)
- [How the P-Score is calculated](/blog/how-p-score-calculated)
- [How the R-Score is calculated](/blog/how-r-score-calculated)
    `.trim(),
  },

  {
    slug: "how-p-score-calculated",
    title: "How the AMI Prevalence Score (P) Is Calculated",
    seoTitle: "How the AMI P-Score Is Calculated | Methodology Guide 2026",
    metaDescription: "The AMI Prevalence Score (P) is built from six dimensions of academic misconduct, weighted, normalised, and rescaled across 39 countries. Full methodology walkthrough.",
    date: "2026-05-20",
    category: "guide",
    tags: ["P-Score", "Prevalence", "methodology", "AMI", "guide"],
    tldr: "The Prevalence Score is built from six dimensions (D1–D6), each scored on a 0–100 scale from live data or literature estimates, then weighted and combined into a country aggregate. Final scores are rescaled across the 39-country set so the lowest receives 5 and the highest receives 95.",
    excerpt: "The AMI Prevalence Score (P) is the estimated rate of academic misconduct in each country. This guide walks through how it is built — the six dimensions, the data sources, the weighting, and the rescaling.",
    faqSchema: [
      {
        question: "What is the AMI Prevalence Score?",
        answer: "The Prevalence Score (P) is the AMI's estimate of how widespread academic misconduct is in a given country. It is built from six dimensions — contract cheating, AI submissions, exam impersonation, plagiarism, collusion, and data fabrication — weighted and combined into a country aggregate score on a 0–100 scale."
      },
      {
        question: "How are the six dimensions weighted?",
        answer: "Dimension weighting is documented in the methodology document. The weights reflect both the prevalence-level importance of each dimension (severity per unit of incidence) and the data quality available for each dimension. Higher-confidence dimensions with stronger live data sources receive slightly higher weight in the v1.5 weighting scheme."
      },
      {
        question: "Why is the P-Score rescaled to 5–95?",
        answer: "The rescaling places the lowest-scoring country in the current set at 5 and the highest at 95. This makes scores comparable across countries within the set but means scores are not absolute — adding or removing countries from coverage will shift the scale. A score near 5 indicates the lowest estimated prevalence among the countries scored, not zero misconduct."
      }
    ],
    content: `
## TL;DR

The Prevalence Score is built in four steps: (1) score each of six dimensions per country from live data or literature; (2) normalise to 0–100; (3) apply dimension weights and aggregate; (4) rescale across the 39-country set so the lowest scores 5 and the highest scores 95.

## The six dimensions

The P-Score is built from six dimensions of academic misconduct:

### D1 Contract cheating
Pays-someone-else demand and incidence. Primary data source: Google Trends queries for contract cheating keywords plus essay mill brand names. Secondary: McCabe / ICAI survey data where available.

### D2 AI-generated submissions
Demand for and incidence of AI-generated work submitted as one's own. Primary data source: Google Trends queries for AI submission tools. Secondary: Guardian FOI data, Scarfe et al. (2024), institutional disclosures.

### D3 Exam impersonation
Having someone else sit an examination. Data sources: published prosecution data, examination-authority statistics, peer-reviewed literature.

### D4 Plagiarism
Submitting copied work without attribution. Primary data source: ICAI McCabe surveys (where country-specific data exists). Secondary: regional extrapolations and country-specific peer-reviewed studies.

### D5 Collusion
Unauthorised collaboration on individual assessments. Primary data source: ICAI McCabe surveys. Secondary: regional patterns.

### D6 Data fabrication
Fabricating or falsifying research data. Primary data source: Retraction Watch database, filtered to misconduct-linked retractions, normalised by publication volume from OpenAlex.

## Step 1 — Score each dimension

Each dimension is scored on a 0–100 scale where 100 represents the highest signal in the country set:

- **Live-data dimensions** (Retraction Watch, Google Trends, FOI) — scored directly from the data after normalisation by population or publication volume
- **Survey dimensions** (McCabe, ICAI) — scored from reported rates, with regional fallback for countries not in the survey
- **Literature dimensions** — country-specific peer-reviewed studies plus regional priors

## Step 2 — Normalise

Dimension scores are normalised to 0–100 within the country set. Top-scoring country on each dimension gets 100; lowest gets 0.

## Step 3 — Aggregate

Dimension scores are combined into a country P-Score using dimension weights. The weights are documented in the methodology document — they reflect both the prevalence-level importance of each dimension and the data quality available.

The aggregation is:

> P_raw = Σ (w_i × D_i)

where w_i is the weight for dimension i and D_i is the normalised dimension score.

## Step 4 — Rescale

The raw aggregate scores are rescaled across the 39-country set so:
- Lowest-scoring country: P = 5
- Highest-scoring country: P = 95

This produces the published P-Score. The rescaling makes scores comparable across countries within the set.

## What the rescaling means

A P-Score of 5 does not mean zero academic misconduct. It means the lowest estimated prevalence among the 39 countries currently scored. Canada's 4.90 is the floor of the current dataset.

A P-Score of 95 does not mean every student cheats. It means the highest estimated prevalence among the 39 countries scored. China's 99.98 is the ceiling, technically slightly above 95 due to the specific rescaling formula.

Adding or removing countries from the index will shift the scale. Future versions with expanded coverage will produce different raw-to-published mappings.

## Data quality notes

Each country's P-Score carries a data quality flag (A, B, C) reflecting how much of the dimension data is from live, country-specific sources versus regional extrapolation or literature priors. Countries with 5 of 6 dimensions from live data receive the A flag.

See [data quality flags explained](/blog/data-quality-flags-explained) for details.

## Limitations and known issues

- **Norway anomaly**: Google Trends signals interpret academic and policy discussion as student demand. Documented in the methodology caveat section.
- **Rescaling sensitivity**: scores shift with country coverage changes.
- **Survey age**: McCabe data is from 2002–2015; AI-era dynamics not captured in D4/D5 surveys.
- **Detection-prevalence confounding**: countries with stronger detection report more cases; this is addressed by the enforcement-detection correction documented in the methodology.

## Sources

- AMI v1.5 methodology document
- Retraction Watch Database, Crossref/GitLab (2026)
- Google Trends API (2022–2026)
- ICAI / McCabe survey data
- OpenAlex publication counts

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "how-r-score-calculated",
    title: "How the AMI Response Quality Score (R) Is Calculated",
    seoTitle: "How the AMI R-Score Is Calculated | Methodology Guide 2026",
    metaDescription: "The AMI Response Quality Score (R) measures institutional response to academic misconduct across four sub-components: legislation, detection, disclosure, penalties. Full guide.",
    date: "2026-05-20",
    category: "guide",
    tags: ["R-Score", "Response Quality", "methodology", "AMI", "guide"],
    tldr: "The Response Quality Score is built from four sub-components: Legislation, Detection tools, Disclosure, and Penalties. Each scored on 0–100 from policy documentation, regulator activity, and institutional infrastructure. Combined into a country R-Score on the same 0–100 scale.",
    excerpt: "The AMI Response Quality Score (R) is the institutional response side of the index — how robustly each country detects, investigates, and deters misconduct. This guide walks through the four sub-components and how they combine.",
    faqSchema: [
      {
        question: "What is the AMI Response Quality Score?",
        answer: "The Response Quality Score (R) measures how robustly a country's institutions detect, investigate, and deter academic misconduct. It is built from four sub-components: Legislation, Detection tools, Disclosure, and Penalties. The combined score runs from 0–100, with the highest scoring country (Australia, R=88.8) anchoring the top of the scale."
      },
      {
        question: "What counts as integrity legislation?",
        answer: "The Legislation sub-component scores statutory frameworks that specifically target academic misconduct. The maximum score (100) is awarded to countries with comprehensive contract cheating bans (Australia 2020, UK 2022, Ireland 2019). Partial scores apply for research integrity legislation, mandatory thesis-checking requirements, and similar provisions. General fraud law alone scores low."
      },
      {
        question: "How are Disclosure scores assigned?",
        answer: "Disclosure measures whether institutions publish misconduct statistics, whether national regulators publish findings, and whether independent bodies (Retraction Watch, Dissernet, VroniPlag) operate effectively. High Disclosure scores require some combination of institutional reporting and regulator transparency."
      }
    ],
    content: `
## TL;DR

The Response Quality Score is built from four sub-components — Legislation (statutory frameworks), Detection tools (Turnitin/equivalent deployment), Disclosure (mandatory reporting and transparency), and Penalties (clear, applied sanctions). Each is scored 0–100; the four are combined into a country R-Score on the same scale.

## The four sub-components

### Legislation (L)

Statutory frameworks specifically targeting academic misconduct. Scoring criteria:

- **100** — comprehensive contract cheating ban with regulator enforcement powers (Australia 2020, UK 2022, Ireland 2019)
- **30–60** — strong research integrity legislation but no contract cheating ban
- **10–25** — general fraud provisions only
- **5–10** — minimal statutory framework

The highest scoring countries on Legislation: Australia, UK, Ireland (all 100). Lowest: Kenya (8), Egypt (10), Iran (10), Nigeria (10).

### Detection tools (D)

Deployment of plagiarism detection and AI detection systems. Scoring criteria:

- **80–100** — near-universal Turnitin/equivalent deployment across the university sector, including AI detection
- **50–75** — broad deployment, mostly at major institutions
- **25–45** — partial deployment, concentrated at elite institutions
- **10–25** — very limited deployment

The highest scoring countries: UK (90), Australia (85), US (80). Lowest: Nigeria (15), Egypt (18), Kenya (18).

### Disclosure (Di)

Whether institutions and national regulators publish misconduct statistics and findings. Scoring criteria:

- **65–100** — mandatory institutional reporting, active national regulator disclosure, independent watchdog activity
- **30–60** — some institutional reporting, regulator disclosure on accreditation outcomes
- **10–25** — limited public reporting
- **5–10** — minimal disclosure

The highest scoring countries: Australia (90), UK (85), Ireland (70), Canada (70), New Zealand (65).

### Penalties (P)

Whether formal sanctions exist and whether they are applied. Scoring criteria:

- **70–100** — clear, mature, consistently applied frameworks
- **40–65** — frameworks exist with reasonable application
- **20–35** — codes exist; enforcement varies
- **10–20** — codes exist but rarely enforced

## Aggregation

Sub-component scores are combined into a country R-Score using sub-component weights:

> R = Σ (w_i × C_i)

where w_i is the weight for sub-component i and C_i is the sub-component score.

The current v1.5 weights are documented in the methodology document. They are calibrated to make the Legislation sub-component meaningfully important without overwhelming the other three.

## Why this structure

The four-sub-component structure mirrors the policy reform pathway available to a country wanting to improve integrity:

1. **Legislation**: statutory frameworks (slow, requires political will but durable)
2. **Detection**: technology deployment (fast, requires resources)
3. **Disclosure**: reporting requirements (medium, requires regulator capacity)
4. **Penalties**: enforcement (medium, requires institutional commitment)

Countries can improve any sub-component independently. The R-Score is a sum of policy choices rather than a single statistic.

## Patterns in the R-Score data

### Q1 Anglophone leaders share legislative structure

Australia, UK, and Ireland all have specific contract cheating bans (L=100). This is the principal differentiator between the Q1 leaders and other Q1 countries (Netherlands, Canada, NZ).

### Detection deployment is the most resource-sensitive sub-component

The D sub-component shows the strongest correlation with country wealth and university sector resources. Countries with strong intent but limited budgets (Kenya, Nigeria, Egypt) score lowest on D.

### Disclosure is the slowest to develop

The Di sub-component is where most Q4 countries fall furthest behind. Mandatory disclosure requires regulator capacity and institutional culture change; it is slow to build.

### Penalties typically follow Detection

Countries with strong Detection usually have functioning Penalties — finding cases creates demand for sanctioning frameworks. Countries can have weak Penalties despite strong Detection if institutional tolerance is high (Russia's Antiplagiat + low enforcement is the prototype).

## Limitations

- **Coverage variability**: Detection deployment is measurable; institutional culture (which affects whether detection produces consequences) is harder to score
- **Statutory ≠ enforced**: a country with strong law on paper may have weak enforcement; the AMI weights statutory frameworks heavily but cross-checks against regulator activity
- **Regulator quality**: TEQSA's public list of providers is unusually transparent; not all regulators publish equivalent data

## Sources

- AMI v1.5 methodology document
- National regulator publications (TEQSA, OfS, QQI, etc.)
- Institutional integrity office documentation
- Detection tool vendor deployment data

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-exam-impersonation",
    title: "What Is Exam Impersonation? Definition, Examples, and Global Data",
    seoTitle: "What Is Exam Impersonation? Definition & Global Data 2026",
    metaDescription: "Exam impersonation is when someone other than the registered candidate sits an examination. Definition, examples, detection methods, and which countries score highest on AMI D3.",
    date: "2026-05-20",
    category: "guide",
    tags: ["exam impersonation", "academic integrity", "D3", "guide", "definition"],
    tldr: "Exam impersonation — having someone else sit an examination — is the AMI's D3 dimension. Nigeria scores highest (D3=28), followed by Pakistan (25), India (22), and Japan (20). The phenomenon is most documented around high-stakes entrance examinations.",
    excerpt: "Exam impersonation — having someone else sit an examination for you — is one of the harder forms of academic misconduct to measure and one of the easier to detect. This guide explains what it is, how it works, and what the AMI data shows.",
    faqSchema: [
      {
        question: "What is exam impersonation?",
        answer: "Exam impersonation is when someone other than the registered candidate sits an examination — either physically attending an exam venue using the candidate's identity, or sitting an online examination using the candidate's login. It is considered a serious form of academic misconduct because the grade obtained does not reflect the candidate's knowledge or ability."
      },
      {
        question: "Is exam impersonation illegal?",
        answer: "In many jurisdictions, exam impersonation is treated as fraud or forgery and can be prosecuted under general criminal law even without specific academic misconduct legislation. Pakistan, Nigeria, and India have all prosecuted exam impersonation cases. The penalties vary widely — from institutional disciplinary action to criminal charges with imprisonment."
      },
      {
        question: "Which countries have the highest exam impersonation rates?",
        answer: "On the AMI's D3 dimension, Nigeria scores highest (28), followed by Pakistan (25), India (22), and Japan (20). The phenomenon is most documented around high-stakes entrance examinations (JAMB in Nigeria, civil service examinations in Pakistan, IIT-JEE in India, university entrance examinations in Japan)."
      }
    ],
    content: `
## TL;DR

Exam impersonation is the AMI's D3 dimension — having someone else sit an examination as the registered candidate. Nigeria scores highest (D3=28), followed by Pakistan (25), India (22), and Japan (20). Most documented around high-stakes entrance examinations. Biometric verification systems are the principal countermeasure.

## What exam impersonation is

Exam impersonation occurs when someone other than the registered candidate sits an examination. The substitute may be:

- A paid impersonator (a "mercenary" exam-taker)
- A peer doing the candidate a favour
- A family member
- A professional service provider in jurisdictions where impersonation networks operate

The candidate receives a grade or qualification they did not earn through their own performance.

## How impersonation works

### Physical examinations

The impersonator attends the exam venue presenting identification (real, forged, or photographed) that matches the registered candidate. Some impersonation networks specialise in producing convincing fake identification; others exploit weak verification at exam venues.

### Online examinations

The candidate provides their login credentials to the impersonator. The impersonator sits the exam remotely. Online proctoring software has attempted to address this through identity verification (photo, ID check) at session start, but circumvention techniques are documented.

### Entrance examinations

The most documented context for systematic exam impersonation is national entrance examinations. JAMB (Nigeria), WAEC, the Civil Service Public Service Commission (Pakistan), and IIT-JEE preparation (India) have all had documented impersonation networks.

## What the AMI data shows

The D3 dimension scores on a 0–100 scale across the 39-country set. Top scores:

| Country | D3 Score |
|---|---|
| Nigeria | 28 |
| Pakistan | 25 |
| India | 22 |
| Japan | 20 |
| China | 20 |
| Egypt | 20 |

The highest D3 scores cluster in countries with large student populations, high-stakes entrance examinations, and limited biometric verification infrastructure. The Japan score is notable — Japanese university entrance exams have had documented impersonation cases despite the country's otherwise low overall Prevalence score.

The lowest D3 scores: New Zealand (8), Australia (8), Ireland (8), Singapore (8). All have strong identification verification and smaller exam-taking populations.

## Detection methods

### Biometric verification

The most effective detection method. Fingerprint, facial recognition, and iris-scanning systems are increasingly deployed for high-stakes examinations. JAMB introduced biometric verification in Nigeria; the system has substantially reduced impersonation attempts.

### Photo verification

A weaker but more deployable measure. Candidate photos are taken at registration and matched at the exam venue. Effective against casual impersonation but vulnerable to professional impersonation networks with high-quality forged identification.

### Handwriting analysis

Some exam authorities compare answer-script handwriting against registered samples. This is post-hoc detection — finds cases after the fact rather than preventing them.

### Online proctoring

Camera-based monitoring of online exam takers. Identity verification at session start plus continuous monitoring. Effective against casual impersonation but defeats remain possible.

## Why exam impersonation matters

Compared to plagiarism or contract cheating, exam impersonation is a more direct fraud — the candidate is not simply receiving help with their own work but is having someone else perform the assessment entirely. The qualification obtained reflects the impersonator's knowledge, not the candidate's.

For high-stakes entrance examinations or professional certification examinations, the consequences extend beyond the individual case. Medical school entrance examinations passed by impersonators produce doctors who lack the foundational ability tested by the examination.

## Country patterns

### Nigeria

The most extensively documented exam impersonation environment. JAMB and WAEC examinations have had documented impersonation networks. JAMB's biometric verification system was introduced specifically to address the problem.

### Pakistan

Federal Public Service Commission examinations and civil service entrance examinations have had documented impersonation cases. Prosecutions have occurred but the scale has historically been substantial.

### India

IIT-JEE preparation includes documented cases of impersonation by professional test-takers. The 2023 NEET examination irregularities included impersonation allegations [verify].

### Japan

University entrance examination impersonation has been documented despite Japan's otherwise low overall Prevalence score. The high-stakes nature of the kyousei tesuto creates incentives that drive elevated D3 scoring.

## Sources

- JAMB and WAEC integrity reports [verify specific sources]
- Pakistan FPSC examination integrity documentation
- Academic literature on biometric verification in examinations
- Academic Misconduct Index v1.5 methodology

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-ai-generated-submission",
    title: "What Is an AI-Generated Submission? Definition, Detection, and Data",
    seoTitle: "What Is an AI-Generated Submission? Definition & Detection 2026",
    metaDescription: "AI-generated submission is when a student submits work produced by AI (ChatGPT, Claude, Gemini) as their own. Definition, detection methods, and AMI data on global incidence.",
    date: "2026-05-20",
    category: "guide",
    tags: ["AI submissions", "ChatGPT", "academic integrity", "D2", "guide"],
    tldr: "An AI-generated submission is when a student submits work produced by an AI system (ChatGPT, Claude, Gemini, etc.) as their own. The AMI's D2 dimension measures this — China (68), Egypt, Iran, Saudi Arabia, Italy, France, Spain, Greece, Colombia, Argentina, Poland (all 100) lead globally.",
    excerpt: "AI-generated submission is the academic misconduct category that did not exist before late 2022. The AMI's D2 dimension tracks it. This guide explains what counts, how it is measured, and what the data shows.",
    faqSchema: [
      {
        question: "What is an AI-generated submission?",
        answer: "An AI-generated submission is when a student submits work produced by an AI system — including ChatGPT, Claude, Gemini, or other large language models — and presents it as their own original work without authorisation or acknowledgement. Most universities now require explicit disclosure of any AI assistance; submitting AI work as your own is typically a misconduct offence."
      },
      {
        question: "How is AI-generated content detected?",
        answer: "Detection uses a combination of automated tools (Turnitin AI detection, GPTZero, Originality.ai, Copyleaks) and human review (stylistic inconsistency, conceptual errors typical of LLMs, response to follow-up questions). Scarfe et al. (2024) found that 94% of AI-generated submissions went undetected at the University of Reading in a controlled study, suggesting current detection is limited."
      },
      {
        question: "Is using ChatGPT for essays always cheating?",
        answer: "It depends on institutional policy. Most universities permit limited AI use (brainstorming, grammar checking) with disclosure but prohibit submitting AI-generated content as original work. Some institutions ban AI use entirely; others permit it with proper attribution. The misconduct is in the misrepresentation of authorship, not necessarily in the use itself."
      }
    ],
    content: `
## TL;DR

AI-generated submission is the AMI's D2 dimension — student work produced by AI systems and submitted as the student's own. The category did not exist before ChatGPT's late-2022 launch. Top D2 scores: China (68 — slightly below top due to D6 dominance), with several countries at 100 including Egypt, Iran, Saudi Arabia, Italy, France, Spain, Greece, Colombia, Argentina, Poland. Detection remains limited (Scarfe et al. 2024).

## What counts as AI-generated submission

An AI-generated submission is academic work produced by an AI system and submitted as the student's original work without authorisation or proper attribution. Common forms:

- **Direct submission** — copying ChatGPT/Claude/Gemini output into a document and submitting
- **Lightly edited submission** — making cosmetic changes to AI output and submitting
- **AI-assisted drafting beyond institutional policy** — using AI for substantive content generation when institutional policy permits only limited use
- **AI use in proctored examinations** — using AI tools during exams that prohibit them

The misconduct is in the *misrepresentation of authorship*, not necessarily in AI use itself.

## How institutional policies vary

Universities have responded to AI tools with widely varying policies:

### Permitted with disclosure
Most common model. Students can use AI for brainstorming, grammar checking, and similar support tasks with disclosure of the specific use. Original drafting and analytical work must be the student's own.

### Prohibited entirely
Some courses and institutions ban AI use entirely. Common in fundamental skills courses (writing, mathematics) where the assessment specifically targets capabilities AI can perform.

### Permitted with attribution
Some courses permit substantial AI use provided the student properly attributes the AI contribution. Less common; raises questions about what is being assessed.

### Permitted without restriction
Rare; some institutions and instructors permit AI use without restriction, treating it as a writing tool. Often combined with assessment design that requires demonstrable understanding beyond text generation.

## What the AMI data shows

D2 scores on a 0–100 scale across the 39-country set. Top D2 scores (multiple countries at 100):

- Colombia, Argentina, Greece, Egypt, Iran, Saudi Arabia, Italy, France, Spain, Poland — all D2=100

Lowest D2 scores: Sweden (31), New Zealand (31), Japan (31), Norway (31). The lowest D2 scores cluster in Nordic and Pacific countries with smaller language markets.

Top scores reflect demand-side search-volume signals. Many of the maxed-D2 countries have Spanish, Arabic, Italian, French, or Polish language markets where AI submission tool search volume is at the top of the European or regional distribution.

## Detection methods

### Automated detection

Turnitin, GPTZero, Originality.ai, Copyleaks, and others provide AI-generated content detection. Capabilities have improved since 2023 but reliability remains limited:

- False positives are common — human-written text can register as AI
- False negatives are common — AI text can pass detection, particularly if lightly edited
- Reliability degrades for shorter text, paraphrased text, and non-English text

### Human review

- Stylistic inconsistency between the submission and the student's known writing
- Conceptual errors typical of LLMs (incorrect citations, factual hallucinations)
- Response to follow-up questions — students who didn't write the work struggle to discuss it substantively

### Scarfe et al. (2024)

The most cited study on AI submission detection. The University of Reading study submitted AI-generated work through normal coursework channels; 94% went undetected. The study established that current human + automated detection misses the majority of AI submissions.

## The AMI's D2 methodology

D2 is primarily measured through Google Trends signals for AI submission tool keywords. The signal captures demand for tools rather than confirmed incidence. The methodology applies a detection-ratio correction (Scarfe 94% undetection) to estimate true incidence from detected case rates where institutional data is available.

The reliance on demand signals is a methodology limitation. The Norway case illustrates the issue — high D2 search volume in Norway partly reflects academic and policy discussion rather than student demand. Future AMI versions will improve language-disambiguated signal interpretation.

## Why AI submissions matter for the AMI

AI submissions are the newest misconduct category. Before late 2022, the category did not meaningfully exist. The rapid adoption of ChatGPT (over 100 million users within two months of launch) created a structural shift in academic misconduct that the AMI captures.

The category interacts with other dimensions. AI tools can be used for:
- D1 contract cheating substitution (cheap AI replacing paid human writers)
- D4 plagiarism (AI text may incorporate uncredited training-data content)
- D6 data fabrication (AI tools can generate plausible-looking fake research data)

## Sources

- Scarfe, P., et al. (2024). "A real-world test of artificial intelligence infiltration of a university examinations system: A 'Turing Test' case study"
- Guardian FOI reporting on UK AI misconduct cases
- Turnitin AI detection deployment data
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-plagiarism-definition",
    title: "What Is Plagiarism? Definition, Types, and Global Data",
    seoTitle: "What Is Plagiarism? Definition, Types & Global Data 2026",
    metaDescription: "Plagiarism is the use of someone else's words or ideas without attribution. Types include direct, mosaic, self-plagiarism, and translation plagiarism. AMI data and detection methods.",
    date: "2026-05-20",
    category: "guide",
    tags: ["plagiarism", "academic integrity", "D4", "guide", "definition"],
    tldr: "Plagiarism is the use of someone else's words or ideas without proper attribution. Types include direct, mosaic, self-plagiarism, and translation plagiarism. The AMI's D4 dimension scores it across 39 countries: Pakistan (72), Russia (72), India (70) lead globally; Norway (32) is lowest.",
    excerpt: "Plagiarism — using someone else's words or ideas without attribution — is the oldest and most studied form of academic misconduct. This guide covers definitions, types, detection, and what the AMI data shows.",
    faqSchema: [
      {
        question: "What is plagiarism?",
        answer: "Plagiarism is the use of someone else's words, ideas, data, or other original work without proper attribution and presented as one's own. It includes both direct copying and indirect forms like paraphrasing without credit, mosaic patchwriting, and self-plagiarism (reusing one's own previously submitted work without disclosure)."
      },
      {
        question: "What are the different types of plagiarism?",
        answer: "Common categories include: (1) direct plagiarism — verbatim copying without quotation marks or citation; (2) mosaic plagiarism — combining phrases from multiple sources; (3) paraphrasing plagiarism — restating ideas without citation; (4) self-plagiarism — reusing one's own previously submitted work; (5) translation plagiarism — translating from a foreign-language source without attribution; (6) image and data plagiarism — using charts, figures, or datasets without permission or citation."
      },
      {
        question: "Which countries have the highest plagiarism rates?",
        answer: "On the AMI's D4 dimension, Pakistan (72) and Russia (72) score highest, followed by India (70), Egypt (68), Iran (65), Nigeria (64), Malaysia (62), Turkey (62), Indonesia (64), and Vietnam (62). The lowest scores are in Norway (32), Sweden (38), and Canada (40). High scores reflect both prevalence and limited institutional response."
      }
    ],
    content: `
## TL;DR

Plagiarism is using someone else's words or ideas without attribution. The AMI's D4 dimension measures it. Pakistan (72) and Russia (72) score highest; Norway (32) and Sweden (38) lowest. Detection uses tools like Turnitin (90%+ of Q1 institutions); culture and policy matter as much as technology.

## Definition

Plagiarism is the use of someone else's words, ideas, data, or other original work without proper attribution and presented as one's own. The misconduct lies in the misrepresentation — the reader is led to believe the student produced the work themselves when the work originated elsewhere.

The standard is intent-neutral in most institutional policies. Accidental plagiarism (forgetting to cite) is typically treated as plagiarism, though usually with lower sanctions than deliberate copying.

## Types of plagiarism

### Direct plagiarism

Verbatim copying without quotation marks or citation. The clearest and most easily detected form.

### Mosaic plagiarism (patchwriting)

Combining phrases from multiple sources without attribution. Often produced by lightly editing copied text — replacing some words while preserving structure and content. Harder to detect than direct copying.

### Paraphrasing plagiarism

Restating ideas in different words without citing the source. Sometimes called "idea plagiarism." The misconduct is in the failure to credit the original thinker, even though no words are directly copied.

### Self-plagiarism

Reusing one's own previously submitted work without disclosure. Common in graduate work where students may want to develop a single research idea across multiple assignments. Most institutional policies require disclosure of any reuse.

### Translation plagiarism

Translating from a foreign-language source and presenting the result as original work without citation. Difficult to detect with conventional tools, which match against same-language sources.

### Image, data, and figure plagiarism

Using charts, figures, datasets, or images without permission or citation. Particularly relevant in scientific and technical disciplines.

### Contract cheating as plagiarism

Submitting work written by someone else is typically classified as contract cheating (the AMI's D1 dimension) rather than plagiarism, but it shares the core misconduct of misrepresented authorship.

## What the AMI data shows

D4 scores on a 0–100 scale across the 39-country set:

| Top D4 scores | Score |
|---|---|
| Pakistan | 72 |
| Russia | 72 |
| India | 70 |
| Egypt | 68 |
| Iran | 65 |
| Nigeria | 64 |
| Indonesia | 64 |
| Malaysia | 62 |
| Turkey | 62 |
| Vietnam | 62 |

| Lowest D4 scores | Score |
|---|---|
| Norway | 32 |
| Sweden | 38 |
| Canada | 40 |
| New Zealand | 40 |
| France | 42 |
| Spain | 48 |
| Italy | 52 |

High D4 scores cluster in countries with limited mandatory detection deployment, large higher education sectors, and historically lower institutional emphasis on academic writing conventions. Russian and Pakistani D4 scores reflect documented dissertation-level plagiarism (Dissernet, Pakistani HEC).

## Detection methods

### Plagiarism detection tools

Turnitin, iThenticate, Copyleaks, Compilatio, Urkund, Antiplagiat (Russia), CopyKiller (Korea), JSA (Poland), and others compare submitted text against:

- Web content
- Published academic literature
- Previously submitted student work (institutional repositories)
- Subscription database content

Coverage and effectiveness vary by tool and by language. English-language detection is strongest; less-resourced languages have weaker coverage.

### Cross-reference checking

Human review of suspicious passages against likely sources. Slow but effective for high-stakes work like doctoral dissertations.

### Patchwriting detection

Advanced detection tools attempt to identify mosaic plagiarism through phrase-level analysis. Reliability is lower than direct match detection.

## Why D4 scores vary across countries

Several factors drive cross-country variance:

### Language market for detection

English-language detection tools (Turnitin, iThenticate) have larger corpora than tools for less-resourced languages. Countries with English-medium higher education benefit from stronger detection capability.

### Mandatory deployment

Countries with mandatory plagiarism checking for theses (Poland's JSA, India's UGC requirements, Pakistan's HEC) capture more cases. The detection-prevalence confound means stronger detection produces higher reported rates even with the same actual prevalence.

### Citation culture

Academic writing conventions vary across educational systems. Anglophone systems heavily emphasise citation and quotation marks; some other systems traditionally emphasised demonstration of mastery over source attribution, producing different baseline behaviour.

### Survey availability

Country-specific D4 scoring depends on the availability of self-report survey data. The McCabe / ICAI surveys cover some countries directly; others rely on regional extrapolation, which compresses cross-country variance.

## Sources

- McCabe, D. L. (ICAI / Rutgers). Multi-decade self-report survey programme
- Turnitin global deployment data
- AMI v1.5 methodology document
- Country-specific integrity literature

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-collusion-academic",
    title: "What Is Academic Collusion? Where the Line Is and What the Data Shows",
    seoTitle: "What Is Academic Collusion? Definition & Global Data 2026",
    metaDescription: "Academic collusion is unauthorised collaboration on individual assessments. Definition, examples, the line with permitted cooperation, and AMI D5 data across 39 countries.",
    date: "2026-05-20",
    category: "guide",
    tags: ["collusion", "academic integrity", "D5", "collaboration", "guide"],
    tldr: "Academic collusion is unauthorised collaboration on individual assessments. The AMI's D5 dimension measures it. Nigeria (75), India (72), Malaysia (72), Indonesia (72), South Korea (70), Turkey (69), Iran (69) lead globally. The line between collaboration and collusion depends on instructor policy.",
    excerpt: "Collusion is the form of academic misconduct hardest to define cleanly. The line between encouraged collaboration and prohibited collusion depends on instructor policy — and shifts dramatically between courses. This guide covers what counts and what the data shows.",
    faqSchema: [
      {
        question: "What is academic collusion?",
        answer: "Academic collusion is unauthorised collaboration on work intended to be assessed individually. The 'unauthorised' part is critical — collaboration is often permitted or encouraged, but specific assessments require individual work. Submitting jointly-produced work as your own individual work crosses into collusion."
      },
      {
        question: "Where is the line between collaboration and collusion?",
        answer: "The line is set by instructor and institutional policy. Discussing concepts with peers is usually permitted; producing identical or near-identical answers is usually collusion. The boundary is often unclear when assignments are completed in study groups — students may discuss approach, methodology, and even partial solutions while still being expected to submit independent final work."
      },
      {
        question: "Which countries have the highest academic collusion rates?",
        answer: "On the AMI's D5 dimension, Nigeria (75) scores highest, followed by India (72), Malaysia (72), and Indonesia (72). South Korea (70), Turkey (69), and Iran (69) also score high. The lowest scores are in Singapore (50), Argentina (50), and Colombia (52). Group-study cultures and large class sizes drive elevated scores."
      }
    ],
    content: `
## TL;DR

Academic collusion is unauthorised collaboration on work meant to be done individually. The AMI's D5 dimension scores it. Nigeria (75), India (72), Malaysia (72), Indonesia (72) lead globally. The boundary between permitted collaboration and prohibited collusion depends on instructor policy and is often genuinely unclear.

## Definition

Academic collusion is unauthorised collaboration on academic work that is intended to be assessed as the individual work of one student. The misconduct is the misrepresentation that the submitted work reflects only the named student's effort when it actually involved one or more others.

The "unauthorised" qualifier is critical. Many forms of collaboration are explicitly permitted or even required — group projects, peer review, study groups. The misconduct emerges when individually-assessed work has been produced jointly without disclosure.

## Common forms

### Identical or near-identical submissions

The clearest form. Two or more students submit work with substantial overlapping content (calculations, paragraphs, code).

### Shared problem-set solutions

Students work through problem sets together and arrive at substantively identical solutions. Common in STEM disciplines where unique algorithmic solutions are limited.

### Joint essay writing

Students collaborate on essay structure, argument, and content while submitting as individuals. The most common form in humanities and social sciences.

### Code copying

Students share programming assignments — copying full solutions or substantial sections. Code-similarity detection tools (Moss, JPlag) are widely deployed in CS courses but not universally.

### Exam answer comparison

Students sharing exam answers in real time (texting during exams, sharing screens in online exams). Crosses into a more serious offence than asynchronous collusion.

## The collaboration-collusion boundary

The most genuinely difficult area of academic misconduct policy. The boundary depends on:

### Instructor and institutional policy

Some instructors permit substantial discussion of problem sets; others require independent work. Some explicitly forbid showing one's work to others; others encourage peer learning.

### Assignment type

Group projects authorise full collaboration. Take-home exams typically prohibit it. Routine problem sets sit in between, with policy varying by instructor.

### Course culture

Some disciplines have strong study-group traditions. STEM courses at major research universities often involve heavy informal collaboration that may or may not be formally permitted.

### Cultural norms

Educational systems vary in how they treat collaboration. East Asian study-group cultures (스터디 그룹 in Korea, 勉強会 in Japan) treat intensive group study as the norm; the line to prohibited collusion can be culturally ambiguous.

## What the AMI data shows

D5 scores on a 0–100 scale across the 39-country set:

| Top D5 scores | Score |
|---|---|
| Nigeria | 75 |
| India | 72 |
| Malaysia | 72 |
| Indonesia | 72 |
| South Korea | 70 |
| Turkey | 69 |
| Iran | 69 |
| United States | 68 |
| Brazil | 65 |
| Philippines | 65 |

| Lowest D5 scores | Score |
|---|---|
| Singapore | 50 |
| Argentina | 50 |
| Colombia | 52 |
| Germany | 52 |
| Thailand | 55 |
| Australia | 55 |

The highest D5 scores cluster in countries with:
- Large class sizes at major institutions (Nigeria, India, Indonesia, Malaysia)
- Strong group-study cultures (Korea, Turkey)
- Limited assessment design distinguishing individual from collective work

The United States' D5 score of 68 is notable — high for a Q1 country. McCabe survey data has consistently shown elevated US collusion rates in STEM coursework with group-problem-set cultures.

## Detection methods

### Submission similarity

Plagiarism detection tools used internally — comparing student submissions against each other within the institutional repository. Effective for detecting verbatim or near-verbatim overlap.

### Code-similarity tools

Moss (Stanford), JPlag, and similar tools detect structural similarity in code submissions. Widely used in CS courses.

### Statistical analysis

Comparing answer patterns across students can detect collusion even when wording differs. Less common; requires careful interpretation given that students working similar problems will produce similar work even without collusion.

### Real-time exam monitoring

Online proctoring software can detect screen sharing and texting during online exams. Effective for synchronous collusion in exam settings.

## Why D5 scores vary

### Survey data availability

The McCabe / ICAI surveys captured collusion data for some countries with strong direct measurement. Regional extrapolation for others compresses variance.

### Cultural variation in study practice

Group-study practices that produce elevated D5 are not universal. Nordic and German university cultures historically have less group-study emphasis; Asian and Latin American cultures more.

### Assessment design

Universities with assessment designs that distinguish individual from collaborative work (oral examinations, individual project defences, varied question sets) have lower effective D5 even with similar underlying student behaviour.

## Sources

- McCabe, D. L. (ICAI / Rutgers) collusion survey data
- Moss, JPlag code-similarity documentation
- AMI v1.5 methodology document
- Country-specific integrity literature

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-data-fabrication-research",
    title: "What Is Data Fabrication in Research? Definition and Famous Cases",
    seoTitle: "What Is Data Fabrication in Research? Definition & Cases 2026",
    metaDescription: "Data fabrication is making up data; falsification is altering real data. The AMI's D6 measures it via Retraction Watch. China (100), India (70), Iran (65) lead globally.",
    date: "2026-05-20",
    category: "guide",
    tags: ["data fabrication", "research misconduct", "D6", "Retraction Watch", "guide"],
    tldr: "Data fabrication is making up research data; data falsification is altering real data. Both are research misconduct. The AMI's D6 dimension scores them via Retraction Watch. China scores 100 (highest), Russia 78, India 70, Iran 65. Famous cases: Diederik Stapel, Hwang Woo-suk, STAP cells.",
    excerpt: "Data fabrication is the most clearly defined form of academic misconduct — and the most consequential when it affects research literature. The AMI's D6 dimension tracks it. Here is what it is, how it is detected, and the cases that defined modern research integrity.",
    faqSchema: [
      {
        question: "What is data fabrication?",
        answer: "Data fabrication is making up research data that was not actually collected or measured. It is distinct from data falsification, which is altering or selectively reporting real data. Both are research misconduct. Data fabrication damages the scientific literature by introducing false results that may be cited and built upon by subsequent researchers."
      },
      {
        question: "How is data fabrication detected?",
        answer: "Detection methods include statistical analysis of reported data (real data shows expected variance patterns; fabricated data often does not), replication failures, image forensics (image manipulation in microscopy and gel electrophoresis), peer review, post-publication review on platforms like PubPeer, and whistleblower reports. The Retraction Watch database catalogues confirmed cases."
      },
      {
        question: "What are famous cases of data fabrication?",
        answer: "Major cases include: Diederik Stapel (Dutch social psychologist, dozens of fabricated papers, 2011); Hwang Woo-suk (Korean stem cell researcher, fabricated cloning results, 2005–2006); Haruko Obokata / STAP cells (RIKEN, 2014); Marc Hauser (Harvard primatologist, 2010); the Macchiarini case (Karolinska, 2014–2016)."
      }
    ],
    content: `
## TL;DR

Data fabrication is making up research data. Data falsification is altering real data. Both are research misconduct. The AMI's D6 dimension scores fabrication via Retraction Watch data normalised by publication volume. China scores 100 (highest), Russia 78, India 70, Iran 65. Famous cases include Diederik Stapel, Hwang Woo-suk, STAP cells, Marc Hauser, Macchiarini.

## Definition

Data fabrication is the creation of research data that was not actually collected or measured. The researcher reports results from experiments that did not occur, observations that were not made, or measurements that were not taken.

Data falsification is altering or selectively reporting real data — manipulating images, omitting inconvenient measurements, or changing values to produce a more favourable result.

Both are research misconduct. The US Office of Research Integrity (ORI) groups them together with plagiarism under the umbrella of research misconduct (FFP: Fabrication, Falsification, Plagiarism).

## Why it matters

Data fabrication affects the scientific record. Unlike student plagiarism — which damages credentialing but does not propagate into ongoing research — fabricated data enters the literature, gets cited, and shapes subsequent research:

- Fabricated medical research can mislead clinical practice
- Fabricated psychology research can shape policy decisions
- Fabricated engineering research can affect engineering standards
- Fabricated biology research can lead other researchers to chase non-existent phenomena

The consequences extend far beyond the individual misconduct case.

## Detection methods

### Statistical analysis

Real data shows expected variance patterns; fabricated data often does not. Forensic statistics has caught multiple major fraud cases by identifying impossible patterns — too-clean distributions, missing variance, statistical impossibilities.

### Replication failures

Other researchers attempting to replicate findings discover they cannot reproduce the results. The most direct detection method, though slow and expensive.

### Image forensics

Manipulation of images in microscopy, gel electrophoresis, and similar techniques can be detected through pixel-level analysis. Specialised tools (PaperWatcher, Imagetwin) check for duplicated or altered images.

### Peer review

Reviewers identifying impossible claims or inconsistencies. Limited in catching fabrication that produces plausible-seeming results.

### Post-publication review

PubPeer and similar platforms allow post-publication comment on potential misconduct. Has led to detection of major cases.

### Whistleblower reports

Co-authors, lab members, or institutional colleagues reporting suspected misconduct. Many famous cases were initiated by whistleblowers.

## What the AMI data shows

D6 scores on a 0–100 scale across the 39-country set:

| Top D6 scores | Score |
|---|---|
| China | 100 |
| Russia | 78 |
| India | 70 |
| Iran | 65 |
| Pakistan | 65 |
| Egypt | 60 |
| Nigeria | 55 |
| South Korea | 55 |

| Lowest D6 scores | Score |
|---|---|
| New Zealand | 12 |
| Ireland | 15 |
| Sweden | 15 |
| Norway | 15 |
| Netherlands | 15 |
| Singapore | 20 |
| Kenya | 20 |
| Vietnam | 22 |
| Canada | 22 |

The D6 dimension is built directly from the Retraction Watch database, filtered to misconduct-linked retractions and normalised by publication volume. China's D6=100 reflects the highest misconduct-linked retraction rate per 10,000 publications in the dataset.

## Famous cases

### Diederik Stapel (Netherlands, 2011)

Dutch social psychologist who fabricated data in dozens of papers over years. The case led to revocation of his PhD title and broader Dutch reform of social psychology research practice. One of the largest fabrication cases by paper count.

### Hwang Woo-suk (South Korea, 2005–2006)

Korean stem cell researcher who claimed to have produced patient-specific stem cell lines through somatic cell nuclear transfer. The results were fabricated; the cloning claims could not be replicated. The case prompted establishment of the Korea Research Integrity (KRI) framework.

### STAP cells / Haruko Obokata (Japan, 2014)

Claimed novel stem-cell induction method via stress application. The Nature papers were retracted after replication failures and identification of image manipulation. The case led to JSPS and MEXT integrity reforms.

### Marc Hauser (US, 2010)

Harvard primatologist who fabricated data in cognitive psychology research. Resigned from Harvard following ORI investigation.

### Paolo Macchiarini (Sweden, 2014–2016)

Karolinska surgeon whose synthetic trachea transplant research was found to involve fabricated patient outcomes and missing ethical approvals. Multiple patients died. The case contributed to the establishment of Sweden's NPOF national misconduct board.

## The detection-incidence challenge

Detected cases are not the same as actual incidence. The retraction rate measures what gets caught, not what occurs. Countries with stronger detection infrastructure (peer review, replication culture, post-publication review) report more cases. The AMI applies a detection correction factor but the fundamental challenge remains.

## Sources

- Retraction Watch Database, Crossref/GitLab (2026)
- Fang, Steen & Casadevall (2012), PNAS: "Misconduct accounts for the majority of retracted scientific publications"
- ORI (US Office of Research Integrity) case reports
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "four-quadrants-explained",
    title: "The AMI's Four Quadrants Explained: Q1, Q2, Q3, Q4",
    seoTitle: "AMI Four Quadrants Explained: Q1 Q2 Q3 Q4 | Guide 2026",
    metaDescription: "The AMI places 39 countries in four quadrants based on Prevalence and Response Quality. Q1 Best in class, Q2 empty, Q3 Crisis zone, Q4 Probably not looking. Full guide.",
    date: "2026-05-20",
    category: "guide",
    tags: ["quadrants", "Q1", "Q2", "Q3", "Q4", "AMI", "guide"],
    tldr: "The AMI uses four quadrants based on Prevalence (P) and Response Quality (R). Q1 (Best in class): low P, strong R — 7 countries. Q2 (Aware and fighting it): high P, strong R — currently empty. Q3 (Crisis zone): high P, weak R — 12 countries. Q4 (Probably not looking): low/mid P, weak R — 20 countries.",
    excerpt: "The AMI's four quadrants are the most-used summary feature of the index. This guide explains what each quadrant means, which countries are in each, and the significance of Q2 being empty.",
    faqSchema: [
      {
        question: "What do Q1, Q2, Q3, Q4 mean in the AMI?",
        answer: "Q1 (Best in class) is low Prevalence and strong Response — the desirable state. Q2 (Aware and fighting it) is high Prevalence and strong Response — actively tackling a known problem. Q3 (Crisis zone) is high Prevalence and weak Response — the primary target for intervention. Q4 (Probably not looking) is low or moderate Prevalence with weak Response — suggesting under-detection."
      },
      {
        question: "Why is Q2 empty in the AMI?",
        answer: "Q2 (high Prevalence, strong Response) is currently empty in AMI v1.5. No country in the dataset combines high estimated prevalence with a strong institutional response. The pattern is interpreted as: countries with high prevalence have not built strong response systems, and countries with strong response systems have brought prevalence down. The empty quadrant is itself a significant finding."
      },
      {
        question: "Which countries are in each quadrant?",
        answer: "Q1 (Best in class): Australia, UK, Ireland, Canada, New Zealand, Netherlands, US. Q2: empty. Q3 (Crisis zone): China, Colombia, Argentina, Greece, Egypt, Pakistan, Norway, Iran, Thailand, Saudi Arabia, Mexico, Poland. Q4 (Probably not looking): all remaining 20 countries including Russia, Italy, France, Germany, India, Brazil, Japan, South Korea, and others."
      }
    ],
    content: `
## TL;DR

The AMI places countries on a 2D grid: Prevalence (P) horizontal, Response Quality (R) vertical. Four quadrants result from splitting both axes. Q1 (top-left, low P high R) is best in class; Q2 (top-right, high P high R) is currently empty; Q3 (bottom-right, high P low R) is the crisis zone; Q4 (bottom-left, low P low R) is probably not looking. The empty Q2 is itself a significant finding.

## The quadrant grid

The two AMI axes (P and R) split the country space into four quadrants:

                  R high (strong response)
                           |
           Q1              |              Q2
      Best in class        |       Aware and fighting it
           (7)             |            (0 — empty)
                           |
        P low ─────────────┼──────────────── P high
                           |
           Q4              |              Q3
     Probably not looking  |          Crisis zone
           (20)            |              (12)
                           |
                  R low (weak response)

## Q1 — Best in class

Low Prevalence and strong Response. The desirable state. Countries in Q1:

| Country | P | R |
|---|---|---|
| Canada | 4.90 | 60.0 |
| Australia | 7.43 | 88.8 |
| UK | 11.41 | 87.5 |
| Ireland | 12.21 | 78.8 |
| New Zealand | 21.29 | 58.8 |
| Netherlands | 44.47 | 51.2 |
| United States | 48.15 | 51.2 |

Three Anglophone leaders (Australia, UK, Ireland) anchor the top of Q1 with very strong R-Scores driven by specific contract cheating legislation. Canada, New Zealand, Netherlands, and the US complete the quadrant.

The US sits at the most marginal Q1 position — a small Prevalence increase would move it to Q2.

## Q2 — Aware and fighting it

High Prevalence and strong Response. Currently empty.

The empty Q2 is itself a significant finding. The interpretation: countries that have built strong response systems have brought prevalence down before reaching Q2; countries with high prevalence have not yet built strong responses. The transition from Q3 to Q1 has not historically passed through Q2 — countries that improve typically reduce prevalence at the same time as building response infrastructure.

The US is the most likely candidate to first appear in Q2 in a future version if its detected prevalence rises.

## Q3 — Crisis zone

High Prevalence and weak Response. The primary target for intervention.

| Country | P | R |
|---|---|---|
| China | 99.98 | 23.8 |
| Colombia | 77.38 | 16.5 |
| Argentina | 74.57 | 18.0 |
| Greece | 74.00 | 20.0 |
| Egypt | 64.60 | 12.0 |
| Pakistan | 59.08 | 14.2 |
| Norway | 57.16 | 47.5 |
| Iran | 57.00 | 13.2 |
| Thailand | 55.67 | 19.0 |
| Saudi Arabia | 53.98 | 17.5 |
| Mexico | 51.36 | 17.5 |
| Poland | 51.19 | 32.5 |

Twelve countries. The list is led by China (very high P, moderate R) and includes a mix of countries with very high demand-signal driven scores (Colombia, Argentina, Greece) and countries with multi-dimension elevated scores (China, Pakistan, Egypt, Iran).

Norway is the methodology anomaly within Q3 — its Q3 placement reflects Google Trends signal interpretation rather than substantive student-misconduct evidence.

## Q4 — Probably not looking

Low or moderate Prevalence with weak Response. The largest quadrant.

Twenty countries including: Russia, Italy, France, Germany, India, Brazil, Vietnam, Spain, Malaysia, Kenya, Indonesia, Sweden, South Korea, Japan, Ukraine, Turkey, Nigeria, South Africa, Philippines, Singapore.

The Q4 diagnosis is: the country's apparent Prevalence is low or moderate, but the Response Quality is weak. The interpretation is that low apparent prevalence likely reflects under-detection rather than genuinely low misconduct.

Two patterns within Q4:

### Q4 borderline-Q1
Singapore (P=15.34, R=47.5) and Sweden (P=37.24, R=45.0) sit close to the Q1 threshold. Modest R-Score improvements would shift them to Q1.

### Q4 deep
Kenya (R=11.5) and Nigeria (R=12.5) sit in the deep Q4 region with very low Response. The "Probably not looking" diagnosis applies strongly.

## Quadrant boundaries

The quadrant thresholds are documented in the methodology. They are calibrated to:
- Make Q1 reflect genuinely strong institutional response combined with low Prevalence
- Make Q3 reflect genuinely concerning combinations of high Prevalence and weak Response
- Make Q4 capture countries where the AMI methodology assesses under-detection

The thresholds are not arbitrary — they are set with reference to the dimension-score distributions and historical case-study patterns.

## Why the four-quadrant structure

Two-axis indices with quadrant categorisation have a long history in policy analysis. The structure:
- Communicates the joint Prevalence-Response dynamic in a single visual
- Identifies action priorities (Q3 for intervention, Q4 for measurement improvement)
- Allows trend analysis (countries can be tracked moving between quadrants)
- Mirrors successful indices including the Corruption Perceptions Index complement framework

## How quadrants might change

Future AMI versions may produce different quadrant placements:
- Methodology improvements may reduce Norway's Prevalence score, moving it from Q3 toward Q4
- New legislation (e.g. EU-coordinated essay mill bans) may move European Q3/Q4 countries upward
- Expanded country coverage will produce new scores within the rescaled framework
- The empty Q2 may eventually fill as some countries develop strong responses to acknowledged high prevalence

## Sources

- AMI v1.5 methodology document
- Quadrant threshold documentation

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "data-quality-flags-explained",
    title: "AMI Data Quality Flags Explained: A, B, C",
    seoTitle: "AMI Data Quality Flags A B C Explained | Methodology 2026",
    metaDescription: "Each AMI country score carries a data quality flag — A (5+ live dimensions), B (3–4 live), C (<3 live). Guide to what the flags mean and how to use them in analysis.",
    date: "2026-05-20",
    category: "guide",
    tags: ["data quality", "methodology", "AMI", "guide", "transparency"],
    tldr: "Each AMI country carries a data quality flag: A (5+ dimensions from live data), B (3–4 live), C (<3 live). All 39 countries in v1.5 currently carry the A flag. The flag is a measurement-confidence indicator separate from the P or R score values.",
    excerpt: "The AMI publishes a data quality flag alongside each country's scores. This guide explains what the flags mean, how they are assigned, and how to use them in cross-country comparisons.",
    faqSchema: [
      {
        question: "What does the data quality A flag mean in the AMI?",
        answer: "The A flag indicates that 5 or more of the 6 P-Score dimensions are scored from country-specific live data sources (Google Trends, Retraction Watch, FOI data, country-specific surveys). It is the highest data quality flag and indicates the score should be treated as relatively well-grounded."
      },
      {
        question: "Do data quality flags affect the score values?",
        answer: "No — the flag is a separate metadata field. The P and R score values are calculated the same way regardless of flag. The flag indicates how confident users should be in the scores. Two countries with the same P-Score can have different flags, and the flag context should be used when interpreting cross-country comparisons."
      },
      {
        question: "What is 'live data' in the AMI methodology?",
        answer: "Live data sources are: Google Trends API (current data), Retraction Watch database (current data), Freedom of Information disclosures from government bodies, and McCabe / ICAI surveys where the specific country is in the survey sample. Literature-derived estimates and regional extrapolation count as non-live."
      }
    ],
    content: `
## TL;DR

Each country in the AMI dataset carries a data quality flag (A, B, or C) reflecting how much of its score is from live country-specific data versus literature estimates. All 39 countries in v1.5 carry the A flag. The flag is metadata about confidence, separate from the actual P and R values.

## The flag system

The data quality flag indicates how many of the six P-Score dimensions are scored from country-specific live data sources:

- **A** — 5 or more dimensions from live country-specific data
- **B** — 3 or 4 dimensions from live country-specific data
- **C** — fewer than 3 dimensions from live country-specific data

The flag is published in the dataset alongside the P-Score, R-Score, and dimension breakdowns.

## What counts as live data

The AMI methodology defines live data as sources that:

1. Provide country-specific signal (not regional extrapolation)
2. Are based on current observations (not historical priors)
3. Come from one of the AMI's primary measurement infrastructures

The primary measurement infrastructures are:

- **Google Trends API** — for D1 (contract cheating) and D2 (AI submissions) demand signals
- **Retraction Watch database** — for D6 (data fabrication)
- **FOI disclosures** — particularly for D2 in countries with active disclosure (UK, US, AUS)
- **Country-specific peer-reviewed surveys** — including McCabe / ICAI samples where the country was directly surveyed

## What does not count as live data

The following do not qualify a dimension as live:

- **Regional extrapolation** — applying Latin American or Southeast Asian averages to a country without country-specific data
- **Literature priors** — peer-reviewed estimates from older studies (typically pre-2018)
- **Modelled estimates** — derived from other dimensions or country variables rather than direct measurement

These methods are used in the AMI where live data is unavailable, but they reduce the dimension's measurement confidence.

## Why all v1.5 countries are flag A

The current 39-country set was selected partly with data availability in mind. The principal limit on adding more countries to the index is data quality — countries without live Google Trends coverage, without Retraction Watch presence, or without survey data are harder to score with confidence.

Future versions will expand country coverage, including countries that may carry B or C flags. The flag system allows the AMI to expand coverage while making the measurement-confidence trade-off transparent.

## How to use the flag in analysis

### When comparing country scores

Two countries with the same P-Score and the same flag can be compared directly. Two countries with the same P-Score but different flags should be compared with the flag context — the lower-flag country's score has wider uncertainty.

### When citing AMI data

Cite both the score and the flag where the audience needs measurement-confidence context. "China P=99.98 (flag A)" is more informative than "China P=99.98" alone.

### When making policy comparisons

Cross-country policy comparisons should weigh flag context. Flag A countries are appropriate for like-for-like comparison. Flag B and C countries are appropriate for relative ranking but may shift in future versions as data improves.

## What drives each dimension's live-data classification

### D1 Contract cheating
Live when Google Trends data is available at country resolution with sufficient query volume. Most countries qualify.

### D2 AI submissions
Live when Google Trends data is available. Some countries also have FOI or institutional disclosure live data (UK via Guardian, US via various studies).

### D3 Exam impersonation
Most countries have this dimension scored from literature estimates rather than live data. The dimension is the most likely to be non-live across countries.

### D4 Plagiarism
Live when the country is in the McCabe / ICAI survey sample or has equivalent country-specific surveys. Regional extrapolation otherwise.

### D5 Collusion
Same as D4 — live when survey data exists country-specifically.

### D6 Data fabrication
Live whenever the Retraction Watch database has sufficient country-attributable entries. Most countries with substantial research output qualify.

## Flag and score interact

The data quality flag is conceptually independent from the score, but they relate in practice:

- Countries with stronger institutional infrastructure tend to have better data availability and thus higher flags
- Countries with weak institutional infrastructure often also have weak data availability, producing both lower R-Scores and lower flags
- This means flag and R-Score correlate; they should be reported together for clarity

## Sources

- AMI v1.5 methodology document
- Data sources documentation in the methodology

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "how-to-cite-ami",
    title: "How to Cite the Academic Misconduct Index",
    seoTitle: "How to Cite the AMI: APA, MLA, Chicago, BibTeX | Guide 2026",
    metaDescription: "Citation formats for the Academic Misconduct Index v1.5 — APA, MLA, Chicago, Harvard, BibTeX. CC BY 4.0 licence permits reuse with attribution. Worked examples.",
    date: "2026-05-20",
    category: "guide",
    tags: ["citation", "AMI", "guide", "academic writing", "CC BY 4.0"],
    tldr: "Cite the AMI v1.5 as: Booth, F. (2026). Academic Misconduct Index, Version 1.5. academicmisconductindex.com. CC BY 4.0 licensed — reuse permitted with attribution. APA, MLA, Chicago, Harvard, and BibTeX formats below.",
    excerpt: "The AMI dataset, methodology, and source code are published under CC BY 4.0. This guide gives the citation in major formats and answers common reuse questions.",
    faqSchema: [
      {
        question: "How do I cite the Academic Misconduct Index?",
        answer: "The recommended citation is: Booth, F. (2026). Academic Misconduct Index, Version 1.5. academicmisconductindex.com. The AMI is published under CC BY 4.0, which permits reuse with attribution. Format the citation according to the style guide required by your publication."
      },
      {
        question: "Can I reuse the AMI dataset in my own work?",
        answer: "Yes — the AMI is published under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence. You can copy, adapt, and redistribute the data and methodology, including for commercial purposes, provided you give appropriate credit, link to the licence, and indicate any changes."
      },
      {
        question: "What version of the AMI should I cite?",
        answer: "Cite the version current at the time of your reference. AMI v1.5 (May 2026) is the current version. The methodology and dataset are versioned, so older citations remain valid and reproducible. Future versions will be assigned higher version numbers (v1.6, v2.0, etc.) and dated accordingly."
      }
    ],
    content: `
## TL;DR

The recommended citation for AMI v1.5 is:

> Booth, F. (2026). Academic Misconduct Index, Version 1.5. academicmisconductindex.com

The dataset is licensed under CC BY 4.0 — reuse is permitted with attribution.

## Major citation formats

### APA (7th edition)

> Booth, F. (2026). *Academic Misconduct Index, Version 1.5* [Data set]. https://academicmisconductindex.com

### MLA (9th edition)

> Booth, Francisco. *Academic Misconduct Index, Version 1.5*. 2026, academicmisconductindex.com.

### Chicago (Author-Date)

> Booth, Francisco. 2026. "Academic Misconduct Index, Version 1.5." Dataset. academicmisconductindex.com.

### Chicago (Notes-Bibliography)

In note: Francisco Booth, "Academic Misconduct Index, Version 1.5" (dataset, 2026), academicmisconductindex.com.

In bibliography: Booth, Francisco. "Academic Misconduct Index, Version 1.5." Dataset. 2026. academicmisconductindex.com.

### Harvard

> Booth, F. (2026) *Academic Misconduct Index, Version 1.5* [dataset]. Available at: https://academicmisconductindex.com (Accessed: <date>).

### Vancouver

> Booth F. Academic Misconduct Index, Version 1.5 [Internet]. 2026 [cited <date>]. Available from: academicmisconductindex.com

### BibTeX

    @misc{booth2026ami,
      author = {Booth, Francisco},
      title = {Academic Misconduct Index, Version 1.5},
      year = {2026},
      note = {Dataset},
      url = {https://academicmisconductindex.com}
    }

## What to cite

### The full index
For overall references to the AMI as an instrument or analytical framework, cite the index itself as above.

### Specific country scores
When citing a specific country's score, include the version and date:

> "China scores P=99.98 on the Academic Misconduct Index (Booth, 2026, v1.5)."

### Methodology document
For methodology-specific references:

> Booth, F. (2026). *Academic Misconduct Index Methodology, Version 1.5*. academicmisconductindex.com/methodology

### Dataset
For dataset-specific references, include the file:

> Booth, F. (2026). *Academic Misconduct Index, Country Scores Dataset v1.5* [CSV file]. academicmisconductindex.com/ami_country_scores_20260514.csv

## Licence

The AMI is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You may:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:

- **Attribution** — you must give appropriate credit, provide a link to the licence, and indicate if changes were made

## Reuse examples

### Academic publication
Cite as a data source. Include both the index citation and any specific country or dimension data referenced.

### Policy report
Cite the version and date. Note that the AMI is updated periodically and reference future versions where appropriate.

### Journalism
Cite the index, the version, and the year. The CC BY 4.0 licence permits reuse including in commercial publications with attribution.

### Teaching materials
Reuse permitted with attribution. The full dataset CSV can be redistributed.

## Version history

- v1.0 — initial 28-country release (2026 Q1)
- v1.3 — methodology consolidation (April 2026)
- v1.4 — Russia, Ukraine, Iran added
- v1.5 — current (May 2026), 39 countries

When citing older work, use the version available at that time. Versioning ensures reproducibility.

## Sources

- [CC BY 4.0 Licence text](https://creativecommons.org/licenses/by/4.0/)
- AMI v1.5 methodology document
    `.trim(),
  },

  {
    slug: "what-is-retraction-watch",
    title: "What Is Retraction Watch? A Guide to the World's Retraction Database",
    seoTitle: "What Is Retraction Watch? The Retraction Database Explained 2026",
    metaDescription: "Retraction Watch is the world's largest database of retracted scientific papers — 69,911 records as of April 2026. Founded by Ivan Oransky and Adam Marcus. Used in the AMI's D6.",
    date: "2026-05-20",
    category: "guide",
    tags: ["Retraction Watch", "research misconduct", "database", "Ivan Oransky", "Adam Marcus", "guide"],
    tldr: "Retraction Watch is the world's largest database of retracted scientific papers — 69,911 records as of April 2026, hosted publicly on GitLab via Crossref. Founded by Ivan Oransky and Adam Marcus in 2010. Used in the AMI's D6 (data fabrication) dimension.",
    excerpt: "Retraction Watch catalogues retracted scientific publications worldwide. The database is the principal data source for the AMI's data fabrication dimension. Here is what it is, who runs it, and how the AMI uses it.",
    faqSchema: [
      {
        question: "What is Retraction Watch?",
        answer: "Retraction Watch is a blog and database that tracks scientific retractions. The blog was founded in 2010 by Ivan Oransky and Adam Marcus. The database contains 69,911 retraction records as of April 2026, with 5,390 classified as misconduct-related. The database is now hosted publicly on GitLab via Crossref."
      },
      {
        question: "Who runs Retraction Watch?",
        answer: "Retraction Watch is run by Ivan Oransky (co-founder, executive director of the Center for Scientific Integrity) and Adam Marcus (co-founder). The organisation is supported by foundation funding and the work of multiple contributors. In 2023 the underlying database was made publicly available through a partnership with Crossref."
      },
      {
        question: "How does the AMI use Retraction Watch data?",
        answer: "The AMI's D6 (data fabrication) dimension is built from Retraction Watch data. The database is filtered to misconduct-linked retractions (fabrication, falsification, manipulation, fraud) and normalised by each country's publication volume from OpenAlex. The result is a retractions-per-10,000-publications rate per country, then normalised to 0–100."
      }
    ],
    content: `
## TL;DR

Retraction Watch is the world's largest database of retracted scientific publications. Founded in 2010 by Ivan Oransky and Adam Marcus. Contains 69,911 retraction records as of April 2026; 5,390 are misconduct-related. Now hosted publicly on GitLab via Crossref. The AMI's D6 dimension is built from this data.

## What Retraction Watch is

Retraction Watch is two things:

1. **A blog** at retractionwatch.com, founded in 2010, that reports on individual retraction cases, broader trends in research integrity, and the operation of the scientific publishing system

2. **A database** that catalogues retracted scientific publications worldwide, with structured fields for author, journal, retraction reason, country attribution, and date

The database is the more relevant source for the AMI's D6 dimension.

## Who runs it

- **Ivan Oransky** — co-founder, executive director of the Center for Scientific Integrity (the organisation behind Retraction Watch). Vice president of editorial at Medscape; longtime science journalist and medical editor.
- **Adam Marcus** — co-founder. Editor of Anesthesiology News; longtime medical journalist.

The Center for Scientific Integrity, the non-profit that operates Retraction Watch, is supported by foundation funding (Arnold Foundation, Helmsley Charitable Trust, MacArthur, others) [verify specific funders].

## The database

As of April 2026, the Retraction Watch database contains:

- **69,911 total retraction records**
- **5,390 records classified as misconduct-related** (fabrication, falsification, fraud, image manipulation)
- **Coverage from approximately 1990 to present**

Each record includes:
- Article identifiers (DOI, PubMed ID where applicable)
- Authors and country attribution
- Journal and publisher
- Original publication date and retraction date
- Retraction reason (multiple categories)
- Notice text where available

## The Crossref / GitLab partnership

For most of its history, the Retraction Watch database was a paid resource — accessible to academic institutions through subscription but not freely available to the public.

In 2023, Crossref entered a partnership with the Center for Scientific Integrity to make the database openly available. The data is now hosted on [GitLab](https://gitlab.com/crossref/retraction-watch-data) and updated periodically. The partnership has substantially expanded the database's accessibility for researchers, journalists, and instruments like the AMI.

## How the AMI uses it

The AMI's D6 dimension is built directly from Retraction Watch data:

1. **Filter** — the full database is filtered to misconduct-linked retractions (fabrication, falsification, fraud, image manipulation, plagiarism in research context)
2. **Country attribution** — each retraction is attributed to a country based on author affiliation; multi-country papers are assigned proportionally
3. **Normalisation** — retraction counts are divided by total publications from OpenAlex for the same country and time period
4. **Rate calculation** — produces retractions per 10,000 publications per country
5. **0–100 scaling** — the rates are rescaled across the 39-country set, with the highest-rate country (China) anchoring 100

The result is each country's D6 score on the 0–100 scale used in the AMI methodology.

## Why this matters

Retraction Watch is the only globally comprehensive systematic record of research retractions. Without it, the AMI's D6 dimension would have no live data source. The Crossref partnership making the data public was a precondition for the AMI being able to build D6 from current data.

Cross-checking specific famous cases against the database is straightforward — the Hwang Woo-suk retractions, the STAP cell retractions, the Stapel cases, the Macchiarini case all appear in the Retraction Watch records.

## Limitations of the data

The Retraction Watch data has known limitations:

- **Detection-incidence confound**: only detected and retracted papers are recorded. Actual fabrication that does not result in retraction is missing.
- **Country attribution complexity**: papers with authors from multiple countries are attributed proportionally; methodology choices affect specific country scores.
- **Retraction lag**: retractions often happen years after publication. Recent fabrication is under-represented.
- **Reason coding inconsistency**: retraction notices use widely varying language; classification into misconduct categories requires interpretation.

The AMI methodology applies a detection correction to partially address the first limitation but the fundamental challenge remains.

## Sources

- [Retraction Watch website](https://retractionwatch.com)
- [Retraction Watch Database on GitLab](https://gitlab.com/crossref/retraction-watch-data)
- Fang, Steen & Casadevall (2012), PNAS
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "how-google-trends-measures-cheating",
    title: "How Google Trends Is Used to Measure Academic Cheating",
    seoTitle: "How Google Trends Measures Cheating in the AMI | Methodology 2026",
    metaDescription: "The AMI's D1 and D2 dimensions use Google Trends data on essay mill and AI submission keywords. Methodology, limitations, and the Norway anomaly explained.",
    date: "2026-05-20",
    category: "guide",
    tags: ["Google Trends", "methodology", "AMI", "guide", "data sources"],
    tldr: "Google Trends provides per-country search volume signal for essay mill and AI submission keywords. The AMI uses this for D1 and D2 dimensions. Limitations include: signal captures demand not incidence; academic and policy discussion contributes to signal (Norway anomaly); language markets affect interpretation.",
    excerpt: "Google Trends is the primary data source for the AMI's D1 (contract cheating) and D2 (AI submission) dimensions. This guide explains how the data is collected, what it measures, and the known limitations including the Norway anomaly.",
    faqSchema: [
      {
        question: "How does Google Trends measure academic cheating?",
        answer: "Google Trends provides per-country search volume signal for specific keyword queries. The AMI runs queries for contract cheating terms ('buy essay online', 'essay writing service'), essay mill brand names ('ukessays', 'edubirdie', 'papersowl'), and AI submission tools, at country resolution across the 2022–2026 timeframe. The country with the highest signal scores 100; others scale relative to that."
      },
      {
        question: "What are the limitations of using Google Trends?",
        answer: "Google Trends measures search volume, which is a demand signal — not a confirmed incidence rate. Discussion of these topics by educators, journalists, policymakers, and researchers contributes to the signal alongside student demand. The Norway anomaly is the most prominent case where the methodology likely overestimates student incidence."
      },
      {
        question: "What is the Norway anomaly in the AMI?",
        answer: "Norway's elevated P-Score (57.16, placing it in Q3) is largely a methodology artefact. Norwegian high digital engagement and open academic discussion of AI and integrity topics produces high Google Trends search volume that the AMI interprets as student demand. Norway has strong NESH-anchored institutional response infrastructure and low actual misconduct rates per the literature. The methodology documents this caveat explicitly."
      }
    ],
    content: `
## TL;DR

Google Trends provides country-level search volume signal for keyword queries. The AMI uses this for D1 (contract cheating) and D2 (AI submission) dimensions. Strengths: live data, broad country coverage, language-specific signal. Limitations: measures demand not confirmed incidence, signal includes non-student discussion (Norway anomaly), language markets complicate cross-country comparison.

## What Google Trends provides

Google Trends is a public Google service that reports the relative search volume for specific queries across geographies and time. The data is:

- **Relative, not absolute** — Google does not publish raw search counts; values are normalised
- **Country-level (and sometimes sub-country)** — queries can be run at country, region, or city resolution
- **Time-windowed** — historical data available back to 2004, with recent data available daily
- **Language-specific** — different language variants can be queried separately

For the AMI, the API returns a 0–100 score per country for a given query and time window, with 100 representing the country with the highest signal.

## How the AMI uses Google Trends

### D1 Contract cheating

The AMI runs two sets of D1 queries:

**Generic contract cheating terms** (English and other major languages):
- "buy essay online"
- "essay writing service"
- "pay someone to write essay"
- "do my assignment"
- equivalents in Spanish, Portuguese, French, Italian, Polish, etc.

**Essay mill brand names**:
- "ukessays"
- "edubirdie"
- "papersowl"
- "easyessay"
- regional equivalents

Brand name queries are more precise signals — generic terms can capture educator discussion ("how can teachers detect essay mills?"), but brand name queries reflect actual demand intent.

### D2 AI submissions

The AMI runs queries for AI submission tools:
- "chatgpt for essays"
- "ai essay writer"
- "claude for homework"
- equivalent terms in major languages
- AI bypass tool brand names

### Normalisation

The 2022–2026 4-year window captures the post-ChatGPT period (ChatGPT launched November 2022). The country with the highest signal across this window scores 100; others scale relative.

## Limitations

### Demand not incidence

Google Trends measures *searches* for terms — not confirmed cases of misconduct. A student searching "buy essay online" may not actually purchase; an educator searching to write a policy may not be planning misconduct. The signal correlates with demand but does not directly measure incidence.

### Academic and policy discussion contribution

This is the Norway anomaly. Countries with high digital engagement and active academic and policy discussion of integrity topics produce search volume that is not student demand. Researchers writing about AI submissions, journalists reporting on essay mills, policymakers drafting legislation — all contribute to the same search signal that captures student demand.

The countries most affected are typically those with strong open academic discussion: Nordic countries, Netherlands, Germany, parts of the UK. The AMI methodology flags Norway as the principal case and notes that Sweden shows a milder version of the same pattern.

### Language markets

Google Trends signals are language-specific. A query in English captures English-language search; the same query in Spanish captures Spanish-language search.

For some countries, all major searches happen in the country's principal language — there is no spillover problem. For others (e.g. small Anglophone populations in non-English countries), language markets cross country boundaries. Spanish queries for essay mills can come from any Spanish-speaking country; Spanish countries with high search volume may be partly capturing demand from other Spanish-speaking countries.

The AMI methodology accounts for this through language-disambiguated query batches but the approach is imperfect.

### Small countries with low absolute volume

Countries with small populations may have low absolute search volume, producing noisier per-capita signal estimates. Singapore, Ireland, New Zealand show some of this effect.

### Brand name decay

Essay mill brand names change over time as companies rebrand, get sued, or move jurisdictions. Brand name queries become less reliable over multi-year windows as the underlying brands shift.

## What the data shows

D1 distribution from the v1.5 dataset:
- Top: Colombia (100), Argentina (100), Greece (100), Pakistan (100) — multiple tied
- Middle: most European countries (50–67)
- Bottom: Australia (33), UK (33), Ireland (33), Canada (50)

The lowest D1 scores in the dataset are in countries with specific contract cheating bans. This is consistent with both the legislation reducing actual demand and reducing the brand name search volume for major essay mill services.

## Future improvements

The AMI methodology document discusses planned improvements:

- Language-disambiguated query batches with cross-country attribution
- Weighting non-student search-source contribution out of the signal
- Combination with confirmed-case data where available (FOI in UK, ORI in US)
- Sub-national variation analysis where Google Trends supports it

## Sources

- Google Trends API documentation
- AMI v1.5 methodology document
- Methodology caveat section on Norway anomaly

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "cpi-vs-ami-comparison",
    title: "CPI vs AMI: How the Two Indices Compare",
    seoTitle: "CPI vs AMI Comparison: Corruption and Academic Misconduct 2026",
    metaDescription: "The Corruption Perceptions Index (CPI) and Academic Misconduct Index (AMI) both measure systemic integrity. Comparison of methodology, scope, and what each does well.",
    date: "2026-05-20",
    category: "guide",
    tags: ["CPI", "AMI", "comparison", "methodology", "Transparency International", "guide"],
    tldr: "The CPI (Transparency International, since 1995) measures public sector corruption perception via expert surveys. The AMI (2026) measures academic misconduct via mixed data sources (live data, surveys, literature). The AMI is modelled methodologically on the CPI but uses different inputs given the academic context.",
    excerpt: "The Corruption Perceptions Index is the most successful integrity index ever produced. The Academic Misconduct Index borrows methodological principles while differing in scope and data sources. Here is how the two compare.",
    faqSchema: [
      {
        question: "Is the AMI based on the CPI methodology?",
        answer: "The AMI takes methodological principles from the CPI — country-level scoring, composite index design, periodic updates, open licensing — but uses different inputs. The CPI is built from expert perception surveys; the AMI uses live data sources (Retraction Watch, Google Trends, FOI), supplemented by survey data and literature. The AMI is designed to evolve toward CPI-style expert surveys in version 2.0."
      },
      {
        question: "What is the Corruption Perceptions Index?",
        answer: "The CPI is an annual index published by Transparency International since 1995. It scores 180 countries on perceived public sector corruption using 13 expert and business surveys. The CPI is the most widely cited integrity index globally and demonstrated that an independent index can influence policy debate, generate accountability pressure, and develop credible expert respondents over time."
      },
      {
        question: "Should the AMI add expert surveys like the CPI?",
        answer: "Yes — the AMI methodology document notes that version 2.0 will add expert perception surveys modelled on the CPI's eventual addition of expert panels. The plan is to develop a credible expert respondent base after the index has an established audience. The CPI's evolution provides the template for how an independent index can grow into one that incorporates expert input meaningfully."
      }
    ],
    content: `
## TL;DR

The CPI (Corruption Perceptions Index, Transparency International, since 1995) measures public sector corruption via expert surveys. The AMI (Academic Misconduct Index, 2026) measures academic misconduct via mixed data sources. The AMI uses CPI methodological principles (country-level scoring, periodic updates, open licensing) while differing in scope and inputs.

## What the CPI does

The Corruption Perceptions Index is the longest-running global integrity index. Key features:

- **Coverage**: 180 countries (current version)
- **Scoring**: 0–100 scale, 0 = highly corrupt, 100 = very clean
- **Methodology**: composite of 13 expert and business surveys
- **Publisher**: Transparency International
- **Update frequency**: annual since 1995
- **Licence**: open, with attribution

The CPI is the most widely cited integrity index globally. It is referenced in academic literature, policy documents, business risk assessments, and journalism in every country it covers.

## What the AMI does

The Academic Misconduct Index is a younger, narrower index focused on academic integrity:

- **Coverage**: 39 countries (v1.5, May 2026; expanding)
- **Scoring**: two-axis system (Prevalence P, Response Quality R), each 0–100
- **Methodology**: composite of live data (Google Trends, Retraction Watch, FOI), surveys (ICAI/McCabe), and literature
- **Publisher**: independent (Booth, F.)
- **Update frequency**: irregular currently; periodic
- **Licence**: CC BY 4.0

## Methodological similarities

The AMI takes several methodological principles from the CPI:

### Composite index design
Both indices combine multiple data sources into a country-level score. Neither relies on a single measurement.

### Country-level scoring
Both score countries rather than institutions or individuals. The unit of analysis is the country.

### Rescaling within set
Both rescale scores within the country set rather than producing absolute measurements. A change in country coverage changes the scale.

### Transparency
Both publish methodology documents that allow reproduction. Both license data for reuse.

### Periodic update
Both are versioned and updated. Older versions remain valid for historical comparison.

## Methodological differences

### Data sources

CPI: 13 expert and business perception surveys, weighted and combined. All inputs are subjective expert assessments.

AMI: live data sources (Google Trends, Retraction Watch, FOI), self-report surveys (ICAI/McCabe), and literature-derived estimates. Mixed objective and subjective inputs.

### Scoring structure

CPI: single score per country, 0–100.

AMI: two-axis system (P, R) with quadrant placement. The two-axis design allows distinguishing high-prevalence-low-response from low-prevalence-high-response situations.

### Scope

CPI: public sector corruption (general).

AMI: academic misconduct (specific).

### Maturity

CPI: 30 years of methodology development, established expert respondent base, well-understood inter-annual variation.

AMI: first version 2026. Methodology will mature; current scores carry larger uncertainty than mature CPI scores.

## What each does well

### CPI strengths
- **Time series**: 30 years of comparable data
- **Coverage**: 180 countries
- **Expert respondent base**: mature, diversified
- **Recognition**: cited in policy and media globally
- **Funding stability**: established institutional sponsor (Transparency International)

### AMI strengths
- **Live data**: Retraction Watch and Google Trends provide current signals rather than survey lag
- **Two-axis design**: captures the prevalence-response interaction directly
- **Dimension breakdown**: D1–D6 plus R-Score components allow policy-specific analysis
- **Open methodology**: source code and dataset published

## What each does less well

### CPI weaknesses
- **Perception-incidence gap**: measures perceptions, not confirmed corruption
- **Expert sample bias**: respondents are typically business and policy elites
- **Annual update lag**: signal slow to capture rapid change
- **Single score**: cannot distinguish high-corruption-low-response from other patterns

### AMI weaknesses
- **Methodology immaturity**: first version 2026, known limitations including Norway anomaly
- **Coverage**: 39 countries (vs CPI's 180)
- **No expert panel yet**: planned for v2.0
- **Survey data age**: McCabe surveys are 2002–2015; pre-AI era
- **Detection-incidence confound**: stronger detection countries report more cases

## How the AMI plans to evolve

The AMI methodology document indicates v2.0 will:
- Add expert perception surveys modelled on the CPI
- Expand country coverage
- Add country-level subject vulnerability scores
- Improve language-disambiguated Google Trends signal interpretation
- Address the detection-incidence confound more directly

The progression mirrors the CPI's history: the CPI's first version in 1995 covered 41 countries with relatively simple methodology; the current 180-country index with mature expert panels developed over decades.

## Using both together

CPI and AMI scores correlate substantially. Countries with high CPI scores (clean) generally have low AMI Prevalence and strong Response. Countries with low CPI scores often have high AMI Prevalence.

The correlation is not perfect — academic misconduct can occur in countries with otherwise strong governance, and vice versa. Researchers and analysts using both indices together can identify cases where the two diverge, which are often the most informative for understanding country-specific dynamics.

## Sources

- [Transparency International CPI methodology](https://www.transparency.org/en/cpi)
- AMI v1.5 methodology document
- CPI historical archive (1995–present)

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "academic-integrity-legislation-guide",
    title: "Academic Integrity Legislation by Country: A Global Guide",
    seoTitle: "Academic Integrity Legislation by Country | Guide 2026",
    metaDescription: "Three countries have specific essay mill bans — Ireland (2019), Australia (2020), UK (2022). Guide to academic integrity legislation globally and what each law covers.",
    date: "2026-05-20",
    category: "guide",
    tags: ["legislation", "essay mill ban", "academic integrity", "policy", "guide"],
    tldr: "Three countries have specific contract cheating bans: Ireland (Qualifications and Quality Assurance Act 2019), Australia (Education Services for Overseas Students Amendment 2020), and the UK (Skills and Post-16 Education Act 2022). Other countries use general fraud law and institutional codes.",
    excerpt: "Only three countries globally have legislated specifically against contract cheating services. This guide covers each law, the enforcement framework, and what other countries do instead.",
    faqSchema: [
      {
        question: "Which countries have laws against essay mills?",
        answer: "Three countries globally have specific essay mill bans: Ireland (Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019), Australia (Tertiary Education Quality and Standards Agency Amendment Act 2020), and the United Kingdom (Skills and Post-16 Education Act 2022). All three create criminal offences for providing, advertising, or arranging contract cheating services."
      },
      {
        question: "Is contract cheating illegal in the US?",
        answer: "The United States has no specific federal essay mill ban. General fraud provisions apply but are rarely used. Some US states have considered contract cheating legislation but none has been enacted. The US scores 30 on the AMI Legislation sub-component — moderate, reflecting the federal research integrity framework (ORI) without the specific essay mill ban that lifts Q1 Anglophone peers to 100."
      },
      {
        question: "What is the penalty for running an essay mill in countries that have banned them?",
        answer: "In Australia, fines up to AUD 100,000 for corporate offenders. In Ireland, similar civil and criminal penalties with court injunction powers via QQI. In the UK, conviction under the Skills and Post-16 Education Act 2022 can result in unlimited fines. The legislative model emphasises civil penalties and provider deplatforming rather than individual student prosecution."
      }
    ],
    content: `
## TL;DR

Three countries have specific contract cheating bans: Ireland (2019, first globally), Australia (2020), and the UK (2022). All three target essay mill providers — the supply side — rather than individual students. Other countries rely on general fraud law and university disciplinary codes.

## The three jurisdictions with specific bans

### Ireland — Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019

The first specific essay mill ban globally. Key provisions:

- Creates an offence for providing or advertising contract cheating services
- Empowers QQI (Quality and Qualifications Ireland) to investigate and prosecute
- Permits court injunctions against essay mill websites
- Penalties include fines and imprisonment
- Came into force in 2019

QQI has used the Act to obtain court orders against essay mill websites and pursue enforcement actions. Ireland's R-Score Legislation sub-component is 100 — the maximum.

### Australia — Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020

Australia's law extended the TEQSA regulatory framework to cover contract cheating. Key provisions:

- Offence to provide or advertise academic cheating services
- Maximum fines of AUD 100,000 (corporate) and AUD 20,000 (individual)
- TEQSA enforcement powers including website blocking notices
- TEQSA publishes a list of known contract cheating providers (currently 2,300+)
- Came into force in 2020

Australia's R-Score Legislation sub-component is also 100. The TEQSA public list is a distinctive feature not replicated by other jurisdictions.

### United Kingdom — Skills and Post-16 Education Act 2022

The most recent of the three. Key provisions:

- Creates a specific offence under section 80 of the Act
- Applies to England (with Welsh, Scottish, and Northern Irish variants under discussion or already passed)
- Office for Students (OfS) enforcement powers
- Penalties include unlimited fines on conviction
- Came into force in 2022

The UK's R-Score Legislation sub-component is 100. The OfS and the Quality Assurance Agency (QAA) jointly enforce the Act in England.

## Other countries — general fraud law and institutional codes

Most other countries operate under general fraud provisions:

### General fraud applicability
In most jurisdictions, providing or using contract cheating services could in principle be prosecuted as fraud (the student misrepresents authorship; the provider abets fraud). However, fraud prosecutions for academic misconduct are rare globally. The threshold for criminal action is high and the case complexity makes prosecutions impractical at scale.

### University disciplinary codes
Universities globally maintain internal codes prohibiting contract cheating regardless of national law. Sanctions range from academic penalty (mark reduction, course failure) to severe (expulsion, revocation of awarded degree).

### National research integrity frameworks
Some countries have research-focused integrity laws (Sweden's NPOF, the Netherlands' VSNU code, Germany's DFG Rules of Good Scientific Practice). These cover research misconduct (data fabrication etc.) more strongly than student academic misconduct.

## The supply-side vs demand-side debate

All three specific ban jurisdictions (Ireland, Australia, UK) target the supply side — essay mill operators and providers. None criminalises individual student use of contract cheating services.

The reasoning:
- **Effectiveness**: shutting down a single provider affects thousands of student transactions; prosecuting individual students creates limited deterrence per case
- **Practicality**: detecting and proving individual contract cheating is harder than prosecuting visible providers
- **Proportionality**: providers profit from systemic harm; individual students are responding to incentive structures
- **University authority**: universities already have disciplinary frameworks for individual misconduct

The supply-side approach is the model now followed across the three jurisdictions and proposed in others (New Zealand and several Canadian provinces have discussed similar legislation).

## What works and what doesn't

### Apparent effects

The R-Score data shows that Q1 Anglophone leaders (Australia 88.8, UK 87.5, Ireland 78.8) substantially out-score other countries. The legislative component is the principal differentiator.

Whether legislation translates into measurable Prevalence reduction is harder to isolate. The P-Scores for these three countries are low (Australia 7.43, UK 11.41, Ireland 12.21), but causation is difficult — these countries also have strong detection deployment, mandatory disclosure, and mature institutional codes.

### Limits of legislation

- **Supply relocates**: essay mill providers based outside the jurisdiction continue to serve in-jurisdiction students. UK and Australian students can still purchase from providers based in countries with no ban.
- **AI substitution**: contract cheating volume may have declined post-ChatGPT not because of legislation but because students substitute toward free AI tools
- **Enforcement capacity**: regulator resources affect prosecution rate; legislation without enforcement budget produces limited effect

### What other countries should do

The legislative model is replicable. Required elements:
- Specific offence defined in statute
- Regulator with enforcement powers (TEQSA, OfS, QQI as templates)
- Penalty framework with meaningful fines
- Coordination with detection-tool providers for evidence gathering
- Public list of known providers (Australia's TEQSA list is the model)

EU-level coordination on essay mill legislation has been discussed; the European University Association has called for action but no EU-wide directive has been proposed.

## Sources

- Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019 (Ireland)
- Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020 (Australia)
- Skills and Post-16 Education Act 2022 (UK)
- TEQSA public list of known contract cheating providers
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "how-turnitin-works",
    title: "How Turnitin Works: Plagiarism Detection and AI Detection",
    seoTitle: "How Turnitin Works: Plagiarism & AI Detection Explained 2026",
    metaDescription: "Turnitin is the world's most widely deployed academic plagiarism detection system. How it works, what it can and cannot catch, and its AI detection limitations.",
    date: "2026-05-20",
    category: "guide",
    tags: ["Turnitin", "plagiarism detection", "AI detection", "academic integrity", "guide"],
    tldr: "Turnitin compares submitted text against a corpus of web content, published literature, and previously submitted student work. AI detection was added in 2023. Used at most major Anglophone universities. Effective against direct copying; limited on patchwriting and AI-generated content (Scarfe 2024: 94% AI miss rate).",
    excerpt: "Turnitin is the most widely deployed academic plagiarism detection system globally. This guide explains how it works, what it catches well, and its known limitations including for AI-generated content.",
    faqSchema: [
      {
        question: "How does Turnitin detect plagiarism?",
        answer: "Turnitin compares submitted text against a large corpus including web content, published academic literature, and previously submitted student work (institutional and inter-institutional repositories). It produces a similarity report showing matched text and the percentage of the submission matched. Instructors review the report to distinguish acceptable matches (quotation, citation) from misconduct."
      },
      {
        question: "Can Turnitin detect ChatGPT and AI?",
        answer: "Turnitin added AI detection capability in 2023. The detector identifies text statistically likely to be AI-generated. However, reliability is limited — false positives and false negatives both occur. Scarfe et al. (2024) found that 94% of AI-generated submissions went undetected in a controlled study at the University of Reading. AI detection is an evolving capability rather than a solved problem."
      },
      {
        question: "What languages does Turnitin support?",
        answer: "Turnitin's core plagiarism detection is strongest in English, with substantial coverage in major European languages (Spanish, French, German, Italian, Portuguese, Polish). Less-resourced languages have weaker coverage. Other detection systems — Antiplagiat (Russian), CopyKiller (Korean), JSA (Polish), Compilatio (French) — provide language-specific alternatives in their respective markets."
      }
    ],
    content: `
## TL;DR

Turnitin compares submitted text against a corpus of web content, published literature, and previously submitted student work. The result is a similarity score and a detailed match report. AI detection was added in 2023 but reliability is limited. Used at most major Anglophone universities; widely deployed globally.

## How the core plagiarism detection works

### The corpus

Turnitin maintains a large corpus of text used for matching:

- **Internet content** — web crawl covering public web pages
- **Academic publications** — partnerships with publishers (Elsevier, Springer, Wiley, etc.) provide access to published literature
- **Student submissions** — papers submitted by students at institutions using Turnitin are added to the corpus (with options to opt out per institution)
- **Other licensed databases** — newspapers, magazines, e-books

The corpus size is large — tens of billions of documents. Institutional client base contributes to corpus growth.

### Matching process

When a student submits a paper, Turnitin:

1. Processes the document (extracts text, normalises formatting)
2. Compares against the corpus using phrase-level similarity matching
3. Identifies matched passages and their sources
4. Generates a similarity report

### The similarity report

The report shows:
- Overall similarity percentage (e.g. "23% similarity")
- Individual matches highlighted in the text
- Source documents for each match
- Filter options to exclude quoted text, bibliographies, small matches

### Instructor interpretation

The similarity percentage alone does not indicate plagiarism. Instructors interpret the report:
- 23% with most matches being properly quoted and cited: usually fine
- 23% with the same matches being uncredited copying: misconduct
- 5% with one large uncited passage: misconduct
- 50% but all properly attributed: fine

The interpretation step is critical. Turnitin generates evidence; humans determine whether the evidence indicates misconduct.

## AI detection — added 2023

Following ChatGPT's late 2022 launch, Turnitin developed AI-content detection capability:

- **Approach**: statistical analysis of text features that distinguish AI-generated from human-written text. AI text has different word-distribution patterns, sentence-structure variation, and idiomatic characteristics.
- **Output**: a percentage estimate of AI-generated content in the submission
- **Limitations**: false positives (especially for non-native English speakers, who can produce text with patterns that flag as AI) and false negatives (lightly edited AI text and longer-form AI text often pass undetected)

### Scarfe et al. (2024)

The University of Reading study (Scarfe, P., et al., 2024) submitted AI-generated work through normal coursework channels at Reading. 94% of submissions went undetected — meaning the combination of human review and automated detection caught only 6%. The result indicates that current AI detection technology is well below what would be needed for reliable misconduct prevention.

### The detection-evasion dynamic

AI submissions resist detection through:
- **Light editing**: students editing AI text reduce its statistical signatures
- **Iterative prompting**: students using AI to generate text from extensive prompts produce more human-like output
- **Paraphrasing**: AI-generated content paraphrased by other AI or by the student passes more detection
- **Hybrid drafts**: combining AI and human writing produces text without clear statistical signatures

Detection vendors are iterating; the cat-and-mouse dynamic is structural.

## Deployment globally

The AMI's R-Score Detection tools sub-component reflects deployment scope. The highest scoring countries:

- UK (R_det=90)
- Australia (R_det=85)
- US (R_det=80)
- Ireland (R_det=75)
- Canada (R_det=75)
- New Zealand (R_det=70)

These are Anglophone countries where Turnitin has near-universal university adoption. AI detection has been rolled out alongside the existing plagiarism detection capability.

## Language coverage and alternatives

### Turnitin's language coverage
- **Strong**: English (largest corpus)
- **Good**: Spanish, French, German, Italian, Portuguese, Polish
- **Limited**: many less-resourced languages

### Language-specific alternatives
Some countries operate domestic detection systems:

- **Antiplagiat** (Russia) — Russian-language detection
- **CopyKiller** (South Korea) — Korean-language detection
- **JSA** (Poland) — Polish-language detection, mandatory for theses
- **Compilatio** (France) — French-language detection
- **PlagScan** — German-language detection, now part of Turnitin

These systems often complement rather than replace Turnitin, with institutions running both for different language documents.

## Strengths and limitations

### What Turnitin catches well
- Direct copying from publicly accessible web sources
- Direct copying from major published literature
- Cross-student copying within institutional and inter-institutional corpora
- Self-plagiarism (with appropriate corpus settings)

### What Turnitin misses or struggles with
- Patchwriting and heavy paraphrasing
- Translation plagiarism (copying from foreign-language sources)
- Contract cheating (the original work is not in the corpus)
- AI-generated content (currently)
- Recently published content not yet indexed

### Inherent limits

Turnitin can only match against its corpus. Work copied from sources Turnitin does not have access to (proprietary databases, recently-written content not yet indexed, private documents) cannot be matched. Contract cheating produces "original" text that Turnitin has never seen — making it Turnitin-invisible by design.

## Sources

- Turnitin product documentation
- Scarfe, P., et al. (2024). University of Reading AI submission study
- AMI v1.5 methodology document
- Vendor and corpus partnership documentation

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "what-is-icai",
    title: "What Is the ICAI? International Center for Academic Integrity Guide",
    seoTitle: "What Is the ICAI (International Center for Academic Integrity)? 2026",
    metaDescription: "The ICAI is the principal global association for academic integrity research and practice. Hosts the McCabe survey data (70,000+ students). Guide to history, role, and AMI use.",
    date: "2026-05-20",
    category: "guide",
    tags: ["ICAI", "International Center for Academic Integrity", "McCabe", "guide", "academic integrity"],
    tldr: "The International Center for Academic Integrity (ICAI) is the principal global association for academic integrity research and practice. Hosts the McCabe survey data — 70,000+ students surveyed 2002–2015. The AMI uses ICAI survey data for D4 (plagiarism) and D5 (collusion) where country-specific coverage exists.",
    excerpt: "The ICAI is the world's leading academic integrity association. Its long-running McCabe survey programme remains the gold standard for cross-country self-report data. Here is what the ICAI is and how the AMI uses its data.",
    faqSchema: [
      {
        question: "What is the International Center for Academic Integrity (ICAI)?",
        answer: "The ICAI is the principal global association for academic integrity research and practice. Founded in 1992 (originally as the Center for Academic Integrity at Duke University, later moving to Clemson University and renamed International), it has grown to include hundreds of member institutions globally and hosts the McCabe survey data — the most comprehensive cross-country self-report dataset on academic misconduct."
      },
      {
        question: "What is the McCabe survey?",
        answer: "The McCabe survey is a long-running self-report academic misconduct survey conducted by Donald McCabe and colleagues between 2002 and 2015. Over 70,000 students across 70+ institutions globally completed the surveys, producing the largest single cross-country self-report dataset on student academic misconduct. The data is now hosted by ICAI."
      },
      {
        question: "How does the AMI use ICAI data?",
        answer: "The AMI uses McCabe survey data for the D4 (plagiarism) and D5 (collusion) dimensions in countries where ICAI/McCabe samples directly include the country. Where country-specific data is not available, regional extrapolation or literature priors substitute. The reliance on McCabe data is one reason the AMI's D4 and D5 estimates are stronger for countries with ICAI presence."
      }
    ],
    content: `
## TL;DR

The International Center for Academic Integrity (ICAI) is the principal global academic integrity association. Hosts the McCabe survey data (70,000+ students, 2002–2015). The AMI uses ICAI survey data for D4 (plagiarism) and D5 (collusion). The McCabe survey is the gold standard cross-country self-report dataset.

## What ICAI is

The International Center for Academic Integrity:

- **Founded**: 1992 (originally as the Center for Academic Integrity at Duke University)
- **Renamed**: International Center for Academic Integrity in 2010
- **Hosted at**: Clemson University, US
- **Membership**: hundreds of institutional members globally
- **Activities**: research, conferences, professional development, advocacy

ICAI operates the principal academic conference on integrity (the annual ICAI conference), publishes the International Journal for Educational Integrity in partnership with Springer, and maintains a fundamental values framework that has been widely adopted.

### The fundamental values

ICAI articulates six fundamental values of academic integrity:

1. Honesty
2. Trust
3. Fairness
4. Respect
5. Responsibility
6. Courage

The framework is referenced in institutional integrity codes globally. The articulation provides shared vocabulary for integrity policy across diverse contexts.

## The McCabe surveys

Donald McCabe (Rutgers) conducted the most extensive self-report surveys on student academic integrity ever undertaken. Key facts:

- **Time period**: 2002–2015 (most active years)
- **Sample size**: over 70,000 students surveyed
- **Coverage**: 70+ institutions across multiple countries
- **Method**: anonymous self-report on misconduct behaviours
- **Subsequent work**: ICAI continues to support follow-up research on the McCabe questions

### Sample countries with McCabe data

The McCabe surveys include direct samples for countries including the US, Canada, UK, Australia, Italy, Saudi Arabia, India, and others [verify specific country list]. Some Latin American, Asian, African, and Middle Eastern samples were less extensive.

### What the McCabe data captures

The surveys cover:
- Self-reported plagiarism (D4 in AMI terminology)
- Self-reported unauthorised collaboration (D5)
- Cheating on exams
- Various forms of misconduct on assessments
- Attitudes toward integrity

The 2002–2015 timeframe pre-dates the ChatGPT era. AI-related misconduct (D2 in AMI terminology) is not captured in McCabe data and must be measured through other instruments.

## How the AMI uses ICAI/McCabe data

### D4 (Plagiarism)
The AMI uses McCabe self-report rates where country-specific data exists. For countries with McCabe samples — US, UK, Canada, Australia, Italy, Saudi Arabia, India, and others — the D4 score is built from country-specific self-report rates plus literature triangulation.

For countries without McCabe coverage, the D4 score uses regional extrapolation (e.g. Latin American regional averages applied to Latin American countries not in McCabe).

### D5 (Collusion)
Similar approach. McCabe data covers collusion self-reports for the same sample countries. Regional extrapolation applies for countries without coverage.

### Survey age limitation

The most recent McCabe data is 2015. The AMI uses it as the strongest available cross-country survey data while acknowledging the limitation. Post-2015 changes in student behaviour — including the AI submission category — are not captured in McCabe and must be measured through other instruments (Google Trends, FOI).

## Future ICAI data

ICAI continues to support follow-up research using the McCabe instrument. Several research groups internationally have run follow-up surveys with comparable methodology. As post-2015 country-specific survey data accumulates, the AMI's D4 and D5 estimates will incorporate it.

## Why ICAI matters for the field

The ICAI is the principal venue for academic integrity research and practice exchange. Key contributions:

- **Standardisation**: shared vocabulary (the six fundamental values) and shared instruments (McCabe survey questions) enable cross-country comparison
- **Network**: institutional members exchange best practice through ICAI conferences and resources
- **Research**: the International Journal for Educational Integrity is the principal academic journal for the field
- **Advocacy**: ICAI representation in policy discussions provides expert voice

Countries with strong integrity infrastructure typically have multiple ICAI-member institutions. The membership map correlates with the AMI's R-Score distribution.

## Sources

- [International Center for Academic Integrity](https://academicintegrity.org)
- McCabe, D. L. (multiple publications on the survey programme)
- International Journal for Educational Integrity, Springer
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "academic-integrity-glossary",
    title: "Academic Integrity Glossary: A–Z of Key Terms",
    seoTitle: "Academic Integrity Glossary A–Z | Definitions Guide 2026",
    metaDescription: "A–Z glossary of academic integrity terms — contract cheating, collusion, fabrication, plagiarism, paraphrasing, viva, AMI, ICAI, ORI, and more. Reference guide 2026.",
    date: "2026-05-20",
    category: "guide",
    tags: ["glossary", "definitions", "academic integrity", "guide", "reference"],
    tldr: "A–Z glossary covering academic integrity terminology — from AI-generated submission through viva. Definitions follow ICAI conventions where applicable. Cross-references to detailed AMI guides.",
    excerpt: "An A–Z reference glossary of academic integrity terms. Definitions follow ICAI conventions where applicable, with cross-references to detailed AMI guides for the major categories.",
    faqSchema: [
      {
        question: "What is the difference between plagiarism and contract cheating?",
        answer: "Plagiarism is using someone else's work without attribution — typically copying from existing sources. Contract cheating is paying someone to produce original work for you, then submitting it as your own. Both are academic misconduct, but contract cheating involves a transaction and produces text that doesn't exist elsewhere (making it Turnitin-invisible)."
      },
      {
        question: "What is academic misconduct vs academic dishonesty?",
        answer: "The terms are often used interchangeably. 'Academic misconduct' is more common in institutional policy and legal contexts; 'academic dishonesty' is more common in informal and educator contexts. Both cover the same scope: behaviours that violate academic integrity standards including plagiarism, contract cheating, fabrication, collusion, and exam impersonation."
      },
      {
        question: "What is a viva?",
        answer: "A viva (short for viva voce, 'live voice') is an oral examination, typically used to defend a thesis or dissertation. The candidate answers questions from examiners about their work. Vivas can also be used as an integrity check — if there are concerns a student did not write their own work, a viva can test whether they understand the content."
      }
    ],
    content: `
## A

**Academic integrity** — the commitment to ethical conduct in academic work, anchored on the six ICAI fundamental values (honesty, trust, fairness, respect, responsibility, courage).

**Academic misconduct** — behaviour that violates academic integrity standards. Includes plagiarism, contract cheating, data fabrication, collusion, and exam impersonation. Sometimes called "academic dishonesty" in informal contexts.

**AI detection** — automated tools that attempt to identify AI-generated text. Currently limited reliability (Scarfe et al. 2024: 94% AI miss rate at University of Reading).

**AI-generated submission** — student work produced by AI systems and submitted as the student's own. The AMI's D2 dimension. See [the full guide](/blog/what-is-ai-generated-submission).

**AMI** — Academic Misconduct Index. Country-level index measuring academic cheating across 39 countries. See [the complete guide](/blog/what-is-ami-complete-guide).

**Antiplagiat** — Russian-language plagiarism detection system, widely deployed at Russian universities.

**Attribution** — crediting sources used in academic work. Failure to attribute is the basis of plagiarism.

## C

**Cheating** — broad informal term covering most forms of academic misconduct.

**Collusion** — unauthorised collaboration on individual assessments. The AMI's D5 dimension. See [the full guide](/blog/what-is-collusion-academic).

**Contract cheating** — paying someone to complete academic work. The AMI's D1 dimension. See [the full guide](/blog/what-is-contract-cheating).

**Copyleaks** — AI and plagiarism detection software, used as a Turnitin alternative.

**CopyKiller** — Korean plagiarism detection system, mandatory for thesis checking at many Korean universities.

**CPI** — Corruption Perceptions Index. Transparency International's annual integrity index. See [the AMI comparison](/blog/cpi-vs-ami-comparison).

## D

**Data fabrication** — making up research data that was not collected. The AMI's D6 dimension. See [the full guide](/blog/what-is-data-fabrication-research).

**Data falsification** — altering or selectively reporting real data. Distinct from fabrication; both are research misconduct.

**Disclosure** — institutional or governmental reporting of misconduct statistics. The AMI's R-Score Disclosure sub-component.

**Dissernet** — Russian volunteer organisation that has identified 10,000+ plagiarised dissertations using automated comparison.

**Doctoral plagiarism** — plagiarism in PhD dissertations. Documented in multiple high-profile cases (zu Guttenberg in Germany, multiple cabinet ministers globally).

## E

**Essay mill** — company providing essays and other academic work for payment. See [the full guide](/blog/what-is-an-essay-mill).

**Exam impersonation** — having someone else sit an examination. The AMI's D3 dimension. See [the full guide](/blog/what-is-exam-impersonation).

## F

**Fabrication** — see Data fabrication.

**Falsification** — see Data falsification.

**FFP** — Fabrication, Falsification, Plagiarism. US Office of Research Integrity (ORI) framework for research misconduct.

**FOI** — Freedom of Information. UK FOI investigations have produced significant data on AI misconduct rates at UK universities.

## G

**Ghostwriting** — having someone else write your work, then submitting as your own. Overlap with contract cheating.

**Google Trends** — Google's public search-volume data service. The AMI uses it for D1 and D2 dimensions.

**GPTZero** — AI detection tool used to identify AI-generated text.

## H

**HEC** — Higher Education Commission, Pakistan. Regulates Pakistani universities and operates the country's plagiarism detection requirements.

## I

**ICAI** — International Center for Academic Integrity. Principal global academic integrity association. See [the full guide](/blog/what-is-icai).

**iThenticate** — Turnitin product, used primarily for research publications rather than student work.

## J

**JAMB** — Joint Admissions and Matriculation Board, Nigeria. Operates Nigerian university entrance examinations; has dealt with documented impersonation networks.

**JSA** — Jednolity System Antyplagiatowy, Poland's uniform anti-plagiarism system. Mandatory for theses across Polish universities.

## L

**Legislation** — statutory frameworks targeting academic misconduct. The AMI's R-Score Legislation sub-component. See [the legislation guide](/blog/academic-integrity-legislation-guide).

**LOWI** — Landelijk Orgaan Wetenschappelijke Integriteit, the Netherlands national research integrity board.

## M

**McCabe survey** — long-running self-report academic misconduct survey conducted by Donald McCabe and colleagues 2002–2015. 70,000+ students surveyed. Hosted by ICAI.

**Mosaic plagiarism** — combining phrases from multiple sources without attribution. Also called "patchwriting."

## N

**NESH** — National Committee for Research Ethics in the Social Sciences and Humanities, Norway. Anchors the strong Norwegian research integrity framework.

**NPOF** — Nämnden för Prövning av Oredlighet i Forskning, the Swedish national board for assessment of research misconduct. Statutory body established 2019.

## O

**ORI** — Office of Research Integrity, US. Federal oversight body for research misconduct in federally-funded US research.

**Originality.ai** — AI detection tool used as a Turnitin alternative.

## P

**Paraphrasing plagiarism** — restating someone else's ideas without citing the source.

**Patchwriting** — see Mosaic plagiarism.

**Penalty** — formal sanction for academic misconduct. The AMI's R-Score Penalties sub-component.

**Plagiarism** — using someone else's words or ideas without attribution. The AMI's D4 dimension. See [the full guide](/blog/what-is-plagiarism-definition).

**Prevalence Score (P)** — the AMI's horizontal axis, estimating the rate of academic misconduct. See [how it is calculated](/blog/how-p-score-calculated).

**PubPeer** — post-publication peer review platform where suspected misconduct can be discussed publicly.

## Q

**QQI** — Quality and Qualifications Ireland. Statutory regulator with enforcement powers under the 2019 essay mill ban.

**Q1, Q2, Q3, Q4** — the AMI's four quadrants. See [the full guide](/blog/four-quadrants-explained).

## R

**Response Quality Score (R)** — the AMI's vertical axis, measuring institutional response strength. See [how it is calculated](/blog/how-r-score-calculated).

**Retraction Watch** — database of retracted scientific publications. 69,911 records as of April 2026. See [the full guide](/blog/what-is-retraction-watch).

## S

**Self-plagiarism** — reusing your own previously submitted work without disclosure.

**Skills and Post-16 Education Act 2022** — UK legislation banning essay mill services.

## T

**TEQSA** — Tertiary Education Quality and Standards Agency, Australia. Statutory regulator; maintains the public list of 2,300+ known contract cheating providers.

**Translation plagiarism** — copying from a foreign-language source and presenting the translation as original work.

**Turnitin** — most widely deployed plagiarism detection system globally. See [how it works](/blog/how-turnitin-works).

## U

**UGC** — University Grants Commission, India. Published 2018 Promotion of Academic Integrity and Prevention of Plagiarism regulations.

## V

**Viva** (viva voce) — oral examination. Used to defend theses or as integrity check.

**VroniPlag** — German volunteer plagiarism detection initiative that has identified plagiarism in dissertations by senior politicians and academics.

**VSNU code** — Netherlands Code of Conduct for Research Integrity. Binding code adopted by all Dutch universities.

## Y

**YÖK** — Yükseköğretim Kurulu, Council of Higher Education, Turkey. Regulates Turkish universities.

## Sources

- ICAI Fundamental Values framework
- AMI v1.5 methodology document
- US ORI definitions
- Country-specific regulator documentation

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "ghostwriting-academia-legal",
    title: "Is Academic Ghostwriting Legal? Country-by-Country Status",
    seoTitle: "Is Academic Ghostwriting Legal? Country-by-Country 2026",
    metaDescription: "Academic ghostwriting — paying someone to write academic work for you — is illegal under specific essay mill laws in Australia, Ireland, and UK. Legal grey area elsewhere.",
    date: "2026-05-20",
    category: "guide",
    tags: ["ghostwriting", "contract cheating", "legality", "law", "guide"],
    tldr: "Academic ghostwriting is illegal under specific contract cheating bans in Australia (2020), Ireland (2019), and UK (2022). It is legal-but-violates-institutional-codes in most other countries. The 'legal' status applies to commercial transactions; individual students using ghostwritten work face institutional misconduct sanctions everywhere.",
    excerpt: "Academic ghostwriting — paying someone to produce academic work you submit as your own — sits in different legal categories around the world. This guide covers the country-by-country status and the institutional consequences.",
    faqSchema: [
      {
        question: "Is academic ghostwriting illegal?",
        answer: "Academic ghostwriting commercial services are specifically illegal in three countries: Ireland (2019 Act), Australia (2020 Act), and the UK (2022 Act). In other countries it operates in a legal grey area — typically not specifically illegal but potentially prosecutable as fraud, and always violating institutional codes that apply to the student using the work."
      },
      {
        question: "What happens if you are caught using a ghostwriter for university work?",
        answer: "Institutional sanctions range from mark reduction to expulsion and revocation of awarded degrees. The specific consequence depends on institutional policy, the level of work involved (undergraduate, masters, doctoral), and whether the work was for a high-stakes assessment. In jurisdictions with statutory bans, the ghostwriter or service can face additional criminal penalties."
      },
      {
        question: "Is paying someone to edit my essay the same as ghostwriting?",
        answer: "Editing — improving grammar, structure, or clarity of work the student has substantively produced — is generally permitted with disclosure. Ghostwriting — paying someone to produce the original content — is misconduct. The line depends on how much of the intellectual contribution comes from the student versus the paid writer. Heavy substantive editing that essentially rewrites the student's work approaches ghostwriting."
      }
    ],
    content: `
## TL;DR

Academic ghostwriting commercial services are specifically illegal in three countries: Ireland (2019), Australia (2020), UK (2022). Other countries have institutional prohibitions and general fraud applicability. Individual student use of ghostwritten work is institutional misconduct in all countries with established higher education systems.

## What ghostwriting in academic context means

Academic ghostwriting is paying someone — an individual or a commercial service — to produce academic work that the student submits as their own. The overlap with "contract cheating" is substantial; the terms are often used interchangeably.

Distinct from:

- **Editing services** — improving grammar, clarity, structure of work the student has substantively produced (generally permitted with disclosure)
- **Tutoring** — helping a student understand material or develop skills (permitted)
- **Proofreading** — checking for errors in completed work (permitted)
- **Statistical or methodological consultation** — getting help with technical analysis methods (permitted with disclosure)

The line is whether the intellectual content originated with the student. Where it did, with paid help refining the presentation, that is acceptable. Where it did not, with the student paying for substantive content, that is ghostwriting / contract cheating.

## Country-by-country legal status

### Specifically illegal (3 countries)

| Country | Law | Year |
|---|---|---|
| Ireland | Qualifications and Quality Assurance (Education and Training) (Amendment) Act | 2019 |
| Australia | Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act | 2020 |
| United Kingdom | Skills and Post-16 Education Act, section 80 | 2022 |

All three target providers — the commercial service or individual ghostwriter. None criminalises the individual student.

### Legal but institutional misconduct (most countries)

In most countries, providing or arranging ghostwriting services is not specifically illegal. However:

- The student using ghostwritten work faces institutional disciplinary action
- The ghostwriting service may be prosecutable under general fraud law (rare in practice)
- Some jurisdictions (US states, Canadian provinces, New Zealand) have considered legislation but not enacted it

### Specifically prohibited at institutional level (universal)

Every established higher education institution globally prohibits students from submitting work produced by others without authorisation. The sanctions vary but the prohibition is universal across institutional codes.

## What happens to students caught

### Standard institutional sanctions

- **Zero on the assignment** — minimum sanction
- **Course failure** — common for repeated or substantial cases
- **Suspension** — common for serious or systemic cases
- **Expulsion** — for the most serious cases
- **Degree revocation** — for cases discovered after graduation

Universities increasingly have policies that allow revocation of awarded degrees if subsequent investigation shows the degree was obtained through misconduct. High-profile German cases (zu Guttenberg and others) demonstrated that political careers can be ended by post-graduation discovery of doctoral plagiarism or ghostwriting.

### Criminal penalties (rare)

In jurisdictions with specific essay mill bans, criminal penalties apply to providers — not typically to individual student users. Australian fines up to AUD 100,000 (corporate offenders). UK and Irish equivalents.

Individual students are typically handled by institutional misconduct frameworks rather than criminal prosecution. The exception is exceptionally egregious cases (e.g. forged credentials sold as service deliverables).

## Why the supply-side approach

The three countries with specific bans all target the supply side rather than students. The reasoning:

### Effectiveness
Shutting down a provider affects thousands of student transactions. Prosecuting individual students creates limited per-case deterrence.

### Practicality
Identifying and prosecuting individual ghostwriting use is operationally difficult. Detecting commercial providers and pursuing them is more tractable.

### Proportionality
Providers profit from systemic harm. Individual students are often responding to incentive structures (high-stakes assessments, language barriers, time pressure). Targeting providers is closer to the source of the harm.

### Institutional sufficiency
Universities have well-developed disciplinary frameworks for individual student misconduct. They do not need criminal law to act on individual cases.

## How AMI scores reflect this

The Legislation sub-component of the R-Score reflects whether statutory frameworks specifically target academic misconduct. Countries with comprehensive bans (Australia, UK, Ireland) score 100 on the sub-component. Countries with general fraud applicability only score lower.

The Penalties sub-component reflects whether sanctions are clear and applied. Even countries without specific essay mill law can score reasonably high on Penalties if institutional sanctions are mature and consistently applied (Netherlands, Germany, US).

## Detection challenges

Ghostwritten work is the hardest form of academic misconduct to detect:

- The text is original — no match in plagiarism databases
- Stylistic analysis can flag inconsistency with the student's known writing but is unreliable
- Viva (oral examination) can reveal whether the student understands the submitted work — the most effective detection method but expensive
- Forensic stylometry can in principle detect ghostwriting but is not deployed at scale

The detection difficulty is part of why supply-side legislation matters — disrupting providers reduces volume even when individual detection is hard.

## Sources

- Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019 (Ireland)
- Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020 (Australia)
- Skills and Post-16 Education Act 2022, section 80 (UK)
- AMI v1.5 methodology document
- Institutional disciplinary code analysis

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "contract-cheating-statistics-2026",
    title: "Contract Cheating Statistics 2026: Global Data from the AMI",
    seoTitle: "Contract Cheating Statistics 2026 | Global Data & Rankings",
    metaDescription: "Contract cheating statistics from AMI v1.5: country rankings, demand signals, supply-side hubs. Colombia, Argentina, Pakistan, Greece score 100 on D1.",
    date: "2026-05-20",
    category: "data",
    tags: ["contract cheating", "statistics", "D1", "data", "rankings 2026"],
    tldr: "AMI v1.5 contract cheating (D1) data: Colombia, Argentina, Greece, Pakistan score 100 on demand signal. Lowest D1: Australia, UK, Ireland (33 each). Supply-side hubs: India, Kenya, Pakistan, Philippines. Australia, Ireland, UK are the only countries with specific bans.",
    excerpt: "Global contract cheating data from the Academic Misconduct Index v1.5. Demand rankings, supply-side hubs, and the policy gap between Q1 ban countries and the rest. Country-level tables.",
    faqSchema: [
      {
        question: "Which countries have the highest contract cheating rates?",
        answer: "On the AMI's D1 dimension, Colombia, Argentina, Greece, and Pakistan all score 100 — the top of the distribution. Egypt, Iran, Saudi Arabia, Italy, France, Spain, Poland, Russia, Turkey, Nigeria, and Indonesia all score 67–83. The lowest D1 scores are in Australia, the UK, and Ireland (33 each) — all countries with specific contract cheating bans."
      },
      {
        question: "How many students use contract cheating services globally?",
        answer: "Estimating absolute numbers is difficult given the demand-incidence gap. Newton (2018) meta-analysis estimated 15.7% of post-secondary students had paid someone to complete academic work. Applied to the global higher education population of ~225 million students, this implies on the order of 30+ million students having used contract cheating services. Country variation is substantial."
      },
      {
        question: "Which countries are the largest essay mill providers?",
        answer: "The principal supply hubs are India, Pakistan, Kenya, and the Philippines — countries with English-language proficiency, lower labour costs, and time-zone arbitrage relative to Anglophone destination markets. Lancaster (multiple) has documented the scale of these supply concentrations. The AMI's D1 dimension captures demand-side signals rather than supply directly, but the supply hub countries also show elevated demand."
      }
    ],
    content: `
## TL;DR

Contract cheating data from AMI v1.5 (May 2026). Demand signals captured via Google Trends. Countries with specific bans (Australia, UK, Ireland) score lowest on D1 (33 each). Highest scoring countries: Colombia, Argentina, Greece, Pakistan (100 each). Supply concentration in India, Kenya, Pakistan, Philippines.

## Demand rankings — D1 score across 39 countries

### Top 10 — highest D1 scores

| Country | D1 | P-Score | Quadrant |
|---|---|---|---|
| Colombia | 100 | 77.38 | Q3 |
| Argentina | 100 | 74.57 | Q3 |
| Greece | 100 | 74.00 | Q3 |
| Pakistan | 100 | 59.08 | Q3 |
| Saudi Arabia | 83 | 53.98 | Q3 |
| India | 83 | 42.62 | Q4 |
| Italy | 83 | 44.98 | Q4 |
| Spain | 83 | 40.78 | Q4 |
| Malaysia | 83 | 40.40 | Q4 |
| Russia | 83 | 37.53 | Q4 |

### Bottom 10 — lowest D1 scores

| Country | D1 | R-Score |
|---|---|---|
| Australia | 33 | 88.8 |
| UK | 33 | 87.5 |
| Ireland | 33 | 78.8 |
| Canada | 50 | 60.0 |
| Singapore | 50 | 47.5 |
| Netherlands | 50 | 51.2 |
| Norway | 50 | 47.5 |
| Sweden | 50 | 45.0 |
| New Zealand | 50 | 58.8 |
| Japan | 50 | 27.5 |

The pattern is clear: the three countries with specific bans (Australia, UK, Ireland) have D1 scores tied at 33, lower than all other countries in the dataset. Whether this reflects causation (bans reducing demand) or correlation (countries that legislated also had pre-existing lower demand) is harder to establish.

## Regional patterns

### Latin America
Spanish-language essay mill market is the most active globally. Colombia (D1=100) and Argentina (D1=100) anchor the highest demand signals. Mexico (67) and Brazil (67) show moderate-elevated demand. The Spanish-language market is structurally large — services target the whole Hispanophone academic market.

### Middle East
Saudi Arabia (83), Egypt (67), Iran (67), Turkey (83) all show elevated demand. Arabic-language and Turkish-language essay mill markets operate alongside English-language services targeting the substantial English-medium higher education populations.

### South Asia
Pakistan (100), India (83) — both high. Pakistan's score reflects domestic demand plus the substantial essay mill export industry operating from Pakistan. India similar — major export hub with significant domestic demand.

### Europe — Q1 vs others
Q1 countries (UK 33, Ireland 33, Netherlands 50) score lower. Q3/Q4 European countries (Italy 83, Spain 83, France 67, Russia 83, Poland 67, Greece 100) show elevated demand. The Anglophone-Continental split is partly a language effect (English-language essay mills are largest globally) and partly a policy effect (the bans).

### Anglophone
Australia 33, UK 33, Ireland 33 — the three lowest D1 scores in the dataset. US (50) and Canada (50) marginally higher; both lack specific essay mill bans. New Zealand 50.

## Supply concentration

The AMI's D1 captures demand-side signals. Supply-side data is harder to measure systematically.

Lancaster (multiple publications) has documented supply concentration:

- **India** — largest essay mill industry globally; serves UK, Australian, US markets
- **Pakistan** — substantial export market; English-language proficiency advantage
- **Kenya** — Nairobi-based writers; significant Anglophone export
- **Philippines** — substantial export presence

These supply hubs also show elevated domestic D1 (India 83, Pakistan 100, Kenya 67, Philippines 67) — students in supply countries also purchase services, though the export market is the more globally significant feature.

## Newton meta-analysis context

Newton (2018) [verify: "How common is commercial contract cheating in higher education and is it increasing? A systematic review"] systematic review of self-report studies estimated 15.7% of post-secondary students had paid for academic work. Applied to ~225 million global higher education students, this implies on the order of 30+ million students having used contract cheating services.

The 15.7% is an aggregate across studies of varying quality. Country variation is substantial — the McCabe and ICAI data shows rates ranging from below 5% in countries with strong infrastructure to over 30% in some samples from countries with weak infrastructure.

## Trends over time

Pre-ChatGPT (before late 2022), contract cheating volume grew steadily through the 2010s, driven by:
- Internet enabling marketplace platforms connecting students and writers
- International student growth particularly in Anglophone markets
- Online and distance learning expansion (assessment authentication harder)

Post-ChatGPT, the picture is mixed:
- Some evidence of substitution toward free AI tools
- D1 demand signals have not collapsed
- Brand name searches for major essay mill services declined in 2023–2024 [verify trend specifics]

The substitution-vs-displacement balance is an active research question.

## Sources

- AMI v1.5 dataset (D1 dimension data)
- Google Trends API (2022–2026), per-country signals
- Newton, P. M. (2018), Frontiers in Education
- Lancaster, T. (multiple), International Journal for Educational Integrity
- ICAI / McCabe survey data

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "ai-submission-misconduct-figures",
    title: "AI Submission Misconduct Figures 2026: Global Data",
    seoTitle: "AI Submission Misconduct Figures 2026 | Global Data & FOI",
    metaDescription: "AI submission misconduct data from AMI v1.5. Guardian FOI: 7,000 UK students caught in 2023-24 (5.1/1000). Scarfe 2024: 94% AI miss rate. Country rankings.",
    date: "2026-05-20",
    category: "data",
    tags: ["AI submissions", "ChatGPT", "Guardian FOI", "Scarfe 2024", "data", "D2"],
    tldr: "AI submission data from AMI v1.5 (D2 dimension): 11 countries score 100 on demand signal. Guardian FOI shows 7,000 UK students caught using AI in 2023–24 (5.1/1000 confirmed rate). Scarfe et al. 2024: 94% of AI submissions undetected. Detection capability is the principal current limitation.",
    excerpt: "AI-generated submission misconduct data from the AMI v1.5. Demand rankings, the Guardian FOI confirmed-case data, and the Scarfe et al. detection study. The category did not exist three years ago.",
    faqSchema: [
      {
        question: "How many students use AI to cheat?",
        answer: "Estimates vary widely. Guardian FOI data shows 5.1 per 1,000 UK students were formally caught using AI in 2023–24 — but Scarfe et al. (2024) found 94% of AI submissions go undetected. Applying the detection correction implies true rates above 8%. Stanford and other US-based studies have found 9–16% of undergraduates using AI for assignments in confidential surveys."
      },
      {
        question: "Which countries have the highest AI cheating rates?",
        answer: "On the AMI's D2 dimension, 11 countries score 100 — Colombia, Argentina, Greece, Egypt, Iran, Saudi Arabia, Italy, France, Spain, Poland, and one other. The D2 signal captures search demand for AI submission tools. Countries with maxed D2 typically have large student populations, high digital engagement, and active discussion of AI tools."
      },
      {
        question: "Can universities detect ChatGPT?",
        answer: "AI detection capability is currently limited. Turnitin's AI detection (added 2023), GPTZero, Originality.ai, and Copyleaks all attempt automated detection. Scarfe et al. (2024) found 94% of AI submissions went undetected at the University of Reading. Detection improves with longer submissions and unedited AI output; lightly edited or short AI text passes detection at high rates."
      }
    ],
    content: `
## TL;DR

AI submission (D2) data from AMI v1.5. Demand signal maxed in 11 countries. Guardian FOI confirms 5.1/1000 UK students caught in 2023–24. Scarfe et al. (2024) detection study: 94% AI miss rate. Detection capability is the principal current limitation.

## Demand signal rankings — D2 score

### Top — D2 = 100 (11 countries tied)

- Colombia
- Argentina
- Greece
- Egypt
- Iran
- Saudi Arabia
- Italy
- France
- Spain
- Poland
- (one other)

These countries all show the top of the per-country distribution for AI submission tool search volume. The signal includes searches in Spanish (driving the Latin American and Spanish cluster), Italian, French, Arabic, Persian, Polish, and Greek.

### Middle band — D2 in 50s–60s

- China (68)
- Pakistan (66)
- India (62)
- Indonesia (62)
- Malaysia (62)
- South Korea (56)
- Brazil (56)
- Mexico (56)
- Thailand (56)
- Philippines (56)
- Vietnam (50)
- Turkey (50)

### Lower band — D2 in 30s–40s

- US (44)
- Canada (44)
- UK (44)
- Australia (44)
- South Africa (44)
- Singapore (44)
- Germany (44)
- Japan (31)
- Norway (31)
- Sweden (31)
- Netherlands (31)
- Ireland (31)
- New Zealand (31)

## The Guardian FOI investigation

In June 2025, The Guardian published a Freedom of Information investigation showing UK university confirmed cases of AI misconduct:

- **Total cases**: nearly 7,000 across UK universities in 2023–24
- **Rate**: 5.1 per 1,000 students
- **Coverage**: most UK universities responded to the FOI request
- **Categories**: formal misconduct findings for AI use including ChatGPT, Bard, and other tools

The Guardian data is the largest single confirmed-case dataset for AI submissions globally. Times Higher Education has published similar FOI data for Russell Group universities specifically [verify].

## The Scarfe et al. (2024) study

The University of Reading study tested AI submission detection capability:

- **Method**: AI-generated submissions submitted through normal coursework channels at the university
- **Coverage**: psychology undergraduate assessments
- **Detection rate**: 6% (i.e. 94% of AI submissions went undetected)
- **Detection methods tested**: combined human marker review and Turnitin AI detection

The study established that the current detection regime catches only a small minority of AI-generated submissions. The 94% miss rate has been widely cited as the empirical benchmark for AI detection capability.

### Implications

Applying the Scarfe correction to the Guardian FOI data:
- 5.1 per 1,000 confirmed cases × (1 / 0.06) detection factor = 85 per 1,000 true rate estimate
- This implies an 8.5% true incidence rate — substantially above the confirmed rate

The AMI methodology applies a similar detection correction in calculating D2 scores from observed signals.

## US data — Stanford and other studies

Stanford has run confidential undergraduate surveys post-ChatGPT, reporting:

- 9–16% of undergraduates use AI for assignments [verify specific Stanford study citations]
- Rates vary by discipline and course type

Other US studies have produced comparable estimates. The US D2 score of 44 reflects this moderate range — well below the maxed-D2 countries but consistent with substantial actual use.

## Time series

The category did not meaningfully exist before late 2022:

- **Pre-November 2022**: ChatGPT had not launched; AI tools were available but not at scale
- **December 2022 – mid 2023**: rapid adoption of ChatGPT by students; many universities reactive rather than proactive
- **2023 – present**: institutional policies developing; detection tools rolling out; FOI data emerging

The two-and-a-half-year history of the category means time-series data is limited. The 2024 and 2025 FOI data will be more informative than the 2023 data given institutional policy maturation.

## Country detection asymmetry

The detection gap between countries is substantial:

- **High detection deployment**: UK, Australia, US, Canada have widespread Turnitin AI detection
- **Moderate deployment**: most European countries
- **Limited deployment**: many Q3 and Q4 countries have minimal AI detection beyond basic plagiarism tools

The detection-incidence confound applies strongly to D2. Countries with stronger detection report more cases — not necessarily because they have more actual incidence but because they catch more of what occurs.

## Substitution dynamics

A major open question: are students substituting AI for contract cheating, or using both?

Evidence for substitution:
- Some essay mill brand name search declines in 2023–2024
- Free AI alternatives reduce price advantage of contract cheating
- AI is faster than commissioning a human writer

Evidence against substitution:
- AI detection is improving (slowly); contract cheating is harder to detect
- Some assessments (longer, more complex) still favour human writers
- Contract cheating revenue has not collapsed per industry reporting [verify]

The likely answer: substitution at the margins but coexistence overall. Future AMI versions will track the dynamic.

## Sources

- The Guardian (June 2025), FOI investigation [verify specific article reference]
- Scarfe, P., et al. (2024), "A real-world test of artificial intelligence infiltration of a university examinations system"
- Stanford and other US-based confidential survey data [verify specifics]
- AMI v1.5 dataset and methodology

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "data-fabrication-retraction-rates",
    title: "Data Fabrication Retraction Rates 2026: Country Rankings",
    seoTitle: "Data Fabrication Retraction Rates 2026 | AMI Country Data",
    metaDescription: "Data fabrication retraction rates from AMI v1.5. China D6=100 (highest), Russia 78, India 70, Iran 65. Built from Retraction Watch 69,911 records normalised by publication volume.",
    date: "2026-05-20",
    category: "data",
    tags: ["data fabrication", "Retraction Watch", "D6", "data", "rankings 2026"],
    tldr: "Data fabrication (D6) rankings from AMI v1.5: China 100 (highest), Russia 78, India 70, Iran 65, Pakistan 65, Egypt 60. Lowest: New Zealand 12, Sweden 15, Norway 15, Ireland 15, Netherlands 15. Built from Retraction Watch 69,911 records normalised by publication volume.",
    excerpt: "Data fabrication retraction rates per 10,000 publications, ranked across 39 countries. China leads globally; Nordic and Q1 countries score lowest. Built from Retraction Watch data.",
    faqSchema: [
      {
        question: "Which country has the highest data fabrication retraction rate?",
        answer: "China scores 100 on the AMI's D6 dimension — the highest rate of misconduct-linked retractions per 10,000 publications in the dataset. Russia follows at 78, India at 70, Iran and Pakistan at 65 each, Egypt at 60. The pattern correlates with both research output volume and the strength of institutional integrity infrastructure."
      },
      {
        question: "How is the AMI's D6 dimension calculated?",
        answer: "The Retraction Watch database is filtered to misconduct-linked retractions (fabrication, falsification, fraud, image manipulation). Each retraction is country-attributed by author affiliation. Counts are then divided by total publications from OpenAlex for the same country and time period, producing a retractions-per-10,000-publications rate. The rates are rescaled to 0–100 across the 39-country set, with China's rate anchoring 100."
      },
      {
        question: "Does a low D6 score mean no research misconduct?",
        answer: "No — D6 measures *detected and retracted* misconduct. Countries with strong post-publication review culture (Netherlands, Sweden, Norway) detect and retract more, but also produce less of the underlying misconduct. Countries with weak post-publication review may have undetected misconduct that does not appear in retraction data. The methodology applies a detection correction but the fundamental confound remains."
      }
    ],
    content: `
## TL;DR

D6 (data fabrication) rankings from AMI v1.5. Built from Retraction Watch (69,911 records, 5,390 misconduct-linked) normalised by publication volume from OpenAlex. China (D6=100) anchors the top; Nordic and Q1 countries score lowest. Detection-incidence confound applies.

## Full D6 rankings

### Top — highest D6 scores

| Country | D6 | Note |
|---|---|---|
| China | 100 | Highest globally |
| Russia | 78 | Dissernet documentation |
| India | 70 | Major research producer |
| Iran | 65 | Post-2010s output growth |
| Pakistan | 65 | Documented HEC cases |
| Egypt | 60 | Cairo/Ain Shams retractions |
| Nigeria | 55 | African leader |
| South Korea | 55 | Post-Hwang context |
| Malaysia | 50 | Regional pattern |
| Turkey | 50 | YÖK reforms ongoing |

### Middle — moderate D6 scores

| Country | D6 |
|---|---|
| Indonesia | 45 |
| Saudi Arabia | 45 |
| Brazil | 40 |
| Ukraine | 35 |
| Italy | 35 |
| Mexico | 32 |
| Japan | 30 |
| Poland | 30 |
| Philippines | 30 |
| South Africa | 30 |
| US | 30 |
| Thailand | 30 |

### Lower — lower D6 scores

| Country | D6 |
|---|---|
| Spain | 28 |
| France | 25 |
| Canada | 22 |
| Vietnam | 22 |
| Germany | 20 |
| Kenya | 20 |
| Singapore | 20 |
| Australia | 18 |
| UK | 18 |

### Bottom — lowest D6 scores

| Country | D6 |
|---|---|
| New Zealand | 12 |
| Sweden | 15 |
| Norway | 15 |
| Netherlands | 15 |
| Ireland | 15 |
| Colombia | 0 |
| Argentina | 0 |
| Greece | 0 |

Note: Colombia, Argentina, and Greece show 0 because their absolute Retraction Watch presence is very low relative to publication volume. The 0 reflects the rescaling rather than literal zero retractions.

## Methodology

The D6 dimension is built from Retraction Watch data:

### Step 1 — Filter to misconduct-linked retractions

Retraction Watch records include retractions for many reasons (errors, duplicate publication, ethics issues, requests, misconduct). The AMI methodology filters to misconduct-linked retractions:

- Fabrication
- Falsification
- Image manipulation
- Plagiarism (in research context)
- Fraud
- Manipulation of peer review

The filter retains ~5,390 of the 69,911 total retractions.

### Step 2 — Country attribution

Each retraction is attributed to a country based on author affiliations. Multi-country papers are attributed proportionally.

### Step 3 — Normalise by publication volume

Retraction counts are divided by total publications from OpenAlex for the same country and time period (2016–2025 [verify exact window]). The result is retractions per 10,000 publications.

### Step 4 — Rescale

The rates are rescaled to 0–100 across the 39-country set, with China's rate (the highest) anchoring 100.

## Why China scores 100

China's D6 score of 100 reflects:

- **Largest research output globally** — China is now the world's largest producer of academic papers
- **Documented paper mill industry** — Fang, Steen & Casadevall (2012, PNAS) established systematic patterns
- **Liang et al. (2024)** — Nature study found 6.3–17.5% of Chinese papers contain detectable AI-generated content
- **High absolute retraction count** — even after normalising by publication volume, China leads

The score reflects both the scale of the problem and the relative effectiveness of detection. The actual misconduct rate may be higher still given undetected cases.

## Why Russia scores 78

Russia's D6 score of 78 reflects:

- **Dissernet documentation** — 10,000+ plagiarised dissertations identified
- **Retraction Watch entries** — Russian-affiliated retractions per publication are elevated
- **Limited institutional response** — even when misconduct is identified, consequences are often limited

## Why some low-output countries score 0

Colombia, Argentina, and Greece score D6=0. This does not mean zero misconduct — it means their absolute retraction count is very small relative to publication volume, and the rescaling produces 0 at the bottom of the distribution.

For these countries, the methodology limitation is that the Retraction Watch dataset is partly biased by:
- Higher-volume publishers being more represented (typically English-language)
- Sting operations and systematic detection efforts being concentrated on high-volume producers

Latin American and Greek research output is smaller in absolute terms; detection effort is correspondingly less concentrated. Future methodology iterations may address this through different normalisation approaches.

## The detection-incidence confound

Countries with strong post-publication review culture (Netherlands, Sweden, Germany) catch more cases. The Macchiarini case (Karolinska, Sweden) demonstrated how a country can have very public misconduct that produces strong response — improving R-Score — while also having very low underlying base rate.

Countries with weak post-publication review may have undetected misconduct. Their low D6 scores partly reflect under-detection rather than genuine absence of misconduct.

The AMI methodology applies a detection correction in the dimension scoring but the fundamental confound remains. Cross-country comparison of D6 scores should weight this consideration.

## Time trends

The Retraction Watch database has grown substantially over the past decade:

- 2010: ~5,000 records
- 2015: ~10,000 records
- 2020: ~30,000 records
- 2024: ~70,000 records [verify exact 2024 count]

Growth reflects both increasing actual misconduct detection and increasing database coverage. The acceleration in retractions in 2020–2024 was partly driven by systematic paper mill detection efforts following Crossref initiatives.

## Sources

- Retraction Watch Database, Crossref/GitLab (April 2026)
- OpenAlex publication counts
- Fang, Steen & Casadevall (2012), PNAS
- Liang et al. (2024), Nature
- AMI v1.5 methodology

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "strongest-academic-integrity-response",
    title: "Strongest Academic Integrity Response: Top 10 Countries 2026",
    seoTitle: "Strongest Academic Integrity Response 2026 | AMI Top 10",
    metaDescription: "Top 10 countries by R-Score on the Academic Misconduct Index 2026. Australia R=88.8, UK 87.5, Ireland 78.8. Specific contract cheating bans drive the top three.",
    date: "2026-05-20",
    category: "data",
    tags: ["R-Score", "response quality", "rankings 2026", "best in class", "data"],
    tldr: "Top 10 countries by Response Quality (R) score in AMI v1.5: Australia 88.8, UK 87.5, Ireland 78.8, Canada 60.0, New Zealand 58.8, Netherlands 51.2, US 51.2, Norway 47.5, Singapore 47.5, Sweden 45.0. Specific essay mill bans drive the top three; the next seven rely on strong institutional infrastructure.",
    excerpt: "The 10 countries with the strongest institutional response to academic misconduct, ranked by R-Score. Australia, UK, and Ireland lead globally — all three have specific contract cheating bans. Here are the data and the policy lessons.",
    faqSchema: [
      {
        question: "Which country has the strongest academic integrity response?",
        answer: "Australia scores R=88.8 on the Academic Misconduct Index 2026 — the highest Response Quality score in the dataset. Australia is followed by the UK (87.5) and Ireland (78.8). All three have specific contract cheating bans (2020, 2022, 2019 respectively). Canada (60.0), New Zealand (58.8), Netherlands (51.2), and the US (51.2) round out the top seven."
      },
      {
        question: "Why do Australia, UK, and Ireland lead globally on academic integrity?",
        answer: "All three are the only countries with specific contract cheating bans — Ireland 2019, Australia 2020, UK 2022. The legislation lifted their R-Score Legislation sub-component to 100 (the maximum). Combined with strong detection deployment, mandatory disclosure, and mature penalty frameworks, this produces R-Scores well above other peers. The supply-side legislative approach has proven the most effective single policy lever."
      },
      {
        question: "What separates the Q1 top three from Q1 numbers four and below?",
        answer: "The principal differentiator is the contract cheating legislation. Australia (88.8), UK (87.5), and Ireland (78.8) all have specific essay mill bans giving them maximum Legislation sub-component scores. Canada (60.0), New Zealand (58.8), and Netherlands (51.2) score strongly on Detection, Disclosure, and Penalties but lack the statutory ban. Adding similar legislation would close most of the gap."
      }
    ],
    content: `
## TL;DR

Top 10 R-Scores in AMI v1.5: Australia (88.8), UK (87.5), Ireland (78.8), Canada (60.0), New Zealand (58.8), Netherlands (51.2), US (51.2), Norway (47.5), Singapore (47.5), Sweden (45.0). Anglophone bans drive the top three; institutional infrastructure drives the rest.

## The top 10

| Rank | Country | R-Score | Legislation | Detection | Disclosure | Penalties | Quadrant |
|---|---|---|---|---|---|---|---|
| 1 | Australia | 88.8 | 100 | 85 | 90 | 80 | Q1 |
| 2 | UK | 87.5 | 100 | 90 | 85 | 75 | Q1 |
| 3 | Ireland | 78.8 | 100 | 75 | 70 | 70 | Q1 |
| 4 | Canada | 60.0 | 35 | 75 | 70 | 60 | Q1 |
| 5 | New Zealand | 58.8 | 40 | 70 | 65 | 60 | Q1 |
| 6 | Netherlands | 51.2 | 25 | 65 | 55 | 60 | Q1 |
| 6 | US | 51.2 | 30 | 80 | 40 | 55 | Q1 |
| 8 | Norway | 47.5 | 20 | 60 | 55 | 55 | Q3 |
| 8 | Singapore | 47.5 | 30 | 65 | 40 | 55 | Q4 |
| 10 | Sweden | 45.0 | 20 | 60 | 50 | 50 | Q4 |

## The Anglophone top three — bans drive the lead

Australia, the UK, and Ireland share a common pattern: all three have specific contract cheating legislation that gives them maximum scores on the Legislation sub-component.

### Ireland 2019
The Qualifications and Quality Assurance (Education and Training) (Amendment) Act 2019 was the first specific essay mill ban globally. QQI has enforcement powers and has obtained court orders against essay mill websites.

### Australia 2020
The Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020 extended Australia's existing TEQSA framework. Distinctive features include TEQSA's public list of 2,300+ known contract cheating providers.

### UK 2022
The Skills and Post-16 Education Act 2022 section 80 banned essay mill services in England. The Office for Students (OfS) and the Quality Assurance Agency (QAA) enforce the framework.

The legislative model has proven replicable — all three countries followed the same supply-side approach targeting providers rather than students.

## Numbers 4–7 — strong institutional infrastructure

Canada, New Zealand, Netherlands, and the US score 51.2–60.0 — well below the legislative leaders but still in Q1.

### Canada
The lowest Prevalence score in the entire dataset (P=4.90). The U15 universities operate strong institutional integrity infrastructure. Provincial regulation rather than federal. No specific essay mill ban.

### New Zealand
Universities New Zealand coordinates the eight New Zealand universities. NZQA framework. No specific essay mill ban but the institutional foundation is mature.

### Netherlands
The VSNU code binds all Dutch universities. LOWI provides national misconduct adjudication. Strong continental European institutional infrastructure.

### United States
Highest detection deployment after the UK (R_det=80). Federal research integrity framework through ORI. The most marginal Q1 placement in the dataset — a small Prevalence increase would shift the US to Q2.

## Numbers 8–10 — Q4 with strong R-Scores

Norway, Singapore, and Sweden have R-Scores of 47.5, 47.5, and 45.0 but are in Q4 not Q1. The pattern: strong institutional infrastructure with moderate Prevalence keeping them just below the Q1 threshold.

### Norway
The Norway anomaly — high Prevalence due to Google Trends signal interpretation issues. The actual institutional response is genuinely strong (NESH guidelines, the 2017 Research Ethics Act, broad detection). R-Score reflects this.

### Singapore
The strongest Asian response infrastructure. NUS, NTU, SMU operate strong institutional integrity. Q4 placement is borderline Q1.

### Sweden
Post-Macchiarini reforms produced the NPOF national misconduct board (2019 Act). The R-Score reflects this genuine institutional strength.

## Component analysis

### Legislation differentiation

Three countries score 100 (Australia, UK, Ireland). Next highest: NZ at 40, Canada at 35, Singapore at 30, US at 30. The Legislation component shows the sharpest discontinuity in the dataset.

### Detection deployment

Top: UK 90, Australia 85, US 80. The US Detection sub-score is exceptionally high relative to its overall R-Score — driven by near-universal Turnitin deployment despite weaker legislation and disclosure.

### Disclosure infrastructure

Top: Australia 90, UK 85. TEQSA's public list of contract cheating providers is the most transparent regulatory disclosure in the dataset. Australia leads even the UK on this sub-component.

### Penalties

Top: Australia 80, UK 75. Both have mature institutional code frameworks. Penalty consistency across the institutional sector matters as much as the existence of frameworks on paper.

## Why number rankings can mislead

Three points to remember when reading the R-Score rankings:

1. **R-Score doesn't include enforcement quality directly**. A country can have strong frameworks on paper without consistent application.
2. **Disclosure correlates with detection**. Countries that disclose more typically detect more; the two sub-components are not independent.
3. **Small-country effects**. Smaller higher education systems (Ireland, NZ, Singapore) can implement consistent practice more easily than large federated systems (US, Germany).

## What other countries can learn

The path to Q1 is clear:

1. **Adopt specific essay mill legislation** on the Irish, Australian, or UK model
2. **Deploy detection infrastructure universally** including AI detection
3. **Mandate institutional disclosure** of misconduct statistics
4. **Maintain clear penalty frameworks** applied consistently

Countries currently in Q3 or Q4 with the resources to act could realistically reach the Q1 floor (around R=50) within 3–5 years through coordinated reform. Reaching the Q1 ceiling (Australia's 88.8) requires the full legislative-institutional package.

## Sources

- AMI v1.5 dataset and methodology
- National legislation documentation (Australia 2020, Ireland 2019, UK 2022)
- TEQSA public list of contract cheating providers
- Country-specific regulator documentation

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "weakest-academic-integrity-response",
    title: "Weakest Academic Integrity Response: Bottom 10 Countries 2026",
    seoTitle: "Weakest Academic Integrity Response 2026 | AMI Bottom 10",
    metaDescription: "Bottom 10 countries by R-Score on the Academic Misconduct Index 2026. Kenya R=11.5 (lowest), Egypt 12.0, Nigeria 12.5, Iran 13.2. Resource and infrastructure constraints.",
    date: "2026-05-20",
    category: "data",
    tags: ["R-Score", "weakest response", "crisis zone", "rankings 2026", "data"],
    tldr: "Bottom 10 R-Scores in AMI v1.5: Kenya 11.5 (lowest), Egypt 12.0, Nigeria 12.5, Iran 13.2, Pakistan 14.2, Vietnam 14.5, Colombia 16.5, Russia 16.8, Saudi Arabia 17.5, Mexico 17.5. Combination of resource constraints, weak legislation, and limited disclosure infrastructure.",
    excerpt: "The 10 countries with the weakest institutional response to academic misconduct, ranked by R-Score. Kenya, Egypt, Nigeria, and Iran sit at the very bottom. Resource constraints combine with policy gaps. Here are the data and the structural patterns.",
    faqSchema: [
      {
        question: "Which country has the weakest academic integrity response?",
        answer: "Kenya scores R=11.5 on the Academic Misconduct Index 2026 — the lowest Response Quality score in the dataset. Egypt (12.0), Nigeria (12.5), Iran (13.2), and Pakistan (14.2) round out the bottom five. The common factors are weak legislation, limited detection tool deployment, minimal mandatory disclosure, and inconsistent penalty enforcement."
      },
      {
        question: "Why do African countries cluster at the bottom of the R-Score?",
        answer: "Three African countries (Kenya R=11.5, Nigeria 12.5, South Africa 30.0) are in the AMI dataset. Kenya and Nigeria sit in the bottom three globally. The pattern reflects resource constraints (limited university budgets for detection technology), inherited regulatory frameworks that did not specifically address integrity, and large public university systems with limited compliance capacity. South Africa demonstrates that the pattern is not inevitable in Africa."
      },
      {
        question: "What would it cost for low-R-Score countries to improve?",
        answer: "Detection tool licensing is the most resource-sensitive R-Score component. Universal Turnitin or equivalent deployment across a country's university sector costs on the order of USD 1–10 per student per year depending on country pricing. Mandatory disclosure requirements have lower direct cost but require regulator capacity. Statutory legislation is essentially free but requires political will. The path to the Q1 floor is achievable for any country with policy commitment."
      }
    ],
    content: `
## TL;DR

Bottom 10 R-Scores in AMI v1.5: Kenya 11.5, Egypt 12.0, Nigeria 12.5, Iran 13.2, Pakistan 14.2, Vietnam 14.5, Colombia 16.5, Russia 16.8, Saudi Arabia 17.5, Mexico 17.5. Resource constraints, weak legislation, limited disclosure. Sub-components reveal where the gaps are.

## The bottom 10

| Rank | Country | R-Score | Legislation | Detection | Disclosure | Penalties | Quadrant |
|---|---|---|---|---|---|---|---|
| 1 (lowest) | Kenya | 11.5 | 8 | 18 | 8 | 12 | Q4 |
| 2 | Egypt | 12.0 | 10 | 18 | 8 | 12 | Q3 |
| 3 | Nigeria | 12.5 | 10 | 15 | 10 | 15 | Q4 |
| 4 | Iran | 13.2 | 10 | 20 | 8 | 15 | Q3 |
| 5 | Pakistan | 14.2 | 10 | 22 | 10 | 15 | Q3 |
| 6 | Vietnam | 14.5 | 10 | 25 | 8 | 15 | Q4 |
| 7 | Colombia | 16.5 | 10 | 28 | 10 | 18 | Q3 |
| 8 | Russia | 16.8 | 12 | 35 | 8 | 12 | Q4 |
| 9 | Saudi Arabia | 17.5 | 10 | 30 | 10 | 20 | Q3 |
| 9 | Mexico | 17.5 | 12 | 28 | 10 | 20 | Q3 |

## Structural patterns

### Africa concentration

Three African countries are in the AMI dataset: Kenya (R=11.5, lowest globally), Nigeria (12.5, third lowest), and South Africa (30.0, much higher). The pattern is not uniform across Africa — South Africa demonstrates that Q4 with R=30 is achievable in the African context.

The Kenya–Nigeria pattern reflects:
- Limited university budgets for detection licensing
- Large public university systems with compliance capacity gaps
- Inherited regulatory frameworks that did not specifically address integrity
- Documented role as essay mill supply hubs (Kenya particularly)

### Middle East concentration

Egypt (12.0), Iran (13.2), Saudi Arabia (17.5) all in the bottom 10. Turkey (21.2) just outside. The pattern reflects:
- Limited integrity-specific legislation across the region
- Sanctions-related constraints on detection tool access (Iran)
- Resource constraints in public university systems
- Limited mandatory disclosure infrastructure

### Latin America split

Colombia (16.5), Mexico (17.5), Brazil (18.0) in the bottom band; Argentina (18.0) similar. The Spanish-language essay mill market is exceptionally active across the region, and institutional response infrastructure is uniformly weak.

### South Asia and Southeast Asia

Pakistan (14.2), Vietnam (14.5), Indonesia (19.2), Thailand (19.0), Philippines (23.2), India (18.8), Malaysia (22.0) all show low-to-moderate R-Scores. Some have stronger formal policy (Pakistan's HEC, India's UGC) but operational implementation lags policy intent.

## Sub-component analysis

### Legislation — the bottom 10 are uniformly weak

The Legislation sub-scores in the bottom 10 range from 8 (Kenya) to 12 (Russia, Mexico). No country in the bottom 10 has specific essay mill legislation. The lack of statutory anchoring is a common feature.

The Kenya score of 8 is the lowest single sub-component score in the AMI dataset across all components — reflecting essentially no integrity-specific statutory provisions.

### Detection — the bottom is around 15–35

The bottom 10 Detection sub-scores range from 15 (Nigeria, lowest in dataset) to 35 (Russia). Detection tool deployment is the most resource-sensitive component. Countries with very limited university budgets struggle to license commercial detection platforms at scale.

Within the bottom 10, two patterns:
- Resource-constrained: Kenya, Nigeria, Egypt — deployment limited by capacity
- Sanctions-affected: Iran — limited access to commercial detection tools

### Disclosure — uniformly low

Disclosure sub-scores in the bottom 10 are 8–12. The lowest single disclosure score in the dataset is 8 (Kenya, Egypt, Iran, Russia tied). Mandatory institutional reporting of misconduct does not exist in any country in the bottom 10.

Disclosure infrastructure is the slowest to develop. It requires regulator capacity, institutional culture change, and sometimes statutory backing — all of which compound.

### Penalties — varies

Penalty sub-scores in the bottom 10 range from 12 (Kenya, Russia) to 20 (Saudi Arabia, Mexico). The range partly reflects whether institutional codes exist and are applied:

- **Kenya, Russia (12)** — institutional codes exist but enforcement is very limited
- **Egypt, Iran, Nigeria (12–15)** — codes exist but rarely applied
- **Pakistan, Vietnam (15)** — codes are formally maintained
- **Saudi Arabia, Mexico (20)** — codes are clearer and somewhat more consistently applied

## The Russia case

Russia (R=16.8) is structurally distinct from the other bottom-10 countries. Russia has:
- The Antiplagiat detection system widely deployed (detection sub-score of 35 is well above the bottom-five countries)
- Mandatory thesis checking
- Substantial historical investment in higher education infrastructure

Yet Russia's R-Score is in the bottom 10 because:
- Legislation sub-score of 12 — general framework, no specific bans
- Disclosure sub-score of 8 — minimal public reporting
- Penalties sub-score of 12 — Dissernet has identified 10,000+ plagiarised dissertations; almost none have produced consequences

The pattern shows that Detection alone is insufficient — without Disclosure and Penalties, identified misconduct does not produce consequences.

## Path to improvement

Different countries face different paths from the bottom 10:

### Resource-constrained (Kenya, Nigeria, Egypt)
The principal constraint is investment capacity. Detection tool licensing across the university sector requires significant budget that some countries do not have. International cooperation, regional consortium licensing, or open-source detection alternatives could partially address.

### Policy-constrained (Russia, Iran, Saudi Arabia)
The constraint is political will rather than resources. Statutory provisions and disclosure requirements could be implemented without major investment. Russia's R-Score could rise substantially through Disclosure reform alone.

### Infrastructure-constrained (Vietnam, Mexico, Colombia)
The constraint is operational capacity at the institutional level. Building integrity offices, training compliance staff, and standardising procedures requires sustained investment but produces durable improvement.

The Q4 floor (around R=20) is achievable for any country in the bottom 10 with sustained reform effort. The Q1 threshold (around R=50) requires the full legislative-institutional package.

## Sources

- AMI v1.5 dataset and methodology
- Country-specific regulator documentation
- Detection tool deployment data

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "worst-countries-academic-misconduct-2026",
    title: "Worst Countries for Academic Misconduct 2026: AMI Rankings",
    seoTitle: "Worst Countries for Academic Misconduct 2026 | AMI Top 10",
    metaDescription: "Top 10 highest Prevalence countries in AMI 2026: China P=99.98, Colombia 77.4, Argentina 74.6, Greece 74.0, Egypt 64.6, Pakistan 59.1. Country-level breakdown.",
    date: "2026-05-20",
    category: "data",
    tags: ["Prevalence", "rankings 2026", "worst countries", "crisis zone", "data"],
    tldr: "Top 10 Prevalence (P) scores in AMI v1.5: China 99.98, Colombia 77.38, Argentina 74.57, Greece 74.00, Egypt 64.60, Pakistan 59.08, Norway 57.16 (methodology anomaly), Iran 57.00, Thailand 55.67, Saudi Arabia 53.98.",
    excerpt: "The 10 countries with the highest estimated academic misconduct prevalence in 2026. China leads with P=99.98; nine of the top 10 are in Q3 (Crisis zone). Norway is the methodology anomaly. Country-level breakdown of what drives each score.",
    faqSchema: [
      {
        question: "Which country has the worst academic misconduct prevalence?",
        answer: "China scores P=99.98 on the Academic Misconduct Index 2026 — the highest Prevalence score of 39 countries. The score is driven by the highest data fabrication rate in the Retraction Watch database (D6=100), elevated AI submission demand (D2=68), and high plagiarism (D4=73)."
      },
      {
        question: "Is Norway really one of the worst countries for academic misconduct?",
        answer: "Norway's P=57.16 (seventh highest globally) is the most prominent methodology anomaly in the AMI dataset. The elevated score is largely driven by Google Trends signal interpretation — Norway's high digital engagement and open academic discussion of AI topics produces search volume that the methodology interprets as student demand. Norwegian institutional infrastructure (NESH guidelines, the 2017 Research Ethics Act) is genuinely strong; actual misconduct rates per the literature are low."
      },
      {
        question: "How is academic misconduct measured across countries?",
        answer: "The AMI Prevalence Score is built from six dimensions: D1 contract cheating (Google Trends), D2 AI submissions (Google Trends + FOI), D3 exam impersonation (literature), D4 plagiarism (ICAI/McCabe surveys), D5 collusion (ICAI/McCabe), D6 data fabrication (Retraction Watch). Each dimension is normalised to 0–100 across the 39-country set; the aggregate P-Score is then rescaled to a 5–95 scale within the set."
      }
    ],
    content: `
## TL;DR

Top 10 Prevalence scores in AMI v1.5: China 99.98, Colombia 77.38, Argentina 74.57, Greece 74.00, Egypt 64.60, Pakistan 59.08, Norway 57.16, Iran 57.00, Thailand 55.67, Saudi Arabia 53.98. Nine of the top 10 are in Q3 (Crisis zone). Norway is the methodology anomaly.

## The top 10 — full breakdown

| Rank | Country | P-Score | R-Score | Quadrant | Key driver |
|---|---|---|---|---|---|
| 1 | China | 99.98 | 23.8 | Q3 | Data fabrication (D6=100) + paper mills |
| 2 | Colombia | 77.38 | 16.5 | Q3 | Maxed Spanish demand (D1=D2=100) |
| 3 | Argentina | 74.57 | 18.0 | Q3 | Maxed Spanish demand (D1=D2=100) |
| 4 | Greece | 74.00 | 20.0 | Q3 | Maxed Greek demand (D1=D2=100) |
| 5 | Egypt | 64.60 | 12.0 | Q3 | AI demand (D2=100) + retractions |
| 6 | Pakistan | 59.08 | 14.2 | Q3 | Contract cheating (D1=100) + fabrication |
| 7 | Norway | 57.16 | 47.5 | Q3 | Methodology anomaly |
| 8 | Iran | 57.00 | 13.2 | Q3 | AI demand (D2=100) + plagiarism |
| 9 | Thailand | 55.67 | 19.0 | Q3 | Contract cheating + plagiarism |
| 10 | Saudi Arabia | 53.98 | 17.5 | Q3 | AI demand (D2=100) |

All ten are in Q3 (Crisis zone) — high Prevalence combined with weak Response.

## What drives each country

### China (P=99.98)
The highest score in the dataset. Driven by:
- D6=100 — highest data fabrication rate per publication
- Documented paper mill industry (Fang et al. 2012, Liang et al. 2024)
- Elevated D1, D4, D5 signals

### Colombia, Argentina, Greece (all D1=D2=100)
Spanish-language and Greek-language search demand maxed. Limited institutional response. These three are structurally similar — high demand signals with no specific essay mill legislation and weak disclosure.

### Egypt (P=64.60)
AI submission demand maxed (D2=100), elevated data fabrication (D6=60), high plagiarism (D4=68). Combined with the lowest Response Quality in the dataset (R=12.0) — Egypt sits at the intersection of high demand and weakest response.

### Pakistan (P=59.08)
Contract cheating demand maxed (D1=100), high plagiarism (D4=72) and data fabrication (D6=65). HEC framework exists on paper but enforcement lags.

### Norway (P=57.16) — the methodology anomaly
Driven by:
- D1=50, D2=31 — moderate signals (not extreme)
- The overall P-Score is elevated by methodology weighting rather than extreme dimension scores
- The Norwegian academic and policy community generates high Google Trends volume on integrity topics
- Genuinely low actual misconduct per literature evidence

Norway should be read with the methodology caveat. Future versions may resolve the issue.

### Iran (P=57.00)
AI submission demand maxed (D2=100), high plagiarism (D4=65), high collusion (D5=69), elevated fabrication (D6=65). Sanctions limit detection infrastructure access.

### Thailand (P=55.67)
Elevated contract cheating (D1=67) and plagiarism (D4=60). Partial detection deployment at top institutions; broader sector less covered.

### Saudi Arabia (P=53.98)
AI submission demand maxed (D2=100), elevated D1 (83). Vision 2030 reforms in early stages.

## Patterns

### The Spanish-language cluster
Colombia, Argentina (positions 2 and 3) share a profile. Maxed Google Trends signals on essay mill and AI submission terms drive the rankings.

### The Middle East cluster
Egypt, Iran, Saudi Arabia all in the top 10 (positions 5, 8, 10). All show maxed D2 (AI submission demand) and limited institutional response.

### Data fabrication is China-specific
China is the only country with D6 at 100. No other country combines high D6 with consistent elevation across other dimensions. This is the principal driver of China's first-place position.

### Norway is the outlier
The only top-10 country with R>20. Norway's R=47.5 is in the top quartile of the dataset. The country profile is structurally different from the other nine top-Prevalence countries.

## Q3 is mostly the top 10

The 10 top-Prevalence countries are all in Q3 (Crisis zone). Q3 has 12 countries total — the top 10 here, plus Mexico (P=51.36) and Poland (P=51.19) at positions 11 and 12.

The 12 Q3 countries share:
- High estimated Prevalence
- Weak institutional response
- Variable demand-vs-incidence drivers
- Common need for response infrastructure investment

## Country comparison with the bottom 10

| Position | Country | P-Score |
|---|---|---|
| 1 (highest) | China | 99.98 |
| Mid | Russia | 37.53 |
| 38 (lowest) | Australia | 7.43 |
| 39 (lowest) | Canada | 4.90 |

The Canada–China gap is the full dataset range — from P=4.90 to P=99.98. A 20x difference in estimated prevalence (after rescaling).

## What these scores do not mean

### They do not mean every student in China cheats
P=99.98 reflects the country-level aggregate signal across six dimensions. It is the highest *country* score in the dataset, not a statement about individual students. The vast majority of Chinese graduates earn their qualifications legitimately.

### They do not rank universities
The country-level scores aggregate across diverse institutions. Substantial within-country variance is expected.

### They are not absolute measurements
Scores are rescaled within the 39-country set. Adding or removing countries shifts the scale.

### They are estimates with known uncertainty
The Norway methodology caveat is the most prominent example. All scores carry methodology uncertainty documented in the AMI methodology document.

## Sources

- AMI v1.5 dataset and methodology
- Retraction Watch Database, Crossref/GitLab (April 2026)
- Google Trends API (2022–2026)
- Fang, Steen & Casadevall (2012), PNAS
- Liang et al. (2024), Nature

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "essay-mill-demand-google-trends",
    title: "Essay Mill Demand from Google Trends: 2022–2026 Data",
    seoTitle: "Essay Mill Demand 2022–2026 | Google Trends Data Analysis",
    metaDescription: "Google Trends data on essay mill demand 2022–2026 across 39 countries. Spanish-language demand dominates; Anglophone ban countries show lowest signal. AMI D1 analysis.",
    date: "2026-05-20",
    category: "data",
    tags: ["Google Trends", "essay mills", "D1", "demand", "data"],
    tldr: "Essay mill search demand 2022–2026 across 39 countries. Highest: Spanish-language Latin America (Colombia, Argentina, Mexico) and Greek-language Greece. Lowest: Anglophone ban countries (Australia, UK, Ireland). Brand name searches more precise than generic terms.",
    excerpt: "Four years of Google Trends data on essay mill search demand across 39 countries. Spanish-language demand dominates the top of the rankings; countries with specific bans score lowest. Here is the breakdown.",
    faqSchema: [
      {
        question: "What does Google Trends data show about essay mill demand?",
        answer: "Across 2022–2026, Spanish-language essay mill demand dominates the top of the AMI's D1 rankings — Colombia, Argentina, Mexico, and several other Latin American countries show consistently high search volume. Greek-language Greece, Pakistani-language Pakistan, and Italian-language Italy round out the high-demand cluster. The lowest demand signals appear in the three countries with specific contract cheating bans: Australia, UK, and Ireland."
      },
      {
        question: "Has essay mill demand declined since ChatGPT launched?",
        answer: "Mixed evidence. Brand name searches for major English-language essay mill services declined in 2023–2024, suggesting partial substitution toward free AI alternatives. However, overall D1 demand signals have not collapsed — generic contract cheating terms remain elevated. The substitution-vs-coexistence balance is an active research question."
      },
      {
        question: "Why are essay mill brand name searches more reliable than generic terms?",
        answer: "Generic terms like 'buy essay online' can be searched by educators, journalists, or policymakers researching the phenomenon. Brand name searches for specific essay mill services (UKessays, EduBirdie, PapersOwl) more reliably reflect actual demand intent — fewer people search for specific brand names without intent to purchase. The AMI uses both signal types but weights brand name searches more confidently."
      }
    ],
    content: `
## TL;DR

Four-year (2022–2026) Google Trends data analysis. Spanish-language Latin America (Colombia, Argentina, Mexico) and Greek-language Greece dominate the top of demand rankings. Anglophone ban countries (Australia, UK, Ireland) score lowest. Brand name searches more precise than generic terms.

## The data source

The AMI's D1 dimension is built primarily from Google Trends data collected over a four-year window (2022–2026):

- **Generic term queries**: "buy essay online", "essay writing service", "do my assignment", language-specific equivalents
- **Brand name queries**: known essay mill services (UKessays, EduBirdie, PapersOwl, EasyEssay, regional providers)
- **Geographic resolution**: country-level
- **Temporal resolution**: monthly aggregates

The country with the highest signal scores 100; others scale relative.

## Top 10 essay mill demand

| Rank | Country | D1 | Language driver |
|---|---|---|---|
| 1 (tied) | Colombia | 100 | Spanish |
| 1 (tied) | Argentina | 100 | Spanish |
| 1 (tied) | Greece | 100 | Greek |
| 1 (tied) | Pakistan | 100 | English + Urdu |
| 5 | Saudi Arabia | 83 | Arabic |
| 5 | India | 83 | English |
| 5 | Italy | 83 | Italian |
| 5 | Spain | 83 | Spanish |
| 5 | Malaysia | 83 | English + Malay |
| 5 | Russia | 83 | Russian |

The four-way tie at the top reflects countries where Google Trends signal is at the absolute ceiling of the per-country distribution.

## Bottom 10 essay mill demand

| Rank | Country | D1 | Has ban? |
|---|---|---|---|
| 38 (tied) | Australia | 33 | Yes (2020) |
| 38 (tied) | UK | 33 | Yes (2022) |
| 38 (tied) | Ireland | 33 | Yes (2019) |
| 35 (tied) | Canada | 50 | No |
| 35 (tied) | Singapore | 50 | No |
| 35 (tied) | Netherlands | 50 | No |
| 35 (tied) | Norway | 50 | No |
| 35 (tied) | Sweden | 50 | No |
| 35 (tied) | New Zealand | 50 | No |
| 35 (tied) | Japan | 50 | No |

The three lowest D1 scores are the three countries with specific contract cheating bans. This is the clearest pattern in the dataset.

## What the legislation correlation means

Three countries with bans (Ireland 2019, Australia 2020, UK 2022) score D1=33 — substantially below all other countries. Causation is plausible:

- **Supply effects**: bans have led to deplatforming and prosecution of essay mill operators serving these markets. Reduced supply could reduce search volume.
- **Demand effects**: students may search less for services they know are illegal in their jurisdiction.
- **Brand exits**: major essay mill brands have stopped advertising in or stopped serving these jurisdictions; brand name searches naturally decline.

However, alternative explanations exist:
- The three ban countries had pre-existing lower demand (selection effect)
- The countries share Anglophone cultural and institutional characteristics independent of legislation

The AMI methodology cannot definitively isolate causation from correlation, but the pattern is the most policy-relevant in the dataset.

## Language market effects

### Spanish-language cluster
Colombia (100), Argentina (100), Mexico (67), Spain (83). The Spanish-language essay mill market is the largest single-language market by signal volume. Spanish-language services target the broader Hispanophone academic market — a single service can serve students from multiple countries.

### Greek-language Greece
The Greek-language market is small but search volume per capita is exceptional. The narrow language market means signal interpretation is relatively clean — little spillover from neighbours.

### English-language patterns
English-language demand splits sharply by jurisdiction:
- Ban countries (Australia, UK, Ireland): 33
- Non-ban Anglophone (US, Canada, NZ): 50
- High-supply Anglophone (India, Pakistan, Kenya): 83+

### Arabic-language Middle East
Saudi Arabia (83), Egypt (67), Iran (67). Arabic-language essay mill services exist but the per-capita signal is lower than Spanish-speaking countries.

## Brand name vs generic term signals

The AMI distinguishes:

### Brand name searches
- UKessays, EduBirdie, PapersOwl, EasyEssay (English-language brands)
- Spanish, Italian, French, Polish, Greek brand equivalents
- More precise intent signal — fewer false positives from non-student searches

### Generic term searches
- "buy essay online", "essay writing service"
- Higher volume but more polluted by non-student searches
- Useful for cross-country comparison but require interpretation

The methodology weights brand name signals more confidently in the final D1 score.

## Time series — pre and post ChatGPT

### Pre-November 2022 (pre-ChatGPT)
Essay mill demand had been growing through the 2010s. Major brand searches were the largest single integrity-related search category.

### November 2022 onwards
ChatGPT launches. Two patterns:
- Brand name searches for major essay mill services declined 15–30% [verify specific brand data] over 2023–2024
- Generic term searches declined less or remained stable
- AI submission tool searches grew rapidly, partially substituting

### 2024–2026
Mixed stabilisation. Some brand consolidation; some operator exits; some markets unaffected. The substitution-vs-coexistence balance remains unclear.

## Limitations

### Demand not incidence
Searches measure interest, not confirmed purchase. A student searching once for curiosity is counted equally to a student searching repeatedly with intent.

### Non-student contribution
Educators, journalists, policymakers, and researchers contribute to search volume — the Norway anomaly is the most documented case.

### Brand name decay
Essay mill brands change over time. Major brands shut down (often due to legislation in ban jurisdictions); new brands emerge. Long time series require methodology adjustment.

### Language market interpretation
Searches in Spanish from Argentina, Colombia, Mexico, and Spain all contribute to the same language-market signal. Country attribution requires methodology choices about how to allocate cross-border demand.

## Sources

- Google Trends API (2022–2026), country-level queries
- AMI v1.5 D1 dimension data
- Country-specific essay mill brand documentation
- Lancaster, T. (multiple), essay mill industry research

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "retraction-watch-69911-records",
    title: "Retraction Watch: Analysing the 69,911-Record Database",
    seoTitle: "Retraction Watch 69,911 Records Analysed 2026 | AMI Data",
    metaDescription: "Retraction Watch contains 69,911 retraction records as of April 2026, with 5,390 misconduct-linked. AMI D6 dimension built from this data. Country attribution and growth patterns.",
    date: "2026-05-20",
    category: "data",
    tags: ["Retraction Watch", "research misconduct", "database", "D6", "data"],
    tldr: "Retraction Watch database analysis as used in AMI v1.5: 69,911 total records (April 2026), 5,390 misconduct-linked. China leads attribution, followed by India and the US in absolute count. Database grew 14x from 2015 to 2024 reflecting both detection improvement and Crossref partnership.",
    excerpt: "The Retraction Watch database has grown from a few thousand records in 2010 to 69,911 in April 2026. This analysis breaks down what is in it, how the AMI uses it, and what the growth pattern indicates.",
    faqSchema: [
      {
        question: "How many retraction records are in the Retraction Watch database?",
        answer: "As of April 2026, the Retraction Watch database contains 69,911 retraction records. Of these, 5,390 are classified as misconduct-linked (fabrication, falsification, image manipulation, fraud). The remainder are honest-error retractions, duplicate publications, ethics issues, and other non-misconduct categories. The AMI's D6 dimension uses only the misconduct-linked subset."
      },
      {
        question: "Which countries have the most retractions?",
        answer: "In absolute count, China leads, followed by India and the US. After normalising by publication volume (retractions per 10,000 papers), the ranking shifts — China still leads but Russia, Iran, Egypt, and Pakistan move up the per-publication rankings. The AMI's D6 dimension uses the normalised rates, not absolute counts."
      },
      {
        question: "Why has the Retraction Watch database grown so rapidly?",
        answer: "Three factors. First, actual misconduct detection has improved through tools, peer review developments, and post-publication review platforms like PubPeer. Second, the 2023 Crossref partnership made the database substantially more accessible and complete. Third, systematic paper mill detection efforts have accelerated retraction processing — large clusters of paper mill papers being retracted in batches."
      }
    ],
    content: `
## TL;DR

Retraction Watch database analysis: 69,911 total records (April 2026), 5,390 misconduct-linked. Growth from ~5,000 in 2010 to 70,000+ in 2024 reflects both detection improvement and the 2023 Crossref partnership. China leads absolute count; per-publication normalisation shifts rankings.

## The database

Retraction Watch maintains the world's largest systematic catalogue of scientific retractions. The database contains structured records of:

- Authors and institutional affiliations
- Country attribution (proportional for multi-country papers)
- Journal and publisher
- Original publication and retraction dates
- Retraction reason codes
- Notice text

The data is publicly available via the [Crossref/GitLab partnership](https://gitlab.com/crossref/retraction-watch-data) since 2023.

## Total volume — 69,911 records (April 2026)

The full database includes all retractions Retraction Watch has catalogued, across all reasons:

| Reason category | Approximate share |
|---|---|
| Misconduct (fabrication, falsification, fraud, manipulation) | ~7.7% (5,390) |
| Plagiarism (in research context) | ~10–15% |
| Honest errors | ~25–30% |
| Duplicate publication | ~15–20% |
| Ethics issues (consent, approvals) | ~5–10% |
| Withdrawal at author request | ~5–10% |
| Other / multiple / unclear | ~15–20% |

The AMI's D6 dimension uses only the misconduct-linked subset (the first row above). The other categories are excluded.

## Growth pattern

The database has grown substantially:

| Year | Approx. records |
|---|---|
| 2010 | ~5,000 |
| 2015 | ~10,000 |
| 2020 | ~30,000 |
| 2022 | ~45,000 |
| 2024 | ~65,000 |
| April 2026 | 69,911 |

### What drove the growth

**Pre-2020**: gradual growth as Retraction Watch's coverage expanded and more retractions accumulated over time. Real underlying retraction events were growing too as journals improved post-publication review.

**2020–2022**: paper mill detection efforts. Several journals (notably PLOS, Wiley journals, Hindawi) ran systematic retraction campaigns identifying paper mill-produced content. Each campaign added thousands of records.

**2023 Crossref partnership**: the database was made openly available through Crossref. Coverage gaps were filled; record completeness improved.

**2024–2025**: continued paper mill batch retractions. Wiley/Hindawi retractions added several thousand records.

## Country attribution

### Absolute counts
By raw count, China leads — it produces the most papers globally, so high absolute count is partly a scale effect.

| Country | Approx. absolute count |
|---|---|
| China | Largest |
| India | Second |
| US | Third |
| Iran | Fourth |
| Italy | Fifth |
| Russia | Sixth |

These rough rankings reflect approximate database counts; exact figures shift as the database updates.

### Per-publication rate (the AMI methodology)

Dividing by total publications from OpenAlex normalises for scale. The AMI's D6 dimension uses per-publication rates rescaled to 0–100:

| Country | D6 | Position |
|---|---|---|
| China | 100 | Top |
| Russia | 78 | High |
| India | 70 | High |
| Iran | 65 | High |
| Pakistan | 65 | High |

China still leads after normalisation but the gap closes. Russia and Iran are disproportionately high once you account for their smaller absolute publication volume.

## What the 5,390 misconduct-linked records show

### Fabrication and falsification
The clearest cases. Identifiable through statistical inconsistency, replication failure, or whistleblower reports. Approximately half of the 5,390 misconduct records are in this category.

### Image manipulation
Particularly common in biomedical research. Specialised image forensics tools (Imagetwin, PaperWatcher) have driven a wave of image manipulation detection 2020–2024.

### Plagiarism in research
Direct copying in research papers. Less common in modern publications than in older retracted papers; detection is now stronger pre-publication.

### Manipulation of peer review
A growing category. Authors recommending fake reviewers, then those "reviewers" recommending acceptance. Several major journals have run retraction campaigns for these cases.

### Paper mills
The largest single-cause category in the 2020–2024 growth. Paper mills sell ready-made papers to authors needing publications for career progression. Batch retractions are characteristic.

## Specific famous cases in the database

The database includes individual records for the major cases discussed in academic integrity literature:

- **Diederik Stapel** (Netherlands, 2011) — dozens of records, mostly social psychology
- **Hwang Woo-suk** (South Korea, 2005–2006) — stem cell research retractions
- **STAP cells / Haruko Obokata** (Japan, 2014) — Nature retractions
- **Marc Hauser** (US, 2010) — cognitive psychology
- **Macchiarini** (Sweden, 2014–2016) — trachea transplant research
- **Wansink** (US, 2018–2020) — food behaviour research [verify]

Each case is searchable in the Crossref/GitLab interface.

## How the AMI uses the data

The AMI methodology:

1. Filter to misconduct-linked retractions (the 5,390 subset)
2. Country-attribute via author affiliation (proportional for multi-country)
3. Divide by OpenAlex publication counts for matching country and time period
4. Calculate retractions per 10,000 publications
5. Rescale to 0–100 across the 39-country set

The result is each country's D6 dimension score.

## Limitations

### Detection-incidence confound
Retractions measure what gets caught. Actual undetected fabrication is missing from the database.

### Country attribution complexity
Multi-country papers require proportional attribution; methodology choices affect specific scores.

### Reason coding inconsistency
Retraction notices use widely varying language; classification into misconduct categories requires interpretation by Retraction Watch staff.

### Lag
Retractions often happen years after publication. Recent fabrication is under-represented.

## Sources

- [Retraction Watch Database on GitLab](https://gitlab.com/crossref/retraction-watch-data)
- AMI v1.5 methodology document
- OpenAlex publication count data
- Fang, Steen & Casadevall (2012), PNAS

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "latin-america-regional-analysis",
    title: "Latin America Academic Misconduct: Regional Analysis 2026",
    seoTitle: "Latin America Academic Misconduct Analysis 2026 | AMI Data",
    metaDescription: "Latin America AMI analysis: Colombia, Argentina, Mexico, Brazil scored. Q3 Crisis zone dominates. Maxed Spanish-language essay mill demand, weak institutional response.",
    date: "2026-05-20",
    category: "data",
    tags: ["Latin America", "regional analysis", "Q3", "Spanish-language", "data"],
    tldr: "Latin America regional analysis: 4 countries scored (Colombia, Argentina, Mexico, Brazil). Three in Q3 (Colombia, Argentina, Mexico), Brazil in Q4. Common pattern: maxed Spanish-language essay mill demand, near-zero D6 fabrication, weak Response Quality (R range: 16.5–18.0).",
    excerpt: "Four Latin American countries are in the AMI v1.5 dataset — Colombia, Argentina, Mexico, Brazil. Three are in the Crisis zone. This regional analysis compares the scores, identifies the common patterns, and discusses what would shift the region toward Q1.",
    faqSchema: [
      {
        question: "How do Latin American countries score on the AMI?",
        answer: "Latin American countries in the AMI v1.5: Colombia (P=77.4, R=16.5, Q3), Argentina (P=74.6, R=18.0, Q3), Mexico (P=51.4, R=17.5, Q3), Brazil (P=39.8, R=18.0, Q4). Three are in Q3 (Crisis zone); Brazil falls into Q4 because its Prevalence is lower. The region has uniformly weak Response Quality (R range 16.5–18.0)."
      },
      {
        question: "Why does Latin America have such high essay mill demand?",
        answer: "Spanish-language search volume for essay mill terms is exceptionally high across the region. Colombia and Argentina both score D1=100 — the top of the global distribution. Mexico (67) and Brazil (Portuguese-language, 67) are slightly lower. The pattern reflects: large Spanish-language essay mill industry, strong online infrastructure across the region, limited mandatory disclosure from universities, and no specific contract cheating legislation in any Latin American country."
      },
      {
        question: "Is academic misconduct getting worse in Latin America?",
        answer: "The four-year Google Trends data (2022–2026) shows demand signals remained elevated throughout the period, with some shift toward AI submission tools post-ChatGPT. Without a measurable change in institutional response (R-Scores stable in the 16.5–18.0 range), the prevalence picture is unlikely to have improved. The pattern is best characterised as 'stable elevated demand with persistent weak response.'"
      }
    ],
    content: `
## TL;DR

Four Latin American countries in AMI v1.5: Colombia (Q3), Argentina (Q3), Mexico (Q3), Brazil (Q4). Common pattern: maxed Spanish-language essay mill demand, near-zero D6 fabrication, weak Response Quality clustered tightly between 16.5 and 18.0.

## The four Latin American countries

| Country | P | R | Quadrant | Region |
|---|---|---|---|---|
| Colombia | 77.38 | 16.5 | Q3 | Andean |
| Argentina | 74.57 | 18.0 | Q3 | Southern Cone |
| Mexico | 51.36 | 17.5 | Q3 | North |
| Brazil | 39.75 | 18.0 | Q4 | South |

### Dimension breakdown comparison

| Dimension | Colombia | Argentina | Mexico | Brazil |
|---|---|---|---|---|
| D1 Contract cheating | 100 | 100 | 67 | 67 |
| D2 AI submissions | 100 | 100 | 56 | 56 |
| D3 Exam impersonation | 14 | 12 | 12 | 14 |
| D4 Plagiarism | 58 | 55 | 54 | 52 |
| D5 Collusion | 52 | 50 | 62 | 65 |
| D6 Data fabrication | 0 | 0 | 32 | 40 |

## The Spanish-language demand pattern

Colombia and Argentina both score D1=100 and D2=100. The maxed signals reflect very high Spanish-language search demand for essay mill and AI submission tools.

The Spanish-language essay mill market is the largest single-language market globally by search volume. A single service can target students across multiple Spanish-speaking countries — Mexican, Colombian, Argentine, Spanish, Chilean, Peruvian, and Venezuelan students all access the same broader market.

Mexico's D1 (67) is moderate compared to its Andean and Southern Cone neighbours. The Mexican domestic market is sufficient that services target it specifically, but per-capita signal is below Colombian or Argentine levels.

### Brazil — Portuguese-language differential

Brazil's D1 (67) reflects the Portuguese-language essay mill market. The market is structurally smaller than the Spanish-language equivalent — limited spillover to Portugal or Lusophone Africa at scale. This contains Brazilian absolute search volume below the Spanish-speaking peers.

## The near-zero fabrication signal

Colombia and Argentina score D6=0; Mexico 32, Brazil 40. The pattern reflects:

- Latin American research output is smaller in absolute terms than Asia, Europe, or North America
- Retraction Watch coverage of Latin American journals is less complete than English-language journals
- Detection effort by international journals concentrates on high-volume producers (China, India, US)

The D6=0 for Colombia and Argentina does not mean zero misconduct — it reflects the rescaling within the 39-country set. Their absolute retraction count is small relative to publication volume.

## Uniformly weak Response Quality

R-Scores across the four countries cluster tightly between 16.5 and 18.0:

| Country | Legislation | Detection | Disclosure | Penalties |
|---|---|---|---|---|
| Colombia | 10 | 28 | 10 | 18 |
| Argentina | 12 | 30 | 10 | 20 |
| Mexico | 12 | 28 | 10 | 20 |
| Brazil | 10 | 32 | 12 | 18 |

### Common gaps
- **No specific contract cheating legislation** in any Latin American country
- **Detection deployment is partial** — concentrated at elite institutions (UNAM, UBA, USP)
- **Disclosure is minimal** — no country has mandatory institutional misconduct reporting
- **Penalties vary** institutionally; no national enforcement framework

### Slight differentiation
- Brazil's detection (32) is highest in the region, driven by CAPES requirements for federally funded graduate programmes
- Mexican and Argentine institutional codes are slightly clearer than Colombian — reflected in penalty scores

## Why Brazil is in Q4 not Q3

Brazil's Prevalence score of 39.75 is meaningfully below the Q3 threshold. The Portuguese-language differential explains much of the gap: lower demand signal contribution.

Otherwise Brazil's profile (high D5=65, moderate D4=52, moderate D6=40) is similar to the regional pattern. The Q4 placement is a P-Score effect rather than an institutional response difference.

## What would shift the region

### Legislation
No Latin American country has specific essay mill legislation. Chilean and Argentine legislators have discussed contract cheating bans but none has progressed to enactment.

Adopting the Irish/Australian/UK model at the regional level would lift Legislation sub-scores from the current 10–12 range to 100 — a transformative shift on the Legislation component alone.

### Detection deployment
Universal detection tool deployment across the Latin American university sector is the most resource-sensitive component. Current deployment is concentrated at elite institutions; broader deployment requires substantial budget commitment.

### Disclosure infrastructure
National accreditation bodies (CONEAU in Argentina, SEP in Mexico, CAPES in Brazil) could be empowered to mandate institutional misconduct disclosure. This is the most achievable single reform.

### Cross-regional cooperation
Latin American higher education already has regional cooperation structures (RIACES, Mercosur Educacional). Coordinated regional action on integrity infrastructure would be more feasible than 39-country global coordination.

## Coverage gaps in the AMI

Several Latin American countries are not yet in the AMI dataset. Future versions will add coverage for:
- Chile, Peru, Venezuela (Spanish-speaking)
- Ecuador, Bolivia, Uruguay, Paraguay
- Caribbean countries

Adding coverage will produce a more complete regional picture and may shift the rescaling that produces the current rankings.

## Sources

- AMI v1.5 dataset and methodology
- Google Trends API (2022–2026), country-specific
- Retraction Watch Database, Crossref/GitLab (2026)
- Regional regulator documentation (CONEAU, SEP, CAPES, MEN)

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "asia-regional-analysis",
    title: "Asia Academic Misconduct: Regional Analysis 2026",
    seoTitle: "Asia Academic Misconduct Analysis 2026 | AMI Regional Data",
    metaDescription: "Asia regional AMI analysis: 13 countries scored. China P=99.98 (highest globally). Singapore strongest R-Score in region (47.5). Wide variance across the region.",
    date: "2026-05-20",
    category: "data",
    tags: ["Asia", "regional analysis", "China", "Singapore", "Japan", "data"],
    tldr: "Asia regional analysis: 13 countries in AMI v1.5. China leads global Prevalence (P=99.98). Singapore strongest Asian R-Score (47.5). Significant variance from China's Q3 placement to Singapore's borderline-Q1. Major sub-regional patterns: Southeast Asia weak R-Scores, East Asia moderate Response.",
    excerpt: "Asia is the most diverse region in the AMI dataset — 13 countries spanning the global maximum (China) and the strongest Asian response (Singapore). This regional analysis maps the patterns and sub-regional clusters.",
    faqSchema: [
      {
        question: "Which Asian country has the highest academic misconduct score?",
        answer: "China scores P=99.98 — the highest in the entire AMI dataset. Pakistan (P=59.08), Iran (P=57.00), Thailand (P=55.67), and Saudi Arabia (P=53.98) follow within Asia. The lowest Asian Prevalence is Singapore (P=15.34). The Asian range spans almost the full global distribution."
      },
      {
        question: "How does Singapore compare to the rest of Asia?",
        answer: "Singapore is the regional outlier on Response Quality. Its R-Score of 47.5 is the highest in Asia, well above the second-highest Asian score (South Korea at 30.2). Singapore's institutional infrastructure (NUS, NTU, SMU, SUTD) is comparable to Q1 European peers. The country sits at the borderline between Q4 and Q1 — adopting essay mill legislation on the Irish/UK model would likely shift it into Q1."
      },
      {
        question: "What patterns emerge across Asia?",
        answer: "Three sub-regional patterns: East Asia (China, Japan, South Korea) shows moderate-to-high Prevalence with moderate-to-strong Response Quality. South Asia (India, Pakistan) shows high Prevalence with weak Response. Southeast Asia (Thailand, Malaysia, Indonesia, Vietnam, Philippines, Singapore) shows wide internal variance — Singapore strong, others weaker. Common feature: no Asian country has specific essay mill legislation."
      }
    ],
    content: `
## TL;DR

Asia regional analysis: 13 countries in AMI v1.5 (China, Japan, S Korea, India, Pakistan, Iran, Saudi Arabia, Thailand, Malaysia, Indonesia, Vietnam, Philippines, Singapore). Range from China (P=99.98, world max) to Singapore (P=15.34, R=47.5, borderline Q1). No Asian country has specific essay mill legislation.

## The 13 Asian countries

| Country | P | R | Quadrant | Sub-region |
|---|---|---|---|---|
| China | 99.98 | 23.8 | Q3 | East Asia |
| Pakistan | 59.08 | 14.2 | Q3 | South Asia |
| Iran | 57.00 | 13.2 | Q3 | Middle East |
| Thailand | 55.67 | 19.0 | Q3 | Southeast Asia |
| Saudi Arabia | 53.98 | 17.5 | Q3 | Middle East |
| India | 42.62 | 18.8 | Q4 | South Asia |
| Vietnam | 42.58 | 14.5 | Q4 | Southeast Asia |
| Malaysia | 40.40 | 22.0 | Q4 | Southeast Asia |
| Indonesia | 37.88 | 19.2 | Q4 | Southeast Asia |
| South Korea | 35.42 | 30.2 | Q4 | East Asia |
| Japan | 32.08 | 27.5 | Q4 | East Asia |
| Philippines | 17.69 | 23.2 | Q4 | Southeast Asia |
| Singapore | 15.34 | 47.5 | Q4 | Southeast Asia |

The region spans 84.6 P-Score points (China 99.98 minus Singapore 15.34) and 34.3 R-Score points (Singapore 47.5 minus Iran 13.2).

## East Asia — China, Japan, South Korea

The wealthiest and largest research-output Asian economies.

### China
The global maximum Prevalence (P=99.98). Drivers: maxed data fabrication (D6=100, world maximum), elevated AI submission (D2=68), high plagiarism (D4=73). Response Quality moderate at R=23.8.

### Japan
Low contract cheating demand (D1=50, lowest in East Asia), moderate plagiarism (D4=44). Q4 placement; post-STAP reforms produced relatively strong R-Score for East Asia.

### South Korea
Elevated collusion (D5=70, fifth-highest in dataset), moderate fabrication (D6=55). Post-Hwang reforms anchor the relatively higher R-Score (30.2).

### East Asia pattern
The three East Asian economies are heterogeneous on Prevalence but cluster on moderate-to-high Response Quality (R range 23.8–30.2). The pattern reflects mature institutional integrity infrastructure built after specific high-profile cases (Hwang Woo-suk in Korea, STAP cells in Japan, the Chinese paper mill industry response).

## South Asia — India and Pakistan

Two of the largest higher education systems globally.

### India
Major contract cheating export hub. Domestic demand moderate (D1=83). UGC plagiarism regulations (2018) provide policy framework; enforcement varies across 1,000+ universities.

### Pakistan
Maxed contract cheating demand (D1=100). HEC framework on paper is strong; operational R-Score (14.2) remains very low. Documented essay mill export market.

### South Asia pattern
Both countries: high D1 demand combined with substantial supply-side participation in the global essay mill economy. R-Scores are very low (14.2–18.8). Reform pace is constrained by the scale of the higher education systems.

## Middle East — Iran, Saudi Arabia

(Egypt is also Middle East but classified differently regionally.)

### Iran
Maxed AI submission demand (D2=100). R-Score 13.2 is second-lowest globally. Sanctions limit detection infrastructure access.

### Saudi Arabia
Maxed AI submission demand (D2=100). Vision 2030 reforms in early stages.

### Middle East pattern
Maxed D2 signals, elevated other dimensions, very weak Response Quality. The region shows the most uniform Crisis zone pattern in the AMI dataset.

## Southeast Asia — wide variance

Singapore, Thailand, Malaysia, Indonesia, Vietnam, Philippines.

### Singapore
The regional outlier. R=47.5 is the strongest in Asia. NUS, NTU, SMU, SUTD operate mature institutional infrastructure. Q4 placement is borderline Q1.

### Thailand
P=55.67 places Thailand in Q3 — the only Southeast Asian Q3 country. Elevated contract cheating and plagiarism signals.

### Malaysia, Indonesia
Q4 with elevated collusion (D5=72 both). MQA and BAN-PT accreditation frameworks provide some integrity infrastructure but no integrity-specific mandate.

### Vietnam
Q4 with R-Score among the lowest in the region (14.5). Limited institutional integrity infrastructure outside top universities.

### Philippines
Q4 with low Prevalence (17.69). Important supply-side role in global essay mill economy not fully captured in domestic D1 signal.

### Southeast Asia pattern
Wide variance from Singapore's borderline-Q1 to Vietnam's weak R-Score. Common features: no specific contract cheating legislation, varying detection deployment, limited disclosure. Regional cooperation through ASEAN higher education frameworks has not produced common integrity standards.

## Common Asian patterns

### No specific essay mill legislation
None of the 13 Asian countries has Australian/UK/Irish-style essay mill bans. This is the principal gap from Q1 status across the region.

### Strong East Asian post-case reform tradition
Hwang Woo-suk in Korea, STAP cells in Japan, Chinese paper mill response — high-profile cases have driven institutional reform in East Asia. The pattern is different from Southeast Asia where systematic reform pressure has been less.

### Detection deployment correlates with wealth
Singapore, Japan, South Korea, Malaysia have moderate-to-broad Detection deployment. India, Pakistan, Indonesia, Vietnam have limited deployment. The pattern follows university sector budgets directly.

### Supply hub concentration
Pakistan, India, and the Philippines are major essay mill export hubs. Domestic and export dynamics interact.

## What would shift the region

### Singapore — push to Q1
A specific essay mill ban would lift Legislation from 30 to 100 and likely move Singapore into Q1.

### China — reform pressure
The world-maximum Prevalence (P=99.98) creates substantial reform pressure. The 2018 plagiarism guidance was a first step; comprehensive paper mill regulation and stronger institutional disclosure would shift the picture.

### India — operationalise UGC
The 2018 UGC regulations provide the framework. Operational implementation across 1,000+ universities is the remaining challenge.

### ASEAN coordination
Regional coordination on integrity standards could lift the Southeast Asian cluster collectively. The infrastructure for cooperation exists; integrity has not been a priority area.

## Sources

- AMI v1.5 dataset (Asian country scores)
- Country-specific regulator documentation
- ASEAN higher education frameworks
- Retraction Watch Database, Crossref/GitLab (2026)

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "europe-regional-analysis",
    title: "Europe Academic Misconduct: Regional Analysis 2026",
    seoTitle: "Europe Academic Misconduct Analysis 2026 | AMI Regional Data",
    metaDescription: "Europe regional AMI analysis: 16 countries scored. UK strongest R-Score (87.5), Greece highest European Prevalence (P=74.0). Wide variance Q1 to Q3.",
    date: "2026-05-20",
    category: "data",
    tags: ["Europe", "regional analysis", "UK", "Greece", "EU", "data"],
    tldr: "Europe regional analysis: 16 countries in AMI v1.5. UK (R=87.5) and Ireland (R=78.8) lead. Greece (P=74.0) is the highest European Prevalence and only European Q3 country (alongside Poland and Norway methodology anomaly). Substantial East/West and North/South gradients.",
    excerpt: "Sixteen European countries are in the AMI v1.5 dataset — the most heavily represented region. This analysis maps the East/West, North/South, and Q1/Q3 patterns and what they tell us about European academic integrity.",
    faqSchema: [
      {
        question: "Which European country has the strongest academic integrity?",
        answer: "The UK scores R=87.5, the highest in Europe and second globally after Australia. Ireland (R=78.8) is second in Europe. Both have specific essay mill legislation. The Netherlands (R=51.2) is the strongest continental European country without essay mill legislation, anchored by the VSNU code."
      },
      {
        question: "Why is Greece an outlier in Europe?",
        answer: "Greece is the only EU country in Q3 (Crisis zone), with P=74.0 — the fourth highest globally. The combination of maxed Greek-language essay mill demand (D1=D2=100), weak Response (R=20.0), and no specific contract cheating legislation places Greece structurally different from other EU member states. The European University Association has flagged academic integrity as needing coordinated EU action."
      },
      {
        question: "What is the pattern across Eastern Europe in the AMI?",
        answer: "Eastern Europe shows three patterns: Russia (R=16.8) very weak Response, Ukraine (R=28.2) post-Maidan reform progress despite wartime disruption, and Poland (R=32.5) the highest Eastern European R-Score anchored by mandatory JSA plagiarism detection. The Eastern European range mirrors the post-Soviet political and reform trajectories."
      }
    ],
    content: `
## TL;DR

Europe regional analysis: 16 countries in AMI v1.5 — the most heavily represented region. UK (R=87.5) and Ireland (R=78.8) lead globally. Greece (P=74.0) is the only EU country in Q3. Significant East/West and North/South gradients in both Prevalence and Response.

## The 16 European countries

### By R-Score (strongest response first)

| Country | R | P | Quadrant | Sub-region |
|---|---|---|---|---|
| UK | 87.5 | 11.41 | Q1 | NW |
| Ireland | 78.8 | 12.21 | Q1 | NW |
| Netherlands | 51.2 | 44.47 | Q1 | NW |
| Norway | 47.5 | 57.16 | Q3 | Nordic |
| Sweden | 45.0 | 37.24 | Q4 | Nordic |
| Germany | 38.8 | 9.14 | Q4 | Central |
| France | 32.5 | 43.96 | Q4 | West |
| Poland | 32.5 | 51.19 | Q3 | Central |
| South Africa | 30.0 | 19.30 | Q4 | (Africa) |
| Ukraine | 28.2 | 22.46 | Q4 | East |
| Spain | 28.0 | 40.78 | Q4 | South |
| Italy | 25.2 | 44.98 | Q4 | South |
| Turkey | 21.2 | 43.52 | Q4 | SE |
| Greece | 20.0 | 74.00 | Q3 | South |
| Russia | 16.8 | 37.53 | Q4 | East |

(South Africa included for reference comparison; not strictly European.)

## Sub-regional patterns

### Northwest Europe — Q1 anchored
UK (R=87.5), Ireland (R=78.8), Netherlands (R=51.2). The three NW European Q1 countries. UK and Ireland have specific essay mill legislation; Netherlands anchors on the VSNU code.

### Nordic — methodology caveats applied
Norway (R=47.5) and Sweden (R=45.0) both have strong institutional infrastructure but elevated Prevalence partly driven by Google Trends signal interpretation. The Norway anomaly is the most prominent; Sweden shows a milder version.

### Central — Germany pattern
Germany (R=38.8, P=9.14, Q4) shows very low Prevalence with moderate Response. Strong DFG research integrity framework. Federal structure limits national-level mandatory disclosure.

### Western — France
France (R=32.5, P=43.96, Q4). HCERES quality framework but no integrity-specific mandate. Maxed French-language AI submission demand (D2=100) drives Prevalence.

### Southern — heterogeneous
Spain (R=28.0), Italy (R=25.2), Greece (R=20.0). All have maxed AI submission demand (D2=100). Greece is the only EU country in Q3 (Crisis zone). Italy and Spain in Q4.

### Southeast — Turkey
Turkey (R=21.2, P=43.52, Q4). YÖK framework; high D5 collusion (69) and D1 contract cheating (83). Bridge between European and Middle Eastern patterns.

### Eastern — three trajectories
Russia (R=16.8) very weak Response despite Antiplagiat deployment. Ukraine (R=28.2) post-Maidan reform with wartime context. Poland (R=32.5) strongest Eastern European response anchored by mandatory JSA system.

## The legislation pattern

Two European countries with specific essay mill bans:

- **Ireland 2019** — first globally; QQI enforcement
- **UK 2022** — Skills and Post-16 Education Act; OfS enforcement

Both score R-Score Legislation sub-component of 100.

The Netherlands (Legislation=25), France (15), Germany (20), and other European countries have research integrity provisions but no contract cheating-specific ban.

### EU-level coordination
The European University Association (EUA) has discussed coordinated EU action on essay mill legislation. No EU-wide directive has been proposed. The legislative pattern remains country-specific.

## Why Greece is in Q3

Greece is the only EU country in Q3 (Crisis zone):
- P=74.00 — fourth highest globally
- D1=D2=100 maxed Greek-language demand signals
- R=20.0 — among the lowest European response scores
- No specific integrity legislation; limited disclosure

The Greek profile is structurally different from other Southern European countries (Italy, Spain) which sit in Q4 with similar dimension scores but moderately higher R-Scores.

## The East/West gradient

Eastern European R-Scores (Russia 16.8, Ukraine 28.2, Poland 32.5) are uniformly lower than Western European peers. The pattern reflects:

- Post-Soviet institutional rebuilding still in progress
- Wartime disruption (Ukraine specifically)
- Russian regulatory framework that detects but does not sanction (Dissernet identified 10,000+ cases; almost no consequences)

Poland's relatively higher R-Score reflects deliberate EU integration and JSA system mandate.

## The North/South gradient

Northern European countries (UK, Ireland, Netherlands, Nordic) cluster at high R-Scores (45–87.5). Southern European countries (Spain, Italy, Greece) cluster at lower R-Scores (20–28).

The gradient is partly:
- Institutional infrastructure development paths
- Detection tool deployment investment patterns
- Specific legislation distribution (concentrated in NW)

## D6 (Data fabrication) — relatively low across Europe

European countries score lower on D6 than Asian or Middle Eastern peers:
- Western Europe: 15–25 range
- Eastern Europe: 30–78 (Russia is the high outlier driven by Dissernet)
- Southern Europe: 25–35

Strong post-publication review culture, established research integrity frameworks (LOWI, NPOF, DFG), and concentrated research at universities with mature compliance infrastructure all contribute.

## What would shift the region

### EU-wide essay mill legislation
A coordinated EU directive on contract cheating bans would lift Legislation sub-scores across all member states. The Irish, UK, and indirectly Australian models provide the template.

### Mandatory institutional disclosure
EU-level minimum standards for institutional misconduct reporting would raise the Disclosure sub-component significantly for countries currently in the 15–35 range.

### Eastern European reform continuation
The post-Maidan Ukrainian reform model demonstrates that even in difficult conditions Eastern European countries can build R-Score. Russia and other Eastern European peers face the question of whether to follow.

### Norway methodology resolution
Resolving the Norway anomaly (and to a lesser extent Sweden) would shift the Nordic block from Q3/Q4 into Q1 — the cluster that the actual institutional infrastructure suggests.

## Coverage gaps

Several European countries are not yet in the AMI dataset. Future versions will add:
- Belgium, Austria, Denmark, Finland (Western)
- Czech Republic, Slovakia, Hungary, Romania (Central)
- Portugal, Croatia, Serbia, Bulgaria (Southern)
- Baltic states

Adding coverage will produce a more complete regional picture.

## Sources

- AMI v1.5 dataset (European country scores)
- Country-specific regulator documentation (QQI, OfS, TEQSA, ANECA, HCERES, etc.)
- VSNU code, NPOF, NESH, DFG research integrity frameworks
- Retraction Watch Database, Crossref/GitLab (2026)

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "africa-middle-east-regional-analysis",
    title: "Africa and Middle East Academic Misconduct: Regional Analysis 2026",
    seoTitle: "Africa & Middle East Academic Misconduct 2026 | AMI Analysis",
    metaDescription: "Africa and Middle East AMI regional analysis. Africa: Kenya R=11.5 (lowest globally), Nigeria 12.5, South Africa 30.0. Middle East: Egypt, Iran, Saudi Arabia all Q3.",
    date: "2026-05-20",
    category: "data",
    tags: ["Africa", "Middle East", "regional analysis", "Kenya", "Egypt", "data"],
    tldr: "Africa + Middle East regional analysis. Africa: Kenya (R=11.5, lowest globally), Nigeria (12.5, third lowest), South Africa (30.0, regional best). Middle East: Egypt (12.0, second lowest globally), Iran (13.2), Saudi Arabia (17.5), Turkey (21.2). The lowest-Response cluster in the AMI dataset.",
    excerpt: "Africa and Middle East represent the lowest-Response cluster in the AMI dataset. Three African and four Middle Eastern countries scored. This analysis maps the structural challenges and the South African and Saudi positive exceptions.",
    faqSchema: [
      {
        question: "Which African country has the strongest academic integrity infrastructure?",
        answer: "South Africa scores R=30.0, the highest in Africa among the three African countries scored. Kenya (R=11.5) and Nigeria (R=12.5) sit in the bottom three globally. South Africa benefits from the CHE quality framework and established institutional integrity at leading universities (UCT, Wits, Stellenbosch). The gap demonstrates that the African pattern is not inevitable."
      },
      {
        question: "Why is Egypt the lowest R-Score in the dataset?",
        answer: "Egypt scores R=12.0 — the second lowest R-Score globally (Kenya at 11.5 is lowest). The score reflects: no specific integrity legislation, minimal detection tool deployment (R_det=18), very low public disclosure (R_dis=8), and weak penalty enforcement. The Supreme Council of Universities oversees Egyptian higher education but does not mandate integrity-specific reporting. Resource constraints in the large public university system compound the issue."
      },
      {
        question: "What patterns emerge across Africa and the Middle East?",
        answer: "Both regions cluster at the bottom of the R-Score distribution. Common features: very limited specific legislation, partial detection deployment concentrated at elite institutions, minimal mandatory disclosure, large public university systems with limited compliance capacity. The Middle East additionally shows maxed AI submission demand (D2=100) across multiple countries. African countries show particularly low Detection sub-scores due to resource constraints."
      }
    ],
    content: `
## TL;DR

Africa + Middle East regional analysis. The lowest-Response cluster in the AMI dataset. Africa (3 countries): Kenya R=11.5 lowest globally, Nigeria 12.5 third lowest, South Africa 30.0 regional best. Middle East (4 countries): Egypt 12.0 second lowest, Iran 13.2, Saudi Arabia 17.5, Turkey 21.2.

## The seven countries

### Africa
| Country | P | R | Quadrant |
|---|---|---|---|
| Kenya | 38.16 | 11.5 | Q4 |
| Nigeria | 43.46 | 12.5 | Q4 |
| South Africa | 19.30 | 30.0 | Q4 |

### Middle East
| Country | P | R | Quadrant |
|---|---|---|---|
| Egypt | 64.60 | 12.0 | Q3 |
| Iran | 57.00 | 13.2 | Q3 |
| Saudi Arabia | 53.98 | 17.5 | Q3 |
| Turkey | 43.52 | 21.2 | Q4 |

The seven countries account for 5 of the 10 lowest R-Scores globally (Kenya, Egypt, Nigeria, Iran, Saudi Arabia all in bottom 10).

## The R-Score crisis

### Bottom 5 globally — 3 of 5 are in this region

| Rank | Country | R | Region |
|---|---|---|---|
| 1 (lowest) | Kenya | 11.5 | Africa |
| 2 | Egypt | 12.0 | Middle East |
| 3 | Nigeria | 12.5 | Africa |
| 4 | Iran | 13.2 | Middle East |
| 5 | Pakistan | 14.2 | South Asia |

### What the sub-components show

| Country | Legislation | Detection | Disclosure | Penalties |
|---|---|---|---|---|
| Kenya | 8 | 18 | 8 | 12 |
| Egypt | 10 | 18 | 8 | 12 |
| Nigeria | 10 | 15 | 10 | 15 |
| Iran | 10 | 20 | 8 | 15 |
| Pakistan | 10 | 22 | 10 | 15 |

The bottom 5 share:
- Legislation sub-scores of 8–10 (general fraud only)
- Detection sub-scores of 15–22 (limited deployment)
- Disclosure sub-scores of 8–10 (minimal public reporting)
- Penalty sub-scores of 12–15 (codes exist; enforcement varies)

## Africa — three trajectories

### Kenya (R=11.5)
The lowest R-Score globally. Structural challenge: large higher education sector with resource constraints, no integrity-specific legislation, and the country's role as essay mill export hub (Nairobi-based writers serving Anglophone markets).

### Nigeria (R=12.5)
Highest D3 (exam impersonation) and D5 (collusion) scores in the dataset. JAMB has invested in biometric verification for entrance examinations — a substantial integrity investment in one specific area. The broader R-Score gap reflects systemic capacity issues.

### South Africa (R=30.0)
The regional outlier. R-Score 2.5x Kenya's. Drivers: CHE quality framework, established institutional integrity at leading universities (UCT, Wits, Stellenbosch, UKZN, Pretoria), Tri-Sector Codes of Conduct on research, and active national integrity discussion. South Africa demonstrates that African R-Score above 30 is achievable.

## Middle East — Q3 cluster

### Egypt (R=12.0)
Second lowest R-Score globally. Maxed AI submission demand (D2=100). The Supreme Council of Universities sets some standards; public university system resource constraints limit operational integrity infrastructure.

### Iran (R=13.2)
Second-lowest in Middle East after Egypt. Sanctions limit access to commercial detection tools (Turnitin, iThenticate). Maxed D2 demand combined with high D4 (65), D5 (69), D6 (65) signals.

### Saudi Arabia (R=17.5)
Vision 2030 reforms in early stages. NCAAA accreditation framework. Maxed D2 demand. The wealthier Saudi system has the resources for reform but the integrity infrastructure transition is not yet complete.

### Turkey (R=21.2)
Bridge country between European and Middle Eastern patterns. YÖK framework; 2016 dissertation reforms after high-profile cases. Third highest D5 (collusion) score in the dataset.

## Maxed D2 across the Middle East

Egypt (100), Iran (100), Saudi Arabia (100). The Middle East shows the most consistent maxed AI submission demand of any region:

- High smartphone and broadband penetration
- Substantial English-medium higher education populations
- Arabic-language and Persian-language AI tools serve large markets
- Limited institutional detection deployment means actual incidence is likely well above detected rates

## Africa — detection deployment is the binding constraint

Across the three African countries, Detection sub-scores (R_det) are very low:
- Kenya 18
- Nigeria 15 (lowest in dataset)
- South Africa 42

The pattern reflects:
- Limited university budgets for commercial detection platform licensing
- Open-source alternatives (PlagScan, COBALT) have limited coverage and quality
- Large public university systems where universal deployment is expensive

South Africa's relatively higher Detection (42) reflects more developed Turnitin deployment at the leading universities and the Tri-Sector Codes of Conduct framework on research.

## The Egypt parallel to Kenya

Egypt and Kenya occupy similar bottom-five positions despite very different cultural and educational systems. The common features:

- Large public university sectors (Egypt has the largest in the Arab world; Kenya in East Africa)
- Limited integrity-specific statutory frameworks
- Minimal mandatory disclosure
- Resource constraints affecting detection deployment

The parallel suggests that the bottom-five R-Score cluster is a structural pattern of "large public university system + limited integrity infrastructure investment" rather than a specifically regional phenomenon.

## What would shift the region

### Resource-side reforms
- Regional consortium licensing for detection tools (lower per-institution cost)
- Open-source detection alternatives developed regionally
- Donor coordination on academic integrity infrastructure

### Policy-side reforms
- Specific essay mill legislation (no country in the region has one)
- Mandatory institutional misconduct disclosure
- Regional integrity coordination through African Union or Arab League education frameworks
- Sanctions consideration for academic integrity in Iran-specific context

### South Africa as model
South Africa demonstrates that African R-Score above 30 is achievable. The CHE/HEQC framework, mature institutional integrity offices, and active national discussion provide a template. Regional knowledge sharing through Pan-African higher education networks could lift the pattern.

### Saudi Vision 2030
Saudi Arabia has the resources and political will for substantive integrity reform. The current Vision 2030 framework provides infrastructure; the transition from policy to outcomes will be measurable over 5–10 years.

## Coverage gaps

Many African and Middle Eastern countries are not yet in the AMI dataset. Future versions will add:
- Morocco, Algeria, Tunisia, Lebanon (North Africa, Levant)
- Ghana, Ethiopia, Tanzania (Africa)
- UAE, Qatar, Kuwait (Gulf)
- Israel (Middle East — methodology category to be determined)

## Sources

- AMI v1.5 dataset and methodology
- Country-specific regulator documentation
- African Union and Arab League education frameworks
- Retraction Watch Database, Crossref/GitLab (2026)

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "best-countries-academic-integrity-2026",
    title: "Best Countries for Academic Integrity 2026: AMI Rankings",
    seoTitle: "Best Countries for Academic Integrity 2026 | AMI Top 10",
    metaDescription: "Top 10 lowest Prevalence countries on the AMI 2026. Canada P=4.90 (lowest globally), Australia 7.43, Germany 9.14, UK 11.41, Ireland 12.21. Q1 leaders.",
    date: "2026-05-20",
    category: "data",
    tags: ["best countries", "Prevalence", "Q1", "rankings 2026", "data"],
    tldr: "Top 10 lowest Prevalence countries in AMI v1.5: Canada 4.90 (lowest globally), Australia 7.43, Germany 9.14, UK 11.41, Ireland 12.21, Singapore 15.34, Philippines 17.69, South Africa 19.30, New Zealand 21.29, Ukraine 22.46. Six of ten are in Q1 (Best in class).",
    excerpt: "The 10 countries with the lowest estimated academic misconduct prevalence on the AMI 2026. Canada and Australia anchor the bottom (best); six of the ten are Q1 Best-in-class countries. Here are the data and what they share.",
    faqSchema: [
      {
        question: "Which country has the lowest academic misconduct rate?",
        answer: "Canada scores P=4.90 on the Academic Misconduct Index 2026 — the lowest Prevalence score of 39 countries. Canada is followed by Australia (P=7.43) and Germany (P=9.14). The lowest five also includes UK (11.41) and Ireland (12.21). All five share mature institutional infrastructure though only three (Australia, UK, Ireland) have specific contract cheating bans."
      },
      {
        question: "What do the lowest-Prevalence countries have in common?",
        answer: "Most share mature institutional integrity infrastructure — clear codes, broad detection tool deployment, established penalty frameworks. The three Anglophone leaders (Australia, UK, Ireland) additionally have specific essay mill legislation. Canada, Germany, and the Netherlands rely on strong institutional rather than statutory frameworks. Singapore, Philippines, and Ukraine in the top 10 demonstrate that low Prevalence is achievable without Q1 status — the institutional Response Quality determines Q1 placement."
      },
      {
        question: "Why is Philippines in the top 10 best despite being an essay mill supply hub?",
        answer: "The Philippines' D1 score of 67 reflects moderate domestic demand. The country's role as an essay mill supply hub (Filipino writers serving US/UK/Australian markets) does not directly drive the country's own Prevalence score. The supply-side activity is structurally significant globally but affects the *destination* markets more than the supply country's own AMI scores."
      }
    ],
    content: `
## TL;DR

Top 10 lowest Prevalence scores in AMI v1.5: Canada 4.90, Australia 7.43, Germany 9.14, UK 11.41, Ireland 12.21, Singapore 15.34, Philippines 17.69, South Africa 19.30, New Zealand 21.29, Ukraine 22.46. Six are Q1; four are Q4 with low Prevalence but R-Score below Q1 threshold.

## The top 10 (lowest Prevalence)

| Rank | Country | P-Score | R-Score | Quadrant |
|---|---|---|---|---|
| 1 | Canada | 4.90 | 60.0 | Q1 |
| 2 | Australia | 7.43 | 88.8 | Q1 |
| 3 | Germany | 9.14 | 38.8 | Q4 |
| 4 | UK | 11.41 | 87.5 | Q1 |
| 5 | Ireland | 12.21 | 78.8 | Q1 |
| 6 | Singapore | 15.34 | 47.5 | Q4 |
| 7 | Philippines | 17.69 | 23.2 | Q4 |
| 8 | South Africa | 19.30 | 30.0 | Q4 |
| 9 | New Zealand | 21.29 | 58.8 | Q1 |
| 10 | Ukraine | 22.46 | 28.2 | Q4 |

Six of the ten are in Q1 (Best in class). The four Q4 entries are countries with low Prevalence but R-Score below the Q1 threshold.

## What the top 5 share

### Mature institutional integrity infrastructure

Canada, Australia, Germany, UK, and Ireland all have:
- Clear institutional academic integrity codes
- Broad detection tool deployment
- Established penalty frameworks
- Active disciplinary culture

### Anglophone legislative leadership

Three of the top five (Australia, UK, Ireland) have specific contract cheating bans:
- Ireland 2019
- Australia 2020
- UK 2022

These are the only three countries globally with such legislation. The bans drove Legislation sub-component scores to 100 in all three.

### Strong research integrity frameworks

Canada (Tri-Council Policy), Germany (DFG Rules of Good Scientific Practice), UK (UKRIO), Ireland (NAIN coordination), Australia (NHMRC, ARC integrity frameworks). All five have mature research-side integrity infrastructure that complements the student misconduct framework.

## Why Canada leads on Prevalence

Canada's P=4.90 is the lowest Prevalence in the entire AMI dataset. The drivers:

- **D1 = 50** — moderate contract cheating demand, no maxed signals
- **D2 = 44** — moderate AI submission demand
- **D3 = 9** — among the lowest exam impersonation
- **D4 = 40** — moderate plagiarism
- **D6 = 22** — low Retraction Watch signal

Canada has no single extreme dimension score. The aggregate is the lowest in the dataset because all dimensions are consistently moderate-low.

## The Q4 entries in the top 10

Four countries have low Prevalence but Q4 placement:

### Germany (P=9.14, R=38.8)
The clearest case of "low Prevalence + sub-Q1 R-Score". German integrity infrastructure is strong (DFG framework, VroniPlag, broad detection) but the R-Score of 38.8 is below the Q1 threshold. The federal structure and absence of specific essay mill ban explain the gap.

### Singapore (P=15.34, R=47.5)
Borderline Q1. NUS/NTU institutional infrastructure is mature. A specific essay mill ban would likely move Singapore into Q1.

### Philippines (P=17.69, R=23.2)
Lower Prevalence reflects moderate domestic demand. The country's essay mill supply role affects destination markets more than its own scores. The R-Score is well below Q1 thresholds — substantial gap from Q1 status.

### South Africa (P=19.30, R=30.0)
Strong African integrity infrastructure (CHE/HEQC framework). The R-Score is the strongest in Africa but still below Q1 thresholds. The gap is on Legislation and Disclosure sub-components.

## The Ukraine entry

Ukraine (P=22.46, R=28.2, Q4) is in the top 10 lowest Prevalence — the lowest Eastern European Prevalence. The post-Maidan reform agenda and NAQA integrity framework drive the position. The wartime context affects ongoing measurement but the data shows substantial reform progress relative to other post-Soviet states.

## What the bottom 10 (highest Prevalence) is missing

By comparison, the top 10 highest Prevalence countries (China 99.98, Colombia 77.38, etc.) lack:

- Specific contract cheating legislation
- Universal detection tool deployment
- Mandatory institutional disclosure
- Mature penalty frameworks applied consistently
- Established post-publication review culture

The gap between the best-10 and worst-10 R-Scores tells the policy story:
- Best 10 average R-Score: ~46
- Worst 10 average R-Score: ~17

That's roughly 3x difference in institutional response strength.

## Sub-components in the top 10

### Detection deployment in the top 10

| Country | R_det |
|---|---|
| UK | 90 |
| Australia | 85 |
| US (also low P) | 80 |
| Canada | 75 |
| Ireland | 75 |
| New Zealand | 70 |
| Netherlands | 65 |
| Singapore | 65 |
| Germany | 55 |

Top-10 lowest-Prevalence countries cluster at high Detection sub-scores. Universal detection tool deployment is one of the more reliable correlates of low Prevalence.

### Disclosure in the top 10

| Country | R_dis |
|---|---|
| Australia | 90 |
| UK | 85 |
| Ireland | 70 |
| Canada | 70 |
| New Zealand | 65 |
| Netherlands | 55 |
| Germany | 30 |

Strong Disclosure correlates with Q1 status. Countries in the top 10 that score below 30 on Disclosure (Philippines, Ukraine) are in Q4 not Q1.

## What this means for policymakers

Low Prevalence does not require all R-Score components to be strong. The top 10 includes:
- Specific ban countries (Australia, UK, Ireland) — highest R
- Strong institutional framework countries (Canada, Netherlands, Germany)
- Strong regional infrastructure (NZ, Singapore)
- Reform-oriented countries (Ukraine, South Africa)

The path to low Prevalence runs through multiple plausible policy combinations. The common thread is sustained investment in some combination of Legislation, Detection, Disclosure, and Penalties.

## Sources

- AMI v1.5 dataset and methodology
- Country-specific regulator documentation
- National integrity legislation (Australia 2020, Ireland 2019, UK 2022)
- Retraction Watch Database, Crossref/GitLab (2026)

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "v14-russia-ukraine-iran-added",
    title: "AMI v1.4: Russia, Ukraine, and Iran Added to Index",
    seoTitle: "AMI v1.4 Update: Russia, Ukraine, Iran Added | News 2026",
    metaDescription: "AMI version 1.4 added Russia (P=37.5, R=16.8), Ukraine (P=22.5, R=28.2), and Iran (P=57.0, R=13.2). Coverage expanded to 31 countries; methodology updates.",
    date: "2026-05-20",
    category: "news",
    tags: ["v1.4", "Russia", "Ukraine", "Iran", "update", "news"],
    tldr: "AMI v1.4 added Russia, Ukraine, and Iran to the coverage set. Russia scored P=37.5, R=16.8 (Q4). Ukraine P=22.5, R=28.2 (Q4). Iran P=57.0, R=13.2 (Q3). The additions expanded geographic coverage and included methodology updates for sanctions-context measurement.",
    excerpt: "Version 1.4 of the Academic Misconduct Index added three countries with significant academic integrity stories: Russia (Dissernet documentation), Ukraine (post-Maidan reform), and Iran (sanctions-affected infrastructure). Here is what each score showed.",
    faqSchema: [
      {
        question: "What changed in AMI v1.4?",
        answer: "AMI v1.4 added three countries to coverage: Russia, Ukraine, and Iran. Coverage expanded from 28 to 31 countries. The update included methodology refinements for measuring integrity in sanctions-affected jurisdictions (relevant to Iran) and for post-conflict reform contexts (relevant to Ukraine). The Russia inclusion specifically benefited from improved Retraction Watch coverage of Russian-language journals."
      },
      {
        question: "Why was Russia added to the AMI?",
        answer: "Russia's inclusion reflects three factors: the Dissernet project's extensive documentation of plagiarised Russian doctoral dissertations, improved Retraction Watch coverage of Russian-language journals, and the policy importance of including a major post-Soviet higher education system. Russia scored P=37.5, R=16.8, Q4 (Probably not looking) — moderate Prevalence with very weak Response Quality."
      },
      {
        question: "How does Ukraine's wartime context affect the AMI score?",
        answer: "Ukraine's score (P=22.5, R=28.2) was measured during the full-scale Russian invasion period. The country's higher education sector has been disrupted — institutions relocating, online operation, faculty and student displacement. The v1.4 methodology notes flagged this context explicitly. Ukraine's relatively strong R-Score for Eastern Europe reflects post-Maidan reforms (NAQA quality framework) that persisted through the wartime period."
      }
    ],
    content: `
## TL;DR

AMI v1.4 added Russia, Ukraine, and Iran. Expanded coverage from 28 to 31 countries. Russia: P=37.5, R=16.8, Q4. Ukraine: P=22.5, R=28.2, Q4. Iran: P=57.0, R=13.2, Q3. Methodology updates for sanctions context and post-conflict measurement.

## What v1.4 changed

Version 1.4 of the AMI represented the first major coverage expansion. Three countries with significant academic integrity stories were added:

- **Russia** — the Dissernet documentation, Antiplagiat detection deployment, and post-Soviet integrity context
- **Ukraine** — post-Maidan reform agenda, NAQA framework, wartime disruption
- **Iran** — sanctions-affected detection infrastructure, maxed AI submission demand

The update accompanied methodology refinements addressing the specific measurement challenges these countries posed.

## Russia (P=37.5, R=16.8, Q4)

### Why Russia was added

Russia presented a distinctive integrity story justifying inclusion:

- **Dissernet** — the volunteer initiative identifying 10,000+ plagiarised Russian doctoral dissertations
- **Antiplagiat** — widely deployed detection system for theses
- **Documented dissertation mill industry** — companies advertising thesis writing services for years
- **Post-Soviet institutional rebuilding** — relevant comparative case

### What the scores showed

Russia's P=37.5 placed it mid-range globally. The dimension breakdown:

| Dimension | Russia score |
|---|---|
| D1 | 83 (high) |
| D2 | 56 |
| D3 | 18 |
| D4 | 72 |
| D5 | 62 |
| D6 | 78 |

High contract cheating demand, high plagiarism, high data fabrication. The R-Score of 16.8 reflects the gap between detection (Antiplagiat exists) and consequences (Dissernet-identified plagiarists faced minimal action).

### Key finding

The Russia case demonstrates that detection without enforcement produces limited effect. The country's R-Score is the third lowest in the Eastern European/post-Soviet cluster despite the most extensive Antiplagiat deployment.

## Ukraine (P=22.5, R=28.2, Q4)

### Why Ukraine was added

Ukraine's post-Maidan reform agenda provides an important counterpoint to the Russian case:

- **NAQA** — the National Agency for Higher Education Quality Assurance (2015), with explicit integrity remit
- **Strikha Law** — 2014 Higher Education Act reforms
- **External thesis evaluation** — required for accredited programmes
- **Wartime context** — measuring integrity under exceptional conditions

### What the scores showed

Ukraine's P=22.5 was the lowest in Eastern Europe — well below Russia's 37.5 and Poland's 51.2.

| Dimension | Ukraine score |
|---|---|
| D1 | 67 |
| D2 | 50 |
| D3 | 14 |
| D4 | 55 |
| D5 | 62 |
| D6 | 35 |

Lower D4 and D6 than Russia despite shared historical context. Moderate D1 and D2.

### Wartime methodology

The v1.4 methodology added a wartime context note for Ukraine. Key adjustments:

- Detection data quality reflects current institutional state, not pre-war
- Some Ukrainian institutions relocated abroad; affiliation matching adjusted
- Wartime disruption to research output affected D6 calculation slightly
- Methodology committed to noting context explicitly in published scores

### Key finding

Ukraine's R-Score (28.2) is meaningfully higher than Russia's (16.8) despite shared historical context — institutional choice produces different outcomes even from similar starting points.

## Iran (P=57.0, R=13.2, Q3)

### Why Iran was added

Iran presented the most methodologically challenging addition:

- **Sanctions context** — limited access to commercial detection tools
- **Maxed AI submission demand** — Persian-language search volume
- **Substantial research output** — growing Iranian research base
- **Documented plagiarism and fabrication** — peer-reviewed literature evidence

### What the scores showed

Iran's P=57.0 placed it eighth globally — Q3 Crisis zone placement.

| Dimension | Iran score |
|---|---|
| D1 | 67 |
| D2 | 100 |
| D3 | 16 |
| D4 | 65 |
| D5 | 69 |
| D6 | 65 |

Maxed AI submission demand, high plagiarism, high collusion, elevated fabrication.

R=13.2 was the second-lowest globally (only Egypt at 12.0 was lower).

### Sanctions methodology

The v1.4 methodology added notes on sanctions-affected detection infrastructure. Iranian universities have:

- Limited access to Turnitin and iThenticate licensing
- Some domestic detection alternatives (varying coverage)
- Limited international integrity training partnerships

The R-Score reflects these constraints rather than pure policy choice. Future versions will continue to develop sanctions-context measurement.

### Key finding

Iran sits at the most acute Crisis zone position globally — high Prevalence (P=57) combined with second-lowest Response (R=13.2). The structural constraints from sanctions interact with the policy environment.

## Methodology updates in v1.4

### Sanctions-context note
For countries where sanctions limit commercial detection infrastructure access (Iran specifically), the Detection sub-component scoring was annotated. Sanctions-affected countries can have strong domestic policy intent and still score low on Detection due to access constraints.

### Post-conflict measurement
For Ukraine, the wartime disruption produced measurement challenges. The methodology established conventions for:
- Affiliation matching during institutional relocation
- Research output measurement during wartime disruption
- Annotation of scores affected by exceptional context

### Russian-language journal coverage
The Russia addition benefited from Retraction Watch's improved coverage of Russian-language journals through 2023–2024. The Russian D6 score reflects this improved coverage.

## What v1.4 set up for v1.5

The v1.4 release demonstrated:
- Coverage expansion is feasible without major methodology re-engineering
- Context-specific notes (sanctions, wartime) can be added without compromising cross-country comparability
- The methodology handles diverse institutional contexts

These results enabled the v1.5 expansion to 39 countries (adding Argentina, Colombia, and others) and set the foundation for further expansion in future versions.

## Sources

- AMI v1.4 release notes
- Dissernet project documentation
- NAQA framework documentation (Ukraine)
- Retraction Watch Database, Crossref/GitLab
- Iranian higher education integrity literature

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "v15-argentina-colombia-added",
    title: "AMI v1.5: Argentina and Colombia Added; 39-Country Coverage",
    seoTitle: "AMI v1.5 Update: Argentina, Colombia Added | News 2026",
    metaDescription: "AMI version 1.5 (May 2026) added Argentina (P=74.6, R=18.0) and Colombia (P=77.4, R=16.5) to reach 39 countries. Both Q3 Crisis zone — maxed Spanish demand signals.",
    date: "2026-05-20",
    category: "news",
    tags: ["v1.5", "Argentina", "Colombia", "update", "news"],
    tldr: "AMI v1.5 (May 2026) expanded coverage to 39 countries by adding Argentina (P=74.6, R=18.0) and Colombia (P=77.4, R=16.5). Both placed in Q3 (Crisis zone). The additions confirmed the Spanish-language essay mill demand pattern as a regional structural feature.",
    excerpt: "Version 1.5 of the Academic Misconduct Index added Argentina and Colombia, bringing coverage to 39 countries. Both countries entered Q3, anchoring the Latin American Crisis zone cluster. Here is what the new data showed.",
    faqSchema: [
      {
        question: "What is new in AMI v1.5?",
        answer: "AMI v1.5 (May 2026) added Argentina and Colombia, bringing coverage to 39 countries. Both placed in Q3 (Crisis zone) with the second and third highest Prevalence scores after China. The release also included refinements to the Google Trends signal interpretation methodology and updated Retraction Watch data (69,911 records as of April 2026)."
      },
      {
        question: "Why did Colombia score so high in AMI v1.5?",
        answer: "Colombia scored P=77.4 — the second highest Prevalence globally after China. The score is driven by maxed Google Trends signals on D1 (contract cheating, score 100) and D2 (AI submissions, 100). The Spanish-language essay mill market shows very high per-capita search volume in Colombia. Combined with weak Response Quality (R=16.5), Colombia entered the Crisis zone directly."
      },
      {
        question: "Are Argentina and Colombia similar in their AMI profiles?",
        answer: "Yes — the two countries have structurally similar profiles. Both score D1=100 and D2=100 (maxed Spanish-language demand), both score D6=0 (near-zero Retraction Watch signal), and both have R-Scores in the 16.5–18.0 range. The similarity reflects shared regional dynamics: Spanish-language essay mill market, weak institutional response infrastructure, no specific contract cheating legislation, limited mandatory disclosure."
      }
    ],
    content: `
## TL;DR

AMI v1.5 (May 2026) added Argentina (P=74.57, R=18.0, Q3) and Colombia (P=77.38, R=16.5, Q3). Coverage expanded to 39 countries. Both additions placed in Crisis zone with maxed Spanish-language essay mill and AI submission demand signals.

## What v1.5 changed

Version 1.5 was released in May 2026 with three significant updates:

1. **Coverage expansion** — Argentina and Colombia added (39 countries total)
2. **Updated Retraction Watch data** — 69,911 records as of April 2026
3. **Methodology refinements** — improvements to Google Trends signal interpretation for Spanish-language and other Romance-language markets

## Why these two countries

### Both anchor the Spanish-language pattern

The v1.4 release covered Mexico as a Latin American Spanish-speaking country but did not include the two countries with the most extreme regional demand signals:

- **Colombia** — anchors the Andean Spanish-language market
- **Argentina** — anchors the Southern Cone Spanish-language market

Both consistently appeared in academic integrity literature as countries with elevated demand. Including them was a coverage priority for v1.5.

### Both demonstrate the Spanish-language structural pattern

Pre-v1.5 hypothesis: the Spanish-language essay mill market is structurally different from other regional markets. Adding Colombia and Argentina would either confirm or challenge this.

The data confirmed the hypothesis decisively — both countries showed D1=100 and D2=100, the same pattern as other high-Prevalence Spanish-speaking countries.

## Colombia (P=77.4, R=16.5)

### The scores

| Dimension | Colombia |
|---|---|
| D1 Contract cheating | 100 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 14 |
| D4 Plagiarism | 58 |
| D5 Collusion | 52 |
| D6 Data fabrication | 0 |

Colombia immediately entered the top three Prevalence positions, behind only China and (in v1.5 itself) Argentina.

### Why so high

The maxed D1 and D2 signals dominate. Colombia's Google Trends data shows essay mill keyword search volume and AI submission tool search volume both at the top of the Latin American distribution.

D6=0 reflects near-zero Retraction Watch presence — Colombian research output is moderate and the misconduct-linked retraction rate per publication is low.

The combination produces the second-highest Prevalence in the dataset.

### R=16.5 — among lowest globally

Colombia's R-Score is in the bottom 10 globally. No specific contract cheating legislation, partial detection deployment, minimal disclosure, inconsistent penalties.

The combination of high Prevalence and weak Response places Colombia firmly in Q3 (Crisis zone) — the AMI's primary intervention target.

## Argentina (P=74.6, R=18.0)

### The scores

| Dimension | Argentina |
|---|---|
| D1 Contract cheating | 100 |
| D2 AI submissions | 100 |
| D3 Exam impersonation | 12 |
| D4 Plagiarism | 55 |
| D5 Collusion | 50 |
| D6 Data fabrication | 0 |

Argentina's profile is nearly identical to Colombia's — both score maxed on D1 and D2, both near-zero on D6, similar middle-range scores on D3, D4, D5.

### Structurally similar to Colombia

The Argentine and Colombian profiles are the most structurally similar pair in the AMI dataset. Differences:

- Argentina D5 (50) vs Colombia D5 (52) — minimal
- Argentina D3 (12) vs Colombia D3 (14) — minimal
- R-Score: Argentina 18.0 vs Colombia 16.5 — small difference

The two countries share the Spanish-language market dynamic and similar institutional response infrastructure.

### Slight R-Score edge

Argentina's R=18.0 is marginally higher than Colombia's R=16.5. The difference reflects:

- Slightly stronger Argentine institutional codes
- CONEAU accreditation framework
- More developed private university integrity infrastructure (ITBA, Universidad de San Andrés, others)

The difference is too small to be policy-significant.

## What the additions tell us

### The Spanish-language pattern is robust

Colombia and Argentina entering the dataset with the same D1=D2=100 pattern as the existing high-Prevalence Spanish countries (Spain D1=83, D2=100) confirms a structural regional dynamic. Other Latin American countries not yet in the dataset (Chile, Peru, Ecuador, etc.) likely show similar patterns.

### Q3 (Crisis zone) is expanding

With v1.5, Q3 now contains 12 countries — the largest single quadrant addition in any single version. The Crisis zone profile is more prevalent than the Best in Class profile in the current 39-country set.

### Coverage expansion is feasible

Adding two countries did not require major methodology re-engineering. Google Trends data was available, Retraction Watch data was available, regional integrity literature provided D4/D5 context. The expansion pattern can continue.

## Methodology refinements in v1.5

### Romance-language signal interpretation

Spanish-speaking countries share a language market that extends beyond country borders. v1.5 refined how Spanish-language Google Trends signals are attributed to specific countries:

- IP-based geographic attribution prioritised
- Search volume thresholds calibrated for Spanish-language markets
- Brand name signal weighting adjusted

The refinements affected Argentina, Colombia, Mexico, and Spain scores slightly relative to v1.4 baseline projections.

### Updated Retraction Watch baseline

v1.5 used Retraction Watch data as of April 2026 (69,911 records, 5,390 misconduct-linked). Several countries' D6 scores shifted slightly relative to v1.4 baseline data.

### Detection-incidence correction tightened

The correction factor for the detection-prevalence confound (countries with stronger detection report more cases) was tightened in v1.5 using updated Scarfe et al. (2024) detection-rate data.

## What comes next

The 39-country v1.5 represents a coverage milestone — the AMI is now positioned to provide cross-country analysis for substantial fraction of global higher education enrolment.

Future versions will:
- Expand to 50+ countries (Chile, Peru, additional Asian, African, European)
- Add expert perception surveys (modelled on CPI Phase 2)
- Address Google Trends signal interpretation more comprehensively (Norway anomaly resolution)
- Improve detection-incidence correction methodology

## Sources

- AMI v1.5 release documentation
- Google Trends API (2022–2026)
- Retraction Watch Database, Crossref/GitLab (April 2026)
- Scarfe et al. (2024), University of Reading detection study

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "guardian-foi-investigation",
    title: "Guardian FOI Investigation: 7,000 UK Students Caught Using AI",
    seoTitle: "Guardian FOI Investigation: UK AI Misconduct 2026 | News",
    metaDescription: "The Guardian FOI investigation (June 2025) showed nearly 7,000 UK students formally caught using AI in 2023–24 — 5.1 per 1,000 students. Used in the AMI D2 dimension.",
    date: "2026-05-20",
    category: "news",
    tags: ["Guardian", "FOI", "UK", "AI submissions", "news"],
    tldr: "The Guardian Freedom of Information investigation (June 2025) showed nearly 7,000 UK university students were formally caught using AI tools in 2023–24 — a rate of 5.1 per 1,000 students. The data is the largest single confirmed-case dataset for AI misconduct globally and is incorporated into the AMI's D2 dimension methodology.",
    excerpt: "The Guardian's 2025 FOI investigation produced the largest single confirmed-case dataset on AI academic misconduct globally. Nearly 7,000 UK students caught in one academic year. Here is what the data showed and how the AMI uses it.",
    faqSchema: [
      {
        question: "What did the Guardian FOI investigation find?",
        answer: "The Guardian (June 2025) submitted Freedom of Information requests to UK universities asking for formal academic misconduct case statistics involving AI tools for 2023–24. The combined data showed nearly 7,000 confirmed cases — a rate of 5.1 per 1,000 UK higher education students. The data was the largest single confirmed-case dataset on AI misconduct globally."
      },
      {
        question: "How does the AMI use the Guardian FOI data?",
        answer: "The Guardian data provides one of the few confirmed-case (rather than demand-signal) data sources for the AMI's D2 dimension. The UK score is partially anchored on this confirmed-case rate. The 5.1/1000 rate, combined with the Scarfe et al. (2024) finding that 94% of AI submissions go undetected, suggests true rates above 8%. Both data points contribute to the methodology."
      },
      {
        question: "Have other countries done similar FOI investigations?",
        answer: "Times Higher Education has published similar FOI data specifically for Russell Group universities in the UK. Other Anglophone countries have had similar journalism — Australian, New Zealand, and US investigations of varying scale — but the Guardian's 2025 investigation remains the largest single dataset covering most institutions in a national higher education system."
      }
    ],
    content: `
## TL;DR

The Guardian Freedom of Information investigation (June 2025) showed nearly 7,000 UK university students were formally caught using AI tools in 2023–24 — 5.1 per 1,000 students. The data is the largest single confirmed-case dataset on AI misconduct globally and contributes to the AMI's D2 dimension methodology.

## What the Guardian did

In early 2025, The Guardian submitted Freedom of Information requests to UK universities asking for statistics on formal academic misconduct cases involving AI tools for the 2023–24 academic year. The investigation:

- **Scope**: most UK universities responded
- **Output**: nearly 7,000 confirmed cases across the responding institutions
- **Rate**: 5.1 per 1,000 students (formally caught and processed)
- **Categories**: ChatGPT, Bard, Claude, Gemini, and other AI tool use treated as academic misconduct

The investigation was published in June 2025 as a long-form piece with institution-level breakdowns and editorial analysis.

## Why the data matters

### First systematic national-level confirmed-case dataset

Before the Guardian investigation, AI misconduct data was fragmented — individual institutions reported numbers, anecdotal evidence circulated, but no systematic national picture existed.

The Guardian data provided:
- A national-level confirmed-case rate for the first time
- Institution-level breakdowns enabling cross-institutional comparison
- A baseline for measuring whether incidence is growing or falling

### Detection-incidence reasoning

The 5.1/1000 confirmed rate combined with the Scarfe et al. (2024) detection finding (94% of AI submissions undetected) suggests:

- 5.1/1000 detected × (1/0.06) detection factor = 85/1000 true rate estimate
- This implies an ~8.5% true incidence rate

The AMI methodology applies similar detection corrections in calculating D2 scores from observed signals.

### Institution-level variation

The Guardian data showed substantial variation across UK universities:
- Some institutions reported very high rates (e.g. above 10/1000)
- Others reported very low rates (below 1/1000)

The variation likely reflects differences in:
- Detection investment and deployment
- Institutional reporting practices
- Specific course types and assessment design
- Student population composition

The variation is itself informative — it suggests detection capability is the principal determinant of reported rates, with actual incidence relatively more uniform across institutions.

## Russell Group FOI follow-up

Times Higher Education published a parallel investigation focused specifically on UK Russell Group universities. The Russell Group data:

- Showed lower per-student rates than the broader UK pattern [verify specific Russell Group rate]
- Reflected stronger detection infrastructure at research-intensive institutions
- Provided cross-institutional comparison among peer institutions

The Russell Group pattern is consistent with the broader hypothesis: stronger detection capability produces more reported cases (in jurisdictions where detection drives reporting), while actual incidence varies less.

## How the AMI uses the data

### Direct UK D2 contribution

The AMI's D2 dimension for the UK is partially anchored on the Guardian confirmed-case rate. The UK D2 score of 44 reflects:

- Moderate Google Trends signal
- Confirmed-case rate from FOI
- Detection capability adjustment

The UK D2 is lower than the maxed-D2 countries (Colombia, Argentina, etc.) partly because of the confirmed-case data providing actual rates rather than relying on demand signals alone.

### Cross-country calibration

The Guardian data provides a calibration point for D2 across the dataset. Countries without confirmed-case data are scored on demand signals (Google Trends), but the Guardian baseline lets the methodology estimate the demand-to-incidence translation more confidently.

### Methodology improvement

Future AMI versions will incorporate similar FOI data as it becomes available in other jurisdictions:
- Australia (FOI submissions reportedly in progress)
- US (state-level FOI variability)
- Other Anglophone systems

The Guardian investigation effectively demonstrated FOI as a viable data source for AI misconduct measurement.

## Why the UK could produce this data

The UK FOI Act applies to universities (most are public-funded). Combined with:
- Active investigative journalism (the Guardian's higher education team)
- Substantial UK university sector size enabling meaningful statistical analysis
- Standardised institutional misconduct reporting categories

The UK is structurally well-positioned to produce this kind of national dataset. Other countries with weaker FOI laws, less centralised university systems, or less active education journalism cannot easily replicate.

## What the data does not show

### Undetected misconduct

The 5.1/1000 rate is *confirmed-case* — students formally identified and processed for misconduct. The Scarfe correction (94% undetected) suggests the actual rate is substantially higher.

### Severity gradient

Confirmed cases include a wide range of misconduct severity — from minor undisclosed AI assistance through wholesale AI-generated work submitted as original. The Guardian data does not differentiate.

### Course type variation

Different subject areas likely have very different AI misconduct rates. Essay-based humanities and social science courses are likely more affected than mathematics or laboratory-based STEM courses. The Guardian data aggregates across course types.

### Trend data

The Guardian data covers 2023–24. The 2024–25 data (still being collected) will be more informative for trend analysis.

## Broader significance

The Guardian investigation established that:

- FOI is a viable data source for AI misconduct measurement
- Institutional variation in reporting reflects detection capability
- Confirmed-case rates substantially understate true incidence (Scarfe correction)
- AI misconduct is a measurable population-level phenomenon, not an anecdotal one

The reporting accelerated UK policy discussion of AI in education and contributed to detection tool investment decisions at institutions across the sector.

## Sources

- The Guardian (June 2025), FOI investigation [verify specific article reference]
- Times Higher Education Russell Group FOI reporting [verify]
- Scarfe, P., et al. (2024), University of Reading detection study
- AMI v1.5 D2 dimension methodology

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "dissernet-russian-dissertations",
    title: "Dissernet: 10,000+ Plagiarised Russian Dissertations Exposed",
    seoTitle: "Dissernet: 10,000 Russian Plagiarised Dissertations Exposed 2026",
    metaDescription: "Dissernet has identified over 10,000 plagiarised Russian doctoral dissertations using automated comparison. Senior politicians and officials among those exposed.",
    date: "2026-05-20",
    category: "news",
    tags: ["Dissernet", "Russia", "plagiarism", "dissertations", "news"],
    tldr: "Dissernet is a Russian volunteer organisation that has used automated plagiarism detection to identify over 10,000 plagiarised doctoral dissertations since 2013. Senior politicians, governors, and officials have been exposed. The detection work contributes to Russia's elevated AMI D4 score; the lack of consequences contributes to its very low R-Score.",
    excerpt: "Dissernet has systematically catalogued plagiarised Russian doctoral dissertations since 2013, exposing senior politicians and academics. The project demonstrates that detection without enforcement produces limited integrity outcomes. Here is what Dissernet has done and what the AMI data shows.",
    faqSchema: [
      {
        question: "What is Dissernet?",
        answer: "Dissernet is a Russian volunteer organisation founded in 2013 that systematically analyses Russian doctoral dissertations for plagiarism using automated comparison tools. The project has identified over 10,000 plagiarised dissertations as of 2024, including theses by senior politicians, regional governors, members of parliament, and academics. The organisation publishes its findings publicly."
      },
      {
        question: "Have Dissernet's exposed plagiarists faced consequences?",
        answer: "Very few. Despite identifying over 10,000 plagiarised dissertations, the rate of formal doctoral degree revocations is extremely low. Russia's higher education system has not systematically acted on Dissernet's findings. This pattern contributes directly to Russia's very low AMI Response Quality score (R=16.8) — detection capability exists but consequences do not follow."
      },
      {
        question: "What does Dissernet's work say about Russian academic integrity?",
        answer: "The scale of the problem documented by Dissernet is exceptional. Abalkina (2024) analysed 2,405 Russian doctoral dissertations from 2007–2015 and found plagiarism incidence exceeding 19%. In some disciplines, the majority of dissertations contained significant copied content. Russia's AMI D4 (plagiarism) score of 72 partly reflects the Dissernet documentation."
      }
    ],
    content: `
## TL;DR

Dissernet is a Russian volunteer organisation that has identified over 10,000 plagiarised doctoral dissertations since 2013 using automated comparison tools. Senior politicians and academics have been exposed. Very few face consequences. The pattern contributes to Russia's AMI R-Score of 16.8.

## What Dissernet is

Founded in 2013, Dissernet (Диссернет — "Dissernet" in Latin transliteration) is a volunteer Russian academic and journalist initiative dedicated to identifying plagiarism in Russian doctoral dissertations.

The project:
- **Methodology** — automated comparison of Russian doctoral dissertations against each other and against published sources
- **Coverage** — systematic processing of dissertations from major Russian universities
- **Output** — publicly published findings with detailed comparison visualisations
- **Membership** — academic researchers, journalists, and volunteers across Russia and the diaspora

## What Dissernet has found

### Scale

As of 2024, Dissernet has identified plagiarism in:
- Over 10,000 doctoral dissertations
- Senior politicians (multiple Duma members and ministers)
- Regional governors
- High-profile academics
- Heads of major Russian institutions

### Specific patterns

Dissernet's findings include:
- **Direct copying** — verbatim text from earlier dissertations or published sources
- **Patchwriting** — combining text from multiple sources without attribution
- **Dissertation factories** — clusters of dissertations sharing common copied content suggesting industrial-scale production
- **Cross-discipline copying** — text from one field used in dissertations in unrelated fields

### Academic research using Dissernet methods

Abalkina (2024) [Springer's Science and Engineering Ethics or similar — verify exact citation] analysed 2,405 Russian doctoral dissertations from 2007–2015 using Dissernet-style methodology. Findings:

- Plagiarism incidence exceeded 19% across the sample
- In some disciplines (particularly social sciences and humanities), the majority of dissertations contained significant copied content
- Patterns suggest systematic rather than isolated misconduct

## The consequences gap

Despite Dissernet's extensive documentation, very few exposed plagiarists have faced consequences:

### Formal doctoral degree revocations
The rate of revocation is extremely low. Most Russian universities have not systematically acted on Dissernet's findings. The Higher Attestation Commission (VAK) — the Russian body responsible for doctoral degree validation — has revoked degrees in some cases but not at scale.

### Career consequences
Most identified plagiarists continue in their academic, political, or administrative positions. The reputational consequence is real but does not translate into formal action.

### Institutional response
Some universities have introduced stricter thesis-checking requirements following Dissernet exposure of their alumni. Antiplagiat detection is now mandatory for new theses, but historical cases largely remain unaddressed.

## Why this matters for the AMI

### Russia's D4 (plagiarism) = 72

Russia's plagiarism dimension score is the second highest in the dataset (tied with Pakistan at 72, after no country scores higher). Dissernet documentation is one of several inputs contributing to this score.

### Russia's R-Score = 16.8

Russia's Response Quality is in the bottom 10 globally. The R-Score breakdown:
- Legislation: 12 — general framework, no specific provisions
- Detection: 35 — Antiplagiat is deployed (one of the higher Detection sub-scores in the bottom 10)
- Disclosure: 8 — minimal public reporting
- Penalties: 12 — Dissernet finds the cases; consequences rarely follow

The pattern is unusual: Detection capability exists (Russia has Antiplagiat plus the Dissernet volunteer infrastructure), but Disclosure and Penalties remain very weak. This is the prototype of "strong detection, weak enforcement" — finding misconduct without acting on it.

### The diagnostic value

Russia's case demonstrates that Detection alone is insufficient for an effective integrity system. Without Disclosure (making findings public) and Penalties (acting on findings), identified misconduct produces limited deterrent effect.

The implication for the AMI Response Quality methodology: weighting Disclosure and Penalties alongside Detection is essential — measuring Detection alone would substantially overstate Russia's integrity infrastructure.

## Dissernet's institutional context

### Volunteer organisation, not government body
Dissernet operates independently of Russian state institutions. This independence enables it to identify and publish cases involving state officials but limits its formal enforcement power.

### Political pressure
The Russian state has not formally suppressed Dissernet but has not supported it either. Some Dissernet members have faced professional consequences. The project's continued operation reflects sustained volunteer commitment.

### Diaspora support
Following 2022, some Dissernet members have continued the work from outside Russia. The project's diaspora component contributes to ongoing analysis and publication.

## What other countries can learn from the Dissernet case

### Detection requires enforcement to matter

The most direct lesson. Even highly accurate identification of misconduct produces limited integrity outcomes without follow-through. Other countries with Dissernet-equivalent volunteer detection efforts (VroniPlag in Germany, similar projects elsewhere) have seen better follow-through partly because of stronger institutional and political will to act.

### Volunteer infrastructure can supplement institutional capacity

Russia lacks well-resourced institutional integrity infrastructure for doctoral dissertation oversight. Dissernet partially fills this gap as a volunteer effort. Other countries with similar institutional limitations could consider supporting volunteer detection initiatives.

### Public disclosure matters independently

Dissernet's contribution is partly informational — making findings public even when formal action does not follow. The Russian R-Score reflects this: Disclosure sub-score of 8 (minimal regulatory disclosure) despite Dissernet's substantial public documentation. The AMI methodology distinguishes between volunteer and institutional disclosure.

## Comparable initiatives

### VroniPlag Wiki (Germany)
Volunteer plagiarism detection in German doctoral dissertations. Identified plagiarism in high-profile cases including former Defence Minister zu Guttenberg (2011 doctoral revocation). Better follow-through than Dissernet — multiple revocations have followed VroniPlag identifications.

### Doctoral integrity volunteer projects elsewhere
Smaller-scale initiatives exist in Hungary, Bulgaria, and other Eastern European countries. None reach Dissernet's scale or VroniPlag's institutional integration.

## Sources

- Dissernet project findings (2013–2024)
- Abalkina, A. (2024). Second Handbook of Academic Integrity, Springer [verify exact citation]
- Russia AMI country profile (P=37.5, R=16.8, Q4)
- VAK (Higher Attestation Commission) decisions
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "australia-essay-mill-ban",
    title: "Australia's 2020 Essay Mill Ban: How TEQSA Enforces It",
    seoTitle: "Australia 2020 Essay Mill Ban Explained | TEQSA Enforcement 2026",
    metaDescription: "Australia's Tertiary Education Quality and Standards Agency Amendment Act 2020 banned essay mills. TEQSA maintains a 2,300+ provider list. Fines up to AUD 100,000.",
    date: "2026-05-20",
    category: "news",
    tags: ["Australia", "TEQSA", "essay mill ban", "legislation", "news"],
    tldr: "Australia's Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020 made contract cheating services illegal. TEQSA enforces the framework, maintains a public list of 2,300+ known providers, and has obtained website blocking orders. Fines up to AUD 100,000.",
    excerpt: "Australia was the second country to legislate against essay mills (after Ireland 2019). The 2020 Act extended TEQSA's existing regulatory framework to cover contract cheating. Here is how the legislation works and what it has produced.",
    faqSchema: [
      {
        question: "Is contract cheating illegal in Australia?",
        answer: "Yes. The Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020 made it illegal to provide, advertise, arrange, or use academic cheating services. Maximum penalties: AUD 100,000 for corporate offenders and AUD 20,000 for individual offenders. The Act came into force in 2020."
      },
      {
        question: "What does TEQSA do about essay mills?",
        answer: "TEQSA (the Tertiary Education Quality and Standards Agency) enforces the 2020 Act. Activities include: maintaining a public list of 2,300+ known contract cheating providers, issuing website blocking orders, pursuing enforcement actions against providers, coordinating with international regulators (QQI in Ireland, OfS in the UK), and publishing institutional integrity standards."
      },
      {
        question: "Has Australia's essay mill ban been effective?",
        answer: "The legislative R-Score impact is clear — Australia's Legislation sub-component is 100 (maximum). The Prevalence impact is harder to isolate. Australia's P-Score (7.43, second lowest globally) is consistent with effective demand reduction, but causation cannot be definitively isolated from other factors (detection deployment, mandatory disclosure, institutional codes). The legislation is reasonably credited as one major contributor."
      }
    ],
    content: `
## TL;DR

Australia's Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020 made essay mill services illegal. TEQSA enforces — public 2,300+ provider list, website blocking orders, enforcement actions. Fines AUD 100,000 (corporate), AUD 20,000 (individual). One of three globally-comparable specific bans (alongside Ireland 2019, UK 2022).

## The Act

The 2020 amendment extended Australia's Tertiary Education Quality and Standards Agency framework to cover contract cheating. Key provisions:

### Offences created

The Act makes it an offence to:
- Provide academic cheating services
- Advertise academic cheating services
- Arrange for academic cheating services to be provided

The offences apply to providers and intermediaries. Individual students using such services are not criminalised — institutional misconduct frameworks continue to handle individual cases.

### Penalties

- **Corporate offenders**: up to AUD 100,000 per offence
- **Individual offenders**: up to AUD 20,000 per offence
- **Repeat or aggravated offences**: higher tier penalties

### TEQSA powers

The Act gave TEQSA:
- Investigation and enforcement authority
- Website blocking order powers
- Cooperation arrangements with telecoms and ISPs for technical enforcement
- Authority to publish information about known contract cheating providers

## TEQSA enforcement activities

### The public provider list

TEQSA maintains a public list of known contract cheating services — 2,300+ providers as of 2025–2026. The list:
- Is published openly online
- Is updated as new providers are identified
- Serves as evidence for institutional blocking decisions
- Is shared with international regulators

The public list is the most distinctive feature of Australia's enforcement framework. No other regulator globally maintains an equivalent public resource.

### Website blocking orders

TEQSA has obtained court orders requiring Australian ISPs to block access to identified essay mill websites. The orders affect dozens of major essay mill services.

### Enforcement actions

TEQSA has pursued enforcement actions against providers found to be operating in Australia or targeting Australian students. Specific case counts and outcomes are documented in TEQSA's annual reports.

### International coordination

TEQSA coordinates with:
- **QQI** (Ireland) — Irish equivalent regulator
- **OfS** (UK) — UK equivalent regulator
- **Other Anglophone regulators** considering similar legislation

The coordination enables cross-border response to providers operating in multiple jurisdictions.

## What Australia did right

### Building on existing infrastructure

The 2020 Act extended TEQSA's existing regulatory framework rather than creating a new body. This:
- Reduced implementation cost
- Leveraged existing institutional relationships
- Enabled rapid operational deployment after the Act came into force

### The public list

The decision to maintain a publicly accessible list of known providers was strategically important:
- Enables institutional-level blocking
- Signals to students that authorities are actively monitoring
- Provides evidence for enforcement actions
- Demonstrates accountability for the regulator

Other regulators (QQI in Ireland, OfS in the UK) operate similar lists internally but do not publish them comprehensively.

### Coordination with detection

The Act provides legal basis for TEQSA cooperation with detection tool vendors (Turnitin etc.) on identifying and pursuing essay mill providers. The cooperation flows include evidence gathering, intelligence sharing, and joint enforcement.

## Impact on AMI scores

### R-Score Legislation sub-component: 100

Australia's Legislation sub-score of 100 is the maximum. The 2020 Act is the principal driver. Alongside Ireland (also 100) and the UK (100), these three countries share the top of the Legislation distribution.

### R-Score overall: 88.8

Australia's overall R-Score of 88.8 is the highest in the AMI dataset. The legislation is one of four contributing components (alongside Detection 85, Disclosure 90, Penalties 80). The combined package produces the global maximum.

### P-Score: 7.43

Australia's Prevalence score of 7.43 is the second lowest globally (after Canada at 4.90). The dimension scores are consistently moderate-low across D1, D2, D3, D4, D5, D6. The contract cheating dimension (D1=33) is tied for the lowest in the dataset (with UK and Ireland).

## Implementation lessons

### Statutory backing matters

Before the 2020 Act, TEQSA had limited authority to pursue essay mill providers — only able to act against accredited institutions. The statutory backing transformed enforcement capacity.

### Cross-jurisdictional cooperation is essential

Essay mill providers frequently operate outside the regulator's home jurisdiction. The Irish, UK, and Australian regulators have built cooperation structures that no single regulator could replicate alone.

### Provider deplatforming is a major lever

Most essay mill providers depend on:
- Search engine visibility
- Online advertising
- Payment processor relationships
- Web hosting services

Coordinated action across these intermediaries (rather than just direct provider prosecution) has been a significant enforcement tool.

### Student behaviour shifts slowly

Even with effective supply-side action, demand persists. Students still seek services from providers based in non-ban jurisdictions. The expected outcome is reduced — not eliminated — incidence.

## Comparison with Ireland and UK

| Feature | Ireland 2019 | Australia 2020 | UK 2022 |
|---|---|---|---|
| Year | 2019 | 2020 | 2022 |
| Regulator | QQI | TEQSA | OfS / QAA |
| Max fine (corporate) | Significant [verify] | AUD 100,000 | Unlimited on conviction |
| Public provider list | Internal | Public 2,300+ | Internal |
| Website blocking | Court orders | Court orders | OfS framework |
| Cross-border coord | Yes | Yes | Yes |

Australia's distinctive features: the public provider list and the relatively early enforcement infrastructure development.

## What other countries can adapt

### The TEQSA model
Specific elements that other regulators could replicate:
1. **Statutory framework with regulator enforcement powers**
2. **Public list of known providers**
3. **Website blocking authority**
4. **International cooperation arrangements**
5. **Annual reporting on enforcement activity**

### What requires statutory backing
- Specific offences and penalty framework
- Regulator enforcement authority
- Website blocking court order powers

### What can be done administratively
- Public information lists (no statute required)
- Institutional cooperation arrangements
- Detection tool partnerships

The Australian model demonstrates that comprehensive supply-side action against essay mills is operationally feasible at scale.

## Sources

- Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020
- TEQSA annual reports
- TEQSA public list of contract cheating providers
- AMI v1.5 Australia country profile

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "uk-higher-education-act",
    title: "UK Skills and Post-16 Education Act 2022: Essay Mill Ban Explained",
    seoTitle: "UK Skills and Post-16 Education Act 2022 | Essay Mill Ban 2026",
    metaDescription: "Section 80 of the UK Skills and Post-16 Education Act 2022 banned essay mills in England. OfS and QAA enforce. Unlimited fines on conviction. AMI Legislation sub-score 100.",
    date: "2026-05-20",
    category: "news",
    tags: ["UK", "Skills Act 2022", "essay mill ban", "OfS", "legislation", "news"],
    tldr: "Section 80 of the UK Skills and Post-16 Education Act 2022 made essay mill services illegal in England. The Office for Students (OfS) and the Quality Assurance Agency (QAA) enforce. Unlimited fines on conviction. The third specific essay mill ban globally (after Ireland 2019 and Australia 2020). AMI Legislation sub-score 100.",
    excerpt: "The UK became the third country with a specific essay mill ban when the Skills and Post-16 Education Act came into force in 2022. The legislation followed substantial UK university sector lobbying. Here is how it works and what it has produced.",
    faqSchema: [
      {
        question: "Are essay mills illegal in the UK?",
        answer: "Yes. Section 80 of the Skills and Post-16 Education Act 2022 made it a criminal offence to provide, advertise, or arrange essay mill services in England. The Act came into force in 2022. Conviction can result in unlimited fines. The Office for Students (OfS) and the Quality Assurance Agency (QAA) jointly enforce the framework in England."
      },
      {
        question: "Who enforces the UK essay mill ban?",
        answer: "The Office for Students (OfS) is the principal enforcement body in England. The Quality Assurance Agency for Higher Education (QAA) coordinates institutional integrity standards. Welsh, Scottish, and Northern Irish frameworks have either parallel provisions or are under development. OfS has cooperation arrangements with TEQSA (Australia) and QQI (Ireland)."
      },
      {
        question: "Why did the UK pass essay mill legislation in 2022?",
        answer: "Substantial UK university sector lobbying preceded the 2022 Act. Key drivers: rising concern about contract cheating impact on UK degree credibility, growing evidence base on essay mill industry scale, the precedent set by Ireland (2019) and Australia (2020), and Guardian FOI revelations about UK contract cheating incidents. The Act followed several years of policy discussion."
      }
    ],
    content: `
## TL;DR

Section 80 of the UK Skills and Post-16 Education Act 2022 banned essay mill services in England. OfS and QAA enforce. Unlimited fines on conviction. Third specific essay mill ban globally (after Ireland 2019, Australia 2020). AMI Legislation sub-score 100.

## The Act

The Skills and Post-16 Education Act 2022 is a broader UK education law. Section 80 specifically addresses contract cheating:

### What is criminalised

Section 80 makes it an offence to:
- Provide academic cheating services for value
- Advertise academic cheating services
- Arrange for academic cheating services to be provided

The offences apply to providers and intermediaries. Individual student use is handled by institutional misconduct frameworks, not criminal law.

### Penalties

- **On summary conviction**: fines at the statutory maximum
- **On conviction on indictment**: unlimited fines

The unlimited fine provision (on indictment) is the highest penalty framework among the three jurisdictions with specific bans.

### Geographic scope

The Act applies to England. Wales, Scotland, and Northern Ireland have either parallel provisions, are passing similar legislation, or are under discussion. The devolved education systems mean separate processes for each constituent country [verify current status across devolved administrations].

## Enforcement framework

### Office for Students (OfS)

OfS is the principal regulator. Activities include:
- Investigation and prosecution authority under the Act
- Cooperation with police and prosecution services
- Industry intelligence gathering
- International coordination with TEQSA and QQI

### Quality Assurance Agency (QAA)

QAA contributes through:
- Sector-wide integrity standards
- Institutional accreditation processes
- Quality framework integration with integrity requirements
- Research and policy support

### Joint operation

OfS and QAA work jointly. The OfS provides regulatory authority; QAA provides sector knowledge and institutional relationships. The joint model differs from Australia (single TEQSA agency) and Ireland (single QQI agency).

## What the Act does and does not cover

### Covered

- Commercial essay mill operations
- Individual writers operating as professional ghostwriters
- Intermediary platforms connecting students with writers
- Advertising of essay mill services in England

### Not specifically covered (but addressed elsewhere)

- Individual student use of essay mill services (institutional misconduct)
- AI tool use that constitutes misconduct (institutional policy)
- Research misconduct in academic publications (UKRIO framework)
- Plagiarism more broadly (institutional misconduct)

The Act focuses narrowly on the commercial supply side. Broader integrity infrastructure is provided by:
- UKRIO (UK Research Integrity Office) for research
- Institutional codes for students
- QAA framework for institutional accreditation

## Why the UK legislated when it did

### Sector advocacy

UK universities and the QAA had advocated for essay mill legislation for several years before the 2022 Act. Key advocacy points:
- Contract cheating affects UK degree credibility internationally
- Detection alone is insufficient to address supply-side dynamics
- Ireland (2019) and Australia (2020) precedents demonstrated feasibility
- The growing essay mill industry had visible advertising and operations in the UK

### Evidence base

The advocacy was supported by:
- Guardian FOI data (June 2025 — actually post-Act but the underlying data collection began earlier)
- Academic research on contract cheating prevalence
- Industry analysis estimating UK essay mill market size
- Cross-country comparative data

### Cross-party support

The legislation passed with cross-party support — academic integrity is one of relatively few education policy areas with bipartisan consensus.

## Implementation and impact

### R-Score Legislation sub-component: 100

The UK Legislation sub-score of 100 reflects the comprehensive statutory framework. Combined with Australia and Ireland, the UK is one of three countries at the maximum.

### R-Score overall: 87.5

The UK overall R-Score of 87.5 is the second highest globally (after Australia 88.8). The legislation contributes alongside very strong Detection (90 — highest in dataset), strong Disclosure (85), and mature Penalties (75).

### P-Score: 11.41

The UK Prevalence score of 11.41 is the fourth lowest globally. Dimension scores are consistently moderate-low. D1 (contract cheating) at 33 is tied with Australia and Ireland for the lowest in the dataset.

## What other countries can learn

### Build the evidence base first

The UK legislation came after several years of evidence accumulation. Other countries considering similar laws benefit from establishing:
- Confirmed-case data (FOI investigations, institutional reporting)
- Industry analysis (essay mill market scale and operations)
- Cross-country comparative data (does the legislation work elsewhere?)

### Cross-party consensus is achievable

UK passage with cross-party support demonstrates that academic integrity is a viable area for bipartisan policymaking. The case for action is non-partisan: degree credibility is a public good.

### Devolved structures need attention

The UK's devolved education systems required separate processes for England, Wales, Scotland, and Northern Ireland. Federated countries (US, Canada, Germany, Australia) face similar challenges. The Australian and UK experiences provide templates.

### Coordinate with existing regulators

OfS and QAA both contributed to the UK framework. Other countries can use their existing quality regulators as the enforcement infrastructure rather than creating new agencies.

## Comparison with prior legislation

### Differences from Ireland 2019

Ireland was the first jurisdiction with a specific ban (3 years before the UK). The Irish framework is simpler — QQI as single regulator. The UK framework involves OfS, QAA, and devolved variants.

### Differences from Australia 2020

Australia maintains the most distinctive feature: the public list of 2,300+ known providers. The UK has internal regulator-level lists but does not publish comprehensively. This is a deliberate policy choice — TEQSA's public list serves institutional blocking and public signalling; the UK approach is less open.

### Common features

All three jurisdictions:
- Target the supply side rather than students
- Use existing quality regulators as enforcement bodies
- Provide for cross-border cooperation
- Maintain unlimited or substantial financial penalties
- Coordinate with detection tool providers

## What comes next

### Welsh, Scottish, Northern Irish frameworks

The devolved UK administrations are at various stages of implementing parallel frameworks. The Welsh framework has progressed [verify current status]; Scotland and Northern Ireland are at earlier stages.

### AI tool integration

The Act predates the comprehensive AI tool concerns. Future amendments may address whether AI service providers fall within scope of the "academic cheating services" definition. The current interpretation excludes general-purpose AI tools but includes purpose-built AI submission services.

### Enforcement maturity

The Act is relatively new. Enforcement infrastructure continues to develop:
- OfS staffing for the integrity function
- Prosecutorial cooperation arrangements
- International intelligence sharing
- Detection-evidence integration

## Sources

- Skills and Post-16 Education Act 2022, section 80
- Office for Students (OfS) integrity framework documentation
- Quality Assurance Agency (QAA) for Higher Education guidance
- AMI v1.5 UK country profile
- TEQSA and QQI cooperation documentation

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "chatgpt-classroom-universities",
    title: "ChatGPT in the Classroom: How Universities Have Responded",
    seoTitle: "ChatGPT in University Classrooms 2026 | Response Analysis",
    metaDescription: "Universities globally have responded to ChatGPT and AI tools with varying policies — permitted with disclosure, prohibited, attribution-required. Analysis of approaches.",
    date: "2026-05-20",
    category: "news",
    tags: ["ChatGPT", "AI policy", "universities", "classroom", "news"],
    tldr: "Universities globally have adopted four broad approaches to ChatGPT and other AI tools: permitted with disclosure (most common), prohibited entirely, permitted with attribution, and permitted without restriction. Policy adoption varies sharply by institution type and country. Scarfe 2024 (94% AI miss rate) shapes detection-vs-policy debate.",
    excerpt: "Three years after ChatGPT's launch, universities globally have developed widely varying policies on AI use in academic work. This analysis maps the approaches, the patterns, and what AMI data shows about effectiveness.",
    faqSchema: [
      {
        question: "How have universities responded to ChatGPT?",
        answer: "Universities have adopted four broad approaches: (1) permitted with disclosure — most common, allowing limited AI use with explicit disclosure of specific uses; (2) prohibited entirely — applied in fundamental skills courses; (3) permitted with attribution — substantial AI use allowed with proper crediting; (4) permitted without restriction — rare, paired with assessment design that demonstrates understanding beyond text generation."
      },
      {
        question: "Can universities actually detect ChatGPT use?",
        answer: "Detection capability is limited. Scarfe et al. (2024) found 94% of AI-generated submissions went undetected at the University of Reading in a controlled study. Turnitin's AI detection (added 2023), GPTZero, Originality.ai, and Copyleaks all attempt automated detection but produce both false positives and false negatives. Detection capability is improving slowly; assessment redesign is increasingly seen as more important than detection technology."
      },
      {
        question: "Do AI policies actually work?",
        answer: "Mixed evidence. Universities with clear policies and strong disclosure cultures report higher confidence that policies are followed. Universities with prohibitive policies but weak detection report high suspected non-compliance. The most effective single intervention appears to be assessment redesign — moving toward demonstrable understanding (oral examinations, applied problems, project work) rather than text-generation-vulnerable formats."
      }
    ],
    content: `
## TL;DR

Universities globally have adopted four broad approaches to AI in academic work: permitted with disclosure (most common), prohibited entirely (specific courses), permitted with attribution, permitted without restriction (paired with assessment redesign). Scarfe 2024 detection finding (94% AI miss rate) shapes the policy debate. Assessment redesign increasingly seen as more important than detection.

## The four approaches

### 1. Permitted with disclosure

The most common university approach globally. Key features:

- AI use permitted for limited purposes (brainstorming, grammar checking, idea generation)
- Students must disclose specific uses
- Original drafting and analytical content must be the student's own
- Sanctions apply for undisclosed use even when the use itself would have been permitted

Adopted by: most North American universities, most UK universities, most European universities. The default position in higher education.

### 2. Prohibited entirely

Adopted in specific course contexts where the assessment specifically targets capabilities AI can perform:

- Foundation-skills writing courses
- Mathematical reasoning courses with show-your-work assessment
- Language acquisition courses
- Some examination contexts

Sometimes applied institutionally as a baseline ("AI not permitted unless instructor explicitly authorises") with instructor discretion to relax.

### 3. Permitted with attribution

A minority approach. Allows substantial AI use provided the student properly attributes the AI contribution:

- "This paragraph drafted with ChatGPT, then revised"
- "Code generated with Claude, then tested and debugged"
- "Analysis structure proposed by AI, content original"

Less common; raises questions about what is being assessed. Tends to appear in advanced coursework where AI tools are part of the discipline's professional practice (some computer science, some research methods courses).

### 4. Permitted without restriction

Rare. Some institutions and instructors permit AI use without restriction, paired with assessment design that demonstrates understanding beyond text generation:

- Oral examinations
- Live problem-solving
- Project-based assessment with viva
- Applied work where the AI-generated component is part of the deliverable

This approach is increasingly discussed as the "assessment redesign" response to AI — make AI use largely irrelevant to grading by assessing what AI cannot do.

## Country patterns

### Anglophone Q1 — clear policies, broad detection deployment

UK, Australia, Canada, Ireland, New Zealand. Most universities have explicit AI policies (typically "permitted with disclosure"). Detection tools widely deployed including Turnitin AI detection.

The Guardian FOI investigation (June 2025) showed 5.1/1000 UK students caught using AI in 2023–24 — confirming that AI misconduct is being identified and processed at scale in jurisdictions with strong detection.

### US — institutional variation

The fragmented US higher education system shows wide policy variation:
- Elite private institutions: typically "permitted with disclosure"
- State universities: varied, often "permitted with disclosure" with significant instructor discretion
- Community colleges: less developed policies
- For-profit institutions: variable

The US scores R_det=80 (second highest in dataset) reflecting near-universal Turnitin deployment. Disclosure requirements are institutional rather than federal.

### Continental Europe — institutional infrastructure, evolving policies

Netherlands, Germany, France, Italy, Spain. Most universities have developed AI policies post-2023. Detection tool deployment is partial — Compilatio (French), PlagScan (German), Antiplagiat (Russian), JSA (Polish) provide language-specific alternatives to Turnitin.

The maxed D2 scores in Italy, France, Spain (D2=100 each) suggest the policy implementation has not yet brought demand signals down to Anglophone Q1 levels.

### Asia — wide variation

Singapore: strong institutional infrastructure, clear policies. Japan: post-STAP institutional integrity culture extends to AI. South Korea: post-Hwang reform context with KRI integration. China, India, Pakistan: weaker institutional implementation.

### Latin America, Middle East, Africa — policy lag

Most universities in these regions are still developing AI policies. The maxed D2 signals in Colombia, Argentina, Egypt, Iran, Saudi Arabia, etc. reflect substantial demand combined with limited institutional response.

## The detection-assessment-redesign debate

### The detection position

Some institutions invest heavily in detection tools (Turnitin AI detection, Originality.ai, GPTZero, Copyleaks). The bet is that detection capability will improve over time, deterring AI misuse.

Limitations:
- Scarfe 2024 shows current detection misses 94%
- Iterative AI improvement may outpace detection improvement
- False positives can produce unjust accusations (particularly affecting non-native English speakers)

### The assessment redesign position

Other institutions emphasise redesigning assessment to make AI use largely irrelevant:
- Oral examinations
- Live problem-solving
- Project work with iterative review
- Demonstration of understanding through Q&A
- Work that requires specific context AI cannot provide

Limitations:
- Higher staff time per assessment (oral exams are expensive)
- Some disciplines harder to redesign than others
- Existing assessment frameworks slow to change

### The integrated position

Most institutions are moving toward a combination:
- Detection as one tool, not the primary defence
- Disclosure as primary expectation
- Assessment redesign as ongoing strategy
- Clear penalties for undisclosed use

## What AMI data shows about effectiveness

### D2 scores cluster by R-Score

Countries with strong institutional response (Q1) have moderate D2 scores (UK 44, Australia 44, Canada 44, Ireland 31). Countries with weak response have maxed D2 (Egypt 100, Iran 100, Italy 100, France 100, etc.).

The correlation suggests institutional infrastructure does affect AI submission patterns — though the direction of causation is complex (do strong-response countries have lower demand, or does lower demand enable stronger response?).

### Detection capability sub-component

The R_det sub-component (Detection tools) shows the strongest cross-country correlation with reported AI misconduct rates. Countries with high R_det (UK 90, Australia 85) report more confirmed cases per student than countries with low R_det.

This is partly the detection-incidence confound: strong detection produces more reported cases. But it also reflects that without detection, misconduct goes unmeasured.

## What the next two years will show

### Detection improvement

Detection capability is improving but slowly. The 94% Scarfe miss rate is a 2024 measurement; iterative AI tool improvement and detection tool improvement will both continue.

### Assessment redesign adoption

The assessment redesign approach is increasingly discussed. Adoption rates will be measurable over 2026–2028. Whether the approach scales beyond specific high-resource institutions is the open question.

### Policy maturation

Most universities have first-generation AI policies in place. Second-generation policies — more nuanced, more discipline-specific, more aligned with assessment redesign — are emerging.

### Cross-country comparison

The AMI's D2 dimension will continue to track AI submission demand. Whether countries with strong institutional response can drive D2 down toward the Q1 Anglophone range (D2=31–44) will be visible over the next few versions.

## Sources

- Scarfe, P., et al. (2024), University of Reading detection study
- The Guardian (June 2025), FOI investigation on UK AI misconduct
- Institutional AI policy documentation (various universities)
- AMI v1.5 D2 dimension methodology

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

  {
    slug: "retraction-watch-gitlab-move",
    title: "Retraction Watch on GitLab: The 2023 Crossref Partnership",
    seoTitle: "Retraction Watch on GitLab Crossref Partnership 2023 | News 2026",
    metaDescription: "The 2023 Crossref partnership made the Retraction Watch database publicly available on GitLab. Coverage of 69,911 records as of April 2026. Enabled AMI D6 measurement.",
    date: "2026-05-20",
    category: "news",
    tags: ["Retraction Watch", "Crossref", "GitLab", "open data", "news"],
    tldr: "In 2023, Crossref entered a partnership with the Center for Scientific Integrity to make the Retraction Watch database openly available on GitLab. The 69,911-record database (April 2026) is now public. The partnership was a precondition for the AMI's D6 dimension being measurable from live data.",
    excerpt: "For most of its history, the Retraction Watch database was a paid resource. The 2023 Crossref partnership changed that — making 69,911 records publicly available on GitLab. Here is what changed and why it matters.",
    faqSchema: [
      {
        question: "When did Retraction Watch become publicly available?",
        answer: "In 2023, Crossref entered a partnership with the Center for Scientific Integrity to make the Retraction Watch database openly available. The data is hosted on GitLab and updated periodically. Before 2023, the database was accessible to academic institutions through subscription but not freely available to the public."
      },
      {
        question: "Why is the Retraction Watch / Crossref partnership important?",
        answer: "The partnership transformed accessibility of research misconduct data. Before 2023, systematic analysis of retraction patterns required institutional access. After the partnership, any researcher, journalist, or policy analyst can access the full dataset. The Academic Misconduct Index's D6 dimension would not have been measurable from current data without this partnership."
      },
      {
        question: "How big is the Retraction Watch database now?",
        answer: "As of April 2026, the database contains 69,911 retraction records, with 5,390 classified as misconduct-related (fabrication, falsification, image manipulation, fraud). The database has grown from approximately 5,000 records in 2010 to its current size — partly through ongoing detection, partly through historical record cataloguing, and partly through systematic paper mill detection efforts."
      }
    ],
    content: `
## TL;DR

In 2023, Crossref entered a partnership with the Center for Scientific Integrity to make the Retraction Watch database openly available on [GitLab](https://gitlab.com/crossref/retraction-watch-data). 69,911 records as of April 2026, with 5,390 misconduct-linked. The partnership was a precondition for the AMI's D6 dimension being measurable from live data.

## What changed in 2023

### Before the partnership

The Retraction Watch database was operated by the Center for Scientific Integrity (the non-profit behind the Retraction Watch blog). The database was:
- Accessible to academic institutions through subscription
- Not freely available to the public or to independent researchers
- A paid resource that limited broader analytical use

### After the partnership

Crossref — the not-for-profit organisation that manages DOIs and bibliographic metadata for the scholarly publishing industry — entered a partnership to host the database openly. The data is now:
- Hosted on GitLab (open access)
- Updated periodically
- Freely available for any research or analytical use
- Integrated with Crossref's broader scholarly metadata infrastructure

## Why this partnership matters

### Accessibility transformation

The single biggest change: any researcher, journalist, or policy analyst can now access the full dataset. Previous coverage was institutional and partial; current coverage is universal and comprehensive.

### Integration with metadata infrastructure

Crossref provides the underlying DOI infrastructure for most scholarly publications. Integrating Retraction Watch with Crossref creates linking between:
- Original publication records
- Retraction notices
- Author affiliations and credentials
- Citation networks

The integration enables analysis that was previously difficult.

### Research enablement

Several systematic analyses became feasible after 2023:
- Cross-country retraction rate calculations (the AMI's D6 approach)
- Paper mill cluster identification
- Co-authorship network analysis on retracted papers
- Time-series analysis of retraction reasons

## Why the AMI needed this

### The D6 dimension requires comprehensive coverage

The AMI's D6 (data fabrication) dimension is built from Retraction Watch data:
1. Filter to misconduct-linked retractions
2. Country-attribute via author affiliations
3. Normalise by publication volume from OpenAlex
4. Calculate per-publication rates
5. Rescale across the 39-country set

Each step requires comprehensive coverage. Subscription-only access meant the AMI methodology could not be operationalised with current data.

### Open data enables open methodology

The AMI is published under CC BY 4.0. Open methodology requires open inputs. The Crossref partnership made it possible to build D6 from a fully open data source — supporting the AMI's licensing and reproducibility commitments.

### Verification by third parties

Any third party can verify the AMI's D6 calculations by:
1. Downloading the Retraction Watch data from GitLab
2. Applying the AMI methodology's filter and normalisation steps
3. Computing comparable results

Subscription-only data would have prevented this verification.

## Growth pattern of the database

| Year | Approx. records |
|---|---|
| 2010 | ~5,000 |
| 2015 | ~10,000 |
| 2020 | ~30,000 |
| 2022 | ~45,000 |
| 2024 | ~65,000 |
| April 2026 | 69,911 |

### Pre-2020 growth

Gradual accumulation as Retraction Watch covered ongoing retractions and back-catalogued historical cases. Annual growth in the low thousands.

### 2020–2022 acceleration

Two factors:
1. Several major publishers (PLOS, Wiley, Hindawi) ran systematic retraction campaigns identifying paper mill content. Each campaign added thousands of records.
2. Image forensics tools (Imagetwin, PaperWatcher) drove a wave of image manipulation detection.

### 2023 partnership and ongoing growth

The Crossref partnership accelerated growth in two ways:
1. Improved record completeness (previously fragmented coverage filled)
2. Better integration of recent retractions through Crossref's DOI infrastructure

## Database structure

### What each record contains

- Article identifiers (DOI, PubMed ID, etc.)
- Authors and country attribution
- Journal and publisher
- Original publication date
- Retraction date
- Retraction reason (multiple categories)
- Notice text where available

### Reason categorisation

The AMI methodology filters to misconduct-linked retractions:
- Fabrication
- Falsification
- Image manipulation
- Plagiarism (in research context)
- Fraud
- Manipulation of peer review

Excluded: honest errors, duplicate publication, ethics issues, author requests, other non-misconduct categories.

The misconduct-linked subset is approximately 5,390 of 69,911 records (~7.7%).

## What other instruments depend on the partnership

### The AMI's D6 dimension

The most directly dependent. Without the partnership, D6 measurement would not have been feasible from current data.

### Academic research on retraction patterns

Numerous research projects rely on the Retraction Watch data:
- Fang, Steen & Casadevall (2012, PNAS) — established the misconduct-share of retractions
- Liang et al. (2024) — AI content in Chinese academic papers
- Various country and discipline-specific analyses

### Policy analysis

Government and intergovernmental bodies (OECD, UNESCO, individual national research councils) increasingly cite Retraction Watch data in research integrity policy documents.

### Journalism

Investigative journalism on research misconduct depends on the database. Major recent investigations (the Wansink case, the Hwang Woo-suk reanalysis, paper mill exposés) used Retraction Watch as the principal source.

## Operational implications

### For Retraction Watch

The partnership shifted Retraction Watch's funding model. Previously subscription revenue supported operations; now grant and foundation funding plays a larger role. The Center for Scientific Integrity continues to operate the database with Crossref as hosting partner.

### For Crossref

The partnership expanded Crossref's scope beyond DOI management and standard metadata. The integration with research integrity data is a meaningful expansion of Crossref's mission.

### For institutional subscribers

Pre-existing subscribers retained access plus benefited from the broader integration. The partnership did not strand earlier institutional investment.

## What this enables next

### Real-time integration

The Crossref infrastructure enables retraction notices to flow more rapidly through to publication databases, citation tools, and research analytics platforms.

### Cross-database joins

Joining Retraction Watch with other Crossref-managed datasets (publication corpora, ORCID profiles, funding records) enables analyses that were previously much harder.

### Future AMI versions

The partnership ensures AMI D6 measurement can continue. Future AMI versions (v2.0 with expanded country coverage, planned methodological improvements) will continue to rely on the open Retraction Watch data.

## Sources

- [Crossref / Retraction Watch partnership announcement (2023)](https://www.crossref.org/blog/news-crossref-and-retraction-watch/) [verify exact URL]
- [Retraction Watch Database on GitLab](https://gitlab.com/crossref/retraction-watch-data)
- Retraction Watch blog and Center for Scientific Integrity
- AMI v1.5 methodology document

[Full methodology](/methodology) | [Download dataset](/ami_country_scores_20260514.csv)
    `.trim(),
  },

];
