export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-davsite',
    title: 'Building Davsite from Scratch',
    excerpt:
      'Notes on design decisions, component structure, and keeping the UI cohesive',
    date: '2026-02-18'
  },
]
