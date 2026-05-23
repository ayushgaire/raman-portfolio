import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import {
  FaFileExcel,
  FaClipboardCheck,
  FaCalculator,
  FaCheckDouble,
  FaPython,
  FaUsers,
  FaChess,
} from 'react-icons/fa'
import { GiPoolTriangle, GiPuzzle } from 'react-icons/gi'
import { SectionTitle } from './Education'

const SKILLS = [
  { name: 'Excel proficiency', level: 100, icon: FaFileExcel },
  { name: 'Accurate financial record keeping', level: 100, icon: FaClipboardCheck },
  { name: 'Basic accounting software', level: 90, icon: FaCalculator },
  { name: 'Data verification', level: 100, icon: FaCheckDouble },
  { name: 'Basic Python skills', level: 85, icon: FaPython },
]

const ACTIVITIES = [
  { name: 'Treasurer of International Student Organization (ISO)', icon: FaUsers },
  { name: 'Advanced Sudoku player', icon: GiPuzzle },
  { name: 'Competitive pool player (8-ball / 9-ball)', icon: GiPoolTriangle },
  { name: 'Strategic chess player', icon: FaChess },
]

export default function Additional() {
  return (
    <section className="section-pad min-h-screen">
      <SectionTitle icon={HiSparkles} title="Additional Information" />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* LEFT — Skills */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover p-8"
        >
          <h3 className="mb-6 font-display text-2xl font-bold text-white">Skills</h3>
          <div className="space-y-6">
            {SKILLS.map((s, idx) => {
              const Icon = s.icon
              return (
                <div key={s.name}>
                  <div className="mb-2 flex items-center gap-3">
                    <Icon className="text-glow-soft" />
                    <span className="font-body text-sm text-silver">{s.name}</span>
                    <span className="ml-auto text-xs text-glow-soft">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-glow-deep to-glow-soft"
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ delay: 0.3 + idx * 0.12, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* RIGHT — Activities & Interests */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover p-8"
        >
          <h3 className="mb-6 font-display text-2xl font-bold text-white">
            Activities &amp; Interests
          </h3>
          <div className="space-y-4">
            {ACTIVITIES.map((a, idx) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.12 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-glow/40"
                >
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow/15 text-lg text-glow-soft"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    <Icon />
                  </motion.div>
                  <span className="font-body text-sm text-silver">{a.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
