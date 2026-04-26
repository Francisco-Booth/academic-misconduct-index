import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — AMI`, description: post.excerpt };
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl font-bold mt-10 mb-4 border-b border-[var(--border)] pb-2">
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      // skip blank
    } else {
      // Paragraph — handle inline bold and links
      const rendered = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="underline text-[var(--amber)] hover:text-[var(--amber-dark)]">$1</a>');
      elements.push(
        <p key={i} className="text-[var(--muted)] leading-relaxed mb-4"
           dangerouslySetInnerHTML={{ __html: rendered }} />
      );
    }
    i++;
  }
  return elements;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const CATEGORY_LABELS: Record<string, string> = {
  news: "News", methodology: "Methodology", data: "Data release",
};
const CATEGORY_COLORS: Record<string, string> = {
  news: "bg-[var(--amber)] text-white",
  methodology: "bg-ink text-paper",
  data: "bg-[#0F6E56] text-white",
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-xs font-mono text-[var(--muted)] hover:text-ink mb-8 inline-block">
        ← Back to Updates
      </Link>

      <div className="border-t-2 border-[var(--amber)] pt-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm ${CATEGORY_COLORS[post.category]}`}>
            {CATEGORY_LABELS[post.category]}
          </span>
          <time className="text-xs text-[var(--muted)] font-mono">{formatDate(post.date)}</time>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-[var(--muted)] leading-relaxed">{post.excerpt}</p>
      </div>

      <div className="prose-sm">
        {renderMarkdown(post.content)}
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--muted)]">
          Written by <strong className="text-ink">Francisco Booth</strong>, independent researcher.
        </p>
      </div>
    </div>
  );
}
