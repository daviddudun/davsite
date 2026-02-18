import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Projects } from '../pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
