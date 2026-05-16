import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { SectionTitle } from './Education'

/**
 * Contact
 * Simple, reliable contact page — no form, no third-party services.
 * Three large tappable cards: Email, Phone, LinkedIn.
 * Every button works instantly with zero setup.
 */
export default function Contact() {
  const CONTACTS = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'ramandahal1010@gmail.com',
      href: 'mailto:ramandahal1010@gmail.com',
      external: false,
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '(507) 946-1705',
      href: 'tel:+15079461705',
      external: false,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/raman-dahal-904a80409',
      external: true,
    },
  ]

  return (
    <section className="section-pad flex min-h-screen flex-col items-center justify-center">
      <SectionTitle icon={HiMail} title="Contact" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl text-center font-body text-silver"
      >
        If you want to know more about me, feel free to contact me.
      </motion.p>

      <div className="mt-12 grid w-full max-w-3xl gap-5 sm:grid-cols-3">
        {CONTACTS.map((c, idx) => {
          const Icon = c.icon
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glass glass-hover flex flex-col items-center gap-4 p-8 text-center"
            >
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-glow/15 text-3xl text-glow-soft"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
              >
                <Icon />
              </motion.div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-silver">
                  {c.label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-white break-all">
                  {c.value}
                </p>
              </div>
            </motion.a>
          )
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 font-body text-xs text-silver/60"
      >
        Marshall, Minnesota
      </motion.p>
    </section>
  )
}
