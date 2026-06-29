import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    setHidden(latest > previous && latest > 50)
  })

  return (
    <>
      {/* Desktop - centered glass pill */}
      <motion.nav
        className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
          className="rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          <ul className="flex items-center gap-1 px-3 py-2">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
              >
                <a
                  href={link.href}
                  className="relative px-5 py-2 rounded-full text-sm font-medium text-white/80 transition-all duration-300
                    hover:text-cyan-200 hover:[text-shadow:0_0_7px_rgba(0,255,255,0.8),0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.3)]"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* Mobile */}
      <motion.nav
        className="md:hidden fixed top-4 right-4 z-50"
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
          className="flex flex-col items-end"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-white/5 border border-white/10 backdrop-blur-xl p-3 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.15)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="mt-3 flex flex-col items-end gap-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              >
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-2 rounded-full text-sm font-medium text-cyan-300/80 transition-all duration-300
                        hover:text-cyan-200 hover:[text-shadow:0_0_7px_rgba(0,255,255,0.8),0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.3)]"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </>
  )
}
