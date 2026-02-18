import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Footer, NavBar, StarField } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="nebula-layer" aria-hidden="true"></div>
        <div className="planets-layer" aria-hidden="true"></div>
        <div className="comets-layer" aria-hidden="true">
          <div className="comet"></div>
          <div className="comet"></div>
        </div>
        <StarField count={400} countLarge={100} />
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavBar />
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
