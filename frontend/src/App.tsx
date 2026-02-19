import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Footer, NavBar } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
