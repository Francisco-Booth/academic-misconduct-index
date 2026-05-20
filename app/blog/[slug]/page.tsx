import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, PostCategory } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["Francisco Booth"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://academicmisconductindex.com/blog/${post.slug}`,
    },
  };
}

const CATEGORY_LABELS: Record<PostCategory, string> = {
  news: "News",
  methodology: "Methodology",
  data: "Data",
  country_profile: "Country Profile",
  guide: "Guide",
  seo: "Explainer",
};

const CATEGORY_COLORS: Record<PostCategory, string> = {
  news: "bg-[var(--amber)] text-white",
  methodology: "bg-ink text-paper",
  data: "bg-[#0F6E56] text-white",
  country_profile: "bg-[#1A5FA8] text-white",
  guide: "bg-[#6B3FA0] text-white",
  seo: "bg-[#B22B2B] text-white",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let tableBuffer: string[] = [];

  const flushTable = (key: string) => {
    if (tableBuffer.length < 2) { tableBuffer = []; return null; }
    const headers = tableBuffer[0].split("|").map(s => s.trim()).filter(Boolean);
    const rows = tableBuffer.slice(2).map(r => r.split("|").map(s => s.trim()).filter(Boolean));
    const el = (
      <div key={key} className="overflow-x-auto my-6">
        <table className="ami-table w-full text-sm">
          <thead>
            <tr>{headers.map((h, j) => <th key={j} className="text-left">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
    return el;
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|")) {
      tableBuffer.push(line);
      i++;
      continue;
    } else if (tableBuffer.length > 0) {
      const el = flushTable(`table-${i}`);
      if (el) elements.push(el);
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl font-bold mt-10 mb-4 border-b border-[var(--border)] pb-2">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-lg font-semibold mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-outside ml-5 space-y-1.5 my-4 text-sm text-[var(--muted)] leading-relaxed">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{
              __html: item
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline text-[var(--amber)]">$1</a>')
            }} />
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\./.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-outside ml-5 space-y-1.5 my-4 text-sm text-[var(--muted)] leading-relaxed">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{
              __html: item
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline text-[var(--amber)]">$1</a>')
            }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline text-[var(--amber)] hover:text-[var(--amber-dark)]">$1</a>');
      elements.push(
        <p key={i} className="text-[var(--muted)] leading-relaxed mb-4 text-sm"
           dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
    i++;
  }

  if (tableBuffer.length > 0) {
    const el = flushTable("table-end");
    if (el) elements.push(el);
  }

  return elements;
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  const related = POSTS.filter(p =>
    p.slug !== post.slug &&
    (p.category === post.category || p.tags.some(t => post.tags.includes(t)))
  ).slice(0, 3);

  // JSON-LD schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle,
    "description": post.metaDescription,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Francisco Booth",
      "url": "https://academicmisconductindex.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Academic Misconduct Index",
      "url": "https://academicmisconductindex.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://academicmisconductindex.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
  };

  const faqSchema = post.faqSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable-tldr", ".speakable-excerpt"]
    },
    "url": `https://academicmisconductindex.com/blog/${post.slug}`
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-[var(--muted)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-ink">Updates</Link>
          <span>/</span>
          <span className="text-ink truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="border-t-2 border-[var(--amber)] pt-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${CATEGORY_COLORS[post.category]}`}>
              {CATEGORY_LABELS[post.category]}
            </span>
            <time className="text-xs text-[var(--muted)] font-mono" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-[var(--muted)] leading-relaxed speakable-excerpt">{post.excerpt}</p>
        </div>

        {/* TL;DR box — speakable + GEO-optimised */}
        <div className="bg-[var(--amber)]/8 border-l-4 border-[var(--amber)] p-5 mb-8 speakable-tldr">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-2">TL;DR</p>
          <p className="text-sm leading-relaxed font-medium">{post.tldr}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose-sm max-w-none mb-12">
          {renderMarkdown(post.content)}
        </div>

        {/* FAQ section — GEO schema visible */}
        {post.faqSchema && post.faqSchema.length > 0 && (
          <div className="border-t border-[var(--border)] pt-8 mb-12">
            <h2 className="font-serif text-xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {post.faqSchema.map((faq, i) => (
                <div key={i} className="border-b border-[var(--border)] pb-6">
                  <h3 className="font-medium text-sm mb-2">{faq.question}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Citation block */}
        <div className="border border-[var(--border)] p-5 mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-3">How to cite this article</p>
          <p className="text-xs font-mono leading-relaxed text-[var(--muted)] mb-2">
            <strong className="text-ink">APA:</strong> Booth, F. ({new Date(post.date).getFullYear()}). {post.title}. <em>Academic Misconduct Index</em>. https://academicmisconductindex.com/blog/{post.slug}
          </p>
          <p className="text-xs font-mono leading-relaxed text-[var(--muted)]">
            <strong className="text-ink">BibTeX:</strong> @misc&#123;booth{new Date(post.date).getFullYear()}{post.slug.split("-")[0]}, author=&#123;Booth, Francisco&#125;, title=&#123;{post.title}&#125;, year=&#123;{new Date(post.date).getFullYear()}&#125;, url=&#123;https://academicmisconductindex.com/blog/{post.slug}&#125;&#125;
          </p>
        </div>

        {/* Author */}
        <div className="border-t border-[var(--border)] pt-6 mb-12 flex items-start gap-4">
          <div className="w-10 h-10 bg-ink flex items-center justify-center text-paper font-serif font-bold shrink-0 text-sm">
            FB
          </div>
          <div>
            <p className="font-medium text-sm">Francisco Booth</p>
            <p className="text-xs text-[var(--muted)]">Independent researcher, founder of the Academic Misconduct Index</p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="border-t border-[var(--border)] pt-8">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-6">Related posts</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="border border-[var(--border)] p-4 hover:border-[var(--amber)] transition-colors">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 ${CATEGORY_COLORS[p.category]} inline-block mb-2`}>
                    {CATEGORY_LABELS[p.category]}
                  </span>
                  <p className="text-sm font-serif font-semibold leading-snug">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link href="/blog" className="text-xs font-mono text-[var(--muted)] hover:text-ink">
            ← Back to all posts
          </Link>
        </div>

      </div>
    </>
  );
}
