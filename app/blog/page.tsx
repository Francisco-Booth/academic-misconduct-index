import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Updates — Academic Misconduct Index",
  description: "News, methodology updates, and data releases from the Academic Misconduct Index.",
};

const CATEGORY_LABELS: Record<string, string> = {
  news: "News",
  methodology: "Methodology",
  data: "Data release",
};

const CATEGORY_COLORS: Record<string, string> = {
  news: "bg-[var(--amber)] text-white",
  methodology: "bg-ink text-paper",
  data: "bg-[#0F6E56] text-white",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="border-t-2 border-[var(--amber)] pt-8 mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-3">Latest</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Updates</h1>
        <p className="text-[var(--muted)]">
          Methodology notes, data releases, and news from the Academic Misconduct Index.
        </p>
      </div>

      <div className="space-y-8">
        {sorted.map(post => (
          <article key={post.slug} className="border-b border-[var(--border)] pb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm ${CATEGORY_COLORS[post.category]}`}>
                {CATEGORY_LABELS[post.category]}
              </span>
              <time className="text-xs text-[var(--muted)] font-mono">{formatDate(post.date)}</time>
            </div>
            <h2 className="font-serif text-2xl font-bold mb-2 hover:text-[var(--amber)] transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs font-mono uppercase tracking-wider text-[var(--amber)] hover:text-[var(--amber-dark)]"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
