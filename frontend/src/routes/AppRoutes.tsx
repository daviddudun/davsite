import { Navigate, Route, Routes } from 'react-router-dom'
import { About, Blog, BlogPost, Projects } from '../pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
