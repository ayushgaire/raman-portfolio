import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiStar, HiBookOpen } from 'react-icons/hi'
import TiltCard from '../components/TiltCard'

const COURSEWORK = [
  'Principles of Accounting I & II',
  'Finite Mathematics',
  'Business Statistics I',
  'Sustainability Accounting',
  'Accounting Information System',
]

export default function Education() {
  return (
    <section className="section-pad min-h-screen">
      <SectionTitle icon={HiAcademicCap} title="Education" />

      <div className="mx-auto mt-12 max-w-3xl">
        {/* Timeline line */}
        <div className="relative pl-10">
          <motion.div
            className="absolute left-3 top-2 w-[2px] bg-gradient-to-b from-glow to-transparent"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.span
            className="absolute left-[5px] top-2 h-4 w-4 rounded-full bg-glow shadow-glow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <TiltCard className="p-8">
              {/* Floating academic icon */}
              <motion.div
                className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-glow/15 text-2xl text-glow-soft"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <HiAcademicCap />
              </motion.div>

              <h3 className="font-display text-2xl font-bold text-white">
                Southwest Minnesota State University
              </h3>
              <p className="mt-1 text-sm text-silver">Marshall, MN</p>

              <div className="mt-5 space-y-2 font-body text-silver/90">
                <p className="text-lg font-semibold text-glow-soft">
                  Bachelor of Science in Accounting
                </p>
                <p className="text-sm">Minor: Data Science</p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InfoPill icon={HiCalendar} label="Anticipated Graduation" value="August 2028" />
                <InfoPill icon={HiStar} label="GPA" value="3.72" />
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-glow/30 bg-glow/10 px-4 py-3">
                <HiStar className="text-glow-soft" />
                <span className="font-body text-sm text-white">
                  Award: Dean's List
                </span>
              </div>

              {/* Coursework */}
              <div className="mt-6">
                <p className="mb-3 flex items-center gap-2 font-body text-sm font-semibold text-white">
                  <HiBookOpen className="text-glow-soft" /> Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {COURSEWORK.map((c, i) => (
                    <motion.span
                      key={c}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-silver"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <Icon className="text-xl text-glow-soft" />
      <div>
        <p className="text-xs uppercase tracking-wider text-silver">{label}</p>
        <p className="font-body text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  )
}

export function SectionTitle({ icon: Icon, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-glow/30 bg-glow/10 text-3xl text-glow-soft">
        <Icon />
      </div>
      <h2 className="font-display text-4xl font-extrabold tracking-tight gradient-text sm:text-5xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-glow to-transparent" />
    </motion.div>
  )
}
