export type Project = {
  name: string
  description: string
  githubUrl: string
  stack: string[]
}

export const projects: Project[] = [
  {
    name: 'Google Translate Scrambler',
    description:
      'A Python CLI that scrambles text by translating it through random languages before returning it to English.',
    githubUrl: 'https://github.com/daviddudun/google-translate-scrambler',
    stack: ['Python', 'CLI', 'Google Translate'],
  },
  {
    name: 'Ieka v2',
    description: 'A Discord bot with LLM integration.',
    githubUrl: 'https://github.com/daviddudun/ieka-v2',
    stack: ['Python', 'Discord', 'LLM'],
  },
  {
    name: 'Sudoku Solver',
    description: 'A Python program that can solve 9x9 Sudoku puzzles.',
    githubUrl: 'https://github.com/daviddudun/sudoku-solver',
    stack: ['Python', 'Algorithms', 'Backtracking'],
  },
  {
    name: 'Timely',
    description: 'A time management app designed to help students automatically schedule tasks around their life.',
    githubUrl: 'https://github.com/daviddudun/timely',
    stack: ['Django', 'React', 'Vite', 'TypeScript', 'Tailwind'],
  },
]
