import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 border-t border-white/10 px-6 py-8 text-center"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <p className="font-display text-lg font-bold gradient-text">RAMAN DAHAL</p>
        <p className="font-body text-xs text-silver">
          Accounting &amp; Data Science Student · Marshall, Minnesota
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/raman-dahal-904a80409"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-glow-soft transition-colors hover:border-glow/50"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ramandahal1010@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-glow-soft transition-colors hover:border-glow/50"
            aria-label="Email"
          >
            <HiMail />
          </a>
        </div>
        <p className="mt-2 font-body text-[11px] text-silver/60">
          © {new Date().getFullYear()} Raman Dahal. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
