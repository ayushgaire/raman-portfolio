import { motion } from 'framer-motion'
import { HiUserGroup, HiMail, HiPhone } from 'react-icons/hi'
import TiltCard from '../components/TiltCard'
import { SectionTitle } from './Education'

const REFERENCES = [
  {
    name: 'Dr. Will Thomas',
    title: 'Professor of Accounting',
    email: 'will.thomas@smsu.edu',
    phone: '(507) 537-7392',
  },
  {
    name: 'Dr. Glenn Bayerkohler',
    title: 'Professor of Accounting',
    email: 'glenn.bayerkohler@smsu.edu',
    phone: '(507) 537-7393',
  },
  {
    name: 'Dr. Hui-Heng (Mark) Cheng',
    title: 'Assistant Professor of Accounting-Finance',
    email: 'hui-heng.cheng@smsu.edu',
    phone: '(507) 537-7492',
  },
]

export default function References() {
  return (
    <section className="section-pad min-h-screen">
      <SectionTitle icon={HiUserGroup} title="References" />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {REFERENCES.map((r, idx) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
          >
            <TiltCard className="flex h-full flex-col items-center p-8 text-center">
              {/* Avatar initials */}
              <motion.div
                className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-glow/30 bg-glow/10 font-display text-2xl font-bold text-glow-soft"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
              >
                {r.name
                  .replace(/Dr\.\s/, '')
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </motion.div>

              <h3 className="font-display text-lg font-bold text-white">{r.name}</h3>
              <p className="mt-1 text-sm text-silver">{r.title}</p>

              <div className="mt-6 flex w-full flex-col gap-3">
                <a
                  href={`mailto:${r.email}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-glow-deep px-4 py-2.5 font-body text-xs font-medium text-white transition-colors hover:bg-glow"
                >
                  <HiMail /> Email
                </a>
                <a
                  href={`tel:${r.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 font-body text-xs text-silver transition-colors hover:border-glow/40"
                >
                  <HiPhone /> {r.phone}
                </a>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
