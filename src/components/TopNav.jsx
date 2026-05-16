import { motion } from 'framer-motion'
import { NAV_ITEMS } from './NavMenu'

/**
 * TopNav
 * A persistent, always-visible navigation bar at the top of every page.
 * Works alongside the ⋮ menu — two ways to navigate.
 * Collapses to a horizontally scrollable strip on small screens.
 */
export default function TopNav({ active, onNavigate }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.05] px-2 py-2 backdrop-blur-xl shadow-glow scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-body text-xs transition-colors sm:text-sm ${
                isActive
                  ? 'text-white'
                  : 'text-silver hover:text-white'
              }`}
            >
              {/* Animated active pill background */}
              {isActive && (
                <motion.span
                  layoutId="topnav-active"
                  className="absolute inset-0 rounded-full bg-glow/25 border border-glow/40"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                className={`relative z-10 text-base ${
                  isActive ? 'text-glow-soft' : ''
                }`}
              />
              {/* Short label on mobile, full label on larger screens */}
              <span className="relative z-10 hidden whitespace-nowrap md:inline">
                {item.label}
              </span>
              <span className="relative z-10 whitespace-nowrap md:hidden">
                {item.short}
              </span>
            </button>
          )
        })}
      </nav>
    </motion.header>
  )
}
