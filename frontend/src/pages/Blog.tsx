import { blogPosts } from '../data/blog'
import { BlogCard } from '../components'

function Blog() {
  return (
    <main className="app-shell text-white flex-1">
      <section className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-transparent p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xs ring-1 ring-white/10 before:absolute before:inset-0 before:bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.25),transparent_60%)] before:opacity-70 before:pointer-events-none">
        <p className="text-sm uppercase tracking-[0.35em] text-mist/70">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Writing & Notes
        </h1>
        <p className="mt-4 text-base text-mist/80 md:text-lg">
          Short entries about design, engineering, and the experiments behind
          this portfolio.
        </p>
        <div className="mt-6 border-t border-white/10 pt-6"></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blog
