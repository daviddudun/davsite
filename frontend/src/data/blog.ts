export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cambridge-battlecode',
    title: 'First Place UK novice team at Cambridge Battlecode',
    excerpt:
      'What building a competitive autonomous bot taught me about iteration, strategy, and designing software for uncertainty.',
    date: '2026-05-15',
    content: [
      'Cambridge Battlecode gave Subhan Afzal and me a problem I find especially satisfying: build a system that has to make sensible decisions when you cannot predict exactly what will happen next. We designed an autonomous bot for a strategic, turn-based game, then watched our assumptions get tested by teams with very different approaches.',
      'We finished second in the novice bracket and as the highest-ranking UK team at that level. I am proud of the result, but the process is what has stayed with me. A competition bot is not just an algorithm that works in isolation. It needs to balance resources, understand the map, react to opponents, and keep making useful choices as the state of the game changes.',
      'The most valuable part was the iteration cycle. We would form a theory about what should make the bot stronger, implement it, test it, and then discover the edge cases we had missed. Sometimes a small adjustment to prioritisation or navigation changed the outcome of a match completely. It was a practical reminder that optimisation is not always about finding one perfect strategy; it is about building something adaptable enough to perform under pressure.',
      'It also made systems design feel much more tangible. Clear responsibilities, reliable behaviour in unexpected states, and quick feedback from testing were not abstract principles: they directly affected whether our bot could compete. Working as a pair helped too, because it forced us to make our reasoning explicit and keep improving the design together.',
      'The event itself was brilliantly run, and it was exciting to compete alongside people with a wide range of experience. Thank you to the organisers and to sponsors including Jump Trading and Anthropic for supporting it. I am leaving with a better instinct for strategy, robustness, and iteration and plenty of ideas to carry into the next competition or project.'
    ]
  },
]
