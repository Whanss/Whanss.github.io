import { contact } from '../data/profile'
import { FaWhatsapp } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { Card, CardContent } from '../components/ui/Card'
import SocialLinks from '../components/SocialLinks'

function ContactCard({ icon: Icon, label, value, href, iconColor = 'text-ember' }) {
  const content = (
    <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15">
      <CardContent className="flex items-center gap-4 p-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember/10">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </span>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wide text-bone-muted">{label}</p>
          <p className="break-words font-semibold text-bone-light">{value}</p>
        </div>
      </CardContent>
    </Card>
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
  return (
    <div className="container-page pb-16 pt-28 md:pt-32">
      {/* Heading */}
      <header className="mb-10 text-center animate-fade-in-up opacity-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">
          Kontak
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-bone-light sm:text-4xl">
          Mari Terhubung
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-bone-muted">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Kartu kontak */}
        <div className="space-y-4">
          <ContactCard
            icon={FaWhatsapp}
            label="WhatsApp"
            value={contact.whatsapp}
            href={contact.whatsappLink}
            iconColor="text-green-400"
          />
          <ContactCard
            icon={HiMail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
          <ContactCard
            icon={HiLocationMarker}
            label="Alamat"
            value={contact.address}
          />
        </div>

        {/* Peta */}
        <Card className="animate-fade-in-up overflow-hidden opacity-0 [animation-delay:200ms]">
          <CardContent className="p-0">
            <iframe
              title="Lokasi"
              src={contact.mapEmbed}
              className="h-full min-h-[320px] w-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CardContent>
        </Card>
      </div>

      {/* Sosial media */}
      <div className="mt-12 text-center animate-fade-in opacity-0 [animation-delay:400ms]">
        <h2 className="mb-4 text-lg font-bold text-bone-light">
          Atau temukan saya di
        </h2>
        <SocialLinks size="md" className="justify-center" />
      </div>
    </div>
  )
}
