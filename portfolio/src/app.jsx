import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import './app.css'

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 360)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">© 2026 A. Dharani Dharan. All rights reserved.</footer>
      <ScrollTopButton visible={showScrollTop} />
    </div>
  )
}
