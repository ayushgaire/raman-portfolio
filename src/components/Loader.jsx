import { motion } from 'framer-motion'

/**
 * Loader
 * Premium startup animation: glowing ring + animated monogram.
 */
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Rotating glow ring */}
        <motion.div
          className="absolute h-32 w-32 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: '#4f8cff',
            borderRightColor: '#2563eb',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute h-44 w-44 rounded-full border border-glow/20"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Monogram */}
        <motion.span
          className="font-display text-5xl font-extrabold gradient-text"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          RD
        </motion.span>
      </div>

      <motion.p
        className="mt-10 font-body text-sm uppercase tracking-[0.4em] text-silver"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Raman Dahal
      </motion.p>
    </motion.div>
  )
}
