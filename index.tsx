import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <Head>
        <title>Magenta</title>
        <meta name="description" content="Futuristic Portfolio - Magenta" />
      </Head>

      <main className="bg-[#0E0F1C] text-[#F1F5F9] font-sans min-h-screen overflow-x-hidden">
        <nav className="w-full fixed top-0 z-50 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#1E293B]">
          <h1 className="text-2xl font-bold text-[#91F2FF] tracking-widest">MAGENTA</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-[#FFE88A] transition">About</a>
            <a href="#projects" className="hover:text-[#FFE88A] transition">Projects</a>
            <a href="#contact" className="hover:text-[#FFE88A] transition">Contact</a>
          </div>
        </nav>

        <section className="pt-32 px-6 md:px-20 lg:px-40 flex flex-col gap-10 items-center text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-[#91F2FF]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: mounted ? 1 : 0, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Welcome to Magenta
          </motion.h2>

          <motion.p 
            className="text-[#FFE88A] max-w-xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            A futuristic tech space built for creators, coders, and curious minds.
          </motion.p>
        </section>

        <motion.section id="about" 
          className="py-32 px-6 md:px-20 lg:px-40 bg-[#0A0C1B] text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#91F2FF]">About</h3>
          <p className="text-[#E2E8F0] max-w-3xl">
            Magenta is a digital showcase space inspired by minimalist tech. Designed with love, code, and a vision for the future.
          </p>
        </motion.section>

        <motion.section id="projects" 
          className="py-32 px-6 md:px-20 lg:px-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#91F2FF]">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1E293B] p-6 rounded-2xl hover:scale-[1.02] transition transform">
              <h4 className="text-xl text-[#FFE88A] mb-2">Neon Chat App</h4>
              <p className="text-[#CBD5E1] text-sm">A real-time chat app with a glowing, responsive interface.</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-2xl hover:scale-[1.02] transition transform">
              <h4 className="text-xl text-[#FFE88A] mb-2">AI Portfolio Generator</h4>
              <p className="text-[#CBD5E1] text-sm">Automatically build a resume-style website with AI input.</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" 
          className="py-32 px-6 md:px-20 lg:px-40 bg-[#0A0C1B]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#91F2FF]">Contact</h3>
          <p className="text-[#E2E8F0] mb-4">Want to collaborate or say hi? Reach out via email or connect on social media.</p>
          <a href="mailto:hello@magenta.dev" className="inline-block px-6 py-3 bg-[#91F2FF] text-[#0F172A] rounded-xl hover:bg-[#7de7fc] transition">
            Say Hello
          </a>
        </motion.section>

        <footer className="py-10 text-center text-xs text-[#64748B]">
          &copy; {new Date().getFullYear()} Magenta. Built with 💙 and Tailwind.
        </footer>
      </main>
    </>
  )
}