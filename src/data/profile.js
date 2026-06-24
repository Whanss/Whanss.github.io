// ============================================================
//  DATA PORTFOLIO — Ikhwan Maulana Ivansyah
// ============================================================
//  Semua konten ada di file ini. Untuk update data (nama,
//  skills, kontak, dll), cukup edit file ini tanpa menyentuh
//  komponen React. Setiap perubahan otomatis terbaca di semua
//  halaman.
// ============================================================

// --- Profil dasar ---
export const profile = {
  name: 'Ikhwan Maulana Ivansyah',
  nickname: 'Ikhwan',
  role: 'Mahasiswa Sistem Informasi & Developer',
  nim: 'SI20230016',
  program: 'Sistem Informasi',
  college: 'STMIK Lombok',
  birthDate: '13 Juni 2005',
  tagline: 'Belajar, membangun, dan terus berkembang.',
  // Path relatif dari public/ — gambar ada di public/img/
  photo: '/img/abcd.jpg',
}

// --- Narasi personal ---
export const about = {
  intro:
    'Halo! Saya Ikhwan Maulana Ivansyah, biasa dipanggil Ikhwan. ' +
    'Seorang mahasiswa Sistem Informasi yang antusias dengan dunia ' +
    'pemrograman dan teknologi. Lahir di Lombok Tengah, 13 Juni 2005.',

  // Teks lama "Gada pengalaman. kaya nya." → dipoles jadi:
  experience:
    'Saat ini sedang membangun pengalaman melalui project personal ' +
    'dan pembelajaran mandiri di bidang web development serta ' +
    'pemrograman desktop.',

  // Teks lama "Hobi ga jelas" → dipoles jadi:
  hobbies:
    'Bermain catur, mengeksplorasi teknologi baru, dan belajar ' +
    'pemrograman di waktu luang.',
}

// --- Riwayat pendidikan ---
export const education = [
  {
    institution: 'STMIK Lombok',
    major: 'Sistem Informasi',
    period: '2023 — Sekarang',
  },
  {
    institution: 'MAN 1 Lombok Tengah',
    major: 'Jurusan IPA',
    period: '2020 — 2023',
  },
  {
    institution: 'MTsN 1 Lombok Tengah',
    major: '',
    period: '2017 — 2020',
  },
  {
    institution: 'SDN 1 Ganti',
    major: '',
    period: '2011 — 2017',
  },
]

// --- Kemampuan teknis ---
export const skills = [
  { name: 'C++', level: 75 },
  { name: 'HTML/CSS/JS', level: 85 },
  { name: 'PHP + MariaDB', level: 70 },
  { name: 'Supabase', level: 65 },
  { name: 'Laravel', level: 80 },
  { name: 'Vue', level: 60 },
  { name: 'Next.js', level: 55 },
  { name: 'React', level: 70 },
]

// --- Minat / interests ---
export const interests = ['Bermain Catur', 'Web Development', 'Teknologi Baru', 'Pemrograman']

// --- Penghargaan (teks lama "Ga Ada" → dipoles) ---
export const awards = [
  'Sedang dalam proses membangun pencapaian — fokus belajar dan project personal.',
]

// --- Info kontak ---
export const contact = {
  whatsapp: '+6282341824547',
  whatsappLink: 'https://wa.me/6282341824547',
  email: 'elyaivanmey@gmail.com',
  address: 'Jl. Sengkerang, Ganti, Praya Timur, Lombok Tengah',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.2098221072!2d116.3941169!3d-8.7692893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdad940cb8a3fb%3A0xc0088918f2feedd5!2sGanti!5e0!3m2!1sid!2sid!4v1695052069568!5m2!1sid!2sid',
}

// --- Tautan media sosial ---
// icon: key untuk SocialLinks component (SVG inline)
export const socials = [
  { name: 'YouTube', url: 'https://www.youtube.com/@naanssdaa', icon: 'youtube' },
  { name: 'Instagram', url: 'https://www.instagram.com/ikhwnda_/', icon: 'instagram' },
  { name: 'GitHub', url: 'https://github.com/Whanss', icon: 'github' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@envyruu', icon: 'tiktok' },
  { name: 'Facebook', url: 'https://web.facebook.com/IkhwandaMG15628?locale=id_ID', icon: 'facebook' },
]

// --- Item navigasi (dipakai Navbar) ---
// icon: key react-icons yang dipetakan di Navbar component
export const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About', path: '/about', icon: 'user' },
  { label: 'Portfolio', path: '/portfolio', icon: 'folder' },
  { label: 'Contact', path: '/contact', icon: 'mail' },
]

