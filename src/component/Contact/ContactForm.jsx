import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post('https://formsubmit.co/ajax/1ce8a187eeff96ea4e07e0c699b63e57', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        _subject: formData.subject || `Portfolio Contact from ${formData.firstName} ${formData.lastName}`,
      })
      setStatus('sent')
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,212,255,0.06),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(0,212,255,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] transition-shadow duration-500"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/40 uppercase tracking-wider">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Ex: Abdalla"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/40 uppercase tracking-wider">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Ex: Mhesen"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/40 uppercase tracking-wider">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ex: example@gmail.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/40 uppercase tracking-wider">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+201010385495"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-white/40 uppercase tracking-wider">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Message Title"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-white/40 uppercase tracking-wider">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400/15 border border-cyan-400/30 px-6 py-3 text-sm font-medium text-cyan-300 hover:bg-cyan-400/25 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>

      {status === 'sent' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-cyan-400"
        >
          Message sent successfully!
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-red-400"
        >
          Failed to send. Please try again.
        </motion.p>
      )}
    </motion.form>
  )
}
