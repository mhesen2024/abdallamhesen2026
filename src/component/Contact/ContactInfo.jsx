import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'abdallamhesen2020@gmail.com', href: 'mailto:abdallamhesen2020@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+972 56-953-4517', href: 'tel:+972569534517' },
  { icon: MapPin, label: 'Location', value: 'Hebron , Palestine', href: null },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/mhesen2024', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdalla-mhesen-72645a315/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/abdalla.mhesen', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/abdalla_mhesen', label: 'Instagram' },
]

export default function ContactInfo() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="text-white text-bold text-xl ">
        Feel free to reach out — whether you have a project in mind, a question, or just want to say hello. I'd love to hear from you!
      </p>

      <div className="flex flex-col gap-5">
        {contactInfo.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
              <Icon className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
              {href ? (
                <a href={href} className="text-sm text-white/80 hover:text-cyan-300 transition-colors">
                  {value}
                </a>
              ) : (
                <p className="text-sm text-white/80">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 hover:shadow-[0_0_12px_rgba(0,255,255,0.2)] transition-all duration-300"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </motion.div>
  )
}