// --- Alur belajar (Learning Journey) ---
// Urutan kronologis sesuai pengalaman Anda. Dipakai di TechJourneyCard.
// icon: key react-icons yang dipetakan di TechJourneyCard.
// color: warna brand resmi tiap teknologi.
export const learningPath = [
  { name: 'C++', icon: 'cpp', color: '#00599C', year: 'Awal', note: 'Logika & dasar pemrograman' },
  { name: 'HTML/CSS/JS', icon: 'web', color: '#E34F26', year: 'Native', note: 'Front-end fundamental' },
  { name: 'PHP + MariaDB', icon: 'php', color: '#777BB4', year: 'Database', note: 'PHP native + database' },
  { name: 'Supabase', icon: 'supabase', color: '#3FCF8E', year: 'Backend', note: 'Backend-as-a-Service' },
  { name: 'Laravel', icon: 'laravel', color: '#FF2D20', year: 'Framework', note: 'PHP framework modern' },
  { name: 'Vue', icon: 'vue', color: '#42B883', year: 'Frontend', note: 'Progressive framework' },
  { name: 'Next.js', icon: 'next', color: '#FFFFFF', year: 'React', note: 'React meta-framework' },
  { name: 'React', icon: 'react', color: '#61DAFB', year: 'Sekarang', note: 'Library UI component' },
]

// --- Lagu favorit & Playlist ---
export const favoriteSong = {
  title: 'SLOW DANCING IN THE DARK',
  artist: 'Joji',
  spotifyTrackId: '0rKtyWc8bvkriBthvHKY8d',
}

export const jojiPlaylist = [
  {
    title: 'SLOW DANCING IN THE DARK',
    artist: 'Joji',
    spotifyTrackId: '0rKtyWc8bvkriBthvHKY8d',
  },
  {
    title: 'YEAH RIGHT',
    artist: 'Joji',
    spotifyTrackId: '52ooD6LHuXFubM6d1CDD93',
  },
  {
    title: 'Run',
    artist: 'Joji',
    spotifyTrackId: '6cEgy2Sw0pQWxWxOCa89Dv',
  },
  {
    title: 'Glimpse of Us',
    artist: 'Joji',
    spotifyTrackId: '6xGruZOHLs39ZbVccQTuPZ',
  },
  {
    title: 'Will He',
    artist: 'Joji',
    spotifyTrackId: '4apZVURUvTrT9S51LBuXON',
  },
  {
    title: 'Daylight',
    artist: 'Joji',
    spotifyTrackId: '6Ed1q0X8oSKSm4IIhiQbYg',
  }
]

// --- Teknologi untuk Portfolio Ini ---
export const portfolioTech = [
  { name: 'React', icon: 'react', color: '#61DAFB', desc: 'Library UI komponen', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'tailwind', color: '#38B2AC', desc: 'Styling responsif', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', icon: 'vite', color: '#646CFF', desc: 'Build tool cepat', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'React Router', icon: 'react', color: '#CA4245', desc: 'Navigasi SPA', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg' },
  { name: 'Motion', icon: 'js', color: '#FF0080', desc: 'Animasi mulus', logoUrl: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
]

// --- Tech stack untuk halaman portfolio (dipakai react-icons) ---
export const techStack = [
  { name: 'C++', icon: 'cpp', color: '#00599C' },
  { name: 'HTML5', icon: 'html', color: '#E34F26' },
  { name: 'CSS3', icon: 'css', color: '#1572B6' },
  { name: 'JavaScript', icon: 'js', color: '#F7DF1E' },
  { name: 'PHP', icon: 'php', color: '#777BB4' },
  { name: 'MariaDB', icon: 'mariadb', color: '#003545' },
  { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
  { name: 'Supabase', icon: 'supabase', color: '#3FCF8E' },
  { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
  { name: 'Vue', icon: 'vue', color: '#42B883' },
  { name: 'Next.js', icon: 'next', color: '#FFFFFF' },
  { name: 'React', icon: 'react', color: '#61DAFB' },
]
