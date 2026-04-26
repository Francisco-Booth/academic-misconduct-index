# Academic Misconduct Index — Website

Next.js 14 website for the Academic Misconduct Index (AMI).

## Pages

- `/` — Index explorer with scatter plot and rankings table
- `/methodology` — Full methodology documentation
- `/blog` — Updates and news
- `/about` — About the project and Francisco Booth

## Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub

1. Go to github.com and create a new repository called `academic-misconduct-index`
2. Make it public
3. Open Terminal and run:

```bash
cd ~/ami_website
git init
git add .
git commit -m "Initial AMI website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/academic-misconduct-index.git
git push -u origin main
```

Replace YOUR_USERNAME with your GitHub username.

### Step 2 — Add your data file

Copy your pipeline output CSV into the public folder:

```bash
cp ~/aii_pipeline/outputs/aii_country_scores_20260426.csv ~/ami_website/public/
git add public/
git commit -m "Add dataset"
git push
```

### Step 3 — Deploy on Vercel

1. Go to vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import the `academic-misconduct-index` repository
4. Vercel will auto-detect Next.js — click Deploy
5. Your site will be live at `academic-misconduct-index.vercel.app` within 2 minutes

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding blog posts

Edit `lib/posts.ts` — add a new entry to the `POSTS` array with a unique slug, title, date, category, excerpt, and content (markdown supported with ## headings and **bold**).

## Updating country data

Edit `lib/data.ts` — update the `COUNTRIES` array with new scores from the pipeline.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (scatter plot)
- Google Fonts: Playfair Display + DM Sans + DM Mono
