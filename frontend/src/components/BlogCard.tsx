import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blog'

type BlogCardProps = {
  post: BlogPost
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur-md">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {post.title}
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-mist/60 sm:text-right">
          {post.date}
        </p>
      </div>
      <p className="mt-3 text-sm text-mist/80">{post.excerpt}</p>
      <div className="mt-6">
        <Link
          className="btn-accent inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold"
          to={`/blog/${post.slug}`}
        >
          Read entry
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
