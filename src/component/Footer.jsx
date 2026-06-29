import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/mhesen2024', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdalla-mhesen-72645a315/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/abdalla.mhesen', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/abdalla_mhesen', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-slate-950 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Abdalla Mhesen. All rights reserved.
        </p>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:shadow-[0_0_12px_rgba(0,255,255,0.2)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
