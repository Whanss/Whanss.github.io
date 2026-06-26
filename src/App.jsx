import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Preloader />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback: route tak dikenal → kembali ke Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      </Layout>
    </>
  )
}
