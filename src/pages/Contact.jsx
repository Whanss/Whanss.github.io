import { useState } from 'react'
import { motion } from 'motion/react'
import { contact } from '../data/profile'
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { Card, CardContent } from '../components/ui/Card'
import SocialLinks from '../components/SocialLinks'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
}

function GlowingContactCard({ icon: Icon, label, value, href, glowColor }) {
  const content = (
    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl">
      <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-40 ${glowColor}`} />
      
      <div className="relative z-10 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-6 w-6 text-bone-light transition-colors group-hover:text-white" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-bone-muted/70">{label}</p>
          <p className="truncate font-bold text-bone-light">{value}</p>
        </div>
      </div>
    </motion.div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  )
}

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    const text = `Halo Ikhwan, perkenalkan saya ${name}.%0A%0A${message}`
    const phone = contact.whatsapp.replace(/\D/g, '') // remove non-digits
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  return (
    <div className="container-page pb-20 pt-28 md:pt-32">
      {/* Heading */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-ember">
          Kontak
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-bone-light sm:text-5xl">
          Mari Terhubung
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-bone-muted">
          Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan langsung kepada saya.
        </p>
      </motion.header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-6 lg:grid-cols-5"
      >
        {/* Kolom Kiri: Kartu Kontak & Sosial Media */}
        <div className="flex flex-col space-y-4 lg:col-span-2">
          <GlowingContactCard
            icon={FaWhatsapp}
            label="WhatsApp"
            value={contact.whatsapp}
            href={contact.whatsappLink}
            glowColor="bg-green-500"
          />
          <GlowingContactCard
            icon={HiMail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            glowColor="bg-blue-500"
          />
          <GlowingContactCard
            icon={HiLocationMarker}
            label="Alamat"
            value={contact.address}
            glowColor="bg-ember"
          />
          
          {/* Sosial Media Box */}
          <motion.div variants={itemVariants} className="group relative mt-auto overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 text-center backdrop-blur-sm">
             <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />
             <h2 className="relative z-10 mb-4 text-sm font-bold uppercase tracking-wider text-bone-muted">Temukan saya di</h2>
             <div className="relative z-10 flex justify-center">
               <SocialLinks size="md" />
             </div>
          </motion.div>
        </div>

        {/* Kolom Kanan: Form WhatsApp & Maps */}
        <div className="space-y-6 lg:col-span-3">
          
          {/* Form WhatsApp Direct */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8 transition-all hover:border-white/20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-bone-light">
               <FaWhatsapp className="h-8 w-8 text-green-500" />
               Kirim Pesan Langsung
            </h2>
            <form onSubmit={handleSend} className="relative z-10 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-bone-muted">Nama Anda</label>
                <input 
                  id="name"
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Misal: Budi Santoso"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-bone-light placeholder-bone-muted/30 outline-none transition-all focus:border-green-500/50 focus:bg-black/50 focus:ring-1 focus:ring-green-500/50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-bone-muted">Pesan Anda</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Halo, saya ingin berdiskusi mengenai pembuatan website..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-bone-light placeholder-bone-muted/30 outline-none transition-all focus:border-green-500/50 focus:bg-black/50 focus:ring-1 focus:ring-green-500/50"
                />
              </div>
              <button 
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-4 py-3 font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5 hover:shadow-green-500/40 active:translate-y-0"
              >
                Kirim via WhatsApp
                <FaPaperPlane className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Maps Interactive Card */}
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur-sm transition-all hover:border-white/20">
            <div className="relative overflow-hidden rounded-2xl bg-black/50">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/10" />
              <iframe
                title="Lokasi"
                src={contact.mapEmbed}
                className="h-[200px] w-full grayscale transition-all duration-700 hover:grayscale-0 opacity-80 hover:opacity-100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  )
}
