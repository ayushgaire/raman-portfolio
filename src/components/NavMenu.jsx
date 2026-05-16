import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  HiHome,
  HiAcademicCap,
  HiBriefcase,
  HiSparkles,
  HiUserGroup,
  HiMail,
} from 'react-icons/hi'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', short: 'Home', icon: HiHome },
  { id: 'education', label: 'Education', short: 'Edu', icon: HiAcademicCap },
  { id: 'experience', label: 'Professional Experience', short: 'Work', icon: HiBriefcase },
  { id: 'additional', label: 'Additional Information', short: 'Info', icon: HiSparkles },
  { id: 'references', label: 'References', short: 'Refs', icon: HiUserGroup },
  { id: 'contact', label: 'Contact', short: 'Contact', icon: HiMail },
]

export { NAV_ITEMS }

/**
 * NavMenu
 * Top-right floating ⋮ button that opens an app-style navigation panel.
 */
export default function NavMenu({ active, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleSelect = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  // Show a "Menu" hint label until the user opens the menu for the first time
  const [hintVisible, setHintVisible] = useState(true)

  useEffect(() => {
    if (open) setHintVisible(false)
  }, [open])

  return (
    <>
      {/* One-time hint label next to the menu button */}
      <AnimatePresence>
        {hintVisible && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="fixed right-20 top-7 z-50 hidden items-center gap-2 rounded-full border border-glow/30 bg-white/[0.06] px-4 py-2 backdrop-blur-xl sm:flex"
          >
            <span className="font-body text-xs text-silver">
              Browse all sections
            </span>
            <motion.span
              className="text-glow-soft"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3-dot button */}
      <motion.button
        aria-label="Open navigation menu"
        onClick={() => setOpen((o) => !o)}
        className="fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
      >
        {/* Pulsing attention ring — stops once the menu has been opened */}
        {hintVisible && !open && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-glow"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <div className="flex flex-col gap-[5px]">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-1.5 w-1.5 rounded-full bg-glow-soft"
              animate={open ? { scale: 1.3 } : { scale: 1 }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </div>
      </motion.button>

      {/* Animated navigation panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed right-5 top-20 z-50 w-72 overflow-hidden glass p-3"
              initial={{ opacity: 0, scale: 0.85, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {NAV_ITEMS.map((item, idx) => {
                const Icon = item.icon
                const isActive = active === item.id
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
                      isActive
                        ? 'bg-glow/20 text-white'
                        : 'text-silver hover:bg-white/[0.06] hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Icon
                      className={`text-lg transition-colors ${
                        isActive ? 'text-glow-soft' : 'text-silver group-hover:text-glow-soft'
                      }`}
                    />
                    <span className="font-body text-sm">{item.label}</span>
                  </motion.button>
                )
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
