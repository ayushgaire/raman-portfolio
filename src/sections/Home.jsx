import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { HiDownload, HiMail, HiChevronRight } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

const STATS = [
  { value: '3.94', label: 'GPA' },
  { value: "Dean's List", label: 'Award' },
  { value: 'Accounting', label: 'Major' },
  { value: 'Data Science', label: 'Minor' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/** Subtle 3D distorted sphere behind the profile image */
function Orb3D() {
  return (
    <Canvas className="!absolute inset-0" camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Sphere args={[1.15, 64, 64]}>
          <MeshDistortMaterial
            color="#2563eb"
            distort={0.4}
            speed={1.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </Canvas>
  )
}

export default function Home({ onNavigate }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="section-pad flex min-h-screen flex-col items-center justify-center text-center"
    >
      {/* Profile image with 3D orb + glowing ring */}
      <motion.div variants={item} className="relative mb-8 h-52 w-52">
        <div className="absolute inset-0 opacity-70">
          <Orb3D />
        </div>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: '0 0 70px 6px rgba(79,140,255,0.5)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="relative h-52 w-52 overflow-hidden rounded-full border-2 border-white/20 backdrop-blur-sm"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/profile.svg"
            alt="Raman Dahal"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.h1
        variants={item}
        className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl gradient-text"
      >
        RAMAN DAHAL
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-3 font-body text-lg text-glow-soft sm:text-xl"
      >
        Accounting &amp; Data Science Student
      </motion.p>

      <motion.p variants={item} className="mt-1 text-sm text-silver">
        Marshall, Minnesota
      </motion.p>

      <motion.div
        variants={item}
        className="mt-6 max-w-3xl space-y-3 font-body text-sm leading-relaxed text-silver/90 sm:text-base"
      >
        <p>
          I am a high-performing junior pursuing a career in accounting, with a
          strong academic record and a clear commitment to obtaining the CPA
          designation upon completion of my degree. I bring a disciplined,
          results-oriented mindset combined with a strong foundation in financial
          analysis, data handling, and problem-solving.
        </p>
        <p>
          Beyond traditional accounting, I have a keen interest in the
          intersection of finance and technology, particularly in developing
          tools and systems that enhance efficiency, accuracy, and strategic
          decision-making. This dual focus enables me to approach challenges with
          both analytical precision and innovative thinking.
        </p>
        <p>
          I am known for my strong work ethic, attention to detail, and ability
          to deliver high-quality outcomes under demanding environments. I seek
          opportunities where I can contribute meaningful value, continuously
          develop my expertise, and position myself as a trusted and high-impact
          professional within the organization.
        </p>
      </motion.div>

      {/* Stats cards */}
      <motion.div
        variants={item}
        className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -8, scale: 1.04 }}
            className="glass glass-hover px-4 py-5"
          >
            <p className="font-display text-xl font-bold text-white">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-silver">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Action buttons */}
      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {/* Resume download */}
        <motion.a
          href="/resume.pdf"
          download="Raman_Dahal_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-full bg-glow-deep px-6 py-3 font-body text-sm font-medium text-white shadow-glow transition-colors hover:bg-glow"
        >
          <HiDownload className="text-lg" /> Download Resume
        </motion.a>

        {/* Contact (navigates to contact section) */}
        <motion.button
          onClick={() => onNavigate('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 font-body text-sm font-medium text-white backdrop-blur-xl transition-colors hover:border-glow/50"
        >
          Contact <HiChevronRight />
        </motion.button>

        {/* LinkedIn placeholder */}
        <motion.a
          href="https://www.linkedin.com/in/raman-dahal-904a80409"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-glow-soft backdrop-blur-xl transition-colors hover:border-glow/50"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-lg" />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:ramandahal1010@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-glow-soft backdrop-blur-xl transition-colors hover:border-glow/50"
          aria-label="Email"
        >
          <HiMail className="text-lg" />
        </motion.a>
      </motion.div>

      {/* "Explore all sections" cue — makes the other pages discoverable */}
      <motion.div
        variants={item}
        className="mt-14 flex flex-col items-center"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-silver/70">
          Explore the full portfolio
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            ['education', 'Education'],
            ['experience', 'Experience'],
            ['additional', 'Additional Info'],
            ['references', 'References'],
            ['contact', 'Contact'],
          ].map(([id, label], i) => (
            <motion.button
              key={id}
              onClick={() => onNavigate(id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-body text-xs text-silver backdrop-blur-xl transition-colors hover:border-glow/40 hover:text-white"
            >
              {label}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="mt-6 text-glow-soft"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-body text-xs text-silver/60">
            or tap the menu ⋮ top-right
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
