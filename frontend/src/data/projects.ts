export type Project = {
  name: string
  description: string
  githubUrl: string
  stack: string[]
}

export const projects: Project[] = [
  {
    name: 'Timely',
    description: 'A time management app designed to help students automatically schedule tasks around their life.',
    githubUrl: 'https://github.com/xlightningstar',
    stack: ['Django', 'React', 'Vite', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Davsite',
    description: 'A personal portfolio website',
    githubUrl: 'https://github.com/xlightningstar/davsite',
    stack: ['Django', 'React', 'Vite', 'TypeScript', 'Tailwind'],
  },
]
