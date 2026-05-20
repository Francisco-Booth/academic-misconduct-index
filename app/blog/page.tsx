"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { POSTS, PostCategory } from "@/lib/posts";

const CATEGORY_LABELS: Record<PostCategory | "all", string> = {
  all: "All posts",
  news: "News",
  methodology: "Methodology",
  data: "Data",
  country_profile: "Country Profiles",
  guide: "Guides",
  seo: "Explainers",
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

const POSTS_PER_PAGE = 12;

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<PostCategory | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return POSTS
      .filter(p =>
        (category === "all" || p.category === category) &&
        (q === "" || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategoryChange = (cat: PostCategory | "all") => {
    setCategory(cat);
    setPage(1);
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="border-t-2 border-[var(--amber)] pt-8 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--amber)] mb-3">Latest</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Updates &amp; Analysis</h1>
        <p className="text-[var(--muted)] max-w-xl">
          Methodology notes, country profiles, data analysis, and news from the Academic Misconduct Index.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search posts by title, topic, or country…"
          value={search}
          onChange={e => handleSearch(e.target.value)}
          className="w-full md:w-96 border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--amber)] rounded-none"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(CATEGORY_LABELS) as (PostCategory | "all")[]).map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`text-xs font-mono px-3 py-1.5 border transition-colors ${
              category === cat
                ? "bg-ink text-paper border-ink"
                : "border-[var(--border)] text-[var(--muted)] hover:border-ink hover:text-ink"
            }`}
          >
            {CATEGORY_LABELS[cat]}
            {cat !== "all" && (
              <span className="ml-1.5 opacity-60">
                {POSTS.filter(p => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Post count */}
      <p className="text-xs font-mono text-[var(--muted)] mb-8">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        {search && ` matching "${search}"`}
        {category !== "all" && ` in ${CATEGORY_LABELS[category]}`}
      </p>

      {/* Posts grid */}
      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginated.map(post => (
            <article key={post.slug} className="border border-[var(--border)] flex flex-col hover:border-[var(--amber)] transition-colors">
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${CATEGORY_COLORS[post.category]}`}>
                    {CATEGORY_LABELS[post.category]}
                  </span>
                  <time className="text-xs text-[var(--muted)] font-mono">{formatDate(post.date)}</time>
                </div>
                <h2 className="font-serif text-lg font-bold mb-2 leading-snug flex-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[var(--amber)] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-mono uppercase tracking-wider text-[var(--amber)] hover:text-[var(--amber-dark)] mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-[var(--muted)]">
          <p className="font-serif text-xl mb-2">No posts found</p>
          <p className="text-sm">Try a different search term or category.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center gap-3 justify-center border-t border-[var(--border)] pt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="text-xs font-mono px-4 py-2 border border-[var(--border)] disabled:opacity-30 hover:border-ink transition-colors"
          >
            ← Previous
          </button>
          <span className="text-xs font-mono text-[var(--muted)]">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="text-xs font-mono px-4 py-2 border border-[var(--border)] disabled:opacity-30 hover:border-ink transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
