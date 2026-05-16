import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AnimatedBackground from './components/AnimatedBackground'
import Loader from './components/Loader'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'

import Home from './sections/Home'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Additional from './sections/Additional'
import References from './sections/References'
import Contact from './sections/Contact'

// Map section ids to their components
const SECTIONS = {
  home: Home,
  education: Education,
  experience: Experience,
  additional: Additional,
  references: References,
  contact: Contact,
}

// Page transition variants — smooth fade + slide
const pageVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -30, filter: 'blur(8px)' },
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('home')

  // Startup loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  const ActiveSection = SECTIONS[active]

  const navigate = (id) => {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative z-10 flex min-h-screen flex-col">
          <NavMenu active={active} onNavigate={navigate} />

          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ActiveSection onNavigate={navigate} />
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}
