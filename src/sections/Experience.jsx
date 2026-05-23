import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'
import { FaUniversity, FaFileInvoiceDollar, FaCashRegister } from 'react-icons/fa'
import TiltCard from '../components/TiltCard'
import { SectionTitle } from './Education'

const EXPERIENCE = [
  {
    icon: FaUniversity,
    company: 'Leading Edge Credit Union',
    location: 'Marshall, MN',
    role: 'Accounts Service Representative, Summer full-Time',
    points: [
      'Transaction processing',
      'Account reconciliation',
      'Regulatory compliance',
      'ACH / Wires / Deposits',
      'BSA / OFAC standards',
      'Financial reporting',
      'Audit-ready documentation',
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    company: 'United Community Action Partnership',
    location: 'Marshall, MN',
    role: 'Volunteer Income Tax Assistance (VITA)',
    points: [
      'Prepared federal and state tax returns',
      'W-2s and 1099 analysis',
      'IRS-approved software',
      'Client interviews',
      'Accurate electronic filing',
    ],
  },
  {
    icon: FaCashRegister,
    company: 'Chartwells – SMSU Convenience Store',
    location: 'Marshall, MN',
    role: 'Student Worker',
    points: [
      'POS operations',
      'Transaction reconciliation',
      'Customer service',
      'Daily transaction handling',
      'Financial accountability',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section-pad min-h-screen">
      <SectionTitle icon={HiBriefcase} title="Professional Experience" />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-1">
        {EXPERIENCE.map((exp, idx) => {
          const Icon = exp.icon
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <TiltCard className="p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <motion.div
                    className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-glow/15 text-2xl text-glow-soft"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.4 }}
                  >
                    <Icon />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-sm text-silver">{exp.location}</p>
                    <p className="mt-2 font-body text-sm font-semibold text-glow-soft">
                      {exp.role}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.points.map((p, i) => (
                        <motion.span
                          key={p}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.06 }}
                          whileHover={{ scale: 1.06, borderColor: 'rgba(79,140,255,0.5)' }}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-silver transition-colors"
                        >
                          {p}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
