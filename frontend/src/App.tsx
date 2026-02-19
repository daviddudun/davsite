import './App.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { CometField, Footer, NavBar, StarField } from './components'

function AppLayout() {
  const location = useLocation()
  const hideSpaceEffects =
    location.pathname.startsWith('/projects') ||
    location.pathname.startsWith('/blog')

  return (
    <div className="min-h-screen flex flex-col">
      {!hideSpaceEffects && (
        <>
          <CometField count={5} />
          <StarField count={400} countLarge={100} />
        </>
      )}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
