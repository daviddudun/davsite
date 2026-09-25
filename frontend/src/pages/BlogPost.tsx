import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <main className="app-shell bg-midnight/20 text-white flex-1 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]">
        <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-transparent p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xs ring-1 ring-white/10">
          <h1 className="text-3xl font-semibold">Entry not found</h1>
          <p className="mt-4 text-mist/80">
            That entry doesn't exist yet. Head back to the blog overview.
          </p>
          <Link
            className="btn-accent mt-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold"
            to="/blog"
          >
            Back to blog
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell bg-midnight/20 text-white flex-1 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]">
      <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-transparent p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xs ring-1 ring-white/10">
        <p className="text-xs uppercase tracking-[0.2em] text-mist/60">
          {post.date}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base text-mist/80 md:text-lg">
          {post.excerpt}
        </p>
        <div className="mt-8 space-y-5 text-base leading-8 text-mist/90 md:text-lg">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8">
          <Link
            className="btn-accent inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold"
            to="/blog"
          >
            Back to blog
          </Link>
        </div>
      </section>
    </main>
  )
}

export default BlogPost
