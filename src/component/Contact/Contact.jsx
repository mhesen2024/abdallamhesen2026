import SectionHeading from '../SectionHeading'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading title="Contact" highlight="Me" />

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
